// display day and time on jumbotron
const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const date = new Date();
let month = months[date.getMonth()];
let day = days[date.getDay()];
document.getElementById("currentDay").innerHTML = day + ", " + month;




// 