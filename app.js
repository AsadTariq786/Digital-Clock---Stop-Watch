    //preloader

    var loader = document.getElementById("preLoader");

window.addEventListener('load', function(){
    loader.style.display = 'none';
})

    //Clock

function currentTime() {

    var date = new Date(); /* creating object of Date class */
    
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); /* assigning hour in 12-hour format */
    hour = changeTime(hour);
    min = changeTime(min);
    sec = changeTime(sec);
    document.getElementById("digit_clock_time").innerText = hour + " : " + min + " : " + sec + " " + midday; /* adding time to the div */
   
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
   
    var curWeekDay = days[date.getDay()]; // get day
    var curDay = date.getDate();  // get date
    var curMonth = months[date.getMonth()]; // get month
    var curYear = date.getFullYear(); // get year
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear; // get full date
    document.getElementById("digit_clock_date").innerHTML = date;
   
    var t = setTimeout(currentTime, 1000); /* setting timer */
  }
   
  function changeTime(k) { /* appending 0 before time elements if less than 10 */
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
   
  currentTime();    


   // Stop Watch

    var stopMin = 0
    var stopSec = 0
    var stopMilisec = 0
 
    var a = document.getElementById("stms")
 
    var b = document.getElementById("sts")
 
    var c = document.getElementById("stm")
 
    var interval;

    var ab = document.getElementById('hhh')

   function start(){

   interval = setInterval(function(){
     stopMilisec++
     a.innerHTML = stopMilisec
 
     if(stopMilisec >= 100){
         stopSec++
         b.innerHTML = stopSec
         stopMilisec = 0
     }
     else if(stopSec >= 60){
         stopMin++
         c.innerHTML = stopMin
         stopSec = 0
     }
     else if(stopMin >= 60){
         stopMin = 0
         stopMilisec = 0
         stopSec = 0
     }
 
    }, 10)

    document.getElementById("hhh").onclick = function(){
      this.disabled = true
      document.write = alert("the button is disabled after first click kindly refresh the page")
    }

   }

   function stop(){
    clearInterval(interval);
   }


   function reset(){
    stopMin = 0
    stopSec = 0
    stopMilisec = 0

    a.innerHTML = stopMilisec
    b.innerHTML = stopSec
    c.innerHTML = stopMin
   }