@extends('admin.layout')

@section('content')

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
   <!-- Content Header (Page header) -->
   <section class="content-header">
      <h1>
         Категории
      </h1>
   </section>

   <!-- Main content -->
   <section class="content">

      <!-- Default box -->
      <div class="box">
         @foreach($settings as $setting)
         <div class="box-body">
            <div class="col-md-6">
               <div class="form-group">
                  <img src="{{$setting->getLogo()}}" alt="" class="img-responsive" width="200">
               </div>
            </div>

            <div class="col-md-6">
               <div class="form-group">
                  <img src="{{$setting->getLogoMob()}}" alt="" class="img-responsive" width="25">
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
         <div class="box-footer">
            <a href="{{route('settings.edit' , $setting->id)}}" class="btn btn-warning pull-right"> Изменить </a>
         </div>

         </td>

         </tr>
         @endforeach
      </div>
      <!-- /.box -->

   </section>
   <!-- /.content -->
</div>
<!-- /.content-wrapper -->

@endsection