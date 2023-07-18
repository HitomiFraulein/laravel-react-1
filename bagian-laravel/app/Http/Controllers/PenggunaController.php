<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Models\Pengguna;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class PenggunaController extends Controller
{
    function register(Request $req)
    {
        $pengguna = new Pengguna();
        $pengguna->name = $req->input('name');
        $pengguna->email = $req->input('email');
        $pengguna->password = Hash::make($req->input('password'));
        $pengguna->save();
        return $pengguna;
    }
    function login(Request $req)
{
    $user = Pengguna::where('email', $req->input('email'))->first();
    if ($user && Hash::check($req->input('password'), $user->password)) {
        return ["success" => true, "user" => $user];
    }
    return ["success" => false, "message" => "Invalid credentials"];
}

}