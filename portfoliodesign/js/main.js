let header = document.querySelector("header")
console.log(header)

$(function(){
    gsap.timeline({
    scrollTrigger:{
        scrub:2,
        trigger:".mywork",
        start:"100% 70%",
        end:"0% 100%",
        // markers:true
    }
})
.to(".mywork .left",{x:'-100%',ease:'none',duration:5},0)
.to(".mywork .right",{x:'100%',ease:'none',duration:5},0)

gsap.utils.toArray(".section").forEach((section,i)=>{
    ScrollTrigger.create({
        trigger:section,
        start:"0% 0%",
        // 상단에 고정
        pin:true,
        pinSpacing:false
    })
})

// 요소 상단에 snap 처리
ScrollTrigger.create({
        snap : 1 / (section.length - 1)
    })

gsap.timeline({
    scrollTrigger:{
        scrub:2,
        trigger:"#joineg .txtbox",
        start:"0% 60%",
        end:"100% 20%",
        // markers:true
    }
})
.fromTo("#joineg .txtbox .mask span",{backgroundSize:'0% 100%'},{backgroundSize:'100% 100%'},0)
















})