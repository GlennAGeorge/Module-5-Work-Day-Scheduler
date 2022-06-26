// display day and time on jumbotron
//varibales for days
const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
//variables for months
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
//variable (reF: W3 schools https://www.w3schools.com/js/js_dates.asp)
const date = new Date();
let month = months[date.getMonth()];
console.log(month);
let day = days[date.getDay()];
console.log(day);
//varible day and month placement
document.getElementById("currentDay").innerHTML = day + ", " + month;

//saving task items to local storage

//button
let btn9 = document.querySelector("#btn9");
let rbtn9 = document.querySelector("#rbtn9");
//variable
let task9 = document.querySelector("#task9");
//getItem based on user input
task9.value = localStorage.getItem("taskItem9");
//button event listener and set item value based on user input
btn9.addEventListener("click", () => {
	localStorage.setItem("taskItem9", task9.value);
});
rbtn9.addEventListener("click", () => {
	localStorage.removeItem("taskItem9", task9.value);
});

let btn10 = document.querySelector("#btn10");
let rbtn10 = document.querySelector("#rbtn10");
let task10 = document.querySelector("#task10");
task10.value = localStorage.getItem("taskItem10");
btn10.addEventListener("click", () => {
	localStorage.setItem("taskItem10", task10.value);
});
rbtn10.addEventListener("click", () => {
	localStorage.removeItem("taskItem10", task10.value);
});
let btn11 = document.querySelector("#btn11");
let rbtn11 = document.querySelector("#rbtn11");
let task11 = document.querySelector("#task11");
task11.value = localStorage.getItem("taskItem11");
btn11.addEventListener("click", () => {
	localStorage.setItem("taskItem11", task11.value);
});
rbtn11.addEventListener("click", () => {
	localStorage.removeItem("taskItem11", task11.value);
});

let btn12 = document.querySelector("#btn12");
let rbtn12 = document.querySelector("#rbtn12");
let task12 = document.querySelector("#task12");
task12.value = localStorage.getItem("taskItem12");
btn12.addEventListener("click", () => {
	localStorage.setItem("taskItem12", task12.value);
});
rbtn12.addEventListener("click", () => {
	localStorage.removeItem("taskItem12", task12.value);
});

let btn13 = document.querySelector("#btn13");
let rbtn13 = document.querySelector("#rbtn13");
let task13 = document.querySelector("#task13");
task13.value = localStorage.getItem("taskItem13");
btn13.addEventListener("click", () => {
	localStorage.setItem("taskItem13", task13.value);
});
rbtn13.addEventListener("click", () => {
	localStorage.removeItem("taskItem13", task13.value);
});

let btn14 = document.querySelector("#btn14");
let rbtn14 = document.querySelector("#rbtn14");
let task14 = document.querySelector("#task14");
task14.value = localStorage.getItem("taskItem14");
btn14.addEventListener("click", () => {
	localStorage.setItem("taskItem14", task14.value);
});
rbtn14.addEventListener("click", () => {
	localStorage.removeItem("taskItem14", task14.value);
});

let btn15 = document.querySelector("#btn15");
let rbtn15 = document.querySelector("#rbtn15");
let taskItem15 = document.querySelector("#task15");
task15.value = localStorage.getItem("taskItem15");
btn15.addEventListener("click", () => {
	localStorage.setItem("taskItem15", task15.value);
});
rbtn15.addEventListener("click", () => {
	localStorage.removeItem("taskItem15", task15.value);
});

let btn16 = document.querySelector("#btn16");
let rbtn16 = document.querySelector("#rbtn16");
let task16 = document.querySelector("#task16");
task16.value = localStorage.getItem("taskItem16");
btn16.addEventListener("click", () => {
	localStorage.setItem("taskItem16", task16.value);
});
rbtn16.addEventListener("click", () => {
	localStorage.removeItem("taskItem16", task16.value);
});

let btn17 = document.querySelector("#btn17");
let rbtn17 = document.querySelector("#rbtn17");
let task17 = document.querySelector("#task17");
task17.value = localStorage.getItem("taskItem17");
btn17.addEventListener("click", () => {
	localStorage.setItem("taskItem17", task17.value);
});
rbtn17.addEventListener("click", () => {
	localStorage.removeItem("taskItem17", task17.value);
});

//colour coded time blocks based on past, present, or future
//varible to get current hour
// 9am timeblock class
const task9block = document.querySelector(".task9block");
console.log(task9block.classList);
//setting current hour
const currentHour9 = new Date();
let hour9 = currentHour9.getHours();
console.log(hour9);
//setting comparision hour
const taskHour9 = 9;
console.log(typeof taskHour9);

