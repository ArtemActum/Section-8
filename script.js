'use strict';

function calcAge(birthYear) {
  const age = 2022 - birthYear;
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `You are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUTPUT!';
    }
    console.log(millenial);
    console.log(output);
    //console.log(add(2, 3));
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1995);
