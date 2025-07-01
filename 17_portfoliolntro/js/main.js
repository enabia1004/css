// let ppp = document.getElementsByClassName(".webhour")
// console.log(ppp)
function time(){
    // DOM객체를 선택해서 변수에 저장
    let webh = document.querySelector(".webhour")
    let webm = document.querySelector(".webmin");
    let webs = document.querySelector(".websec");
    let webe = document.querySelector(".webmsec")
    console.log(webh,webm,webs,webe,)
    let yor = document.querySelector(".ye")
    let tor = document.querySelector(".te")
    let por = document.querySelector(".pe")

    // 날짜/시간 객체를 생성
    let date = new Date();
    console.log(date)

    
    let year = date.getFullYear();
    console.log(year);
    yor.innerHTML = year;
    let mon = date.getMonth() + 1;
    console.log(mon)
    tor.innerHTML = mon
    let da = date.getDate();
    console.log(da)
    por.innerHTML = da


    // 시간
    let hour = date.getHours();
    console.log(hour)
    let dhour = digit(hour)
    webh.innerHTML = dhour;
    // 분
    let min = date.getMinutes();
    console.log(min)
    let dmin = digit(min)
    webm.innerHTML = dmin;
    // 초
    let sec = date.getSeconds();
    console.log(sec)
    let dsec = digit(sec)
    webs.innerHTML = dsec;
    // 밀리초
    let msec = date.getMilliseconds();
    console.log(msec)
    // msec을 2자리로 할때
    let mmsec = Math.floor(msec/10)
    let dmsec = digit(mmsec)
    webe.innerHTML = dmsec;
    // 시간,분,초,밀리초 자리수를 두자리로 조정하는 함수
    function digit(x){
        if(x<10){
            return '0' + x
        }else{
            return x;
        }
    }
}
// 매 1초마다 time함수를 반복실행
setInterval(function(){
    time();
},100)





























