$(function(){
    $(".tab_wrap .tab2").hide();
    $(".txt li").click(function(){
        $(".txt li").removeClass("on")
        $(this).addClass("on")

        let num = $(this).index();
        console.log(num)
        $(".tab_wrap .tab").hide();
        $(".tab_wrap .tab").eq(num).show()
    })
})