<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Setting extends Model
{


    protected $fillable = ['logo', 'logo_m', 'link_f', 'link_insta'];

    public static function add($fields)
    {
        $setting = new static;
        $setting->fill($fields);
        $setting->save();

        return $setting;
    }


    public function edit($fields)
    {
        $this->fill($fields);
        $this->save();
    }


    public function uploadLogo($image)
    {
        if ($image == null) {
            return;
        }
        $filename = Str::random(10) . '.' . $image->extension();
        $image->storeAs('uploads', $filename);
        $this->logo = $filename;
        $this->save();
    }

    public function getLogo()
    {
        if ($this->logo == null) {
            return '/img/no-user-image.jpg';
        }

        return '/uploads/' . $this->logo;
    }



    public function uploadLogoMob($image)
    {
        if ($image == null) {
            return;
        }
        $filename = Str::random(10) . '.' . $image->extension();
        $image->storeAs('uploads', $filename);
        $this->logo_m = $filename;
        $this->save();
    }

    public function getLogoMob()
    {
        if ($this->logo_m == null) {
            return '/img/no-user-image.jpg';
        }

        return '/uploads/' . $this->logo_m;
    }
}
