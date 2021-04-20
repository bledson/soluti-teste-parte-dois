<?php

namespace App\Listeners;

use App\Events\UserCreated;
use Illuminate\Support\Facades\Log;

class LogCreatedUser
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
     * @param  UserCreated  $event
     * @return void
     */
    public function handle(UserCreated $event)
    {
        Log::channel('app')->info('user created with email ' . $event->user->email);
    }
}
