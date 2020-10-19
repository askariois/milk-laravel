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
                  Изменить страницу
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



   <div class="tab-content" id="pills-tabContent">
      <div class="tab-pane fade active in" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
         <!-- Main content -->
         <section class="content">
            {!! Form::open(['route' => ['pages.update',$page->id], 'method'=>'put' , 'files' => true]) !!}

            <!-- Default box -->
            <div class="box">
               <div class="box-header with-border">
                  @include('admin.error')
               </div>
               <div class="box-body">
                  <div class="col-md-12">
                     <div class="form-group">
                        <label for="exampleInputEmail1">Заголовок страницы</label>
                        <input type="text" name="title" class="form-control" id="exampleInputEmail1" placeholder="" value="{{$page->title}}">
                     </div>

                  </div>


               </div>
               <div class="col-md-12">
                  <div class="form-group">
                     <label for="exampleInputEmail1">Контент</label>
                     <textarea name="content" id="summernote" cols="30" rows="10" class="form-control">{{$page->content}}</textarea>
                  </div>
               </div>
            </div>
            <!-- /.box-body -->
            <div class="box-footer">
               <a href="{{route('pages.index')}}" class="btn btn-default">Назад</a>
               <button class="btn btn-warning pull-right">Изменить</button>
            </div>
            <!-- /.box-footer-->

            <!-- /.box -->
         </section>
         <!-- /.content -->
      </div>
      <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
         <!-- Main content -->
         <section class="content">

            <!-- Default box -->
            <div class="box">
               <div class="box-header with-border">
                  @include('admin.error')
               </div>
               <div class="box-body">
                  <div class="col-md-12">
                     <div class="form-group">
                        <label for="exampleInputEmail1">Заголовок страницы</label>
                        <input type="text" name="title_kg" class="form-control" id="exampleInputEmail1" placeholder="" value="{{$page->title_kg}}">
                     </div>

                  </div>


               </div>
               <div class="col-md-12">
                  <div class="form-group">
                     <label for="exampleInputEmail1">Контент</label>
                     <textarea name="content_kg" id="summernote_kg" cols="30" rows="10" class="form-control">{{$page->content_kg}}</textarea>
                  </div>
               </div>
            </div>
            <!-- /.box-body -->
            <div class="box-footer">
               <a href="{{route('pages.index')}}" class="btn btn-default">Назад</a>
               <button class="btn btn-warning pull-right">Изменить</button>
            </div>
            <!-- /.box-footer-->

            <!-- /.box -->
            {!! Form::close() !!}
         </section>
         <!-- /.content -->
      </div>
   </div>

</div>
<!-- /.content-wrapper -->

@endsection