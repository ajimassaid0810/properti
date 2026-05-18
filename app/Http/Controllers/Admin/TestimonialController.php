<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TestimonialController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/testimonials/index', [
            'testimonials' => Testimonial::query()->latest()->get(),
        ]);
    }

    public function create(): RedirectResponse
    {
        return redirect()->route('admin.testimonials.index');
    }

    public function store(Request $request): RedirectResponse
    {
        Testimonial::query()->create($this->validatedData($request));

        return back()->with('success', 'Testimonial berhasil ditambahkan.');
    }

    public function show(Testimonial $testimonial): RedirectResponse
    {
        return redirect()->route('admin.testimonials.index');
    }

    public function edit(Testimonial $testimonial): RedirectResponse
    {
        return redirect()->route('admin.testimonials.index');
    }

    public function update(Request $request, Testimonial $testimonial): RedirectResponse
    {
        $testimonial->update($this->validatedData($request));

        return back()->with('success', 'Testimonial berhasil diperbarui.');
    }

    public function destroy(Testimonial $testimonial): RedirectResponse
    {
        $testimonial->delete();

        return back()->with('success', 'Testimonial berhasil dihapus.');
    }

    /**
     * @return array<string, mixed>
     */
    private function validatedData(Request $request): array
    {
        $validated = $request->validate([
            'client_name' => ['required', 'string', 'max:255'],
            'client_role' => ['required', 'string', 'max:255'],
            'project_name' => ['nullable', 'string', 'max:255'],
            'avatar_url' => ['nullable', 'url'],
            'quote' => ['required', 'string'],
            'rating' => ['required', 'integer', 'between:1,5'],
            'is_published' => ['boolean'],
        ]);

        return [
            ...$validated,
            'is_published' => $request->boolean('is_published', true),
        ];
    }
}
