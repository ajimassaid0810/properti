<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/blogs/index', [
            'posts' => Blog::query()->latest()->get(),
        ]);
    }

    public function create(): RedirectResponse
    {
        return redirect()->route('admin.blogs.index');
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validatedData($request);
        Blog::query()->create($data);

        return back()->with('success', 'Artikel berhasil ditambahkan.');
    }

    public function show(Blog $blog): RedirectResponse
    {
        return redirect()->route('admin.blogs.index');
    }

    public function edit(Blog $blog): RedirectResponse
    {
        return redirect()->route('admin.blogs.index');
    }

    public function update(Request $request, Blog $blog): RedirectResponse
    {
        $blog->update($this->validatedData($request, $blog));

        return back()->with('success', 'Artikel berhasil diperbarui.');
    }

    public function destroy(Blog $blog): RedirectResponse
    {
        $blog->delete();

        return back()->with('success', 'Artikel berhasil dihapus.');
    }

    /**
     * @return array<string, mixed>
     */
    private function validatedData(Request $request, ?Blog $blog = null): array
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['nullable', 'string', 'max:255'],
            'category' => ['required', 'string', 'max:255'],
            'excerpt' => ['required', 'string', 'max:500'],
            'content' => ['required', 'string'],
            'cover_image' => ['required', 'url'],
            'is_published' => ['boolean'],
        ]);

        return [
            ...$validated,
            'slug' => $validated['slug'] ?: Str::slug($validated['title']),
            'meta_title' => $validated['title'],
            'meta_description' => $validated['excerpt'],
            'published_at' => $blog?->published_at ?? now(),
            'is_published' => $request->boolean('is_published', true),
        ];
    }
}
