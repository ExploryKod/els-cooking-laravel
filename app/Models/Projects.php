<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Projects extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'project_date',
        'project_place',
        'project_category',
        'project_title',
        'project_extract',
        'project_teaser',
        'project_description',
        'project_goal',
        'project_method',
        'project_results',
        'project_single_url',
        'project_infos',
        'project_meta',
        'project_publish_status',
    ];

    protected $casts = [
        'project_infos' => 'array',
        'project_meta' => 'array',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function medias(): BelongsToMany
    {
        return $this->belongsToMany(Medias::class, 'project_media')->withTimestamps();
    }

    /**
     * Get the image URL attribute
     */
    protected function imageUrl(): Attribute
    {
        return Attribute::make(
            get: fn () => isset($this->project_infos['image_path']) && !empty($this->project_infos['image_path'])
        );
    }

    /**
     * Get the media slug attribute for the image path
     */
    protected function mediaSlug(): Attribute
    {
        return Attribute::make(
            get: function () {
                if (isset($this->project_infos['image_path'])) {
                    $imagePath = $this->project_infos['image_path'];
                    // Convert ../uploads/project-X.jpg to resources/theme/uploads/project-X.jpg
                    $imagePath = str_replace('../uploads/', 'resources/theme/uploads/', $imagePath);
                    return $imagePath;
                }
                return 'resources/theme/img/img-1.jpg';
            }
        );
    }
}
