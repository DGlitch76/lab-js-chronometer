class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }


  start(printTimeCallback) {

// "Google" help - don't fully understand
// started with const intervalId = setInterval

//more precisaly
//  this.currentTime++;
//  const intervalId = setInterval(printTimeCallback, 1000);

//this.intervalId = setInterval( () => {} )

    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) printTimeCallback();
    }, 1000);
  }


//const intervalId = setInterval(callbackFunction, delay);
// still confused with Math.Something being used with all  kind of type of data/values

  getMinutes() {    
    if (this.currentTime === 0) return 0; // Justmean takes this with or without this verification/condition
    return Math.floor(this.currentTime / 60); // goggled (adapted) code
  }

  getSeconds() {
    if (this.currentTime === 0) return 0; // Justmean takes this with or without this verification/condition
    return Math.floor(this.currentTime % 60); // adapted from above googled code
  } 

  computeTwoDigitNumber(value) {
// brain freeze 
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime === 0;
  }

  split() {
// brain freeze  
}
}



  


