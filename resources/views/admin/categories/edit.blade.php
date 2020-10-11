@extends('admin.layout')

@section('content')

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
   <!-- Content Header (Page header) -->
   <section class="content-header">
      <h1>
         Изменить категорию
      </h1>
   </section>

   <!-- Main content -->
   <section class="content">

      <!-- Default box -->
      <div class="box">
         <div class="box-header with-border">
            @include('admin.error')
         </div>
         {!! Form::open(['route' => ['categories.update',$category->id], 'method'=>'put' , 'files' => true]) !!}
         <div class="box-body">

            <div class="col-md-12">
               <div class="form-group">
                  <label for="exampleInputEmail1">Название</label>
                  <input type="text" name="title" class="form-control" id="exampleInputEmail1" placeholder="" value="{{$category->title}}">
               </div>
            </div>
            <div class="col-md-6">
               <div class="form-group">
                  <img src="{{$category->getImageCategory()}}" alt="" class="img-responsive" width="200">
                  <label for="exampleInputFile">Банерная картинка</label>
                  <input type="file" id="exampleInputFile" name="image">

                  <p class="help-block">Какое-нибудь уведомление о форматах..</p>
               </div>
            </div>

            <div class="col-md-6">
               <div class="form-group">
                  <img src="{{$category->getMiniature()}}" alt="" class="img-responsive" width="200">
                  <label for="exampleInputFile">Миниатюра</label>
                  <input type="file" id="exampleInputFile" name="miniature">

                  <p class="help-block">Какое-нибудь уведомление о форматах..</p>
               </div>
            </div>
            <div class="col-md-12">
               <div class="form-group">
                  <label for="exampleInputEmail1">Описание банера</label>
                  <textarea name="content" id="summernote" cols="30" rows="10" class="form-control">{{$category->content}}</textarea>
               </div>
            </div>
         </div>
         <!-- /.box-body -->
         <div class="box-footer">
            <a href="{{route('categories.index')}}" class="btn btn-default">Назад</a>
            <button class="btn btn-warning pull-right">Изменить</button>
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