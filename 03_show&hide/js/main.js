$(function(){
//제이쿼리 프로그램 설명
// 클릭이벤트
$("#btn1").click(function(){
    //클릭했을때 명령
    $(".box div:first-child").hide();
}) 
// btn2를 클릭하면 빨강박스를 다시 보이기 이벤트
$("#btn2").click(function(){
    $(".box div:first-child").show();
})

// 토글버튼을 클릭하면 노랑박스를 숨김/보이기
$("#btn3").click(function(){
    $(".box div:nth-child(3)").toggle();
})
$("#btn4").click(function(){
    $(".box div:nth-child(4)").hide();
})
$("#btn5").click(function(){
    $(".box div:nth-child(4)").show();
})

})