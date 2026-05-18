<?php

use App\Models\Project;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

uses(RefreshDatabase::class);

it('allows an authenticated admin to create and update projects', function (): void {
    $user = User::factory()->create([
        'email_verified_at' => now(),
    ]);

    $payload = [
        'name' => 'Aruna Business Park',
        'slug' => 'aruna-business-park',
        'category' => 'Komersial',
        'location' => 'Cibubur',
        'price_start' => 'Rp 2,4 M',
        'status' => 'On Progress',
        'thumbnail' => 'https://example.com/aruna.jpg',
        'short_description' => 'Ruko premium lokasi strategis.',
        'description' => 'Deskripsi lengkap ruko premium.',
        'latitude' => -6.3715880,
        'longitude' => 106.9028170,
        'address' => 'Jl. Alternatif Cibubur',
        'is_featured' => true,
        'is_published' => true,
    ];

    $this->actingAs($user)
        ->post(route('admin.projects.store'), $payload)
        ->assertRedirect(route('admin.projects.index'));

    $project = Project::query()->where('slug', 'aruna-business-park')->firstOrFail();

    expect($project->locationDetail)->not->toBeNull();

    $this->actingAs($user)
        ->put(route('admin.projects.update', $project), [
            ...$payload,
            'name' => 'Aruna Business Park Premium',
            'slug' => 'aruna-business-park-premium',
        ])
        ->assertRedirect(route('admin.projects.index'));

    expect($project->fresh()->name)->toBe('Aruna Business Park Premium');
});

it('stores uploaded project thumbnails on the public local disk', function (): void {
    Storage::fake('public');

    $user = User::factory()->create([
        'email_verified_at' => now(),
    ]);

    $this->actingAs($user)
        ->post(route('admin.projects.store'), [
            'name' => 'Lumiere Residence',
            'slug' => 'lumiere-residence',
            'category' => 'Apartemen',
            'location' => 'Jakarta Selatan',
            'price_start' => 'Rp 980 Juta',
            'status' => 'Pre Launch',
            'thumbnail_file' => UploadedFile::fake()->image('lumiere.jpg', 1200, 800),
            'short_description' => 'Apartemen premium dekat pusat bisnis.',
            'description' => 'Deskripsi lengkap apartemen premium.',
            'latitude' => -6.2245600,
            'longitude' => 106.8093300,
            'address' => 'Jl. Senopati, Jakarta Selatan',
            'is_featured' => true,
            'is_published' => true,
        ])
        ->assertRedirect(route('admin.projects.index'));

    $project = Project::query()->where('slug', 'lumiere-residence')->firstOrFail();

    expect($project->thumbnail)->toStartWith('/storage/projects/');
    Storage::disk('public')->assertExists(Str::after($project->thumbnail, '/storage/'));
});
