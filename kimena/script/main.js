$(function(){
    $('main').slick({
        autoplay:true,
        arrows:false,
        autoplayspeed:3000,
        fade:true
    });

    $(".notice ul li:first-child a").click(function(){
        $(".cover").show();
        $(".popup").show();
    })
    
    $(".close").click(function(){
        $(".popup").hide();
        $(".cover").hide();
    })

    $(".fm").click(function(){
        $(".famliy ul").toggle()
    })

    $("nav>ul>li").mouseenter(function(){
        $(".gnb").show();
    })

    $("nav>ul>li").mouseleave(function(){
        $(".gnb").hide();
    })
})