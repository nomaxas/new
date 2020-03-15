<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
/*Reg Not Working*/
Route::post('register','ApiController@register');

//User
Route::post('portfolio', 'PortfolioController@create');
Route::post('update/portfolio/{id}', 'PortfolioController@update');
Route::get('user/{id}', 'PortfolioController@aboutUser');
