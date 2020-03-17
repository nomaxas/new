<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;
use App\User;

class ApiController extends Controller
{
    /*Registracija NOT WORKING*/
    protected function register(Request $request){

		if($request->input('group_id') != 1 && $request->input('group_id') != 2) {
			return response()->json(['error'=>'Grupė neteisinga!']);
		} else {
			$request->validate([
			'email'=>'required|max:255',
			'name'=>'required|max:255',
            'password'=>'required|max:255',
            'location' => 'required|max:255',
            'group_id' => 'required|max:1'
		]);

		return User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'location' => $request->input('location'),
            'group_id' => $request->input('group_id'),
            'foto' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Roundel_of_None.svg/600px-Roundel_of_None.svg.png',
            'password' => Hash::make($request->input('password')),
        ]);
		}
		
	}
	public function login(Request $request)
	{
		$creds = $request->only(['email', 'password']);
		$token = auth()->attempt($creds);
		if(!$token = auth()->attempt($creds)) {
			return response()->json(['error' => 'Duomenys neteisingi']);
		}
		
		return response()->json(['token' => $token]);
	}
	public function tokenRefresh()
	{
		try {
			$token = auth()->refresh();
			return response()->json(['new token' => $token]);
		} catch(\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
			return response()->json(['error' => $e->getMessage()], 401);
		}
	}
   
}
