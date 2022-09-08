const form_card_name = document.querySelector('#form-name');
const card_name = document.querySelector('.card-name');

form_card_name.addEventListener('input', (event) => {
  (event.target.value === '')
    ? card_name.innerText = 'Jane Appleseed'
    : card_name.innerText = event.target.value;
});

const form_card_number = document.querySelector('#form-card-number');
const card_number = document.querySelector('.card-number');

form_card_number.addEventListener('input', (event) => {
  if (!/([0-9])/.test(event.target.value.slice(-1))) {
    card_number.innerText = '0000 0000 0000 0000';
    event.target.value = '';
    return false;
  }
  if (event.target.value.length > 16) {
    event.target.value = event.target.value.slice(0,16);
    return false;
  }
  (event.target.value === '')
    ? card_number.innerText = '0000 0000 0000 0000'
    : card_number.innerText = event.target.value
        .replace(/\s/g, '')
        .replace(/([0-9]{4})/g, '$1 ');
});

const form_card_exp_mm = document.querySelector('#form-exp-date__mm');
const form_card_exp_yy = document.querySelector('#form-exp-date__yy');
const card_exp = document.querySelector('.card-exp-date');

form_card_exp_mm.addEventListener('input', (event) => {
  if (!/([0-9])/.test(event.target.value.slice(-1))) {
    card_exp.innerText = card_exp.textContent.replace(/\d\d\/|\d\//, '00/');
    event.target.value = '';
    return false;
  }
  if (event.target.value.length > 2) {
    event.target.value = event.target.value.slice(0,2);
    return false;
  }
  if (event.target.value > 12) {
    event.target.value = '';
    return false;
  }

  if (event.target.value === '') {
    card_exp.innerText = card_exp.textContent.replace(/\d\d\/|\d\//, '00/');
  }
  else if (event.target.value.length == 1) {
    card_exp.innerText = card_exp.textContent.replace(/\d\d\/|\d\//, '0' + event.target.value + '/');
  }
  else {
    card_exp.innerText = card_exp.textContent.replace(/\d\d\/|\d\//, event.target.value + '/');
  }
});
form_card_exp_yy.addEventListener('input', (event) => {
  if (!/([0-9])/.test(event.target.value.slice(-1))) {
    card_exp.innerText = card_exp.textContent.replace(/\/\d\d|\/\d/, '/00');
    event.target.value = '';
    return false;
  }
  if (event.target.value.length > 2) {
    event.target.value = event.target.value.slice(0,2);
    return false;
  }
  
  if (event.target.value === '') {
    card_exp.innerText = card_exp.textContent.replace(/\/\d\d|\/\d/, '/00');
  }
  else if (event.target.value.length == 1) {
    card_exp.innerText = card_exp.textContent.replace(/\/\d\d|\/\d/, '/0' + event.target.value);
  }
  else {
    card_exp.innerText = card_exp.textContent.replace(/\/\d\d|\/\d/, '/' + event.target.value);
  }
});

const form_card_cvc = document.querySelector('#form-cvc');
const card_cvc = document.querySelector('.card-cvc');

form_card_cvc.addEventListener('input', (event) => {
  if (!/([0-9])/.test(event.target.value.slice(-1))) {
    card_cvc.innerText = '000';
    event.target.value = '';
    return false;
  }
  if (event.target.value.length > 3) {
    event.target.value = event.target.value.slice(0,3);
    return false;
  }
  (event.target.value === '')
    ? card_cvc.innerText = '000'
    : card_cvc.innerText = event.target.value;
});