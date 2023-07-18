<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;

class ProductController extends Controller
{

    public function addProduct(Request $req){
        $product= new Product;
        $product->name=$req->input('name');
        $product->price=$req->input('price');
        $product->description=$req->input('description');       
        $product->file_path=$req->file('file')->store('products');
        $product->save();       
        return $req->input();
    }

    public function list(){
        return Product::all();
    }

    public function delete($id){
        $result=Product::where('id',$id)->delete();
        if($result){
            return["result" => "Berhasil menghapus"];
        }
    }
   
    public function search($key){
        return Product::where('name', 'like', "%$key%")->get(); 
    }
   
}