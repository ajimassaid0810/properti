<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    /** @use HasFactory<\Database\Factories\ProjectFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'category',
        'location',
        'price_start',
        'status',
        'thumbnail',
        'short_description',
        'description',
        'unit_types',
        'facilities',
        'specifications',
        'site_plan',
        'is_featured',
        'is_published',
    ];

    protected function casts(): array
    {
        return [
            'unit_types' => 'array',
            'facilities' => 'array',
            'specifications' => 'array',
            'site_plan' => 'array',
            'is_featured' => 'boolean',
            'is_published' => 'boolean',
        ];
    }

    public function galleries(): HasMany
    {
        return $this->hasMany(Gallery::class)->orderBy('sort_order');
    }

    public function locationDetail(): HasOne
    {
        return $this->hasOne(ProjectLocation::class);
    }
}
