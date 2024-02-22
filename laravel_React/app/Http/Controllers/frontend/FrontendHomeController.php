<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Eventtype;

use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontendHomeController extends Controller
{
    public function index(){
        $eventtype = Eventtype::get();
        $categories = Category::get();
        // return view('frontend.home',compact('eventtype','categories'));
        return Inertia::render('Home', [
            'eventtype' => $eventtype,
            'categories' => $categories,
        ]) ;

    }
    public function about(){
        return Inertia::render('About') ;

    }
    public function footer(){
        return Inertia::render('Footer');
    }
   
}
