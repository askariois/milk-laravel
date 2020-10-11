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
            <!-- Пастеризованное молоко 2,5% -->
            <div class="swiper-slide">
               <div class="container">
                  <div class="col-lg-10 offset-lg-1 single_catalog_p_t">
                     <div class="row justify-content-between">
                        <div class="col-lg-4 single_catalog_1coll">
                           <h2>Пастеризованное молоко 2,5%</h2>
                           <hr class="single_pr_line">
                           <p>Пищевая ценность</p>
                           <p> в 100 г продукта:</p>
                           <p> жиры - 2,5 г </p>
                           <p>белки - 2,9 г </p>
                           <p> углеводы - 4,7 г </p>
                           <p> Энергетическая ценность (калорийность) - 222 кДж / 53 ккал.</p>

                        </div>
                        <div class="col-lg-4 single_image">
                           <img src="../img/pasmoloko/pas_moloko_1.png" alt="">
                        </div>
                        <div class="col-lg-4 single_catalog_2coll flex-item">
                           <div class="d-flex align-items-center mb-4">
                              <img src="../img/cold1.png" alt="">
                              <p>Хранить при температуре от +2 °С до +6 °С, до и после вскрытия упаковки.
                              </p>
                           </div>

                           <div class="d-flex align-items-center mb-4">
                              <img src="../img/callendar.png" alt="">
                              <p>Срок годности: <br /> 9 суток
                              </p>
                           </div>


                           <div class="d-flex align-items-center ">
                              <img src="../img/massa.png" alt="">
                              <p>Масса нетто: <br /> 950 г
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <!-- Пастеризованное молоко 2,5% -->

            <!-- Пастеризованное молоко 3,2% -->
            <div class="swiper-slide">
               <div class="container">
                  <div class="col-lg-10 offset-lg-1 single_catalog_p_t">
                     <div class="row justify-content-between">
                        <div class="col-lg-4 single_catalog_1coll">
                           <h2>Пастеризованное молоко 3,2%</h2>
                           <hr class="single_pr_line_red">
                           <p>Пищевая ценность</p>
                           <p> в 100 г продукта:</p>
                           <p> жиры - 3,2 г </p>
                           <p>белки - 2,9 г </p>
                           <p> углеводы - 4,7 г </p>
                           <p> Энергетическая ценность (калорийность) - 248 кДж / 59 ккал.</p>

                        </div>
                        <div class="col-lg-4 single_image">
                           <img src="../img/pasmoloko/pas_moloko_2.png" alt="">
                        </div>
                        <div class="col-lg-4 single_catalog_2coll flex-item">
                           <div class="d-flex align-items-center mb-4">
                              <img src="../img/cold1.png" alt="">
                              <p>Хранить при температуре от +2 °С до +6 °С, до и после вскрытия упаковки.
                              </p>
                           </div>

                           <div class="d-flex align-items-center mb-4">
                              <img src="../img/callendar.png" alt="">
                              <p>Срок годности: <br /> 9 суток
                              </p>
                           </div>


                           <div class="d-flex align-items-center">
                              <img src="../img/massa.png" alt="">
                              <p>Масса нетто: <br /> 950 г
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <!-- Пастеризованное молоко 3,2% -->

            <!-- Пастеризованное молоко 2,5%  Бутылка-->
            <div class="swiper-slide">
               <div class="container">
                  <div class="col-lg-10 offset-lg-1 single_catalog_p_t">
                     <div class="row justify-content-between">
                        <div class="col-lg-4 single_catalog_1coll">
                           <h2>Пастеризованное молоко 2,5% </h2>
                           <hr class="single_pr_line_blue">
                           <p>Пищевая ценность</p>
                           <p> в 100 г продукта:</p>
                           <p> жиры - 2,5 г </p>
                           <p>белки - 2,9 г </p>
                           <p> углеводы - 4,7 г </p>
                           <p> Энергетическая ценность (калорийность) - 222 кДж / 53 ккал.</p>

                        </div>
                        <div class="col-lg-4 single_image">
                           <img src="../img/pasmoloko/pas_moloko_3.png" alt="">
                        </div>
                        <div class="col-lg-4 single_catalog_2coll flex-item">
                           <div class="d-flex align-items-center mb-4">
                              <img src="../img/cold1.png" alt="">
                              <p>Хранить при температуре от +2 °С до +6 °С, до и после вскрытия упаковки.
                              </p>
                           </div>

                           <div class="d-flex align-items-center mb-4">
                              <img src="../img/callendar.png" alt="">
                              <p>Срок годности: <br /> 12 суток
                              </p>
                           </div>


                           <div class="d-flex align-items-center">
                              <img src="../img/massa.png" alt="">
                              <p>Масса нетто: <br /> 930 г
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <!-- Пастеризованное молоко 2,5% Бутылка-->

            <!-- Пастеризованное молоко 3,2% Бутылка 450г -->
            <div class="swiper-slide">
               <div class="container">
                  <div class="col-lg-10 offset-lg-1 single_catalog_p_t">
                     <div class="row justify-content-between">
                        <div class="col-lg-4 single_catalog_1coll">
                           <h2>Пастеризованное молоко 3,2%</h2>
                           <hr class="single_pr_line">
                           <p>Пищевая ценность</p>
                           <p> в 100 г продукта:</p>
                           <p> жиры - 3,2 г </p>
                           <p>белки - 2,9 г </p>
                           <p> углеводы - 4,7 г </p>
                           <p> Энергетическая ценность (калорийность) - 248 кДж / 59 ккал.</p>

                        </div>
                        <div class="col-lg-4 single_image">
                           <img src="../img/pasmoloko/pas_moloko_4.png" alt="">
                        </div>
                        <div class="col-lg-4 single_catalog_2coll flex-item">
                           <div class="d-flex align-items-center mb-4">
                              <img src="../img/cold1.png" alt="">
                              <p>Хранить при температуре от +2 °С до +6 °С, до и после вскрытия упаковки.
                              </p>
                           </div>

                           <div class="d-flex align-items-center mb-4">
                              <img src="../img/callendar.png" alt="">
                              <p>Срок годности: <br /> 12 суток
                              </p>
                           </div>


                           <div class="d-flex align-items-center">
                              <img src="../img/massa.png" alt="">
                              <p>Масса нетто: <br /> 450 г
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <!-- Пастеризованное молоко 3,2% Бутылка 450г -->

            <!-- Пастеризованное молоко 3,2% Бутылка 930г -->
            <div class="swiper-slide">
               <div class="container">
                  <div class="col-lg-10 offset-lg-1 single_catalog_p_t">
                     <div class="row justify-content-between">
                        <div class="col-lg-4 single_catalog_1coll">
                           <h2>Пастеризованное молоко 3,2%</h2>
                           <hr class="single_pr_line">
                           <p>Пищевая ценность</p>
                           <p> в 100 г продукта:</p>
                           <p> жиры - 3,2 г </p>
                           <p>белки - 2,9 г </p>
                           <p> углеводы - 4,7 г </p>
                           <p> Энергетическая ценность (калорийность) - 248 кДж / 59 ккал.</p>

                        </div>
                        <div class="col-lg-4 single_image">
                           <img src="../img/pasmoloko/pas_moloko_5.png" alt="">
                        </div>
                        <div class="col-lg-4 single_catalog_2coll flex-item">
                           <div class="d-flex align-items-center mb-4">
                              <img src="../img/cold1.png" alt="">
                              <p>Хранить при температуре от +2 °С до +6 °С, до и после вскрытия упаковки.
                              </p>
                           </div>

                           <div class="d-flex align-items-center mb-4">
                              <img src="../img/callendar.png" alt="">
                              <p>Срок годности: <br /> 12 суток
                              </p>
                           </div>


                           <div class="d-flex align-items-center">
                              <img src="../img/massa.png" alt="">
                              <p>Масса нетто: <br /> 930 г
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <!-- Пастеризованное молоко 3,2% Бутылка 930г -->
         </div>
         <!-- Add Arrows -->
         <div class="swiper-button-next swiper-button-white"></div>
         <div class="swiper-button-prev swiper-button-white"></div>
      </div>
      <div class="container no-gutters d-flex justify-content-center">
         <div class="col-lg-8">
            <div class=" swiper-container gallery-single-thumbs ">
               <div class="swiper-wrapper ">
                  <div class="swiper-slide text-center ">
                     <img src="../img/pasmoloko/pas_moloko_1.png " alt=" ">
                     <h6>Молоко 2,5% <br /> 950г. </h6>
                  </div>
                  <div class="swiper-slide text-center ">
                     <img src="../img/pasmoloko/pas_moloko_2.png" alt=" ">
                     <h6>Молоко 3,2% <br /> 950г. </h6>
                  </div>
                  <div class="swiper-slide text-center ">
                     <img src="../img/pasmoloko/pas_moloko_3.png" alt=" ">
                     <h6>Молоко 2,5% <br /> 930г. </h6>
                  </div>
                  <div class="swiper-slide text-center ">
                     <img src="../img/pasmoloko/pas_moloko_4.png " alt=" ">
                     <h6>Молоко 3,2% <br /> 450г. </h6>
                  </div>
                  <div class="swiper-slide text-center ">
                     <img src="../img/pasmoloko/pas_moloko_5.png " alt=" ">
                     <h6>Молоко 3,2%<br /> 930г. </h6>
                  </div>
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