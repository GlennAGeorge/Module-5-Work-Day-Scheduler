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


// saving tasks to local storage
const textInput = document.getElementById("textInput").value;
const textOutput = document.getElementsByClassName("textOutput");
const btn = document.getElementById("btn");


btn.onclick = function () {
  const textInput = textInput.value;
  const textOutput = textOutput.value;

  console.log(textInput);
  console.log(textOutput);
  
  localStorage.setItem(textInput);
  location.reload();

};

for (let i = 0; i < localStorage.length; i++) {
  localStorage.textInput(i);
  localStorage.getItem(textInput);

  textOutput.innerHTML += '${textInput}';


}


//Test

const inpKey = document.getElementById("inpKey").value;
const inpValue = document.getElementById("textValue").value;
const btnInsert = document.getElementById("btnInsert").value;
const lsOutput = document.getElementById("lsOutput").value;

btnInsert.onclick = function () {
  const key = inpKey.value;
  const value = inpValue.value;

  console.log(key);
  console.log(value);

};


