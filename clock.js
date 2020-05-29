let clockFunction = function(){
    let date = new Date();
    let hour = date.getHours();
    let miniute = date.getMinutes();
    let second = date.getSeconds();
    
    if(hour<10) hour = '0'+hour;
    if(miniute<10) miniute = '0'+miniute;
    if(second<10) second = '0'+second;
    
    let timenow = hour + ':' + miniute + ':' +second;
    
    let timeshown = document.querySelector('#w_clock h1');
    timeshown.textContent = timenow; 
}

setInterval(clockFunction, 1000);