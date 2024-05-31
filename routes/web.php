<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Public\PublicController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\ChirpController;
use App\Http\Controllers\MembersController;
use App\Http\Controllers\MediasController;
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\GoogleDriveTestController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\UploadListDirectoryController;

use App\Http\Controllers\PublicController;

Route::get('/backoffice', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/', [PublicController::class, 'home'])->name('public.home');
Route::get('/legal', [PublicController::class, 'legal'])->name('public.legal');
Route::get('/confidentiality', [PublicController::class, 'confidentiality'])->name('public.confidentiality');
Route::get('/credits', [PublicController::class, 'credits'])->name('public.credits');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Public routes
Route::get('/', [PublicController::class, 'home'])->name('public.home');
Route::get('/legal', [PublicController::class, 'legal'])->name('public.legal');
Route::get('/confidentiality', [PublicController::class, 'confidentiality'])->name('public.confidentiality');
Route::get('/credits', [PublicController::class, 'credits'])->name('public.credits');

Route::get('/gdrive-list', UploadListDirectoryController::class)->name('gdrive.list');
Route::get('/test-google-drive', [GoogleDriveTestController::class, 'index']);

// Back office routes
Route::middleware(['auth', 'verified'])->group(function () {

    Route::resource('chirps', ChirpController::class)
        ->only(['index', 'store', 'update', 'destroy']);

    Route::resource('cooking-team', MembersController::class)
        ->only(['index', 'store', 'update', 'destroy']);

    Route::resource('cooking-medias', MediasController::class)
        ->only(['index', 'store', 'update', 'destroy']);

    Route::get('cooking-medias/get-provider/{provider}', [MediasController::class, 'getProvider'])
        ->name('cooking-medias.get-provider');

    Route::get('cooking-medias/down-provider/{provider}', [MediasController::class, 'DownProvider'])
        ->name('cooking-medias.down-provider');

    Route::resource('cooking-projects', ProjectsController::class)
        ->only(['index', 'store', 'update', 'destroy']);

    Route::patch('cooking-projects/{project}/publish', [ProjectsController::class, 'publish'])
        ->name('cooking-projects.publish');

    Route::patch('cooking-projects/{project}/draft', [ProjectsController::class, 'draft'])
        ->name('cooking-projects.draft');

    Route::post('/cooking-medias/media-to-project', [MediasController::class, 'mediaToProject'])
        ->name('cooking-medias.media-to-project');

    Route::get('/projects/{project}/medias', [MediasController::class, 'getMediaByProject'])->name('project.get-medias');

    Route::get('file-upload', [FileController::class, 'index'])->name('file.upload');
    Route::post('file-upload', [FileController::class, 'store'])->name('file.upload.store');
    Route::delete('file/{id}', [FileController::class, 'destroy'])->name('file.destroy');
    Route::get('file/{id}/download', [FileController::class, 'download'])->name('file.download');
});



require __DIR__.'/auth.php';
