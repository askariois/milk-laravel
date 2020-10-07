<!DOCTYPE html>
<html>

<head>
   <meta charset="utf-8" />
   <title>Веселый молочник</title>
   <!--[if IE]>
   <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
   <meta charset="UTF-8" />
   <meta name="keywords" content="" />
   <meta name="description" content="" />
   <meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <link rel="shortcut icon" href="/img/favicon.png">
   <!-- CSS -->
   <link rel="stylesheet" type="text/css" href="/css/front.css" />
   <!-- CSS -->
</head>

<body>
   <!-- header2 -->
   <header>
      <div class="container">
         <div class="row justify-content-between">
            <!-- logo -->
            <div class="col-lg-2 logo">
               <a href="index.html">
                  <img src="/img/logo.png" alt="логотип" />
               </a>
            </div>
            <!-- logo -->

            <!-- menu -->
            <div class="col-xl-6 col-lg-6 col-3">
               <!-- mobile menu -->
               <div class="header_burger">
                  <span></span>
               </div>
               <!-- mobile menu -->

               <ul class="menu d-flex mb-0 justify-content-between header_menu">
                  <li> <input type="search" placeholder="Найти" /></li>
                  <li> <a href="proizvodstvo.html">Производство</a> </li>
                  <li> <a href="marka.html">О торговой марке</a></li>
                  <li class="dropdown">
                     <a href="all_product.html" data-toggle="dropdown">Продукты</a>
                     <div class="dropdown-content">
                        <a href="pasmoloko.html">Пастеризованное молоко</a>
                        <a href="ultramoloko.html">Ультрапастеризованное молоко</a>
                        <a href="kefir.html">Кефир</a>
                        <a href="smetana.html"> Сметана </a>
                        <a href="tvorog.html">Творог</a>
                        <a href="maslo.html">Масло</a>
                     </div>
                  </li>
                  <li> <a href="contact.html">Контакты</a> </li>
               </ul>
            </div>
            <!-- menu -->

            <!-- social and language -->
            <div class="col-lg-3 col-3 d-flex align-items-center justify-content-between">
               <div class="header__social d-flex align-items-center">
                  <a href="#"> <img src="/img/face.svg" alt=""> </a>
                  <a href="#"> <img src="/img/insta.svg" alt=""> </a>
               </div>



               <div class="button b2" id="button-10">
                  <input type="checkbox" class="checkbox" onclick="document.location='kg/index.html'">
                  <div class="knobs">
                     <span>Ру</span>
                  </div>
                  <div class="layer"></div>
               </div>

               <div class="header_serch">
                  <img src="/img/search_icon.svg" alt="" />
               </div>
            </div>
            <!-- social and language -->
         </div>
      </div>
   </header>
   <!-- header -->

   @yield('content')


   <footer>
      <div class="container">
         <div class="row justify-content-between align-items-center">
            <div class="col-lg-auto footer__link">
               <a href="/img/politic.pdf">Пользовательское соглашение</a>
            </div>
            <div class="col-lg-auto footer__link">
               <a href="contact.html">Обратная связь</a>
            </div>
            <div class="col-lg-3">
               <img src="/img/logo.png" class="footer_logo" alt="">
            </div>
            <div class="col-lg-auto">
               <p>2020 ОАО «Бишкексут»</p>
            </div>
            <div class="col-lg-2">
               <img src="/img/logo.png" class="footer_logo_mob" alt="">
               <div class="header__social d-flex align-items-center">
                  <a href="https://www.facebook.com/bishkeksut"> <img src="/img/face.svg" alt=""> </a>
                  <a href="https://www.instagram.com/bishkeksut/"> <img src="/img/insta.svg" alt=""> </a>
               </div>
            </div>
         </div>
      </div>
   </footer>

   <script src="/js/front.js"></script>

</body>

</html>