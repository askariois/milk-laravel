@extends('layout')

@section('content')

<!-- baner -->

<section class="single_bg" style="background-image:url({{$product->getImageCategory()}})">
   <div class="container">
      <div class="row no-gutters">
         <div class="col-lg-5 catalog__padding">
            <div class="catalog__desc">
               {!! $product->content !!}
            </div>
         </div>
      </div>
   </div>
</section>
<!-- baner -->

<!-- catalog -->
<section class="single_catalog">
   <div class="container single_catalog_bg">
      <div class="swiper-container gallery-single-top">
         <div class="swiper-wrapper">

            @foreach($product_detail_all as $p_d_a)
            <div class="swiper-slide">
               <div class="container">
                  <div class="col-lg-10 offset-lg-1 single_catalog_p_t">
                     <div class="row justify-content-between">

                        <div class="col-lg-4 single_catalog_1coll">
                           <h2>{{$p_d_a->category->title}} {{$p_d_a->title}}</h2>
                           <hr class="single_pr_line">
                           {!! $p_d_a->content !!}

                        </div>
                        <div class="col-lg-4 single_image">
                           <img src="{{$p_d_a->getImage()}}" alt="">
                        </div>
                        <div class="col-lg-4 single_catalog_2coll flex-item">
                           <div class="d-flex align-items-center mb-4">
                              <img src="../img/cold1.png" alt="">
                              <p>{{$p_d_a->product_temp}}
                              </p>
                           </div>

                           <div class="d-flex align-items-center mb-4">
                              <img src="../img/callendar.png" alt="">
                              <p>Срок годности: <br /> {{$p_d_a->product_srok}}
                              </p>
                           </div>


                           <div class="d-flex align-items-center ">
                              <img src="../img/massa.png" alt="">
                              <p>Масса нетто: <br /> {{$p_d_a->product_massa}}
                              </p>
                           </div>
                        </div>
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
      <div class="container no-gutters d-flex justify-content-center">
         <div class="col-lg-8">
            <div class=" swiper-container gallery-single-thumbs ">
               <div class="swiper-wrapper ">
                  @foreach($product_detail_all as $p_d_a)
                  <div class="swiper-slide text-center ">
                     <img src="{{$p_d_a->getImage()}}" alt=" ">
                     <h6>
                        @if(($p_d_a->category->id == '1') or ($p_d_a->category->id == '2') )
                        Молоко {{$p_d_a->title}}
                        @else
                        {{$p_d_a->category->title}} {{$p_d_a->title}}
                        @endif
                        <br /> {{$p_d_a->product_massa}} </h6>
                  </div>
                  @endforeach
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<!-- catalog -->

<section class="single_all_product ">
   <div class="container ">


      <div class=" swiper-container single_all ">
         <div class="swiper-wrapper ">

            @foreach($product_all as $pr_all)
            <div class="swiper-slide text-center single_all_product_bl">
               <a href="{{route('product.show' , $pr_all->slug)}}">
                  <img src="{{$pr_all->getMiniature()}}" alt=" ">
                  <h6>{{$pr_all->title}}</h6>
               </a>
            </div>
            @endforeach
         </div>
      </div>
   </div>
</section>

@endsection