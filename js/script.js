alert("This code displays the date in 12 hour system");
var d = new Date();
console.log(d);


var dt = new Date("October 13, 2014 11:13:00-06:00");
console.log(dt);


var da = new Date("April 12, 2019 10:51:12");
console.log(da.toUTCString());


var dat = new Date("2015-03-25T12:00:00-06:30"); 
console.log(dat);

var dte = new Date("12/4/2019");
console.log(dte.toUTCString());


var di = new Date("April 20 2019");
console.log(di);



var ms = new Date("12 April 2019");
//You can then use the number of milliseconds to convert it to a date object:
var msec = new Date(ms);
console.log(msec);


var date = new Date();
console.log(date.getDate());

//1. Write a JavaScript program to display the current day and time in the following format. 

var date = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = date.getDay();
var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var sign = "";
if(hour<12){
    sign ="AM";
}else{
    sign = "PM";
}



console.log("Today is " +days[day] +".");
console.log("Current time is: " +hour +sign +" :" +minutes +" :" +minutes);


