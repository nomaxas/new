<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Rating;
use Faker\Generator as Faker;

$factory->define(Rating::class, function (Faker $faker) {
    return [
        'user_id' => factory(\App\User::class)->create(),
        'message' => $faker->sentence($nbWords = 6, $variableNbWords = true) ,
        'rating' => $faker->biasedNumberBetween($min = 0, $max = 5, $function = 'sqrt'),
        'profolio_id' => $faker->randomDigit
    ];
});
