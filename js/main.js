let timerState, remainTime;
let element;
let timer;
let prepareTime, presentationTime;
let updateWait;

function timerStart(initialPrepareTime, initialPresentationTime) {
  prepareTime = initialPrepareTime;
  presentationTime = initialPresentationTime;
  remainTime = presentationTime;
  timer = setInterval(timerCountdown, 1000);
}


function timerEnd() {
  switch(timerState) {
    case 1:
      timerState = 2;
      remainTime = presentationTime;
      break;
    case 2:
      timerState = 1;
      remainTime = prepareTime;
      break;
  }
}

function timerCountdown() { 
  remainTime--;
  let text = Math.floor(remainTime / 60) + ':' + ('0' + Math.floor(remainTime % 60)).slice(-2);

  if(digit1.classList[0] == 'countdownB') {
    digit1.classList.remove('countdownB');
    digit1.classList.add('countdownC');
  }
  else digit1.classList.remove('countdownC');

  if(digit3.classList[0] == 'countdownB') {
    digit3.classList.remove('countdownB');
    digit3.classList.add('countdownC');
  }
  else digit3.classList.remove('countdownC');

  digit0.classList.remove('countdownA');
  digit0.classList.add('countdownA');

  if(text[3] == 0) digit1.classList.add('countdownB')
  if(text[2] == 0 && text[3] == 0) digit3.classList.add('countdownB')

  switch(timerState) {
    case 1:
      digit3.textContent = text[0];
      digit2.textContent = text[1];
      digit1.textContent = text[2];
      digit0.textContent = text[3];
      break;
    case 2:
      digit3.textContent = text[0];
      digit2.textContent = text[1];
      digit1.textContent = text[2];
      digit0.textContent = text[3];
      break;
  }
  console.log(remainTime);
  if(remainTime == 0) {
    timerEnd();
  }
};

function initialize() {
  digit0 = document.getElementById('digit0');
  digit1 = document.getElementById('digit1');
  digit2 = document.getElementById('digit2');
  digit3 = document.getElementById('digit3');

  timerStart(60 * 7, 60);
}

timerState = 2;
window.addEventListener('load', initialize());
window.addEventListener('keydown', (e) => {
  if(e.key == '1') { timerState = 1; remainTime = prepareTime; }
  else if(e.key == '2') { timerState = 2; remainTime = presentationTime; }
});
