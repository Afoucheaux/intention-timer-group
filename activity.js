class Activity {
  constructor(cat, act, min, sec) {
    this.category = cat;
    this.description = act;
    this.minutes = min;
    this.originalMinutes = min;
    this.seconds = sec;
    this.originalSeconds = sec;
    this.completed = false;
    this.id = Date.now();
  }
  startTimer() {
    var sec = this.seconds;
    var min = this.minutes;
    var interval = setInterval(time, 1000);
    function time() {
      if (min <= 0 && sec <= 0) {
      this.completed = true;
      markHelper();
      return clearInterval(interval);
    } else if (sec <= 0) {
      min = min - 1;
      sec = 60;
      sec = sec - 1;
    } else {
      sec = sec - 1;
    }
    timeUpdate(min, sec);
  }
}


  markComplete() {
    markHelper();
  }

  saveToStorage() {
  }
};
