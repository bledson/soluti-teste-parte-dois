<?php

namespace App\Http\Controllers\Auth;

use App\Events\UserCreated;
use App\Events\UserLogged;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request) {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'cpf' => 'required|string|unique:App\Models\User,cpf',
            'email' => 'required|email|unique:App\Models\User,email',
            'password' => 'required|string',
            'address' => 'required|string',
            'phonenumber' => 'required|string',
            'birthdate' => 'required|date_format:d/m/Y'
        ]);

        $user = User::create([
            'name' => $validatedData['name'],
            'cpf' => $validatedData['cpf'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
            'address' => $validatedData['address'],
            'phonenumber' => $validatedData['phonenumber'],
            'birthdate' => Carbon::createFromFormat('d/m/Y', $validatedData['birthdate'])
        ]);

        UserCreated::dispatch($user);

        $token = $user->createToken('registertoken')->plainTextToken;

        return response(['user' => $user, 'token' => $token], 201);
    }

    public function login(Request $request) {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string'
        ]);

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            UserLogged::dispatch($user);

            $token = $user->createToken('logintoken')->plainTextToken;

            return response(['user' => $user, 'token' => $token], 200);
        }

        return response(['message' => 'Invalid credentials'], 401);
    }
}
