// display day and time on jumbotron
const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];
const date = new Date();
let month = months[date.getMonth()];
let day = days[date.getDay()];
document.getElementById("currentDay").innerHTML = day + ", " + month;



//saving tasks to local storage
let task14 = document.querySelector("#task14");

task14.value =localStorage.getItem("taskItem")

task14.addEventListener('click', event => {
  localStorage.setItem("taskItem", event.target.value)
})

