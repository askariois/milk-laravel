           <!-- sidebar menu: : style can be found in sidebar.less -->
           <ul class="sidebar-menu">
              <li class="treeview">
                 <a href="/admin">
                    <i class="fa fa-dashboard"></i> <span>Админ-панель</span>
                 </a>
              </li>
              <li><a href="{{route('posts.index')}}"><i class="fa  fa-product-hunt"></i> <span>Продукты</span></a></li>
              <li><a href="{{route('categories.index')}}"><i class="fa fa-list-ul"></i> <span>Категории</span></a></li>
              <li><a href="#"><i class="fa  fa-sticky-note-o"></i> <span>Страницы</span></a></li>
              <li><a href="{{route('users.index')}}"><i class="fa fa-users"></i> <span>Пользователи</span></a></li>
           </ul>