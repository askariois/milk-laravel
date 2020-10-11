<?php

namespace App\Http\Controllers;

use App\Category;
use App\Post;
use App\Setting;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        $settings = Setting::all();
        return view('pages.index', compact('categories', 'settings' ));
    }

    public function show($slug)
    {
        $product_all = Category::all();
        $product = Category::where('slug', $slug)->firstOrFail();
        $product_detail_all = $product->posts;
        $settings = Setting::all();
        return view('pages.show', compact('product',  'settings', 'product_all', 'product_detail_all'));
    }
}
