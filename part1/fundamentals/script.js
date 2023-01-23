/* Script file for modern js practice
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

/* If else (https://javascript.info/ifelse#the-name-of-javascript)
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