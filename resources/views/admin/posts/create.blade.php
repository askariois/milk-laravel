@extends('admin.layout')

@section('content')


<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <h3>
            Добавить продукт
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
    {!! Form::open(['route' => 'posts.store', 'files' => true]) !!}
    <!-- Default box -->
    <div class="box">
      <div class="box-header with-border">
        <h3 class="box-title">Добавляем продукт</h3>
        @include('admin.error')
      </div>
      <div class="box-body">
        <div class="col-md-6">
          <div class="form-group">
            <label for="exampleInputEmail1">Название продукта</label>
            <input type="text" name="title" class="form-control" id="exampleInputEmail1" placeholder="" value="{{old('title')}}">
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
              <input type="text" name="date" value="{{old('date')}}" class="form-control pull-right" id="datepicker">
            </div>
            <!-- /.input group -->
          </div>
        </div>

        <div class="col-md-6">
          <div class="form-group">
            <label for="exampleInputFile">Банерная картинка</label>
            <input type="file" id="exampleInputFile" name="image">

            <p class="help-block">Какое-нибудь уведомление о форматах..</p>
          </div>
        </div>


        <!-- checkbox -->
        <!-- <div class="form-group">
          <label>
            <input type="checkbox" class="minimal" name="status">
          </label>
          <label>
            Скрыть
          </label>
        </div> -->
      </div>


      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade active in" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          <!-- Main content -->
          <div class="col-md-12">
            <div class="form-group">
              <label for="exampleInputEmail1">Характеристика</label>
              <textarea name="content" id="summernote" cols="30" rows="10" class="form-control"></textarea>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputEmail1">Температура хранения:</label>
              <input type="text" name="product_temp" class="form-control" id="exampleInputEmail1" placeholder="" value="{{old('product_temp')}}">
            </div>

          </div>

          <div class="col-md-3">
            <div class="form-group">
              <label for="exampleInputEmail1">Срок годности:</label>
              <input type="text" name="product_srok" class="form-control" id="exampleInputEmail1" placeholder="" value="{{old('product_srok')}}">
            </div>

          </div>

          <div class="col-md-3">
            <div class="form-group">
              <label for="exampleInputEmail1">Масса:</label>
              <input type="text" name="product_massa" class="form-control" id="exampleInputEmail1" placeholder="" value="{{old('product_massa')}}">
            </div>

          </div>
          <!-- /.content -->
        </div>
        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
          <!-- Main content -->
          <div class="col-md-12">
            <div class="form-group">
              <label for="exampleInputEmail1">Мазмун</label>
              <textarea name="content_kg" id="summernote_kg" cols="30" rows="10" class="form-control"></textarea>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputEmail1">Сактоо температурасы:</label>
              <input type="text" name="product_temp_kg" class="form-control" id="exampleInputEmail1" placeholder="" value="{{old('product_temp_kg')}}">
            </div>

          </div>

          <div class="col-md-3">
            <div class="form-group">
              <label for="exampleInputEmail1">Жарактуулук мөөнөтү:</label>
              <input type="text" name="product_srok_kg" class="form-control" id="exampleInputEmail1" placeholder="" value="{{old('product_srok_kg')}}">
            </div>

          </div>

          <div class="col-md-3">
            <div class="form-group">
              <label for="exampleInputEmail1">Таза салмагы:</label>
              <input type="text" name="product_massa_kg" class="form-control" id="exampleInputEmail1" placeholder="" value="{{old('product_massa_kg')}}">
            </div>

          </div>
          <!-- /.content -->
        </div>
      </div>
    </div>
    <!-- /.box-body -->
    <div class="box-footer">
      <a href="{{route('posts.index')}}" class="btn btn-default">Назад</a>
      <button class="btn btn-success pull-right">Добавить</button>
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