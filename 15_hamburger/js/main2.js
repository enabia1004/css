// 제이쿼리를 실행하기전 준비작업(바인딩)
$(document).ready(function(){
    // 클릭이벤트
    $(".box a").click(function(){
        $(".box a").toggleClass("on")
    })
})

