<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\JsonResponse;

class TestimonialController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([
            'data' => Testimonial::query()
                ->where('is_published', true)
                ->latest()
                ->get(),
        ]);
    }

    public function store(): JsonResponse
    {
        abort(404);
    }

    public function show(Testimonial $testimonial): JsonResponse
    {
        return response()->json(['data' => $testimonial]);
    }

    public function update(): JsonResponse
    {
        abort(404);
    }

    public function destroy(): JsonResponse
    {
        abort(404);
    }
}
