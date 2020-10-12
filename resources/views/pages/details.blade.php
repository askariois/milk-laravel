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
                     <h5>{{ $category->title }}</h5>
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
            <h3>Отзыв</h3>
            <div class="catalog__line"></div>
         </div>

         <div class="col-lg-9 offset-lg-1 mp-0">
            <div class="row justify-content-between">
               <div class="col-xl-7 col-lg-7">
                  <h3>или предложение</h3>
                  <form action="#" class="mt-4">
                     <div class="d-flex justify-content-between">
                        <input type="text" placeholder="Имя">
                        <input type="text" placeholder="Фамилия">
                     </div>
                     <div class="d-flex justify-content-between mt-2">
                        <input type="text" placeholder="Email">
                        <input type="text" placeholder="Телефон">
                     </div>
                     <div class="d-flex justify-content-between mt-2">
                        <textarea name="" id="" rows="5" placeholder="Отзыв или предложение"></textarea>
                     </div>
                     <input type="submit" name="submit" class="btn send-btn mt-2" value="Отправить">
                  </form>
               </div>

               <div class="col-xl-3 col-lg-4">
                  {!! $page_details->content !!}
               </div>
            </div>
         </div>
      </div>
   </div>
</section>


@else
{!! $page_details->content !!}
@endif

@endsection