$(function(){
    $(".gnb>li").mouseenter(function(){
        $(this).find(".depth2").stop().fadeIn(300)
    });

    $(".gnb>li").mouseleave(function(){
        $(this).find(".depth2").stop().fadeOut(300)
    });

    const swiper = new Swiper('.swiper', {
  // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:true,

  //페이지버튼
  // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

  // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

  // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
})

$(function(){
  $(".content ul.list li").mouseenter(function(){
    let num = $(this).find("img").attr('src')
    console.log(num)
    // 치환
    let num2 = num.replace('_ot','_ov')
    console.log(num2)
    $(this).find('img').attr('src',num2)
  })

  $(".content ul.list li").mouseleave(function(){
    let num = $(this).find("img").attr('src')
    console.log(num)
    // 치환
    let num2 = num.replace('_ov','_ot')
    console.log(num2)
    $(this).find('img').attr('src',num2)
  })
})

$(function(){
  $(".btn_family").click(function(){
    $(".family_box .list").slideToggle()
    $(this).toggleClass("on")
  })
})

// 창의 크기를 조절하는 이벤트가 발생하면
// 슬라이드안에 pc버전 이미지파일을
// mobile 이미지 파일로 교체
// 창의 크기를 조절하는 이벤트
$(window).resize(function(){
  let num = $(this).width()
  console.log('창의사이즈',num)
  // 모바일 해상도
  if(num <= 767){
    // 모바일 기기
    // pc이미지에서 mobile이미지로 교체할때
    $(".swiper .swiper-wrapper .slide1 a img").attr('src','./images/m_visual_a.jpg')
    $(".swiper .swiper-wrapper .slide2 a img").attr('src','./images/m_visual_b.jpg')
    
    // 모바일이미지로 교체
    $(".content .list li:nth-child(1) a img").attr('src','./images/m_catalogue.jpg')
    $(".content .list li:nth-child(2) a img").attr('src','./images/m_video.jpg')
    $(".content .list li:nth-child(3) a img").attr('src','./images/m_product.jpg')
    $(".content .list li:nth-child(4) a img").attr('src','./images/m_athletic.jpg')
    $(".content .list li:nth-child(5) a img").attr('src','./images/m_camping.jpg')
  }else{
    // pc기기
    $(".swiper .swiper-wrapper .slide1 a img").attr('src','./images/visual_a.jpg')
    $(".swiper .swiper-wrapper .slide2 a img").attr('src','./images/visual_b.jpg')
  
    $(".content .list li:nth-child(1) a img").attr('src','./images/cata_ot.jpg')
    $(".content .list li:nth-child(2) a img").attr('src','./images/video_ot.jpg')
    $(".content .list li:nth-child(3) a img").attr('src','./images/product_ot.jpg')
    $(".content .list li:nth-child(4) a img").attr('src','./images/athletic_ot.jpg')
    $(".content .list li:nth-child(5) a img").attr('src','./images/camping_ot.jpg')
  }
})

// 창의 크기 조절하는 이벤트 없이 반응형
let num = $(this).width()
  console.log('창의사이즈',num)
  // 모바일 해상도
  if(num < 767){
    // 모바일 기기
    // pc이미지에서 mobile이미지로 교체할때
    $(".swiper .swiper-wrapper .swiper-slide a img").attr('src','./images/m_visual_a.jpg')
    $(".swiper .swiper-wrapper .swiper-slide a img").attr('src','./images/m_visual_b.jpg')
  
    $(".content .list li:nth-child(1) a img").attr('src','./images/m_catalogue.jpg')
    $(".content .list li:nth-child(2) a img").attr('src','./images/m_video.jpg')
    $(".content .list li:nth-child(3) a img").attr('src','./images/m_product.jpg')
    $(".content .list li:nth-child(4) a img").attr('src','./images/m_athletic.jpg')
    $(".content .list li:nth-child(5) a img").attr('src','./images/m_camping.jpg')
  }else{
    // pc기기
    $(".swiper .swiper-wrapper .swiper-slide a img").attr('src','./images/visual_a.jpg')
    $(".swiper .swiper-wrapper .swiper-slide a img").attr('src','./images/visual_b.jpg')

    $(".content .list li:nth-child(1) a img").attr('src','./images/cata_ot.jpg')
    $(".content .list li:nth-child(2) a img").attr('src','./images/video_ot.jpg')
    $(".content .list li:nth-child(3) a img").attr('src','./images/product_ot.jpg')
    $(".content .list li:nth-child(4) a img").attr('src','./images/athletic_ot.jpg')
    $(".content .list li:nth-child(5) a img").attr('src','./images/camping_ot.jpg')
  }

$(function(){
  // 햄버거버튼을 클릭하면 on클래스를 추가하고 
  $(".m_btn").click(function(){
    $('.cover').fadeIn();
    $(".m_menu_wrap").addClass('on')
    // 메인의 스크롤바 제거
    $('body,html').css({"overflow":"hidden"})
    // 모바일메뉴에 스크롤바를 보이게함
    $(".m_menu_wrap").css({'overflow':"auto"})
  })

  // cover영역을 클릭하면 모바일 메뉴on class제거
  $(".cover").click(function(){
    $(".m_menu_wrap").removeClass("on")
    $(".cover").fadeOut()
    // 메인에 스크롤바를 보이게함
    $('body,html').css({'overflow':'auto'})
  })
})

// depth2 2단 메뉴를 안보이게 숨김
$(".depth2").hide();

// 모바일 메뉴를 클릭하면 2단 메뉴가 보이게함
// 아코디언 메뉴 구현
$(function(){
  $(".m_menu_wrap ul.m_gnb>li>a").click(function(){
    $(this).next().slideToggle().parent().siblings().find(".depth2").slideUp();
  })
})






























