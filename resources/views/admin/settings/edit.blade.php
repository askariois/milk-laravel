@extends('admin.layout')

@section('content')


<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
   <!-- Content Header (Page header) -->
   <section class="content-header">
      <h1>
         Настройка сайта
      </h1>
   </section>

   <!-- Main content -->
   <section class="content">
      {!! Form::open(['route' => ['settings.update' , $setting->id], 'method'=>'put', 'files'=>true]) !!}
      <!-- Default box -->
      <div class="box">
         <div class="box-body">
            <div class="col-md-6">
               <div class="form-group">
                  <img src="{{$setting->getLogo()}}" alt="" class="img-responsive" width="200">
                  <label for="exampleInputFile">Логотип</label>
                  <input type="file" id="exampleInputFile" name="logo">

                  <p class="help-block">jpg , png , gif</p>
               </div>
            </div>

            <div class="col-md-6">
               <div class="form-group">
                  <img src="{{$setting->getLogoMob()}}" alt="" class="img-responsive" width="25">
                  <label for="exampleInputFile">Логотип для FAVICON</label>
                  <input type="file" id="exampleInputFile" name="logo_m">

                  <p class="help-block">jpg , png ,gif</p>
               </div>
            </div>
         </div>
         <div class="box-body">
            <div class="col-md-6">
               <div class="form-group">
                  <label for="exampleInputEmail1">Ссылка для facebook</label>
                  <input type="text" name="link_f" class="form-control" id="exampleInputEmail1" placeholder="" value="{{$setting->link_f}}">
               </div>

            </div>

            <div class="col-md-6">
               <div class="form-group">
                  <label for="exampleInputEmail1">Ссылка для instagramm</label>
                  <input type="text" name="link_insta" class="form-control" id="exampleInputEmail1" placeholder="" value="{{$setting->link_insta}}">
               </div>

            </div>
         </div>
      </div>
      <!-- /.box-body -->
      <div class="box-footer">
         <button class="btn btn-success pull-right">Обновить</button>
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