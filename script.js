const buttons=[...document.getElementsByClassName('buttons')];
let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId;
let isRunning = false;

document.addEventListener('DOMContentLoaded',()=>{
buttons.forEach((button) => {
    const buttonText = button.innerText;

    button.addEventListener('mouseenter',(e)=>{
    e.target.style.backgroundColor="red";
    })

    button.addEventListener('mouseout',(e)=>{
    e.target.style.backgroundColor="";
    })

    if(buttonText === 'START'){
        button.addEventListener("click", startStopwatch);
    }else if(buttonText === 'STOP'){
        button.addEventListener("click", stopStopwatch);
    }else if(buttonText === 'RESET'){
        button.addEventListener("click", resetStopwatch);
    }
});

});

function formatTime() {
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2, "0")}`;
}

function updateStopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  document.getElementById("stopwatch").innerText = formatTime();
}

function startStopwatch() {
  if (!isRunning) {
    intervalId = setInterval(updateStopwatch, 1000);
    isRunning = true;
  }
}

function stopStopwatch() {
  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
  }
}

function resetStopwatch() {
  stopStopwatch();
  hours = 0;
  minutes = 0;
  seconds = 0;
  document.getElementById("stopwatch").innerText = formatTime();
}

