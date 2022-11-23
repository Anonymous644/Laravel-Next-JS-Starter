<?php

use App\Http\Controllers\NameController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::get("/name", [NameController::class, "getName"]);
Route::post("/name", [NameController::class, "setName"]);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
