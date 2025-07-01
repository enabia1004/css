$(function(){
    // product2를 숨김처리
    $(".product_wrap .product2").hide();
    // tap li를 클릭하면
    $(".tap li").click(function(){
        $(".tap li").removeClass("on")
        $(this).addClass("on")
        // 몇번째를 클릭했는지 열기
        let num = $(this).index();
        console.log(num)
        $(".product_wrap .product").hide();
        $(".product_wrap .product").eq(num).show()
    })


})