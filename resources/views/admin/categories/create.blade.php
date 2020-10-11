@extends('admin.layout')

@section('content')

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
   <!-- Content Header (Page header) -->
   <section class="content-header">
      <h1>
         Добавить категорию
   </section>

   <!-- Main content -->
   <section class="content">

      <!-- Default box -->
      <div class="box">
         {!! Form::open(['route' => 'categories.store', 'files' => true]) !!}
         <div class="box-header with-border">
            @include('admin.error')
         </div>
         <div class="box-body">
            <div class="col-md-12">
               <div class="form-group">
                  <label for="exampleInputEmail1">Название</label>
                  <input type="text" name="title" class="form-control" id="exampleInputEmail1" placeholder="">
               </div>
            </div>
            <div class="col-md-6">
               <div class="form-group">
                  <label for="exampleInputFile">Банерная картинка</label>
                  <input type="file" id="exampleInputFile" name="image">

                  <p class="help-block">Какое-нибудь уведомление о форматах..</p>
               </div>
            </div>
            <div class="col-md-6">
               <div class="form-group">
                  <label for="exampleInputFile">Банерная картинка</label>
                  <input type="file" id="exampleInputFile" name="miniature">

                  <p class="help-block">Какое-нибудь уведомление о форматах..</p>
               </div>
            </div>
            <div class="col-md-12">
               <div class="form-group">
                  <label for="exampleInputEmail1">Полный текст</label>
                  <textarea name="content" id="summernote" cols="30" rows="10" class="form-control"></textarea>
               </div>
            </div>
         </div>
         <!-- /.box-body -->
         <div class="box-footer">
            <a href="{{route('categories.index')}}" class="btn btn-default">Назад</a>
            <button class="btn btn-success pull-right">Добавить</button>
         </div>
         <!-- /.box-footer-->
         {!! Form::close() !!}
      </div>
      <!-- /.box -->

   </section>
   <!-- /.content -->
</div>
<!-- /.content-wrapper -->
@endsection