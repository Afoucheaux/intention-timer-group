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
    timerHelper();
  }

  markComplete() {
    markHelper();
  }

  saveToStorage() {
  }
};
