<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\JsonResponse;

class ProjectController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([
            'data' => Project::query()
                ->with(['galleries', 'locationDetail'])
                ->where('is_published', true)
                ->latest()
                ->get(),
        ]);
    }

    public function store(): JsonResponse
    {
        abort(404);
    }

    public function show(Project $project): JsonResponse
    {
        return response()->json([
            'data' => $project->load(['galleries', 'locationDetail']),
        ]);
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
