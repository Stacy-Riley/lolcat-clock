$(document).ready(function(){

//alert("hello");

var noon = 12;
var evening = 18; // 6PM
var wakeUpTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var time = new Date().getHours();
var isPartyTime = false;
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");
var partyTimeButton = document.getElementById("partyTimeButton");

var updateClock = function(){
 
     var lolcat = document.getElementById('lolcat');
     var message = document.getElementById('timeEvent');
     var messageText;
     var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
 
    if(time == partyTime){
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "IZ PARTEE TIME!!";
} 
    else if (time == napTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "IZ NAP TIME...";
} 
    else if (time == lunchTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
} 
    else if (time == wakeUpTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "IZ TIME TO GETTUP.";
} 
    else if (time < noon) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "Good morning!";
} 
    else if (time > evening) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "Good Evening!";
} 
    else {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "Good afternoon!";
}

    message.innerText = messageText;
    lolcat.src = image;
};


//All the elements of a working clock
var showCurrentTime = function(){
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
 
    clock.innerText = clockTime; 
  
};

showCurrentTime();

updateClock();

var oneSecond = 1000;

setInterval(updateClock, oneSecond);

//Party Button

var partyEvent = function() {
    if (isPartyTime === false) {
        isPartyTime = true;
        time = partyTime;
        partyTimeButton.innerText = "Party Time!!";
        partyTimeButton.style.backgroundColor = "#0A2DAB";

    }
    else {
        isPartyTime = false;
        time = new Date().getHours();
        partyTimeButton.innerText = "Party Over";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
};
//Add Event Listeners for button and the 3 time selector menus

//partyTimeButton.addEventListener("click", partyEvent); 
//*This was turned off so JQuery could be used below with.click

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
lunchTimeSelector.addEventListener("change", lunchTimeEvent);
napTimeSelector = addEventListener("change", napTimeEvent);

$("#partyTimeButton").click(partyEvent);

//////////////////////////////////////////////////////////

//wakeUpTimeSelector
var wakeUpEvent = function(){
    wakeUpTime = wakeUpTimeSelector.value;
};

//lunchTimeSelector
var lunchTimeEvent = function(){
    lunchTime = lunchTimeSelector.value;
};

//napTimeSelector
var napTimeEvent = function(){
    napTime = napTimeSelector.value;
};


//#lolcatButton section
var lolcatButton = document.getElementById("lolcatButton");
var lolcatImage = document.getElementById("lolcatImage");
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/napTime.jpg";
 
var showMeTheLolcat = function(){
    lolcatImage.src = image;
    prompt("Do you really want to see the LOLCat?");
};
 
$("#lolcatButton").click(showMeTheLolcat);

//lolcatButton.addEventListener("click", showMeTheLolcat);

});
