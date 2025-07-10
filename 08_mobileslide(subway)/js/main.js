$(function(){
    const swiper = new Swiper('.swiper', {
  // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:{
        delay:3000,
    },

  // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    // 페이지버튼을 숫자로 표시
    type:'fraction',
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


// 배너슬라이드 slide슬라이드
$('.bannerslide').slick({
    // 자동실행
    autoplay:true,
    // 한화면에 보여줄 슬라이드갯수
    slidesToShow:2,
    // 좌우버튼 숨기기
    arrows:false,
    // 페이지버튼 보이기
    dots:true
  });

  // 모바일 메뉴m_gnb li a를 클릭하면
  $(".m_gnb>ul>li>a").click(function(){
    $(this).next().slideToggle().parent().siblings().find(".depth2").slideUp();
  })

  // 햄버거 버튼을 클릭하면 m_side_wrap을 left -100% 에서 left 0
  $(".m_btn").click(function(){
    $(".cover").fadeIn()
    $(".m_side_wrap").animate({"left":0},300)
  })

  // x버튼 m_close를 클릭하면 m_side_wrap left:-100%
  $(".m_close").click(function(){
    $(".m_side_wrap").animate({"left":'-100%'},300)
    $(".cover").fadeOut()
  })
})