<?php

use App\Models\Blog;
use App\Models\CompanyProfile;
use App\Models\Testimonial;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

it('allows authenticated admins to manage marketing content', function (): void {
    $user = User::factory()->create(['email_verified_at' => now()]);

    $this->actingAs($user)
        ->post(route('admin.blogs.store'), [
            'title' => 'Tips KPR Modern',
            'slug' => 'tips-kpr-modern',
            'category' => 'Tips KPR',
            'excerpt' => 'Panduan KPR ringkas.',
            'content' => 'Konten artikel KPR.',
            'cover_image' => 'https://example.com/kpr.jpg',
            'is_published' => true,
        ])
        ->assertRedirect();

    $this->actingAs($user)
        ->post(route('admin.testimonials.store'), [
            'client_name' => 'Nadia',
            'client_role' => 'Homeowner',
            'project_name' => 'Aurelia Hills',
            'avatar_url' => 'https://example.com/avatar.jpg',
            'quote' => 'Pelayanan sangat profesional.',
            'rating' => 5,
            'is_published' => true,
        ])
        ->assertRedirect();

    $this->actingAs($user)
        ->post(route('admin.company-profiles.store'), [
            'company_name' => 'Nirvana Estate',
            'tagline' => 'Modern living',
            'about' => 'Developer properti modern.',
            'history' => 'Berdiri sejak 2016.',
            'email' => 'hello@example.com',
            'office_latitude' => -6.2,
            'office_longitude' => 106.8,
        ])
        ->assertRedirect();

    expect(Blog::query()->where('slug', 'tips-kpr-modern')->exists())->toBeTrue()
        ->and(Testimonial::query()->where('client_name', 'Nadia')->exists())->toBeTrue()
        ->and(CompanyProfile::query()->where('company_name', 'Nirvana Estate')->exists())->toBeTrue();
});
