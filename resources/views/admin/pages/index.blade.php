@extends('admin.layout')

@section('content')



<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
   <!-- Content Header (Page header) -->
   <section class="content-header">
      <h1>
         Страницы
      </h1>

   </section>

   <!-- Main content -->
   <section class="content">

      <!-- Default box -->
      <div class="box">
         <div class="box-header">
            @include('admin.error')
         </div>
         <!-- /.box-header -->
         <div class="box-body">
            <div class="form-group">
               <a href="{{route('posts.create')}}" class="btn btn-success">Добавить страницу</a>
            </div>
            <table id="example1" class="table table-bordered table-striped">
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>Жирность</th>
                     <th>Категория</th>

                     <th>Картинка</th>
                     <th>Действия</th>
                  </tr>
               </thead>

            </table>
         </div>
         <!-- /.box-body -->
      </div>
      <!-- /.box -->
   </section>
   <!-- /.content -->
</div>
<!-- /.content-wrapper -->



@endsection