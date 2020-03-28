<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\RoleUser;
use App\User;
use App\Role;
use Faker\Generator as Faker;

$factory->define(RoleUser::class, function (Faker $faker) {
    return [
        'user_id' => $faker->unique()->biasedNumberBetween($min = 1, $max = 5, $function = 'sqrt'),
        'role_id' => $faker->biasedNumberBetween($min = 1, $max = 2, $function = 'sqrt'),
    ];
});
