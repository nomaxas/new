<?php

namespace App\Http\Controllers;

use App\Portfolio;
use App\User;
use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    public function create(Request $request) {
        return Portfolio::create([
            'description' => $request->input('description'),
            'skills' => $request->input('skills'),
            'services' => $request->input('services'),
            'price_per_hour' => $request->input('price_per_hour'),
            'status' => 0,
            'user_id' => $request->input('user_id'),
        ]);
    }
    public function aboutUser(User $user, $id) {
        $role_id = User::select('role_id')->where('users.id',$id)->get()[0]->role_id;
        if ($role_id != 1 && $role_id != 2) {
            $query = User::select('*', 'users.id as id')->join('portfolios','users.id','=','portfolios.user_id')->where('users.id',$id)->get();
        } else {
            $query = User::select('*')->where('users.id',$id)->get();
        }
        return response()->json($query, 200);
    }
    public function update($id, Request $request) {
        return Portfolio::where('id',$id)->update($request->except(['_token']));
    }
}
