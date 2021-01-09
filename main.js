//Global Variables
var currentCategory = null;
var currentActivity;
//Category BUTTONS
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
  } if (event.target.className === 'start-button') {
    formDataCollection();
    colorUpdate();
    timerTest();
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
      <p id="timer">testFeild</p>
    </div>
    <div class="start-timer">
      <button class="start-timer-button" id="start-timer-button" type="button">START</button>
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



function timerTest() {
  var timer = document.querySelector("#timer");
  updateTimer();
  var counter = `${currentActivity.minutes}:${currentActivity.seconds}`;
  timer.innerHTML = counter;
  // function test() {
  //   counter++;
  //   timer.innerText = counter;
}

function updateTimer() {
  var min = Math.floor(currentActivity.seconds / 60);
  currentActivity.seconds = currentActivity.seconds % 60;
  console.log(min);
  currentActivity.minutes = parseInt(currentActivity.minutes) + min;
  console.log(currentActivity.minutes);
  console.log(min);
}


// function convertSeconds(s) {
//   var min = floor(s / 60);
//   var sec = s % 60;
//   return nf(min, 2) + ':' + nf(sec, 2);
// }
//
// function timeIt() {
//    currentTime = floor((millis() - startTime) / 1000);
//    // timer.html(convertSeconds(timeleft - currentTime));
//    if (currentTime == timeleft) {
//      clearInterval(interval);
//    }
//  }
//
// var timer = select('#timer');
// timer.html(convertSeconds(timeleft - currentTime));


// may still need
// ${currentActivity.minutes}:${currentActivity.seconds}




//If the seconds input field is greater than 60 and the minutes input field is greater than 60 or theres a e, then
//parent.addEventListener('click, function(event)'){
//if (event.target.className === 'buttonName') {
//run the change button function here
//}
//}
