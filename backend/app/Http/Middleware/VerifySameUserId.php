<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class VerifySameUserId
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if ($request->is('api/user/' . $request->user()->id)) {
            return $next($request);
        }
        return response(['message' => 'permission denied'], 403);
    }
}
