<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use \Validator;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request){
        $validator = Validator::make($request->all(),[
            'email' =>'required|email',
            'password' =>'required|min:6',
        ]);
        if($validator->failed()){

            return response()->json(['error'=>true,'message'=>$validator->errors()],200);

        }
        $credentials = request(['email','password']);
        $token = auth('api')->attempt($credentials);
        if(!$token){
            return  response()->json(['error'=>true,'message'=>'Unauthorized',],200);

        }
        return response()->json([
           'access_token' => $token,
           'expire_in' => auth('api')->factory()->getTTL() * 3600,
        ]);


    }
    public function logout(){
        auth('api')->logout();
        return response()->json([
            'error' => false,
            'message' => 'Logout successfully'
        ],200);

    }
}
