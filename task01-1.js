'use strict';

var numDecline = function (number, string1, string2, string3) {
  number %= 100;

  if (number > 14) {
    number %= 10;
  }

  switch (true) {
    case number === 1:
      return string1;
    case number >= 2 && number <= 4:
      return string2;
    case number >= 10 && number <= 14:
      return string3;
    default:
      return string3;
  }
};
