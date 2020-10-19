@extends('layout')

@section('content')
<!-- baner -->
@if (App::isLocale('ru'))
<section class="baner">
</section>
@else
<section class="baner_kg ">
</section>
@endif
<!-- baner -->

<!-- catalog -->
<section class="catalog">
   <div class="container">
      <div class="row align-items-center">
         <div class="col-xl-3 col-lg-4">
            <h2>{{__('index.catolog_name')}}</h2>
         </div>
         <div class="col-xl-9 col-lg-8">
            <div class="catalog__line"></div>
         </div>
      </div>
   </div>



   <div class="swiper-container gallery-top">
      <div class="swiper-wrapper">

         @foreach($categories as $category)
         <div class="swiper-slide" style="background-image:url('{{$category->getImageCategory()}}')">
            <div class="container">
               <div class="row no-gutters">
                  <div class="col-lg-5 col-12 catalog__padding">
                     @if (App::isLocale('ru'))
                     <div class="catalog__desc">
                        {!! $category->content !!}
                        <a href="{{route('product.show' , $category->slug )}}">{{__('index.more')}}</a>
                     </div>
                     @else
                     <div class="catalog__desc">
                        {!! $category->content_kg !!}
                        <a href="{{route('product.show' , $category->slug )}}">{{__('index.more')}}</a>
                     </div>

                     @endif
                     <div class="catalog_shadow"></div>
                  </div>

               </div>
            </div>
         </div>
         @endforeach
      </div>
      <!-- Add Arrows -->
      <div class="swiper-button-next swiper-button-white"></div>
      <div class="swiper-button-prev swiper-button-white"></div>
   </div>
   <div class="container">
      <div class="swiper-container gallery-thumbs">
         <div class="swiper-wrapper">
            @foreach($categories as $category)
            <div class="swiper-slide text-center">
               <img src="{{$category->getMiniature()}}" alt="">
               @if (App::isLocale('ru'))
               <h6>{{ $category->title }}</h6>
               @else
               <h6>{{ $category->title_kg }}</h6>
               @endif
            </div>
            @endforeach
         </div>
         <!-- Add Arrows -->
         <div class="swiper-button-next-q swiper-button-white"></div>
         <div class="swiper-button-prev-q swiper-button-white"></div>
      </div>
   </div>
</section>
<!-- catalog -->

@endsection