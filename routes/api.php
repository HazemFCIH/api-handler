<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('login','Api\v1\AuthController@login');
Route::group(['middleware' => ['jwt.auth']],function (){

    Route::get('my_posts',Api\v1\UserController::class.'@index');
    Route::post('logout',Api\v1\AuthController::class.'@logout');
});
