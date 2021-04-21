<?php

namespace App\Providers;

use App\Events\CertificateRead;
use App\Events\CertificateUploaded;
use App\Events\UserCreated;
use App\Events\UserLogged;
use App\Listeners\LogCertificateFetched;
use App\Listeners\LogCreatedUser;
use App\Listeners\LogSuccessfulCertificateUpload;
use App\Listeners\LogSuccessfulLogin;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        UserCreated::class => [
            LogCreatedUser::class
        ],
        UserLogged::class => [
            LogSuccessfulLogin::class
        ],
        CertificateUploaded::class => [
            LogSuccessfulCertificateUpload::class
        ],
        CertificateRead::class => [
            LogCertificateFetched::class
        ]
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
