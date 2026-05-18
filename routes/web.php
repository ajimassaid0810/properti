<?php

use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\BlogController as AdminBlogController;
use App\Http\Controllers\Admin\CompanyProfileController as AdminCompanyProfileController;
use App\Http\Controllers\Admin\ProjectController as AdminProjectController;
use App\Http\Controllers\Admin\TestimonialController as AdminTestimonialController;
use App\Http\Controllers\PublicPageController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PublicPageController::class, 'home'])->name('home');
Route::get('tentang-kami', [PublicPageController::class, 'about'])->name('about');
Route::get('proyek', [PublicPageController::class, 'projects'])->name('projects.index');
Route::get('proyek/{project:slug}', [PublicPageController::class, 'projectDetail'])->name('projects.show');
Route::get('blog', [PublicPageController::class, 'blog'])->name('blog.index');
Route::get('kontak', [PublicPageController::class, 'contact'])->name('contact');

Route::get('register', fn () => redirect()->route('home'))->name('register');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', AdminDashboardController::class)->name('dashboard');
    Route::get('admin', fn () => redirect()->route('dashboard'))->name('admin.dashboard');
    Route::resource('admin/projects', AdminProjectController::class)->names('admin.projects');
    Route::resource('admin/blogs', AdminBlogController::class)->names('admin.blogs');
    Route::resource('admin/testimonials', AdminTestimonialController::class)->names('admin.testimonials');
    Route::resource('admin/company-profiles', AdminCompanyProfileController::class)->names('admin.company-profiles');
});

require __DIR__.'/settings.php';
