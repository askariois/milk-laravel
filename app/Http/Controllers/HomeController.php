<?php

namespace App\Http\Controllers;

use App\Category;
use App\Setting;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        $settings = Setting::all();
        return view('pages.index', compact('categories', 'settings'));
    }

    public function show($slug)
    {
        $product_all = Category::all();
        $product = Category::where('slug', $slug)->firstOrFail();
        $settings = Setting::all();
        return view('pages.show', compact('product',  'settings', 'product_all'));
    }
}
