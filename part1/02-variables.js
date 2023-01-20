/* Variables (https://javascript.info/variables#tasks)
Date: 20 Jan 2023
Author: Philip Wong
*/

/* Task 1 - Working with variables
Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”).
*/
let name, admin;
name = "John";
admin = name;
alert(admin);

/* Task 2 - Giving the right name
Create a variable with the name of our planet. How would you name such a variable?
Create a variable to store the name of a current visitor to a website. How would you name that variable?
*/
let myPlanetName = 'Earth';
let currentUser = "John";

/* Task 3 - Uppercast const? (written task)

"Examine the following code:
const birthday = '18.04.1982';
const age = someCode(birthday);
Here we have a constant birthday for the date, and also the age constant.

The age is calculated from birthday using someCode(), which means a function call
that we didn’t explain yet (we will soon!), but the details don’t matter here,
the point is that age is calculated somehow based on the birthday.
Would it be right to use upper case for birthday? For age? Or even for both?

const BIRTHDAY = '18.04.1982'; // make birthday uppercase?
const AGE = someCode(BIRTHDAY); // make age uppercase?"
*/

/* My answer:
const BIRTHDAY;
const age;

It depends if we are reusing the birthday variables for different people.
If we are using it for different people, then both 'birthday' and age
are better served as 'let' (camelCase as 'birthday' and 'age').

If we are dealing with the same person then it makes sense for it to be
named 'BIRTHDAY'. For age, it is not known prior to the code running.
Therefore it makes sense to use camelCase in this instance.
*/
