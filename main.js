//Global Variables
var currentCategory = null;
var currentActivity;
//Query Selectors
var studyButton = document.querySelector('#study');
var meditateButton = document.querySelector('#meditate');
var exerciseButton = document.querySelector('#exercise');
var form = document.querySelector('#form');
var litStudyButton = document.querySelector('#lit-study');
var litMeditateButton = document.querySelector('#lit-meditate');
var litExerciseButton = document.querySelector('#lit-exercise');
var minuteInputField = document.querySelector('#minutes-input');
var secondsInputField = document.querySelector('#seconds-input');
var activityButton = document.querySelector('#start-activity');
var accomplishInput = document.querySelector('#accomplish-input');
var textError = document.querySelector('#text-error');

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
    document.getElementById("start-timer-button").disabled = true;
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

function formDataCollection(){
  event.preventDefault();
  event.target === 'start-activity';
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
      <h1 id="timer">${secToMinSec()}</h1>
    </div>
    <div class="start-timer">
      <button class="start-timer-button" id="start-timer-button" type="button">START</button>
    </div>
    <div class="log-activity hidden" id="log-activity">
      <button class="log-button" id="log-button">LOG ACTIVITY</button>
    </div>`;
}

function colorUpdate() {
  var startTimerButton = document.querySelector('#start-timer-button');
  if(currentActivity.category === 'Study') {
    startTimerButton.style.border = "3px solid #B3FD78";
  } else if(currentActivity.category === 'Meditate') {
    startTimerButton.style.border = "3px solid #C278FD";
  } else if(currentActivity.category === 'Exercise') {
    startTimerButton.style.border = "3px solid #FD8078";
  }
}

function secToMinSec() {
  var min = Math.floor(currentActivity.seconds / 60);
  currentActivity.seconds = currentActivity.seconds % 60;
  currentActivity.minutes = parseInt(currentActivity.minutes) + min;
  if (currentActivity.seconds < 10) {
    currentActivity.seconds = "0" + currentActivity.seconds;
  }
  if (currentActivity.minutes < 10) {
    currentActivity.minutes = "0" + currentActivity.minutes;
  }
  return `${currentActivity.minutes}:${currentActivity.seconds}`
}

function timerHelper() {
  var timer = document.querySelector('#timer');
  timer.innerHTML = secToMinSec();
  var interval = setInterval(time, 1000);
  function time() {
    if (currentActivity.minutes <= 0 && currentActivity.seconds <= 0) {
    clearInterval(interval);
    currentActivity.markComplete();
  } else if (currentActivity.seconds <= 0) {
    currentActivity.minutes = currentActivity.minutes - 1;
    currentActivity.seconds = 60;
    currentActivity.seconds = currentActivity.seconds -= 1;
  } else {
    currentActivity.seconds = currentActivity.seconds -= 1;
  }
  timer.innerHTML = secToMinSec();
  }
}

function markHelper() {
  if(parseInt(currentActivity.minutes) === 0 && parseInt(currentActivity.seconds) === 0){
    document.getElementById('start-timer-button').innerText = "COMPLETE!";
    currentActivity.completed = true;
    showLogButton();
  }
}

  function showLogButton(){
    var logButton = document.querySelector('#log-activity');
    unhide(logButton);
}
//then we'll change text (to congratulatory message) of start timer
//var timer = document.querySelector("#timer");
//unhide log activity button
//for loop css styling; verify properties functionality refactor
//invoke log activity button on main js page
//html target of log activity button wtih start timer button (line 11)
//should we make it a DOM element?
