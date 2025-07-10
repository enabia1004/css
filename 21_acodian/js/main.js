$(function(){
    // 주메뉴를 클릭하면 2단메뉴가 열림
    $(".box>ul>li>a").click(function(){
        $(this).next().slideToggle().parent().siblings().find(".depth2").slideUp();
    })





})