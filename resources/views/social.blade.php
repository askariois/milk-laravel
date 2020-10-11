@if(isset($settings))
@foreach($settings as $setting)
<a href="{{$setting->link_f}}" target="_blank"> <img src="/img/face.svg" alt=""> </a>
<a href="{{$setting->link_insta}}" target="_blank"> <img src="/img/insta.svg" alt=""> </a>
@endforeach
@endif