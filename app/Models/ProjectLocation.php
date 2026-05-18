<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectLocation extends Model
{
    /** @use HasFactory<\Database\Factories\ProjectLocationFactory> */
    use HasFactory;

    protected $fillable = [
        'project_id',
        'latitude',
        'longitude',
        'address',
        'landmark',
        'nearby_points',
    ];

    protected function casts(): array
    {
        return [
            'nearby_points' => 'array',
            'latitude' => 'decimal:7',
            'longitude' => 'decimal:7',
        ];
    }

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }
}
