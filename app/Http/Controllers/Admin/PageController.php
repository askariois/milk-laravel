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


    public function create()
    {
        return view('admin.pages.create');
    }


    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required'
        ]);

        $category = Pages::add($request->all());

        return redirect()->route('pages.index');
    }


    public function edit($id)
    {
        $page = Pages::find($id);
        return view('admin.pages.edit', ['page' => $page]);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'title' => 'required'
        ]);

        $page = Pages::find($id);

        $page->update($request->all());
        return redirect()->route('pages.index');
        // return view('admin.pages.edit', ['page' => $page]);
    }

    public function destroy($id)
    {
        Pages::find($id)->delete();
        return redirect()->route('pages.index');
    }
}
