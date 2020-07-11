                // DECLARATIONS


      // VARIABLES AND CONSTANTS

let startTime;
let elapsedTime = 0;
let timeInterval;
const timeFace = document.getElementById('time');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const lap = document.getElementById('lapTime');
const stop = document.getElementById('stop');


        // FUNCTIONS
    // Makes the time stopwatch-like
function formatToTwoDigits(n) {
  if (n < 10) {
    return "0" + n;
    }
  else {
    return n;
    }
  }
    // Makes the time pleasant
function timeToString (time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh)  * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMs = (diffInSec - ss) * 100;
  let ms = Math.floor(diffInMs);

  let formatHH = formatToTwoDigits(hh);
  let formatMM = formatToTwoDigits(mm);
  let formatSS = formatToTwoDigits(ss);
  let formatMS = formatToTwoDigits(ms)
  return `${formatMM}:${formatSS}:${formatMS}`;
  }
  // Displays the time
function print(txt) {
 timeFace.innerHTML = txt;
}
    // Makes the timer run
function runTimer() {
  startTime = Date.now()-elapsedTime;
  timeInterval = setInterval(function runTime(){
  elapsedTime = Date.now() - startTime;
  print(timeToString(elapsedTime));
} , 10)
  playBtn.style.display = 'none';
  pauseBtn.style.display = 'block';
  }
    // Makes the timer pause
function pauseTimer() {
  clearInterval(timeInterval);
  playBtn.style.display='block';
  pauseBtn.style.display='none';
}
    // Makes the timer STOP, not pause, there's a difference.
function stopTimer(){
  clearInterval(timeInterval);
  playBtn.style.display='block';
  pauseBtn.style.display='none';
  elapsedTime = 0;
}
    // Changes the text content of an element.
function clear(whatToLookAt,whatToChangeItsValueTo) {
 whatToLookAt.textContent= whatToChangeItsValueTo;
}
    // Resets the clock face
function resetTimer(){
  clearInterval(timeInterval);
  playBtn.style.display='block';
  pauseBtn.style.display='none';
  clear(timeFace, '00:00:00');
  elapsedTime = 0;
}
    //Resets the clock
 function recLap(){
   var recdLaps = document.getElementById('laps').childElementCount;
   var space = document.createElement('p');
   var content = document.createTextNode('Lap '+ (recdLaps + 1) + ' - ' + timeToString(elapsedTime));
   space.appendChild(content);

   document.getElementById('laps').appendChild(space);
 }


 playBtn.addEventListener('click', runTimer);


pauseBtn.addEventListener('click', pauseTimer);


stop.addEventListener('click', stopTimer)


resetBtn.addEventListener('click', resetTimer);



lap.addEventListener('click', recLap);
