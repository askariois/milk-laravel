@extends('layout')

@section('content' )

<div class="container">
   <div class="row justify-content-center">
      <div class="col-lg-6 text-center">
         <h1>{{__('index.search_page')}}:</h1>
         @include('admin.error')
         @if (App::isLocale('ru'))
         {{ $product ->count() + $page_ser ->count()  }} результатов поиска по слову "{{ request()->input('query')}}"
         @else
         "{{ request()->input('query')}}" сөзү боюнча издөөдө {{ $product_kg ->count() }} натыйжа бар
         @endif
      </div>

   </div>


   @if (App::isLocale('ru'))

   @foreach ($page_ser as $pag_ser)
   <h1> <a href="{{route('pages.details', $pag_ser->slug )}}">{{ $pag_ser->title }} </a> </h1>
   <p>{{ strip_tags($pag_ser->content) }}</p>
   @endforeach

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