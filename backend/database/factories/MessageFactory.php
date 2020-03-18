<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Message;
use Faker\Generator as Faker;

$factory->define(Message::class, function (Faker $faker) {
        return [
            'senders_id' => 2,
            'receivers_id' => 1,
            'message' => $faker->sentence($nbWords = 6, $variableNbWords = true),
        ];
});
