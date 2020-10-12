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
               <a href="{{route('pages.create')}}" class="btn btn-success">Добавить страницу</a>
            </div>
            <table id="example1" class="table table-bordered table-striped">
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>Заголовок</th>
                     <th>Действия</th>
                  </tr>
               </thead>
               <tbody>
                  @foreach($pages as $page)
                  <tr>
                     <td>{{$page->id}}</td>
                     <td>{{$page->title}}</td>
                     <td><a href="{{route('pages.edit' , $page->id)}}" class="fa fa-pencil"></a>
                        {!! Form::open(['route' => ['pages.destroy',$page->id], 'method'=>'delete' ]) !!}
                        <button onclick="return confirm('are you sure ?')" type="submit" class="delete">
                           <i class="fa fa-remove"></i>
                        </button>
                        {!! Form::close() !!}
                     </td>

                  </tr>
                  @endforeach
                  </tfoot>
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