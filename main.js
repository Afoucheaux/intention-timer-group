//Global Variables
var currentCategory = null;
var currentActivity;
var savedActivities = [];
//Query Selectors

var accomplishInput = document.querySelector('#accomplishInput');
var activityButton = document.querySelector('#startActivity');
var defaultRightSide = document.querySelector('#originalPage');
var exerciseButton = document.querySelector('#exercise');
var form = document.querySelector('#form');
var litExerciseButton = document.querySelector('#litExercise');
var litMeditateButton = document.querySelector('#litMeditate');
var litStudyButton = document.querySelector('#litStudy');
var studyButton = document.querySelector('#study');
var meditateButton = document.querySelector('#meditate');
var minuteInputField = document.querySelector('#minutesInput');
var secondsInputField = document.querySelector('#secondsInput');
var textError = document.querySelector('#textError');


//Event Listeners
form.addEventListener('click', function(event){
  if (event.target.className === 'category-button') {
    changeButtonColor();
  }
  if (event.target.className === 'start-button') {
    formDataCollection();
    colorUpdate();
  }
  if (event.target.className === 'start-timer-button') {
    currentActivity.startTimer();
    document.getElementById('startTimerButton').disabled = true;
  }
  if (event.target.className === 'log-button') {
    saveActivity();
  }
});

//Functions
function removeCategoryColor(){
  hide(litStudyButton);
  hide(litExerciseButton);
  hide(litMeditateButton);
  unhide(studyButton);
  unhide(exerciseButton);
  unhide(meditateButton);
}

function changeButtonColor() {
  removeCategoryColor();
 if (event.target.id === 'study'){
  hide(studyButton);
  unhide(litStudyButton);
  currentCategory = 'Study';
} else if (event.target.id === 'meditate') {
  hide(meditateButton);
  unhide(litMeditateButton);
  currentCategory = 'Meditate';
 } else if (event.target.id === 'exercise') {
  hide(exerciseButton);
  unhide(litExerciseButton);
  currentCategory = 'Exercise';
 }
};

function formDataCollection(){
  event.preventDefault();
  event.target === 'startActivity';
  if(checkInputs() === true) {
    return;
  } else {
    var userActivity = accomplishInput.value;
    var userMinutes = minuteInputField.value;
    var userSeconds = secondsInputField.value;
    var userCategory = currentCategory;
    currentActivity = new Activity(userCategory, userActivity, userMinutes, userSeconds);
    switchToTimer();
  }
}

function checkInputs() {
  var error = false;
  if(currentCategory === null) {
    error = true;
  } else if(accomplishInput.value === "") {
    unhide(textError);
    error = true;
  } else if(minuteInputField.value === "" || secondsInputField.value === "") {
    error = true;
  }
  return error;
}

function switchToTimer() {
  form.innerHTML = `<div class="timer-view">
    <div class="intention-input">
      <label for="category-picked">${currentActivity.description}</label>
    </div>
    <div class="time-text">
      <h1 id="timer">${secToMinSec(currentActivity.minutes, currentActivity.seconds)}</h1>
    </div>
    <div class="start-timer">
      <button class="start-timer-button" id="startTimerButton" type="button">START</button>
    </div>
    <div class="log-activity hidden" id="logActivity">
      <button class="log-button" id="logButton">LOG ACTIVITY</button>
    </div>`;
}

function colorUpdate() {
  var startTimerButton = document.querySelector('#startTimerButton');
  if(currentActivity.category === 'Study') {
    startTimerButton.style.border = "3px solid #B3FD78";
  } else if(currentActivity.category === 'Meditate') {
    startTimerButton.style.border = "3px solid #C278FD";
  } else if(currentActivity.category === 'Exercise') {
    startTimerButton.style.border = "3px solid #FD8078";
  }
}

function secToMinSec(minutes, seconds) {
  var min = parseInt(minutes);
  var sec = parseInt(seconds);
  var convertMin = Math.floor(sec / 60);
  sec = (sec % 60).toString().padStart(2, 0);
  min = (min + convertMin).toString().padStart(2, 0);
  return `${min}:${sec}`
}

function timeUpdate(min, sec) {
  var timer = document.querySelector('#timer');
  timer.innerHTML = secToMinSec(min, sec);
}

// function timerHelper() {
//   var timer = document.querySelector('#timer');
//   timer.innerHTML = secToMinSec();
//   var interval = setInterval(time, 1000);
//   function time() {
//     if (currentActivity.minutes <= 0 && currentActivity.seconds <= 0) {
//     clearInterval(interval);
//     currentActivity.markComplete();
//   } else if (currentActivity.seconds <= 0) {
//     currentActivity.minutes = currentActivity.minutes - 1;
//     currentActivity.seconds = 60;
//     currentActivity.seconds = currentActivity.seconds -= 1;
//   } else {
//     currentActivity.seconds = currentActivity.seconds -= 1;
//   }
//   timer.innerHTML = secToMinSec();
//   }
// }

function markHelper() {
  if(parseInt(currentActivity.minutes) === 0 && parseInt(currentActivity.seconds) === 0){
    document.getElementById('startTimerButton').innerText = "COMPLETE!";
    showLogButton();
  }
}

function showLogButton(){
    var logButton = document.querySelector('#logActivity');
    unhide(logButton);
}

function saveActivity(){
  event.preventDefault();
  defaultRightSide.innerHTML = `<article class="activity-container" id="pastActivity">
    <div class="style-box">
      <p class="logged-category">${currentActivity.category}</p>
      <p class="logged-time">${currentActivity.originalMinutes} MIN ${currentActivity.originalSeconds} SECONDS</p>
    </div>
    <p class="logged-description">${currentActivity.description}</p>
  </article>`;
}

function hide(element) {
  element.classList.add('hidden');
}

function unhide(element) {
  element.classList.remove('hidden');
}

function timeInputRestriction(){
  if (secondsInputField.value){
  }
}
//Build the timer in the class as a method as this.minutes and this.seconds
