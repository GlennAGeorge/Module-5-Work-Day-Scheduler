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
// let task14 = document.querySelector("#task14");

// task14.value = localStorage.getItem("taskItem");

// task14.addEventListener("click", (event) => {
// 	localStorage.setItem("taskItem", event.target.value);
// });

//saving tasks to local storage
let btn = document.querySelector("#btn");

// btn.value = localStorage.getItem("taskItem");

let task14 = document.querySelector("#task14");

task14.value = localStorage.getItem("taskItem");

btn.addEventListener("click", () => {
	localStorage.setItem("taskItem", task14.value);
});

// func that knows the hour and updated hour

// current hour

// looop over all hours

// check (if) if we've moved past the current time

// get element by query seledctor or id and add class of past or present or future

// past is green, present is blue, future is red

if (hour < currentHour) {
	btn.classList.add("past");
} else if (hour === currentHour) {
	btn.classList.remove("past");
	btn.classList.add("present");
} else {
	btn.classList.remove("past");
	btn.classList.remove("present");
	btn.classList.add("future");
}
