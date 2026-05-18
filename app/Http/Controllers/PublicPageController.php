<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\CompanyProfile;
use App\Models\Project;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PublicPageController extends Controller
{
    public function home(): Response
    {
        return Inertia::render('public/home', [
            'projects' => Project::query()
                ->with('locationDetail')
                ->where('is_published', true)
                ->latest()
                ->take(3)
                ->get(),
            'featuredProjects' => Project::query()
                ->with('locationDetail')
                ->where('is_featured', true)
                ->where('is_published', true)
                ->take(2)
                ->get(),
            'testimonials' => Testimonial::query()
                ->where('is_published', true)
                ->latest()
                ->take(4)
                ->get(),
            'company' => CompanyProfile::query()->latest()->first(),
        ]);
    }

    public function about(): Response
    {
        return Inertia::render('public/about', [
            'company' => CompanyProfile::query()->latest()->first(),
        ]);
    }

    public function projects(Request $request): Response
    {
        $category = $request->string('category')->toString();

        return Inertia::render('public/projects/index', [
            'projects' => Project::query()
                ->with('locationDetail')
                ->where('is_published', true)
                ->when($category !== '', fn ($query) => $query->where('category', $category))
                ->latest()
                ->get(),
            'activeCategory' => $category,
        ]);
    }

    public function projectDetail(Project $project): Response
    {
        abort_unless($project->is_published, 404);

        return Inertia::render('public/projects/show', [
            'project' => $project->load(['galleries', 'locationDetail']),
            'relatedProjects' => Project::query()
                ->where('id', '!=', $project->id)
                ->where('is_published', true)
                ->take(3)
                ->get(),
        ]);
    }

    public function blog(): Response
    {
        return Inertia::render('public/blog', [
            'posts' => Blog::query()
                ->where('is_published', true)
                ->latest('published_at')
                ->get(),
        ]);
    }

    public function contact(): Response
    {
        return Inertia::render('public/contact', [
            'company' => CompanyProfile::query()->latest()->first(),
        ]);
    }
}
