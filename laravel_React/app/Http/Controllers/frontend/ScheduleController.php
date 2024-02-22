<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\ScheduleEvent;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ScheduleController extends Controller
{
    public function schedule(){
        $schedule = ScheduleEvent::get();
        return Inertia::render('Schedule',[
            'schedule'=>$schedule
        ]);
    }
}
