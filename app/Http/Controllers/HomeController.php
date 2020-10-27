<?php

namespace App\Http\Controllers;

use App\Category;
use App\Pages;
use App\Post;
use App\Setting;
use Illuminate\Http\Request;
use Illuminate\Validation\Validator;

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


    public function search(Request $request)
    {
        $request->validate([
            'query' => 'required|min:3',
        ]);

        $pages = Pages::all();
        $categories = Category::all();
        $settings = Setting::all();
        $query = $request->input('query');
        $product = Category::where('title', 'like', "%$query%")->orWhere('content', 'like', "%$query%")->get();
        $product_kg = Category::where('title_kg', 'like', "%$query%")->orWhere('content_kg', 'like', "%$query%")->get();
        return view('pages.search-result', compact('categories', 'pages', 'settings'))->with('product_kg', $product_kg)->with('product', $product);
    }
}
