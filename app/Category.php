<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Category extends Model
{
    use Sluggable;

    protected $fillable = ['title', 'image', 'content', 'miniature', 'title_kg', 'content_kg'];

    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }

    public static function add($fields)
    {
        $category = new static;
        $category->fill($fields);
        $category->save();

        return $category;
    }


    public function edit($fields)
    {
        $this->fill($fields);
        $this->save();
    }



    public function remove()
    {
        $this->removeImage();
        $this->delete();
    }

    public function removeImageCategory()
    {
        if ($this->image != null) {
            Storage::delete('uploads/' . $this->image);
        }
    }

    public function uploadImageCategory($image)
    {
        if ($image == null) {
            return;
        }
        $this->removeImageCategory();
        $filename = Str::random(10) . '.' . $image->extension();
        $image->storeAs('uploads', $filename);
        $this->image = $filename;
        $this->save();
    }

    public function getImageCategory()
    {
        if ($this->image == null) {
            return '/img/no-user-image.jpg';
        }

        return '/uploads/' . $this->image;
    }



    public function removeMiniature()
    {
        if ($this->miniature != null) {
            Storage::delete('uploads/' . $this->miniature);
        }
    }

    public function uploadMiniature($image)
    {
        if ($image == null) {
            return;
        }
        $this->removeMiniature();
        $filename = Str::random(10) . '.' . $image->extension();
        $image->storeAs('uploads', $filename);
        $this->miniature = $filename;
        $this->save();
    }

    public function getMiniature()
    {
        if ($this->miniature == null) {
            return '/img/no-user-image.jpg';
        }

        return '/uploads/' . $this->miniature;
    }
}
