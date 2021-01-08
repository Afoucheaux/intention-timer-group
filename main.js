//Category BUTTONS
var studyButton = document.querySelector('#study');
var meditateButton = document.querySelector('#meditate');
var exerciseButton = document.querySelector('#exercise');
var form = document.querySelector('#form');
var litStudyButton = document.querySelector('#lit-study');
var litMeditateButton = document.querySelector('#lit-meditate');
var litExerciseButton = document.querySelector('#lit-exercise');
//Event Listeners
form.addEventListener('click', function(event){
  changeButtonColor();
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
} else if (event.target.id === 'meditate') {
  hide(meditateButton);
  unhide(litMeditateButton);
 } else if (event.target.id === 'exercise') {
   hide(exerciseButton);
   unhide(litExerciseButton);
 }
};
function hide(element) {
  element.classList.add('hidden');
}
function unhide(element) {
  element.classList.remove('hidden');
}

//parent.addEventListener('click, function(event)'){
//if (event.target.className === 'buttonName') {
//run the change button function here
//}
//}
