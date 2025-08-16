
var countDownDate = new Date("August 19, 2025, 12:00 Pm").getTime();

function initTime() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    document.getElementById("time").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "If you are seeing this, we have paid for the domain :3";
    }
}

initTime();
setInterval(() => {
    initTime();
}, 1000);