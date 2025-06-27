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

    // $(".gnb").mouseenter(function(){
    //     $(".depth2").show()
    // })

    // $(".gnb").mouseleave(function(){
    //     $(".depth2").hide()
    // })
})