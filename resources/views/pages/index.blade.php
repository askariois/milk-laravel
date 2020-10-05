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
         <!-- Молоко -->
         <div class="swiper-slide" style="background-image:url(img/milk_1.jpg)">
            <div class="container">
               <div class="row no-gutters">
                  <div class="col-lg-5 col-12 catalog__padding">
                     <div class="catalog__desc">
                        <h3>пастеризованное молоко
                        </h3>
                        <p>Натуральное и вкусное</p>
                        <hr>
                        <p>Пастеризованное молоко «Веселый Молочник» - вкусное, свежее, 100% натуральное молоко. Процесс пастеризации молока «Веселый Молочник» позволяет потреблять продукт без дополнительного кипячения.</p>

                        <a href="pasmoloko.html">Узнать больше</a>
                     </div>
                     <div class="catalog_shadow"></div>
                  </div>

               </div>
            </div>
         </div>
         <!-- Молоко -->

         <!-- Молоко пастеризованное -->
         <div class="swiper-slide" style="background-image:url(img/milk.jpg)">
            <div class="container">
               <div class="row no-gutters">
                  <div class="col-lg-5 col-12 catalog__padding">
                     <div class="catalog__desc">
                        <h3>Ультрапастеризованное молоко
                        </h3>
                        <p>Без консервантов и красителей </p>
                        <hr>
                        <div class="swiper-container content-s">
                           <div class="swiper-wrapper">
                              <!-- Молоко -->
                              <div class="swiper-slide">
                                 <p>Ультрапастеризованное молоко «Веселый Молочник» – это полезный продукт, который сохраняет в себе питательные свойства и значительную часть микроэлементов и витаминов сырого молока. </p>
                              </div>
                              <div class="swiper-slide">
                                 <p> При ультрапастеризации молоко нагревается до температуры свыше 135°С за несколько секунд, выдерживается в таком состоянии 4 секунды , после чего быстро охлаждается до комнатной температуры. Весь процесс
                                    проходит в замкнутой системе, предохраняющей продукт от любых внешних воздействий. </p>
                              </div>
                              <div class="swiper-slide">
                                 <p>Ультрапастеризация позволяет сохранить вкус, состав и питательные свойства молока в течение нескольких месяцев при температуре от +2 до +25°С. </p>
                              </div>
                           </div>

                        </div>
                        <div class="button-container">
                           <div class="swiper-pagination"></div>
                           <!-- Add Arrows -->
                           <div class="swiper-button-next-c swiper-button-white"></div>
                           <div class="swiper-button-prev-c swiper-button-white"></div>
                        </div>
                        <a href="ultramoloko.html">Узнать больше</a>
                     </div>

                     <div class="catalog_shadow"></div>
                  </div>
               </div>
            </div>
         </div>
         <!-- Молоко пастеризованное -->
         <!-- Кефир -->
         <div class="swiper-slide" style="background-image:url(img/kefir.jpg)">
            <div class="container">
               <div class="row no-gutters">
                  <div class="col-lg-5 col-12 catalog__padding">
                     <div class="catalog__desc">
                        <h3>Кефир
                        </h3>
                        <p>Польза в каждом стакане</p>
                        <hr>
                        <p>Кефир «Веселый Молочник» - вкусный и полезный продукт, приготовленный из натурального молока с использованием чистых культур заквасочной микрофлоры. </p>

                        <a href="kefir.html">Узнать больше</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <!-- Кефир -->
         <!-- Сметана -->
         <div class="swiper-slide" style="background-image:url(img/smetana.jpg)">
            <div class="container">
               <div class="row no-gutters">
                  <div class="col-lg-5 col-12 catalog__padding">
                     <div class="catalog__desc">
                        <h3>Сметана
                        </h3>
                        <p>Густая и вкусная</p>
                        <hr>
                        <p>Сметана «Веселый Молочник» – натуральная и вкусная. Она готовится из свежих сливок и закваски по традиционному рецепту. Идеально как дополнение к творогу, выпечке, супам, салатам, вторым блюдам, а также как основа для
                           соуса и десертов. </p>

                        <a href="smetana.html">Узнать больше</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <!-- Сметана -->
         <!-- Творог -->
         <div class="swiper-slide" style="background-image:url(img/tvorog.jpg)">
            <div class="container">
               <div class="row no-gutters">
                  <div class="col-lg-5 col-12 catalog__padding">
                     <div class="catalog__desc">
                        <h3>Творог
                        </h3>
                        <p>Источник белка </p>
                        <hr>
                        <p>Творог «Веселый Молочник», приготовленный из натурального молока по традиционным рецептам, представлен в двух видах - классический и рассыпчатый. Источник белка, вкусный и полезный творог «Веселый Молочник» станет прекрасным
                           дополнением уютных семейных перекусов, на завтрак, обед и ужин. </p>

                        <a href="tvorog.html">Узнать больше</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <!-- Творог -->
         <!-- Масло -->
         <div class="swiper-slide" style="background-image:url(img/maslo.jpg)">
            <div class="container">
               <div class="row no-gutters">
                  <div class="col-lg-5 col-12 catalog__padding">
                     <div class="catalog__desc">
                        <h3>Масло сливочное
                        </h3>
                        <p>Сливочный вкус без консервантов</p>
                        <hr>
                        <p>Масло «Веселый Молочник» - натуральный молочный продукт, который обладает нежным сливочным вкусом. Насладитесь вкусом бутербродов и кашей с маслом «Веселый Молочник».</p>

                        <a href="maslo.html">Узнать больше</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <!-- Масло -->
      </div>
      <!-- Add Arrows -->
      <div class="swiper-button-next swiper-button-white"></div>
      <div class="swiper-button-prev swiper-button-white"></div>
   </div>
   <div class="container">
      <div class="swiper-container gallery-thumbs">
         <div class="swiper-wrapper">
            <div class="swiper-slide text-center">
               <img src="img/milk_1_trump.png" alt="">
               <h6> Пастеризованное молоко</h6>
            </div>
            <div class="swiper-slide text-center">
               <img src="img/milk_trump.png" alt="">
               <h6>ультраПастеризованное Молоко</h6>
            </div>
            <div class="swiper-slide text-center">
               <img src="img/kefir_trump.png" alt="">
               <h6>Кефир</h6>
            </div>
            <div class="swiper-slide text-center">
               <img src="img/smetana_trump.png" alt="">
               <h6>Сметана</h6>
            </div>
            <div class="swiper-slide text-center">
               <img src="img/tvorog_trump.png" alt="">
               <h6>Творог</h6>
            </div>
            <div class="swiper-slide text-center">
               <img src="img/maslo_trump.png" alt="">
               <h6>Масло</h6>
            </div>
         </div>
         <!-- Add Arrows -->
         <div class="swiper-button-next-q swiper-button-white"></div>
         <div class="swiper-button-prev-q swiper-button-white"></div>
      </div>
   </div>
</section>
<!-- catalog -->

@endsection