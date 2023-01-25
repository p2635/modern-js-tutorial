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

// I failed to work out the answer, so I had to read the solution.
// It appears the object is returned everytime, which allows methods to be chained.
