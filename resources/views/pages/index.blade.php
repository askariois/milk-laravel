@extends('layout')

@section('content')
<!-- baner -->
<section class="baner">
</section>
<!-- baner -->

<!-- catalog -->
<section class="catalog">
   <div class="container">
      <div class="row align-items-center">
         <div class="col-xl-3 col-lg-4">
            <h2>Каталог продуктов</h2>
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
                     <div class="catalog__desc">
                        {!! $category->content !!}
                        <a href="pasmoloko.html">Узнать больше</a>
                     </div>
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
               <h6>{{ $category->title }}</h6>
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