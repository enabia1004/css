$(function(){
    $(".gnb>li").mouseenter(function(){
        $(this).find(".depth2").stop().fadeIn(300)
    })

    $(".gnb>li").mouseleave(function(){
        $(this).find(".depth2").stop().fadeOut(300)
    })

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