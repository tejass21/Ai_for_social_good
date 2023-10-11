function getNewHit() {
    Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rn;
}

function makeBubble() {
    var clutter = "";


for(var i = 1; i<=133; i++) {
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

var timer = 60;
function runTimer() {
    var timerINT = setInterval(function() {
        if(timer>0) {
        timer--;
        }
        else {
            clearInterval(timerINT);
        }
        document.querySelector("#timerval").textContent = timer;
    }, 1000);
}



runTimer();
makeBubble();
getNewHit();