<?php

namespace App\Listeners;

use App\Events\CertificateRead;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Log;

class LogCertificateFetched
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
     * @param CertificateRead $event
     * @return void
     */
    public function handle(CertificateRead $event)
    {
        Log::channel('app')->info('user with email ' . $event->user->email . ' read certificate at ' . Date::now());
    }
}