if (hour9 > taskHour9) {
	task9block.classList.add("past");
} else if (hour9 === taskHour9) {
	task9block.classList.remove("past");
	task9block.classList.add("present");
} else {
	task9block.classList.remove("past");
	task9block.classList.remove("present");
	task9block.classList.add("future");
}

const task10block = document.querySelector(".task10block");
console.log(task10block.classList);
//setting current hour
const currentHour10 = new Date();
let hour10 = currentHour10.getHours();
console.log(hour10);
//setting comparision hour
const taskHour10 = 10;
console.log(typeof taskHour10);

if (hour10 > taskHour10) {
	task10block.classList.add("past");
} else if (hour10 === taskHour10) {
	task10block.classList.remove("past");
	task10block.classList.add("present");
} else {
	task10block.classList.remove("past");
	task10block.classList.remove("present");
	task10block.classList.add("future");
}

const task11block = document.querySelector(".task11block");
console.log(task11block.classList);
//setting current hour
const currentHour11 = new Date();
let hour11 = currentHour11.getHours();
console.log(hour11);
//setting comparision hour
const taskHour11 = 11;
console.log(typeof taskHour11);

if (hour11 > taskHour11) {
	task11block.classList.add("past");
} else if (hour11 === taskHour11) {
	task11block.classList.remove("past");
	task11block.classList.add("present");
} else {
	task11block.classList.remove("past");
	task11block.classList.remove("present");
	task11block.classList.add("future");
}

const task12block = document.querySelector(".task12block");
console.log(task12block.classList);
//setting current hour
const currentHour12 = new Date();
let hour12 = currentHour12.getHours();
console.log(hour12);
//setting comparision hour
const taskHour12 = 12;
console.log(typeof taskHour12);

if (hour12 > taskHour12) {
	task12block.classList.add("past");
} else if (hour12 === taskHour12) {
	task12block.classList.remove("past");
	task12block.classList.add("present");
} else {
	task12block.classList.remove("past");
	task12block.classList.remove("present");
	task12block.classList.add("future");
}

const task13block = document.querySelector(".task13block");
console.log(task13block.classList);
//setting current hour
const currentHour13 = new Date();
let hour13 = currentHour13.getHours();
console.log(hour13);
//setting comparision hour
const taskHour13 = 13;
console.log(typeof taskHour13);

if (hour13 > taskHour13) {
	task13block.classList.add("past");
} else if (hour13 === taskHour13) {
	task13block.classList.remove("past");
	task13block.classList.add("present");
} else {
	task13block.classList.remove("past");
	task13block.classList.remove("present");
	task13block.classList.add("future");
}

const task14block = document.querySelector(".task14block");
console.log(task14block.classList);
//setting current hour
const currentHour14 = new Date();
let hour14 = currentHour14.getHours();
console.log(hour14);
//setting comparision hour
const taskHour14 = 14;
console.log(typeof taskHour14);

if (hour14 > taskHour14) {
	task14block.classList.add("past");
} else if (hour14 === taskHour14) {
	task14block.classList.remove("past");
	task14block.classList.add("present");
} else {
	task14block.classList.remove("past");
	task14block.classList.remove("present");
	task14block.classList.add("future");
}

const task15block = document.querySelector(".task15block");
console.log(task15block.classList);
//setting current hour
const currentHour15 = new Date();
let hour15 = currentHour15.getHours();
console.log(hour15);
//setting comparision hour
const taskHour15 = 15;
console.log(typeof taskHour15);

if (hour15 > taskHour15) {
	task15block.classList.add("past");
} else if (hour15 === taskHour15) {
	task15block.classList.remove("past");
	task15block.classList.add("present");
} else {
	task15block.classList.remove("past");
	task15block.classList.remove("present");
	task15block.classList.add("future");
}

const task16block = document.querySelector(".task16block");
console.log(task16block.classList);
//setting current hour
const currentHour16 = new Date();
let hour16 = currentHour16.getHours();
console.log(hour16);
//setting comparision hour
const taskHour16 = 16;
console.log(typeof taskHour16);

if (hour16 > taskHour16) {
	task16block.classList.add("past");
} else if (hour16 === taskHour16) {
	task16block.classList.remove("past");
	task16block.classList.add("present");
} else {
	task16block.classList.remove("past");
	task16block.classList.remove("present");
	task16block.classList.add("future");
}

const task17block = document.querySelector(".task17block");
console.log(task17block.classList);
//setting current hour
const currentHour17 = new Date();
let hour17 = currentHour17.getHours();
console.log(hour17);
//setting comparision hour
const taskHour17 = 17;
console.log(typeof taskHour17);

if (hour17 > taskHour17) {
	task17block.classList.add("past");
} else if (hour17 === taskHour17) {
	task17block.classList.remove("past");
	task17block.classList.add("present");
} else {
	task17block.classList.remove("past");
	task17block.classList.remove("present");
	task17block.classList.add("future");
}
