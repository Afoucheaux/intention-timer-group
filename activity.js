class Activity {
  constructor(cat, act, min, sec) {
    this.category = cat;
    this.description = act;
    this.minutes = min;
    this.seconds = sec;
    this.completed = false;
    this.id = Date.now();
  }
  startTimer() {
    var timer = document.querySelector("#timer");
    timer.innerHTML = secToMinSec();
    var interval = setInterval(time, 1000);
      function time() {
        if (currentActivity.minutes <= 0 && currentActivity.seconds <= 0) {
        clearInterval(interval);
        window.alert("Done");
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
  markComplete() {

  }
  saveToStorage() {

  }
};
