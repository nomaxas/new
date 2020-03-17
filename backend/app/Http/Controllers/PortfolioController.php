<?php

namespace App\Http\Controllers;

use App\Portfolio;
use App\User;
use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    public function create(Request $request) {
        try {
            $user = auth()->userOrFail();
        } catch(\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
        return Portfolio::create([
            'description' => $request->input('description'),
            'skills' => $request->input('skills'),
            'services' => $request->input('services'),
            'price_per_hour' => $request->input('price_per_hour'),
            'status' => 0,
            'user_id' => $request->input('user_id'),
        ]);
    }
    /*User INFO*/
    public function aboutUser(User $user, $id) {
        $role_id = User::select('group_id')->where('users.id',$id)->get()[0]->group_id;
        if ($role_id != 1 && $role_id != 2) {
            $query = User::select('*', 'users.id as id')->join('portfolios','users.id','=','portfolios.user_id')->where('users.id',$id)->get();
        } else {
            $query = User::select('*')->where('users.id',$id)->get();
        }
        try {
            $user = auth()->userOrFail();
        } catch(\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
        return response()->json($query, 200);
    }
    public function update($id, Request $request) {
        try {
            $user = auth()->userOrFail();
        } catch(\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
        return Portfolio::where('id',$id)->update($request->except(['_token']));
    }
}
