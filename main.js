//Category BUTTONS
var studyButton = document.querySelector('#study');
var meditateButton = document.querySelector('#meditate');
var exerciseButton = document.querySelector('#exercise');
var form = document.querySelector('#form');
//Event Listeners
form.addEventListener('click', function(event){
  changeButtonColor();
});

//Functions:
function changeButtonColor() {
 if (event.target.id === 'study'){
  //light study button
} else if (event.target.id === 'meditate') {
  //light meditate button
 } else if (event.target.id === 'exercise') {
   //light exercise button
 }
};
//parent.addEventListener('click, function(event)'){
//if (event.target.className === 'buttonName') {
//run the change button function here
//}
//}
