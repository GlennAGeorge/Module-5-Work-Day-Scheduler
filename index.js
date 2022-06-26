// display day and time on jumbotron 
//varibales for days
const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
//variables for months
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
//variable (reF: W3 schools https://www.w3schools.com/js/js_dates.asp)
const date = new Date();
let month = months[date.getMonth()];
let day = days[date.getDay()];
//varible day and month placement
document.getElementById("currentDay").innerHTML = day + ", " + month;

//saving task items to local storage

//button
let btn9 = document.querySelector("#btn9");
let rbtn9 = document.querySelector("#rbtn17")
//variable
let task9 = document.querySelector("#task9");
//getItem based on user input
task9.value = localStorage.getItem("taskItem9");
//button event listener and set item value based on user input
btn9.addEventListener("click", () => {
  localStorage.setItem("taskItem9", task9.value);
})
rbtn9.addEventListener("click", () => {
  localStorage.removeItem('taskItem9', task9.value);
});

let btn10 = document.querySelector("#btn10");
let rbtn10 = document.querySelector("#rbtn17")
let task10 = document.querySelector("#task10");
task10.value = localStorage.getItem("taskItem10");
btn10.addEventListener("click", () => {
  localStorage.setItem("taskItem10", task10.value);
})
rbtn10.addEventListener("click", () => {
  localStorage.removeItem('taskItem10', task10.value);
});
let btn11 = document.querySelector("#btn11");
let rbtn11 = document.querySelector("#rbtn17")
let task11 = document.querySelector("#task11");
task11.value = localStorage.getItem("taskItem11");
btn11.addEventListener("click", () => {
  localStorage.setItem("taskItem11", task11.value);
})
rbtn11.addEventListener("click", () => {
  localStorage.removeItem('taskItem11', task11.value);
});

let btn12 = document.querySelector("#btn12");
let rbtn12 = document.querySelector("#rbtn17")
let task12 = document.querySelector("#task12");
task12.value = localStorage.getItem("taskItem12");
btn12.addEventListener("click", () => {
  localStorage.setItem("taskItem12", task12.value);
})
rbtn12.addEventListener("click", () => {
  localStorage.removeItem('taskItem12', task12.value);
});

let btn13 = document.querySelector("#btn13");
let rbtn13 = document.querySelector("#rbtn17")
let task13 = document.querySelector("#task13");
task13.value = localStorage.getItem("taskItem13");
btn13.addEventListener("click", () => {
  localStorage.setItem("taskItem13", task13.value);
})
rbtn13.addEventListener("click", () => {
  localStorage.removeItem('taskItem13', task13.value);
});

let btn14 = document.querySelector("#btn14");
let rbtn14 = document.querySelector("#rbtn17")
let task14 = document.querySelector("#task14");
task14.value = localStorage.getItem("taskItem14");
btn14.addEventListener("click", () => {
  localStorage.setItem("taskItem14", task14.value);
})
rbtn14.addEventListener("click", () => {
  localStorage.removeItem('taskItem14', task14.value);
});

let btn15 = document.querySelector("#btn15");
let rbtn15 = document.querySelector("#rbtn17")
let taskItem15 = document.querySelector("#task15");
task15.value = localStorage.getItem("taskItem15");
btn15.addEventListener("click", () => {
  localStorage.setItem("taskItem15", task15.value);
})
rbtn15.addEventListener("click", () => {
  localStorage.removeItem('taskItem15', task15.value);
});

let btn16 = document.querySelector("#btn16");
let rbtn16 = document.querySelector("#rbtn17")
let task16 = document.querySelector("#task16");
task16.value = localStorage.getItem("taskItem16");
btn16.addEventListener("click", () => {
  localStorage.setItem("taskItem16", task16.value);
})
rbtn16.addEventListener("click", () => {
  localStorage.removeItem('taskItem16', task16.value);
});

let btn17 = document.querySelector("#btn17");
let rbtn17 = document.querySelector("#rbtn17");
let task17 = document.querySelector("#task17");
task17.value = localStorage.getItem("taskItem17");
btn17.addEventListener("click", () => {
  localStorage.setItem("taskItem17", task17.value);
})
rbtn17.addEventListener("click", () => {
  localStorage.removeItem('taskItem17', task17.value);
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
