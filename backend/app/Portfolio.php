<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{
    protected $fillable = [
        'description', 'skills', 'services', 'price_per_hour', 'status', 'user_id'
        ];
}
