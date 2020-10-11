@extends('admin.layout')

@section('content')

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
   <!-- Content Header (Page header) -->
   <section class="content-header">
      <h1>
         Пользователи
      </h1>
   </section>

   <!-- Main content -->
   <section class="content">

      <!-- Default box -->
      <div class="box">
         <!-- /.box-header -->
         <div class="box-body">
            <div class="form-group">
               <a href="{{route('users.create')}}" class="btn btn-success">Добавить пользователя</a>
            </div>
            <table id="example1" class="table table-bordered table-striped">
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>Имя</th>
                     <th>E-mail</th>
                     <th>Аватар</th>
                     <th>Действия</th>
                  </tr>
               </thead>
               <tbody>
                  @foreach($users as $user)
                  <tr>
                     <td>{{$user->id}}</td>
                     <td>{{$user->name}}</td>
                     <td>{{$user->email}}</td>
                     <td>
                        <img src="{{$user->getImage()}}" alt="" class="img-responsive" width="150">
                     </td>
                     <td><a href="{{route('users.edit', $user->id)}}" class="fa fa-pencil"></a>

                        {!! Form::open(['route' => ['users.destroy',$user->id], 'method'=>'delete' ]) !!}
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