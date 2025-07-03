$(function(){
    // fadeout버튼을 클릭하면 빨강박스가 점점(부드럽게) 사라지는 함수 => hide()
    $("#btn1").click(function(){
        $(".box1 li:first-child").fadeOut();
        // $(".box1 li:first-child").hide();
    })

    // fadeInj 버튼을 클릭하면 빨강박스가 점점 보이게 함수 -> show()
    $("#btn2").click(function(){
        $(".box1 li:first-child").fadeIn();
    })

    // fadetoggle을 클릭하면 초록색 박스를 부드럽게보임/부드럽게사라짐
    $(".btn1").click(function(){
        $(".box1 li:last-child").fadeToggle();
    })

    // slideup 버튼을 누르면 높이 200 -> 0 으로 애니메이트
    $("#btn3").click(function(){
        $(".box2 li:first-child").slideUp();
    })
    // slideup 버튼을 누르면 높이 200 -> 0 으로 애니메이트
    $("#btn4").click(function(){
        $(".box2 li:first-child").slideDown();
    })

    $(".btn2").click(function(){
        $(".box2 li:last-child").slideToggle();
    })
})