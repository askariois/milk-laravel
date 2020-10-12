@extends('admin.layout')

@section('content')


<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
   <!-- Content Header (Page header) -->
   <section class="content-header">
      <h1>
         Добавить страницу
      </h1>
   </section>

   <!-- Main content -->
   <section class="content">
      {!! Form::open(['route' => 'pages.store', 'files' => true]) !!}
      <!-- Default box -->
      <div class="box">
         <div class="box-header with-border">
            @include('admin.error')
         </div>
         <div class="box-body">
            <div class="col-md-12">
               <div class="form-group">
                  <label for="exampleInputEmail1">Заголовок страницы</label>
                  <input type="text" name="title" class="form-control" id="exampleInputEmail1" placeholder="" value="{{old('title')}}">
               </div>

            </div>


         </div>
         <div class="col-md-12">
            <div class="form-group">
               <label for="exampleInputEmail1">Контент</label>
               <textarea name="content" id="summernote" cols="30" rows="10" class="form-control"></textarea>
            </div>
         </div>
      </div>
      <!-- /.box-body -->
      <div class="box-footer">
         <a href="{{route('pages.index')}}" class="btn btn-default">Назад</a>
         <button class="btn btn-success pull-right">Добавить</button>
      </div>
      <!-- /.box-footer-->
</div>
<!-- /.box -->
{!! Form::close() !!}
</section>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->

@endsection