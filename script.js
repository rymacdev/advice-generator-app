const adviceNumber = document.querySelector('.number');
const adviceText = document.querySelector('.advice');
const randomiser = document.querySelector('.randomiser');
const card = document.querySelector('.card');

async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice?t=" + Math.random());
  const advice = await response.json();
  adviceNumber.textContent = advice.slip.id;
  adviceText.textContent = advice.slip.advice;
  card.classList.remove('waiting')
}

window.onload = getAdvice();

randomiser.addEventListener('click', () => {

  card.classList.add('waiting');
  getAdvice();

});
