$(function(){
    $(".box .gix ul li").mouseenter(function(){
        let num = $(this).index()
        console.log(num)
        let url = $(this).find('img').attr('src')
        console.log(url)

        $(".box big img").attr({'src':url});
    })







})