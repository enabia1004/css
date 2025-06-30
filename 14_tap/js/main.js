$(function(){
            $(".section .inner .right .wrap .menu li").click(function(){
                $(".section .inner .right .wrap .menu li").removeClass("on")
                $(this).addClass("on")
            })
        })