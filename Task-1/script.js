var x = new Date();
var day = x.getDay();
var hour = x.getHours();
var mins = x.getMinutes();
var sec = x.getSeconds();
switch (day) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
if (hour > 12) {
  hour = hour - 12 + " PM";
} else if (hour == 12) {
  hour = hour + " PM";
} else if (hour == 0) {
  hour = hour + 12 + " AM";
} else {
  hour = hour + " AM";
}
document.getElementById(
  "display-date"
).innerHTML = `Today is : ${day} <br> Current Time is : ${hour} : ${mins} :  ${sec}`;
