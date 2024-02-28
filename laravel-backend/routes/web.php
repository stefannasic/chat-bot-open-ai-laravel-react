<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Auth\PasswordController;

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

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

Route::post('/profile/update', [ProfileController::class, 'update'])->name('profile.update');

Route::put('/profile/updatePassword', [PasswordController::class, 'update'])->name('password.update');

Route::delete('/profile/destroy', [ProfileController::class, 'destroy'])->name('profile.destroy');

require __DIR__.'/auth.php';
