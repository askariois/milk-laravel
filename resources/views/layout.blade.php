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
               <a href="/">
                  @if(isset($settings))
                  @foreach($settings as $setting)
                  <img src="{{$setting->getLogo()}}" alt="логотип" />
                  @endforeach
                  @endif
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
                  @if (App::isLocale('ru'))
                  @foreach($pages as $page)
                  @if(($page->id == '4'))
                  <li class="dropdown">
                     <a href="{{route('pages.details', $page->slug)}}" data-toggle="dropdown">{{$page->title}}</a>
                     <div class="dropdown-content">
                        @foreach($categories as $category)
                        <a href="{{route('product.show' , $category->slug)}}">{{ $category->title }}</a>
                        @endforeach
                     </div>
                  </li>
                  @else
                  <li> <a href="{{route('pages.details', $page->slug)}}">{{$page->title}}</a> </li>
                  @endif

                  @endforeach
                  @else
                  @foreach($pages as $page)
                  @if(($page->id == '4'))
                  <li class="dropdown">
                     <a href="{{route('pages.details', $page->slug)}}" data-toggle="dropdown">{{$page->title_kg}}</a>
                     <div class="dropdown-content">
                        @foreach($categories as $category)
                        <a href="{{route('product.show' , $category->slug)}}">{{ $category->title_kg}}</a>
                        @endforeach
                     </div>
                  </li>
                  @else
                  <li> <a href="{{route('pages.details', $page->slug)}}">{{$page->title_kg}}</a> </li>
                  @endif

                  @endforeach
                  @endif
               </ul>
            </div>
            <!-- menu -->

            <!-- social and language -->
            <div class="col-lg-3 col-3 d-flex align-items-center justify-content-between">
               <div class="header__social d-flex align-items-center">
                  @include('social')
               </div>

               @if (App::isLocale('ru'))
               <div class="button b2" id="button-10">
                  <input type="checkbox" class="checkbox" onclick="document.location='/kg'">
                  <div class="knobs">
                     <span>Ру</span>
                  </div>
                  <div class="layer"></div>
               </div>
               @else
               <div class="button b2" id="button-10">
                  <input type="checkbox" class="checkbox" onclick="document.location='/ru'">
                  <div class=" knobs kg_button ">
                     <span>Ру</span>
                  </div>
                  <div class="layer "></div>
               </div>
               @endif
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
               <a href="/img/politic.pdf">{{__('index.politic_link')}}</a>
            </div>
            <div class="col-lg-auto footer__link">
               <a href="contact.html">{{__('index.callback')}}</a>
            </div>
            <div class="col-lg-3">
               @if(isset($settings))
               @foreach($settings as $setting)
               <img src="{{$setting->getLogo()}}" alt="логотип" class="footer_logo" />
               @endforeach
               @endif
            </div>
            <div class="col-lg-auto">
               <p>{{__('index.copyright')}}</p>
            </div>
            <div class="col-lg-2">
               @if(isset($settings))
               @foreach($settings as $setting)
               <img src="{{$setting->getLogo()}}" alt="логотип" class="footer_logo_mob" />
               @endforeach
               @endif
               <div class="header__social d-flex align-items-center">
                  @include('social')
               </div>
            </div>
         </div>
      </div>
   </footer>

   <script src="/js/front.js"></script>

</body>

</html>