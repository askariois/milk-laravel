<?php

use App\Services\Localization\LocalizationService;
use GuzzleHttp\Psr7\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::group([
    'prefix' => LocalizationService::locale(),
    'middleware' => 'set_Locale',
], function () {
    Route::get('/', 'HomeController@index');
    Route::get('/product/{slug}', 'HomeController@show')->name('product.show');
    Route::get('/pages/{slug}', 'PagehomeController@details')->name('pages.details');
});




Route::get('/login', 'AuthController@loginForm');
Route::post('/login', 'AuthController@login');
Route::get('/logout', 'AuthController@logout');

Route::group(['prefix' => 'admin', 'namespace' => 'Admin', 'middleware' => 'admin'], function () {
    Route::get('/', 'DashboardController@index');
    Route::resource('/categories', 'CategorisController');
    Route::resource('/settings', 'SettingController');
    Route::resource('/users', 'UserController');
    Route::resource('/posts', 'PostController');
    Route::resource('/pages', 'PageController');
});


//Переключение языков
