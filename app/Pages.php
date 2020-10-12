<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Pages extends Model
{
    use Sluggable;

    protected $fillable = ['title',  'content'];


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
        $page = new static;
        $page->fill($fields);
        $page->save();

        return $page;
    }
}
