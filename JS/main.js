$(function(){
  //特定の要素に飛ばす
  const profill =$('.profill').offset().top;
  const skill=$('.webskill').offset().top;
  const services =$('.service').offset().top;
  const works =$('.work').offset().top;
  const contacts =$('.contact').offset().top;

//格メニュー項目押した時の、処理
$('.header-list li').on('click',function(){
let click=$(this).attr('id');
let remove = $('.header-list,.menu-trigger');

if(click=="about"){
  $(window).scrollTop(profill);
  $(remove).removeClass('is-active');
}
else if (click=="skills") {
  $(window).scrollTop(skill);
  $(remove).removeClass('is-active');

}
else if (click=="service") {
  $(window).scrollTop(services);
  $(remove).removeClass('is-active');

}
else if (click=="works") {
  $(window).scrollTop(works);
  $(remove).removeClass('is-active');

}
else if (click=="contact") {
  $(window).scrollTop(contacts);
  $(remove).removeClass('is-active');
}
});

//ハンバーガーメニュー
$('.menu-trigger').on('click',function(){
  $('.menu-trigger').toggleClass('is-active');
  $('.header-list').toggleClass('is-active');
});

$('.work-show').on('click',function(){
  $('.work-show').toggleClass('active');
  $('.modal,.close-modal').toggleClass('active');
});

$('.close-modal').on('click',function(){
  let show_down =$('.work-show,.modal,.close-modal');
  show_down.removeClass('active');
});
