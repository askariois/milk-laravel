@extends('admin.layout')

@section('content')


<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">

    <h1>
      Изменить продукт
    </h1>
  </section>

  <!-- Main content -->
  <section class="content">
    {!! Form::open(['route' => ['posts.update', $post->id ] , 'files' => true , 'method' => 'put']) !!}

    <div class="box">
      <div class="box-header with-border">
        @include('admin.error')
      </div>
      <div class="box-body">
        <div class="col-md-6">
          <div class="form-group">
            <label for="exampleInputEmail1">Название продукта</label>
            <input type="text" name="title" class="form-control" id="exampleInputEmail1" placeholder="" value="{{$post->title}}">
          </div>

        </div>

        <div class="col-md-6">
          <div class="form-group">
            <img src="{{$post->getImage()}}" class="img-responsive" width="200" />
            <label for="exampleInputFile">Банерная картинка</label>
            <input type="file" id="exampleInputFile" name="image">

            <p class="help-block">Какое-нибудь уведомление о форматах..</p>
          </div>
        </div>
        <div class="form-group">
          <label>Категория</label>
          {!! Form::select('category_id',
          $categories,
          null,
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
            <input type="text" name="date" value="{{$post->date}}" class="form-control pull-right" id="datepicker">
          </div>
          <!-- /.input group -->
        </div>
        <!-- checkbox -->
        <div class="form-group">
          <label>
            <input type="checkbox" class="minimal" name="status">
          </label>
          <label>
            Скрыть
          </label>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="exampleInputEmail1">Характеристика</label>
          <textarea name="content" id="summernote" cols="30" rows="10" class="form-control">
          {{$post->content}}</textarea>
        </div>
      </div>

      <div class="col-md-6">
        <div class="form-group">
          <label for="exampleInputEmail1">Температура хранения:</label>
          <input type="text" name="product_temp" class="form-control" id="exampleInputEmail1" placeholder="" value="{{$post->product_temp}}">
        </div>

      </div>


      <div class="col-md-3">
        <div class="form-group">
          <label for="exampleInputEmail1">Срок годности:</label>
          <input type="text" name="product_srok" class="form-control" id="exampleInputEmail1" placeholder="" value="{{$post->product_srok}}">
        </div>

      </div>

      <div class="col-md-3">
        <div class="form-group">
          <label for="exampleInputEmail1">Масса:</label>
          <input type="text" name="product_massa" class="form-control" id="exampleInputEmail1" placeholder="" value="{{$post->product_massa}}">
        </div>

      </div>
      <!-- /.box-body -->
      <div class="box-footer">
        <a href="{{route('posts.index')}}" class="btn btn-default">Назад</a>
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