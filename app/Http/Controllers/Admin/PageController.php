<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Pages;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index()
    {
        $pages = Pages::all();
        return view('admin.pages.index', ['pages' => $pages]);
    }
}
