<?php

namespace App\Http\Controllers\Api;

use App\Events\CertificateRead;
use App\Events\CertificateUploaded;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UserController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param User $user
     * @return Response
     */
    public function show(User $user)
    {
        CertificateRead::dispatch($user);
        return response($user->certificate, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param User $user
     * @return Response
     */
    public function update(Request $request, User $user)
    {
        CertificateUploaded::dispatch($user);
        $user->certificate = $request->file('file')->getContent();
        $user->save();
        return response($user->certificate, 200);
    }
}
