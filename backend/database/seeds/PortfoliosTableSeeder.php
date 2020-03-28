<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Portfolio;

class PortfoliosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create('App\Item');
            Portfolio::create([
                'description' => ucfirst($faker->sentence()),
                'skills' => 'HTML',
                'services' => ucfirst($faker->sentence()),
                'price_per_hour' => $faker->numberBetween(10,100),
                'status' => $faker->boolean(),
                'user_id' => 1,
                'created_at' => \Carbon\Carbon::now(),
                'updated_at' => \Carbon\Carbon::now()
            ]);
    }
}
