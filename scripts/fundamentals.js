/* Script file for modern js practice (JavaScript Fundamentals)
Author: Philip Wong
*/

'use strict'; // This enables new stuff, it could break old code.

/* Alert (https://javascript.info/hello-world)
Date: 20 Jan 2023
*/
function showAlert(){
    alert( 'I\'m JavaScript!' );
}

/* Prompt (https://javascript.info/alert-prompt-confirm)
Date: 23 Jan 2023
*/
function askForName(){

    let name;
    let confirmed = false;

    while(!confirmed){
        name = prompt("What is your name, my dear? If you enter nothing, I"
            + " assume you don't want to continue with the program.", "Bob");
        if(name == null || name == '') return;
        confirmed = confirm("Are you sure? (Cancel = No, OK = Yes)");
    }

    alert(`You confirmed that your name is ${name}.`);
}

/* If else (https://javascript.info/ifelse)
Date: 23 Jan 2023
*/
function ifElse(){

    let answer = prompt("What is the “official” name of JavaScript?");
    if(answer == "ECMAScript"){
        alert("Right!");
    } else {
        alert("You don’t know? ECMAScript!");
    }
}

/* Show the sign (https://javascript.info/ifelse)
Date: 23 Jan 2023
*/
function showTheSign(){

    let answer = prompt("Enter any number.");
    
    let result = (answer > 0) ? '1' :
        (answer < 0) ? '-1' :
        (answer == 0) ? '0' :
        'Something went wrong.';
    
    alert(result);
}

/* Check login (https://javascript.info/logical-operators#check-the-login)
Date: 23 Jan 2023
*/
function checkLogin(){

    let user = prompt("Who's there?");

    if(user === null || user == ''){
        alert("Cancelled.")
    } else if (user == 'Admin'){

        let pass = prompt("Please enter password.");
        
        if(pass === null || pass == ''){
            alert("Cancelled.")
        } else if(pass == "TheMaster"){
            alert("Welcome!")
        } else {
            alert("Wrong password.")
        }

    } else {
        alert("I don't know you.");
    }
    
}

/* Use the `for` loop to output even numbers from 2 to 10
(https://javascript.info/while-for#tasks)
Date: 23 Jan 2023
*/
function forLoop(){
    for(let i = 2; i < 11; i++){
        if (i % 2) continue; // If it's odd, skip an iteration.
        alert(i);
    }
}

/* Rewrite 'for' loop to a 'while' loop without changing behaviour
(https://javascript.info/while-for#tasks)
Date: 23 Jan 2023
*/
function forToWhile(){

    /* Original Code:
    for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
    }
    */
    let i = 0;
    while(i < 3){
        alert(`number ${i}!`);
        i++;
    }
}

/* Repeat until the input is correct
(https://javascript.info/while-for#tasks)
Date: 23 Jan 2023
*/

// My solution did not use 'do while' because the task did not instruct me to.
function repeatUntilCorrec1(){

    let answer = 0;
    while(answer < 101){
        answer = prompt("Please enter a number greater than 100. I won't ask you again!")
        if((answer == null) || (answer == '')) break;
    }

}

// My attempt with a do-while loop
function repeatUntilCorrect2(){

    let answer;
    do{
        answer = prompt("Please enter a number greater than 100. I won't ask you again!")
    } while (answer < 101 && answer)
}

/* Output prime numbers
(https://javascript.info/while-for#tasks)
Date: 23 Jan 2023
*/

function primeNumbers(){

    const n = 10;
    let primeNumbers = `From 2 to ${n}, the prime numbers are `;
    
    counter:
    for(let i = 2; i <= n; i++){
    
      checkPrime:
      for(let j = 2; j < i; j++){
    
        // No remainder, no prime. Skip to the next number.
        if(i % j == 0) continue counter;
      }
    
      // If it's a prime then add it to the list.
      primeNumbers += `${i}, `
    }
    
    alert(primeNumbers);    
}

/* Function pow(x,n)
(https://javascript.info/function-basics#is-else-required)
Date: 24 Jan 2023
*/
function pow(x, n){
    let result = x;
    for(let i = 1; i < n; i++){
      result *= x;
    }
    return result;
}

function powTask(){

    alert("This function pow(x,n) returns x in power"
    + " n. Or, in other words, multiplies x by itself n times and returns"
    + " the result.");
    let number = prompt('Please enter a value for x.');
    let exponent;

    let isNatural = (number) => number >= 1;
    /* This arrow function is a shorter form of:

    let isNatural = function(number){
         return number >= 1;
    };
    */

    while(isNatural(exponent) == false){
        exponent = prompt('Please enter a value for n.' +
            ' Only natural values of n are supported (integers' +
            ' up from 1). Otherwise, I will keep asking you.');
    }

    if(isNatural(exponent)){
        alert(`The calculated value of ${number} ^ ${exponent} is`
            + ` ${pow(number, exponent)}.`);
    } else {
        alert("Something went wrong, you must've entered an invalid number.");
    }
}

/* Arrow functions
(https://javascript.info/arrow-functions-basics)
Date: 24 Jan 2023
*/
function arrowFunction(){

    let ask = (question, yes, no) => confirm(question) ? yes() : no();

    /* Alternatively, after looking at the braces for body answer.
    function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
    }
    */

    ask(
        "Do you agree?",
        () => alert("You agreed."),
        () => alert ("You canceled the execution.")
    );
}
