import confetti from 'canvas-confetti';
// Import our custom CSS
import '../scss/styles.scss'

// Set the date we're counting down to
var countDownDate = (new Date(Date.now() + 7.5 * (60 * 60 * 1000) )).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const addZero = (num) => {
    if (num < 10) {
      return `0${num}`
    }
    return num
  }

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = addZero(hours) + " : "
  + addZero(minutes) + " : " + addZero(seconds);

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

const button = document.querySelector('.claim-button');
button.addEventListener('click', () => {
  function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

  confetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    particleCount: randomInRange(50, 100),
    origin: { y: 0.6 }
  });
})
