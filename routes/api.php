<?php

use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\TestimonialController;
use Illuminate\Support\Facades\Route;

Route::apiResource('projects', ProjectController::class)->only(['index', 'show'])->names('api.projects');
Route::apiResource('blogs', BlogController::class)->only(['index', 'show'])->names('api.blogs');
Route::apiResource('testimonials', TestimonialController::class)->only(['index', 'show'])->names('api.testimonials');
