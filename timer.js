const startbtn2 = document.querySelector('#start2');
const resetbtn2 = document.querySelector('#reset2');

let totalsec = 0;

let timerFunction = function() {
    totalsec = totalsec - 1;

    let minute = Math.floor(totalsec /60);
    let second = totalsec % 60;

    if(minute<10) minute = '0'+minute;
    if(second<10) second = '0'+second;

    let timenow = minute + ':' + second;
    let timeshown = document.querySelector('#w_timer h1');
    timeshown.textContent = timenow;

}

var c, d;

startbtn2.onclick = function (){
    if(totalsec === 0){
        let minutetimer = Number(document.querySelector('#m_timer').value);
        let secondtimer = Number(document.querySelector('#s_timer').value);
        totalsec = minutetimer * 60  + secondtimer;
    }
    document.querySelector('#m_timer').value = '';
    document.querySelector('#s_timer').value = '';

    let curState = document.querySelector('#start2').textContent;

    if(curState === 'start' && totalsec !==0){
        document.querySelector('#start2').textContent = 'stop';
        c = setInterval(timerFunction, 1000);
        d = setInterval(function(){
            if(totalsec === 0) clearInterval(c);
        },1000);
    } else {
        document.querySelector('#start2').textContent = 'start';
        clearInterval(c); clearInterval(d);
    }
}

resetbtn2.onclick = function(){
    totalsec = 0;
    let timeshown = document.querySelector('#w_timer h1');
    timeshown.textContent = '00:00';
}