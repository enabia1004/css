$(function(){
    $(".product2").hide();
    $("ul.menu li").click(function(){
        // 선택한 요소가 몇번째가 선택
        let num = $(this).index()
        console.log(num);
        $(".list").hide();
        $(".list").eq(num).show()
    })
})