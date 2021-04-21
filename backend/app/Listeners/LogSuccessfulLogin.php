<?php

namespace App\Listeners;

use App\Events\UserLogged;
use Carbon\Traits\Date;
use Illuminate\Support\Facades\Log;

class LogSuccessfulLogin
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param UserLogged $event
     * @return void
     */
    public function handle(UserLogged $event)
    {
        Log::channel('app')->info('user logged with email ' . $event->user->email . ' at ' . Date::now());
    }
}
