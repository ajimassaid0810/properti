<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\JsonResponse;

class BlogController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([
            'data' => Blog::query()
                ->where('is_published', true)
                ->latest('published_at')
                ->get(),
        ]);
    }

    public function store(): JsonResponse
    {
        abort(404);
    }

    public function show(Blog $blog): JsonResponse
    {
        return response()->json(['data' => $blog]);
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
