<?php

namespace App\Http\Controllers;

use App\Category;
use App\Pages;
use App\Setting;
use Illuminate\Http\Request;

class PagehomeController extends Controller
{


    public function details($slug)
    {
        $categories = Category::all();
        $pages = Pages::all();
        $page_details = Pages::where('slug', $slug)->firstOrFail();
        $settings = Setting::all();
        return view('pages.details', compact('page_details',  'settings', 'pages', 'categories'));
    }
}
