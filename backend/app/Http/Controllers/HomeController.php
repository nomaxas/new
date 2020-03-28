<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $request)
    {
        //$request->user()->authorizeRoles(['Freelancer','Client']);
        return view('home');
    }
    public function index2(\App\Role $role = null)
    {
        return $role;   
        //$role = App\Role::where('role', $data['role'])->first();
        //$user = App\User::where('id', $id)->first();
        //$role->users()->attach($user);
        //$request->user()->authorizeRoles(['Client']);
        return view('seip');
    }
}
