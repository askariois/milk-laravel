@extends('layout')

@section('content')
@if(($page_details->id == '4'))
<section class="all_product">
   <div class="container">
      <div class="row align-items-center">
         <div class="col-lg-10 offset-lg-1 d-flex align-items-center">
            <div class="row justify-content-between">
               @foreach($categories as $category)
               <div class="col-lg-4 product_cat">
                  <a href="{{route('product.show' , $category->slug)}}">
                     <img src="{{$category->getMiniature()}}" alt="">
                     @if (App::isLocale('ru'))
                     <h5>{{ $category->title }}</h5>
                     @else
                     <h5>{{ $category->title_kg }}</h5>
                     @endif
                  </a>
               </div>
               @endforeach
            </div>
         </div>
      </div>
   </div>
</section>

@elseif($page_details->id == '5')


<section class="contact">
   <div class="container">
      <div class="row align-items-center">
         <div class="col-lg-9 offset-lg-1 d-flex align-items-center">
            <h3>{{__('index.review')}}</h3>
            <div class="catalog__line"></div>
         </div>

         <div class="col-lg-9 offset-lg-1 mp-0">
            <div class="row justify-content-between">
               <div class="col-xl-7 col-lg-7">
                  <h3>{{__('index.review_sec')}}</h3>
                  <form action="#" id="pingForm" class="mt-4">
                     <div class="d-flex justify-content-between">
                        <input type="text" name="name" placeholder="{{__('index.name')}}">
                        <input type="text" name="fullname" placeholder="{{__('index.fullname')}}">
                     </div>
                     <div class="d-flex justify-content-between mt-2">
                        <input type="text" name="email" placeholder="Email">
                        <input type="text" name="phone" placeholder="Телефон">
                     </div>
                     <div class="d-flex justify-content-between mt-2">
                        <textarea name="message" id="contact_text" rows="5" placeholder="{{__('index.textarea')}}"></textarea>
                     </div>
                     <button type="submit" class="btn send-btn mt-2">{{__('index.btn_send')}}</button>
                  </form>
                  <div class="mt-3" id="contact_result"></div>
               </div>

               <div class="col-xl-3 col-lg-4">
                  @if (App::isLocale('ru'))
                  {!! $page_details->content !!}
                  @else
                  {!! $page_details->content_kg !!}
                  @endif
               </div>
            </div>
         </div>
      </div>
   </div>
</section>

@else


@if (App::isLocale('ru'))
{!! $page_details->content !!}
@else
{!! $page_details->content_kg !!}
@endif


@endif

@endsection