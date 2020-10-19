@extends('layout')

@section('content' )

<div class="container">
   <div class="row justify-content-center">
      <div class="col-lg-6 text-center">
         <h1>Поиск:</h1>
         @include('admin.error')
         @if (App::isLocale('ru'))
         {{ $product ->count() }} результатов поиска по слову "{{ request()->input('query')}}"
         @else
         {{ $product_kg ->count() }} результатов поиска по слову "{{ request()->input('query')}}
         @endif
      </div>

   </div>


   @if (App::isLocale('ru'))
   @foreach ($product as $pr)
   <h1> <a href="{{route('product.show' , $pr->slug )}}">{{ $pr->title }} </a> </h1>
   <p>{{ strip_tags($pr->content) }}</p>
   @endforeach
   @else
   @foreach ($product_kg as $pr_kg)
   <h1> <a href="{{route('product.show' , $pr_kg->slug )}}">{{ $pr_kg->title_kg }} </a> </h1>
   <p>{{ strip_tags($pr_kg->content_kg) }}</p>
   @endforeach
   @endif


</div>

@endsection