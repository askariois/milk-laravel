<?php

namespace App\Http\Controllers;

use App\Category;
use App\Pages;
use App\Post;
use App\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class HomeController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        $settings = Setting::all();
        $pages = Pages::all();
        return view('pages.index', compact('categories', 'settings', 'pages'));
    }



    public function show($slug)
    {
        $pages = Pages::all();
        $categories = Category::all();
        $product = Category::where('slug', $slug)->firstOrFail();
        $product_detail_all = $product->posts;
        $settings = Setting::all();
        return view('pages.show', compact('product',  'settings', 'categories', 'product_detail_all', 'pages'));
    }

    // public function changeLocal($locale)
    // {
    //     session(['locale' => $locale]);
    //     App::setLocale($locale);
    //     return redirect()->back();
    // }
}
