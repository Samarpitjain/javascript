const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const hight = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  if (hight === ' ' || hight < 0 || isNaN(hight)) {
    result.innerHTML = `not a valid input${hight}`;
  } else if (weight === ' ' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `not a valid input${weight}`;
  } else {
    const bmi = (weight / ((hight * hight) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      const first = document.querySelector('#one');
      one.style.fontWeight = 'bold';
    }
    if (bmi > 18.6 || bmi < 24.6) {
      const first = document.querySelector('#two');
      two.style.fontWeight = 'bold';
    }
    if (bmi > 24.6) {
      const second = document.querySelector('#third');
      first.style.fontWeight = 'bold';
    }
  }
});
