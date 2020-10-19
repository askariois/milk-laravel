@extends('admin.layout')

@section('content')

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
   <!-- Content Header (Page header) -->
   <section class="content-header">
      <div class="container">
         <div class="row justify-content-center">
            <div class="col-md-3">
               <h3>
                  Изменить категорию
               </h3>
            </div>
            <div class="col-md-3">
               <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item active">
                     <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">RU</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">KG</a>
                  </li>
               </ul>

            </div>
         </div>
      </div>
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

            <div class="tab-content" id="pills-tabContent">
               <div class="tab-pane fade active in" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <!-- Main content -->
                  <div class="col-md-12">
                     <div class="form-group">
                        <label for="exampleInputEmail1">Название</label>
                        <input type="text" name="title" class="form-control" id="exampleInputEmail1" placeholder="" value="{{$category->title}}">
                     </div>
                  </div>

                  <div class="col-md-12">
                     <div class="form-group">
                        <label for="exampleInputEmail1">Описание банера</label>
                        <textarea name="content" id="summernote" cols="30" rows="10" class="form-control">{{$category->content}}</textarea>
                     </div>
                  </div>
                  <!-- /.content -->
               </div>
               <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <!-- Main content -->
                  <div class="col-md-12">
                     <div class="form-group">
                        <label for="exampleInputEmail1">Название</label>
                        <input type="text" name="title_kg" class="form-control" id="exampleInputEmail1" placeholder="" value="{{$category->title_kg}}">
                     </div>
                  </div>

                  <div class="col-md-12">
                     <div class="form-group">
                        <label for="exampleInputEmail1">Описание банера</label>
                        <textarea name="content_kg" id="summernote_kg" cols="30" rows="10" class="form-control">{{$category->content_kg}}</textarea>
                     </div>
                  </div>
                  <!-- /.content -->
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