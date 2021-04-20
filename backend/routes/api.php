<?php

use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Auth\AuthController;
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

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user/{user}', [UserController::class, 'show'])->missing(function () {
        return response(['message' => 'not found'], 404);
    })->middleware('same.user.id');
    Route::post('/user/{user}', [UserController::class, 'update'])->middleware('same.user.id');
});
