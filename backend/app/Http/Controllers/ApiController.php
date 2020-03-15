<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;

class ApiController extends Controller
{
    /*Registracija NOT WORKING
    protected function register(Request $request){

		$request->validate([
			'email'=>'required',
			'name'=>'required',
            'password'=>'required',
            'location' => 'required',
            'role_id' => 'required'
		]);

		User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'location' => $request->input('location'),
            'role_id' => $request->input('role_id'),
            'foto' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Roundel_of_None.svg/600px-Roundel_of_None.svg.png',
            'password' => Hash::make($request->input('password')),
        ]);


		$http = new Client;

		$response = $http->post(url('oauth/token'), [
		    'form_params' => [
		        'grant_type' => 'client_credentials',
		        'client_id' => '1',
		        'client_secret' => 'mBhVoXBNYRfF2IQ6jrz8h19DrfbUJlgZI3yZtqHj',
		        'username' => $request->email,
		        'password' => $request->password,
		        'scope' => '',
		    ],
		]);


		return response(['auth'=>json_decode((string) $response->getBody(), true),'user'=>$user]);
	}
    */
}
