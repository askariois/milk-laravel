<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddProductKgVersion extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->string('product_temp_kg')->nullable();
            $table->string('product_srok_kg')->nullable();
            $table->string('product_massa_kg')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->dropColumn('product_temp_kg');
            $table->dropColumn('product_srok_kg');
            $table->dropColumn('product_massa_kg');
        });
    }
}
