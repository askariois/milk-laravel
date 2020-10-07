<!DOCTYPE html>
<html>

<head>
   <meta charset="utf-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <title>Веселый молочник административная панель</title>
   <!-- Tell the browser to be responsive to screen width -->
   <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
   <!-- Bootstrap 3.3.6 -->
   <link rel="stylesheet" href="/css/admin.css">
   <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css" rel="stylesheet">
   <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
</head>

<body class="hold-transition skin-blue sidebar-mini">
   <!-- Site wrapper -->
   <div class="wrapper">

      <header class="main-header">
         <!-- Logo -->
         <a href="../../index2.html" class="logo">
            <!-- mini logo for sidebar mini 50x50 pixels -->
            <span class="logo-mini"><b>В</b>М</span>
            <!-- logo for regular state and mobile devices -->
            <span class="logo-lg"><b>Веселый</b>молочник</span>
         </a>
         <!-- Header Navbar: style can be found in header.less -->
         <nav class="navbar navbar-static-top">
            <!-- Sidebar toggle button-->
            <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
               <span class="sr-only">Toggle navigation</span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
            </a>


         </nav>
      </header>

      <!-- =============================================== -->

      <!-- Left side column. contains the sidebar -->
      <aside class="main-sidebar">
         <!-- sidebar: style can be found in sidebar.less -->
         <section class="sidebar">
            <!-- Sidebar user panel -->
            <div class="user-panel">
               <div class="pull-left image">
                  <img src="/img/user2-160x160.jpg" class="img-circle" alt="User Image">
               </div>
               <div class="pull-left info">
                  <p>Alexander Pierce</p>
                  <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
               </div>
            </div>
            <!-- search form -->
            <form action="#" method="get" class="sidebar-form">
               <div class="input-group">
                  <input type="text" name="q" class="form-control" placeholder="Поиск...">
                  <span class="input-group-btn">
                     <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                     </button>
                  </span>
               </div>
            </form>
            <!-- /.search form -->
            @include('admin.sidebar')
         </section>
         <!-- /.sidebar -->
      </aside>

      <!-- =============================================== -->

      @yield('content')

   </div>
   <!-- ./wrapper -->
   <script src="/js/admin.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js"></script>
</body>

</html>