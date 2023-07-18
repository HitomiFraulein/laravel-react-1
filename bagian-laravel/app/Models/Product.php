<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';

    protected $fillable = [
    
        'name',
        'file_path',
        'description',
        'price',
    ];

    // Jika ada relasi atau metode lain yang perlu ditambahkan, Anda dapat menambahkannya di sini
}
