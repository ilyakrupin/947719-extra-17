'use strict';

var currency = document.querySelector('span');
var inputNumber = document.querySelector('input');
var number = 0;
var numberReal = 0;

var Roubles = {
  string1: 'рубль',
  string2: 'рубля',
  string3: 'рублей'
};

inputNumber.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    numberReal = Math.abs(inputNumber.value);
    number = numberReal % 100;

    if (number > 14) {
      number %= 10;
    }

    switch (true) {
      case number === 1:
        currency.textContent = numberReal + ' ' + Roubles.string1;
        break;
      case number >= 2 && number <= 4:
        currency.textContent = numberReal + ' ' + Roubles.string2;
        break;
      case number >= 10 && number <= 14:
        currency.textContent = numberReal + ' ' + Roubles.string3;
        break;
      default:
        currency.textContent = numberReal + ' ' + Roubles.string3;
    }
  }

});
