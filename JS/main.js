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
let text = $('.menu-trigger p');

if(click=="about"){
  $(window).scrollTop(profill);
  $(remove).removeClass('is-active');
  $(text).text('MENU');
}
else if (click=="skills") {
  $(window).scrollTop(skill);
  $(remove).removeClass('is-active');
  $(text).text('MENU');

}
else if (click=="service") {
  $(window).scrollTop(services);
  $(remove).removeClass('is-active');
  $(text).text('MENU');

}
else if (click=="works") {
  $(window).scrollTop(works);
  $(remove).removeClass('is-active');
  $(text).text('MENU');

}
else if (click=="contact") {
  $(window).scrollTop(contacts);
  $(remove).removeClass('is-active');
  $(text).text('MENU');
}
});

//ハンバーガーメニュー
$('.menu-trigger').on('click',function(){
  $('.menu-trigger').toggleClass('is-active');
  $('.header-list').toggleClass('is-active');

  let header=$('.menu-trigger').hasClass('is-active');
  if(header){
    $('.menu-trigger p').text('CLOSE');
  }else{
    $('.menu-trigger p').text('MENU');

  }
});

$('.work-show').on('click',function(){
  $('.work-show').toggleClass('active');
  $('.modal,.close-modal').toggleClass('active');
});

$('.close-modal').on('click',function(){
  let show_down =$('.work-show,.modal,.close-modal');
  show_down.removeClass('active');
});

$('.keireki-btn').on('click',function(){
  $('.keireki').toggleClass('active');
});
$('.keireki').on('click',function(){
  $('.keireki').removeClass('active');

});


//コンテンツを表示
$(window).scroll(function (){
  console.log($(this).scrollTop());//スクロールの高さを表示
    $('.fadein').each(function(){
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > position - windowHeight + 300){
          $(this).addClass('active');
        }
    });
});

//ページトップ
 var topBtn = $('#page-top');   
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

//WorkSLIDER
//スマホのみ
  function sliderSetting(){

    var width = $(window).width();

    if(width <= 798){
        $('.work-image').not('.slick-initialized').slick({
          centerPadding:'0%',
          slidesToShow:1,
          slideToScroll:1,
          arrows:true,
          autoplay:true,
          dots:true,
          speed:1500,
          easing:'swing',
          centerMode:true,
          infinite:true,
         prevArrow:'<div class="slide-btn prev-btn"></div>',
         nextArrow:'<div class="slide-btn next-btn"></div>',
        });
    } else {
        $('.slide.slick-initialized').slick('unslick');
    }
}

sliderSetting();

$(window).resize( function() {
    sliderSetting();
});


  //ローディング
    $(window).on("load",function(){
    setTimeout(function(){
      $('.loader').fadeOut();
    },300)
  });
  });
