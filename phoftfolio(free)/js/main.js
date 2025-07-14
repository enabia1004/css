new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    navigation: false,
    navigationPosition: 'right',
});
let header = document.querySelector("header")
console.log(header)
let mbtn = document.querySelector(".m_btn")
console.log(mbtn)
mbtn.addEventListener("click",function(){
    header.classList.toggle("on")
})




























