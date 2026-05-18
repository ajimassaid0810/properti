<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/projects/index', [
            'projects' => Project::query()
                ->with('locationDetail')
                ->latest()
                ->paginate(10)
                ->withQueryString(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/projects/form', [
            'project' => null,
            'mode' => 'create',
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validatedProjectData($request);
        $project = Project::query()->create($data['project']);
        $project->locationDetail()->create($data['location']);

        return redirect()->route('admin.projects.index')->with('success', 'Project berhasil ditambahkan.');
    }

    public function show(Project $project): RedirectResponse
    {
        return redirect()->route('admin.projects.edit', $project);
    }

    public function edit(Project $project): Response
    {
        return Inertia::render('admin/projects/form', [
            'project' => $project->load('locationDetail'),
            'mode' => 'edit',
        ]);
    }

    public function update(Request $request, Project $project): RedirectResponse
    {
        $data = $this->validatedProjectData($request, $project);
        $project->update($data['project']);
        $project->locationDetail()->updateOrCreate(['project_id' => $project->id], $data['location']);

        return redirect()->route('admin.projects.index')->with('success', 'Project berhasil diperbarui.');
    }

    public function destroy(Project $project): RedirectResponse
    {
        $this->deleteLocalProjectImage($project->thumbnail);
        $project->galleries()->delete();
        $project->locationDetail()->delete();
        $project->delete();

        return redirect()->route('admin.projects.index')->with('success', 'Project berhasil dihapus.');
    }

    /**
     * @return array{project: array<string, mixed>, location: array<string, mixed>}
     */
    private function validatedProjectData(Request $request, ?Project $project = null): array
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'slug' => ['nullable', 'string', 'max:255', Rule::unique('projects', 'slug')->ignore($project)],
            'category' => ['required', 'string', Rule::in(['Rumah', 'Apartemen', 'Komersial'])],
            'location' => ['required', 'string', 'max:255'],
            'price_start' => ['required', 'string', 'max:255'],
            'status' => ['required', 'string', 'max:255'],
            'thumbnail' => ['nullable', 'string', 'max:2048'],
            'thumbnail_file' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:5120'],
            'short_description' => ['required', 'string', 'max:500'],
            'description' => ['required', 'string'],
            'latitude' => ['required', 'numeric', 'between:-90,90'],
            'longitude' => ['required', 'numeric', 'between:-180,180'],
            'address' => ['required', 'string', 'max:500'],
            'is_featured' => ['boolean'],
            'is_published' => ['boolean'],
        ]);

        $thumbnail = $this->resolveThumbnailPath($request, $project, $validated['thumbnail'] ?? null);

        return [
            'project' => [
                'name' => $validated['name'],
                'slug' => $validated['slug'] ?: Str::slug($validated['name']),
                'category' => $validated['category'],
                'location' => $validated['location'],
                'price_start' => $validated['price_start'],
                'status' => $validated['status'],
                'thumbnail' => $thumbnail,
                'short_description' => $validated['short_description'],
                'description' => $validated['description'],
                'unit_types' => $project?->unit_types ?? [],
                'facilities' => $project?->facilities ?? [],
                'specifications' => $project?->specifications ?? [],
                'site_plan' => $project?->site_plan ?? [],
                'is_featured' => $request->boolean('is_featured'),
                'is_published' => $request->boolean('is_published', true),
            ],
            'location' => [
                'latitude' => $validated['latitude'],
                'longitude' => $validated['longitude'],
                'address' => $validated['address'],
                'landmark' => 'Dikelola dari admin panel',
                'nearby_points' => [],
            ],
        ];
    }

    private function resolveThumbnailPath(Request $request, ?Project $project, ?string $thumbnail): string
    {
        if ($request->hasFile('thumbnail_file')) {
            if ($project instanceof Project) {
                $this->deleteLocalProjectImage($project->thumbnail);
            }

            $path = $request->file('thumbnail_file')->store('projects', 'public');

            return '/storage/'.$path;
        }

        if (filled($thumbnail)) {
            return $thumbnail;
        }

        if ($project instanceof Project && filled($project->thumbnail)) {
            return $project->thumbnail;
        }

        throw ValidationException::withMessages([
            'thumbnail_file' => 'Upload thumbnail project terlebih dahulu.',
        ]);
    }

    private function deleteLocalProjectImage(?string $thumbnail): void
    {
        if (! $thumbnail || ! Str::startsWith($thumbnail, '/storage/projects/')) {
            return;
        }

        Storage::disk('public')->delete(Str::after($thumbnail, '/storage/'));
    }
}
