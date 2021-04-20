<?php

namespace App\Listeners;

use App\Events\CertificateUploaded;
use Carbon\Traits\Date;
use Illuminate\Support\Facades\Log;

class LogSuccessfulCertificateUpload
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
     * @param CertificateUploaded $event
     * @return void
     */
    public function handle(CertificateUploaded $event)
    {
        Log::channel('app')->info('user with email ' . $event->user->email . ' uploaded certificate at ' . Date::now());
    }
}
