<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $fillable = [
        'role'
    ];
    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    /*
    $user = App\User::find(1);

    foreach ($user->roles as $role) {
        echo $role->pivot->created_at;
    }
    */
}
