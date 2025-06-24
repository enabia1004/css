$(function(){
    // 마우스를 header에 hover하면 header높이를 400px로 늘리기
    $("header").mouseenter(function(){
        $("header").stop().animate({'height':'400px'})
    })





    // 마우스를 header에 hover하면 header높이를 80px로 늘리기
    $("header").mouseleave(function(){
        $("header").stop().animate({'height':'80px'})
    }) 


    // 클릭하면
    $("header").click(function(){

    })
})



















