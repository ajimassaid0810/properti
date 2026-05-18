<?php

use App\Models\Blog;
use App\Models\CompanyProfile;
use App\Models\Project;
use App\Models\Testimonial;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

it('seeds demo property content with internet image urls and map locations', function (): void {
    $this->seed();

    expect(Project::query()->count())->toBe(6)
        ->and(Blog::query()->count())->toBe(4)
        ->and(Testimonial::query()->count())->toBe(4)
        ->and(CompanyProfile::query()->where('company_name', 'Nirvana Estate Development')->exists())->toBeTrue();

    $featuredProject = Project::query()
        ->with(['galleries', 'locationDetail'])
        ->where('slug', 'aurelia-hills-residence')
        ->firstOrFail();

    expect($featuredProject->thumbnail)->toStartWith('https://images.unsplash.com/')
        ->and($featuredProject->galleries)->toHaveCount(4)
        ->and($featuredProject->galleries->first()->image_url)->toStartWith('https://images.unsplash.com/')
        ->and($featuredProject->locationDetail)->not->toBeNull()
        ->and($featuredProject->locationDetail->nearby_points)->toContain('AEON Mall BSD');
});
