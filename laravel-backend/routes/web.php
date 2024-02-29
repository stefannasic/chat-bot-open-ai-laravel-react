<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\PreferencesController;
use App\Http\Controllers\OpenAIController;

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

Route::post('/send-message', [OpenAIController::class, 'sendMessage']);

Route::post('/save-preferences', [PreferencesController::class, 'savePreferences'])->name('save.preferences');

Route::get('/user/preferences', [PreferencesController::class, 'getUserPreferences'])->name('user.preferences');

require __DIR__.'/auth.php';
