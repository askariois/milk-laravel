<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Setting;
use Illuminate\Http\Request;

class SettingController extends Controller
{

    public function index()
    {
        $settings = Setting::all();
        return view('admin.settings.index', ['settings' => $settings]);
    }

    public function store(Request $request)
    {
        $setting = Setting::add($request->all());
        $setting->uploadLogo($request->file('logo'));
        $setting->uploadLogoMob($request->file('logo_m'));

        return redirect()->route('settings.index');
    }


    public function edit($id)
    {
        $setting = Setting::find($id);
        return view('admin.settings.edit', ['setting' => $setting]);
    }

    public function update(Request $request, $id)
    {
        $setting = Setting::find($id);

        $setting->update($request->all());
        $setting->uploadLogo($request->file('logo'));
        $setting->uploadLogoMob($request->file('logo_m'));

        return redirect()->route('settings.index');
    }
}
