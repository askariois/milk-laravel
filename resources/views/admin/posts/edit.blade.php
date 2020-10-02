@extends('admin.layout')

@section('content')


<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">

    <h1>
      Изменить статью
      <small>приятные слова..</small>
    </h1>
  </section>

  <!-- Main content -->
  <section class="content">
    {!! Form::open(['route' => ['posts.update', $post->id ] , 'files' => true , 'method' => 'put']) !!}
    <!-- Default box -->
    <div class="box">
      <div class="box-header with-border">
        <h3 class="box-title">Обновляем статью</h3>
        @include('admin.error')
      </div>
      <div class="box-body">
        <div class="col-md-6">
          <div class="form-group">
            <label for="exampleInputEmail1">Название</label>
            <input type="text" class="form-control" name="title" value="{{$post->title}}" id="exampleInputEmail1" placeholder="" value="Как изучить Laravel создавая Блог?">
          </div>

          <div class="form-group">
            <img src="{{$post->getImage()}}" alt="" class="img-responsive" width="200">
            <label for="exampleInputFile">Лицевая картинка</label>
            <input type="file" id="exampleInputFile" name="image">

            <p class="help-block">Какое-нибудь уведомление о форматах..</p>
          </div>
          <div class="form-group">
            <label>Категория</label>
            {!! Form::select('category_id',
            $categories,
            $post->category->id,
            ['class' => 'form-control select2'])
            !!}
          </div>


          <!-- Date -->
          <div class="form-group">
            <label>Дата:</label>

            <div class="input-group date">
              <div class="input-group-addon">
                <i class="fa fa-calendar"></i>
              </div>
              <input type="text" class="form-control pull-right" id="datepicker" name="date" value="{{$post->date}}">
            </div>
            <!-- /.input group -->
          </div>

          <div class="form-group">
            <label>
              <input type="checkbox" class="minimal">
            </label>
            <label>
              Черновик
            </label>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label for="exampleInputEmail1">Полный текст</label>
            <textarea name="content" id="" cols="30" rows="10" class="form-control">{{$post->content}} </textarea>
          </div>
        </div>
      </div>
      <!-- /.box-body -->
      <div class="box-footer">
        <button class="btn btn-default">Назад</button>
        <button class="btn btn-warning pull-right">Изменить</button>
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