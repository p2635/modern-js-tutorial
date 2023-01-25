/* Script file for modern js practice (Objects)
Author: Philip Wong
*/

"use strict"; // This enables new stuff, it could break old code.

/* Calculator Task (https://javascript.info/object-methods#tasks)
Date: 25 Jan 2023
*/
let calculator = {
  a: 0,
  b: 0,
  read() {
    this.a = +prompt("Enter value for 'a'.");
    this.b = +prompt("Enter value for 'b'.");
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

// The answer gives the code 'this.a = +prompt('a?', 0);'

/* Chain commands Task (https://javascript.info/object-methods#tasks)
Date: 25 Jan 2023
I failed to work out the answer, so I had to read the solution.
It appears the object is returned everytime, which allows methods
to be chained.
*/
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

/* Create new Calculator (https://javascript.info/constructor-new#create-new-calculator)
Date: 25 Jan 2023
*/
function Calculator() {
  this.read = function () {
    this.a = +prompt("Enter value for 'a'.", 0);
    this.b = +prompt("Enter value for 'b'.", 0);
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

/* Create new Accumulator
https://javascript.info/constructor-new
Full marks!
Date: 25 Jan 2023
*/
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += +prompt("Enter value to add");
  };
}
