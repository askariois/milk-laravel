<?php


namespace App\Services\Localization;


use Illuminate\Support\ServiceProvider;


class LocalizationServiceProvaider extends ServiceProvider
{
   public function register()
   {
      $this->app->bind("Localization", 'App\Services\Localization\Localization');
   }
}
