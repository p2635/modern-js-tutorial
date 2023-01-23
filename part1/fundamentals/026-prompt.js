/* Prompt (https://javascript.info/alert-prompt-confirm#tasks)
Date: 23 Jan 2023
Author: Philip Wong
*/

'use strict'; // This enables new stuff, it can break old code.

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
