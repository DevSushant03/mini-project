const result = document.getElementById("result");
const year = document.getElementById("year");
const currentyear = new Date().getFullYear();

function getAge(){
  const age = currentyear - year.value;
  
  if (isNaN(year.value) || year.value < 1900 || year.value > currentyear) {
    result.innerHTML = 'Please enter a valid year';
    result.style.color = 'red'
  } else {
    
    result.innerHTML = 'You are ' + age + ' years old 😊';
    result.style.color = 'lime'
  }
  
}
//----------------------------------

const currentdate = new Date();
const weakdays =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

const Allmonth =["January","February","March","April","May","June","July","August","September","October","November","December"]


document.getElementById("date").innerHTML= currentdate.getDate();

document.getElementById("day").innerHTML= weakdays[currentdate.getDay()];

document.getElementById("month").innerHTML= Allmonth[currentdate.getMonth()];

document.getElementById("currentyear").innerHTML= currentdate.getFullYear();

//--------------------------------

let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector(".voiceStyle");

window.speechSynthesis.onvoiceschanged = () =>{
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach((voice, j) => {
    voiceSelect.options[j] = new Option(voice.name, voice.voiceURI);
  });
};
  
document.querySelector(".convert").addEventListener("click", () =>{
  
  speech.text = document.querySelector(".paragraph").value;
  window.speechSynthesis.speak(speech);
});

//------------------------


function showPopup(){
  let popup = document.getElementById('popup');
  popup.classList.add("pop-up");
  let audio = document.getElementById('scream');
  audio.play();
}
function closePopup(){
  let popup = document.getElementById('popup');
  popup.classList.remove("pop-up");
}