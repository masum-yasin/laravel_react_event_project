<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\backend\PdfController;
use App\Http\Controllers\EditorController;
use App\Http\Controllers\frontend\EventBookingController;
use App\Http\Controllers\frontend\FrontendHomeController;
use App\Http\Controllers\frontend\HomeController;
use App\Http\Controllers\frontend\ScheduleController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VolunteerController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
// frontend routing
// Route::get('/', function () {
//     return view('/frontend.home');
// })->name('home');


Route::get('/frontend/about', function () {
    return view('/frontend.about');
})->name('about.us');
// Route::get('/frontend/productlist', function () {
//     return view('frontend.productlist');
// })->name('productlist');
// Route::get('/frontend/productdetail', function () {
//     return view('frontend.productdetail');
// })->name('productdetail');
Route::get('/frontend/allpost', function () {
    return view('frontend.allpost');
})->name('allpost');
Route::get('/frontend/singlepost', function(){
 return view('frontend.singlepost');
})->name('singlepost');

   Route::get('eventdetail',function(){
    return view('frontend.eventtypedetail');
   })->name('eventdetail');
   Route::get('/dashboard', function () {
    return view('backend.dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('/',[HomeController::class,'index']);
// Route::get('/', function () {
//     return Inertia::render('/', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });


Route::get('/', [FrontendHomeController::class,'index'])->name('home');
Route::get('/about', [FrontendHomeController::class,'about'])->name('about');
Route::get('eventschedule',[ScheduleController::class,'schedule'])->name('eventschedule');


// Frontend Booking//
Route::get('frontend/booking', [EventBookingController::class,'index'])->name('booking.index');
Route::get('frontend/eventbooking/{id}', [EventBookingController::class,'create'])->name('frontend.eventbooking') ;
// ->middleware('customer'); // customer middleware
Route::post('booking/store', [EventBookingController::class, 'store'])->name('booking.store');
// for customer booking status//
Route::post('booking/status/{id}', [EventBookingController::class,'status'])->name('booking.status');

Route::get('booking/delete/{id}',[EventBookingController::class,'delete'])->name('frontend.booking');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');
 
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


// middleware editor dashboard//
Route::get('editor/login',[EditorController::class,'login'])->name('editor_login_form');
Route::post('editor/login',[EditorController::class,'store'])->name('EditorLogin');
Route::get('editor/edashobard/{type}',[EditorController::class,'edashboard'])->name('editor.edashboard')->middleware('editor');




//Admin MiddleWare//
Route::get('admin/login',[AdminController::class,'login'])->name('admin_login_form');
Route::post('admin/store',[AdminController::class,'store'])->name('AdminLogin');
Route::get('admin/dashboard/{type}',[AdminController::class,'adashboard'])->name('admin.dashboard')->middleware('admin');



// Volunteer Middleware
Route::get('volunteer/login',[VolunteerController::class,'login'])->name('volunteer_login_form');
Route::post('volunteer/store',[VolunteerController::class,'store'])->name('volunteerLogin');
Route::get('volunteer/voldashboard/{type}',[VolunteerController::class,'voldashboard'])->name('volunteer.voldashboard')->middleware('volunteer');

Route::get('invoice',[PdfController::class,'generate_pdf']);
Route::get('invoice/{id}',[PdfController::class,'generate_pdf'])->name('invoiceperid');
// Route::get('download-pdf',[PdfController::class,'download_pdf']);

require __DIR__.'/auth.php';
