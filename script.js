var time = new Date().getHours();
var noon = 12;
var evening = 18; // 6PM
var wakeUpTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var message = document.getElementById("timeEvent");
var lolcat = document.getElementById("lolcat");

var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");


var updateClock = function() //Displays cat image and message displayed based on current time, also contains a function to display the time current time in a "clock" format.
{
  var messageText; //This just defines the variable, the if/else condition contains the value.
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";//default imagw
  
	
if (time == partyTime){
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "IZ PARTEE TIME!!";
} else if (time == napTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "IZ NAP TIME...";
} else if (time == lunchTime) {
image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
} else if (time == wakeUpTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "IZ TIME TO GETTUP.";
} else if (time < noon) {
    messageText = "Good morning!";
} else if (time > evening) {
    messageText = "Good Evening!";
} else {
    messageText = "Good afternoon!";
}

message.innerText = messageText; //This takes "var message = document.getElementById("timeEvent")" and replaces the inner text with  any of the above messageText.
lolcat.src = image; //This takes "var lolcat = document.getElementById("lolcat")" and inserts an image based on the if/else conditions above.

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    clock.innerText = clockTime;//Puts the variable clockTime into the HTML ID #clock.
};
showCurrentTime();//This calls and runs the function making the clock run.
};

updateClock();//Calls and runs entire function above.
var oneSecond = 1000;//1000 milliseconds equals 1 second.
setInterval(updateClock, oneSecond);//This makes the clock count up every second.

var partyEvent = function() {
   
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText = "Party Time!";
	  partyTimeButton.style.background = "#222";
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "Party over!";
      partyTimeButton.style.background = "#0A8DAB";
   }
};

var lunchEvent = function(){
	lunchTime = lunchTimeSelector.value;//Allows you to select a different value for lunchTime.
};

var wakeUpEvent = function(){
	wakeUpTime = wakeUpTimeSelector.value;//Allows you to select a different value for wakeUpTime.
};

var napEvent = function(){
	napTime = napTimeSelector.value;//Allows you to select a different value for napTime.
};

partyTimeButton.addEventListener("click", partyEvent);//Click for party time
napTimeSelector.addEventListener("change", napEvent);//Allows user to change "value"
lunchTimeSelector.addEventListener("change", lunchEvent);
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);