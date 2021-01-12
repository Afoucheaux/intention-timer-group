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
    var sec = this.seconds;
    var min = this.minutes;
    var interval = setInterval(time, 1000);
    function time() {
      if (min <= 0 && sec <= 0) {
      markHelper();
      clearInterval(interval);
    } else if (sec <= 0) {
      min = min - 1;
      sec = 59;
    } else {
      sec = sec - 1;
    }
    timeUpdate(min, sec);
  }
}

  markComplete() {
    markHelper();
    this.completed = true;
  }

  saveToStorage() {
   var saved = JSON.stringify(this);
   var key = localStorage.length;
   localStorage.setItem(key, saved);
  }
};
