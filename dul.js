let timerDisplay = document.getElementById("timer");
let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");
let bgm = document.getElementById("bgm");

let time = 25 * 60;
let countdown;
let isRunning = false;

function updateDisplay() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  if (!isRunning) {
    bgm.pause();

    countdown = setInterval(() => {
      if (time > 0) {
        time--;
        updateDisplay();
      } else {
        clearInterval(countdown);
        isRunning = false;
        alert("Waktu habis! Istirahat sebentar.");
      }
    }, 1000);
    isRunning = true;
  }
}

function pauseTimer() {
  clearInterval(countdown);
  isRunning = false;
  bgm.play(); 
}

function resetTimer() {
  clearInterval(countdown);
  time = 25 * 60;
  updateDisplay();
  isRunning = false;
  bgm.pause();
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

updateDisplay();
