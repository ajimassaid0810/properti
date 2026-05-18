<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyProfile extends Model
{
    /** @use HasFactory<\Database\Factories\CompanyProfileFactory> */
    use HasFactory;

    protected $fillable = [
        'company_name',
        'tagline',
        'about',
        'history',
        'vision_mission',
        'core_values',
        'legalities',
        'timeline',
        'phone',
        'whatsapp',
        'email',
        'address',
        'social_links',
        'office_latitude',
        'office_longitude',
    ];

    protected function casts(): array
    {
        return [
            'vision_mission' => 'array',
            'core_values' => 'array',
            'legalities' => 'array',
            'timeline' => 'array',
            'social_links' => 'array',
        ];
    }
}
