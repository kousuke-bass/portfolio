$(function(){
  //特定の要素に飛ばす
  const profill =$('.profill').offset().top;
  const skills =$('.webskill').offset().top;
  const service =$('.service').offset().top;
  const works =$('.work').offset().top;
  const contact =$('.contact').offset().top;
  $('#about').on('click',function(){
    $(window).scrollTop(profill);
    $('.header-list,.menu-trigger').removeClass('is-active');

  });
  $('#skills').on('click',function(){
    $(window).scrollTop(skills);
    $('.header-list,.menu-trigger').removeClass('is-active');

  });
  $('#service').on('click',function(){
    $(window).scrollTop(service);
    $('.header-list,.menu-trigger').removeClass('is-active');

  });
  $('#works').on('click',function(){
    $(window).scrollTop(works);
    $('.header-list,.menu-trigger').removeClass('is-active');

  });
  $('#contact').on('click',function(){
    $(window).scrollTop(contact);
    $('.header-list,.menu-trigger').removeClass('is-active');

  });

$('.menu-trigger').on('click',function(){
  $('.menu-trigger').toggleClass('is-active');
  $('.header-list').toggleClass('is-active');

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
  $('.work-image').slick({
    arrows:true,
    autoplay:true,
    dots:true,
    speed:1500,
    easing:'swing',
    centerMode:true,
    centerPadding:'10%',
    infinite:true,
    slidesToShow:3,
  slidesToScroll:1,
   prevArrow:'<div class="slide-btn prev-btn"></div>',
   nextArrow:'<div class="slide-btn next-btn"></div>',

   responsive:[{
     breakpoint:798,
     settings:{
       centerPadding:'0%',
       slidesToShow:1,
       slideToScroll:1,
     }
   }
 ]
  });
});
