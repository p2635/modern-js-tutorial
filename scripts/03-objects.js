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
