<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\CompanyProfile;
use App\Models\Project;
use App\Models\Testimonial;
use Inertia\Inertia;
use Inertia\Response;

class AdminDashboardController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('admin/dashboard', [
            'stats' => [
                'projects' => Project::query()->count(),
                'blogs' => Blog::query()->count(),
                'testimonials' => Testimonial::query()->count(),
                'companyProfiles' => CompanyProfile::query()->count(),
            ],
            'latestProjects' => Project::query()->with('locationDetail')->latest()->take(5)->get(),
        ]);
    }
}
