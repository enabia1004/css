$(function(){
$(".list").slick({
    autoplay:true,
    // 한화면에 스크롤보일 개수
    slidesToShow:2,
    // 스크롤할때 얼마나 나가는지 설정
    slidesToScroll:1,
    // 좌우버튼숨기기
    arrows:false,
    // 페이지 버튼 보이기
    dots:true
});

// $(".btn_pause").click(function(){
//     $(".btn_pause").toggleClass("on")
// })

// addClass -> class를 프로그램적으로 자동으로 추가
// remove -> class를 프로그램적으로 자동으로 삭제
// switch 기법
let sw = true;
$(".btn_pause").click(function(){
    if(sw==true){
        $(".btn_pause").addClass("on")
        // 슬라이드 일시정지 명령코드
        $(".list").slick("slickPause")
        sw = false;
    }else{
        $(".btn_pause").removeClass('on');
        // 슬라이드를 재생시키는 코드
        $(".list").slick("slickPlay");
        sw = true;
    }
})
});
