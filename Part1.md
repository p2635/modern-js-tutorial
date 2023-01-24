<!-- omit in toc -->
# Part 1 - Written Assignments

- [Variables](#variables)
- [Data types](#data-types)
- [Operators](#operators)
- [Type conversions](#type-conversions)
- [Comparisons](#comparisons)
- [Conditional branching: if, '?'](#conditional-branching-if-)
- [Logical operators](#logical-operators)
- [Loops: while and for](#loops-while-and-for)
- [The 'switch' statement](#the-switch-statement)

# Variables

External Link: https://javascript.info/variables#tasks

**Task 2 - Giving the right name**

Create a variable with the name of our planet. How would you name such a variable?
Create a variable to store the name of a current visitor to a website. How would you name that variable?

My answer:

```js
let myPlanetName = 'Earth';
let currentUser = "John";
```

**Task 3 - Uppercast const?**

Examine the following code:

```js
const birthday = '18.04.1982';
const age = someCode(birthday);
```

Here we have a constant birthday for the date, and also the age constant. The age is calculated from birthday using someCode(), which means a function call that we didn’t explain yet (we will soon!), but the details don’t matter here, the point is that age is calculated somehow based on the birthday.

Would it be right to use upper case for birthday? For age? Or even for both?

```js
const BIRTHDAY = '18.04.1982'; // make birthday uppercase?
const AGE = someCode(BIRTHDAY); // make age uppercase?"
```

My answer:

```js
const BIRTHDAY;
const age;
```

It depends if we are reusing the birthday variables for different people. If we are using it for different people, then both 'birthday' and age are better served as 'let' (camelCase as 'birthday' and 'age').

If we are dealing with the same person then it makes sense for it to be named 'BIRTHDAY'. For age, it is not known prior to the code running. Therefore it makes sense to use camelCase in this instance.

# Data types

External Link: https://javascript.info/types#tasks

**String quotes**

What is the output of the script?

```js
let name = "Ilya";
alert( `hello ${1}` ); // ?
alert( `hello ${"name"}` ); // ?
alert( `hello ${name}` ); // ?
```

My answers:

1. An alert box comes up then shows 'hello 1'
2. After closing alert box 1, an alert box comes up then shows 'hello name' (because "name" is a string)
3. After closing alert box 2, an alert box comes up then shows 'hello Ilya'

#  Operators

External Link: https://javascript.info/operators#tasks

**The postfix and prefix forms**

What are the final values of all variables a, b, c and d after the code below?

```js
let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?
```

My answers:

- Both a and b == 2 (both of them were incremented)
- c = 2 (prefix form, we return the value after the operation)
- d = 1 (postfix form, we return the value before the operation)

**Assignment result**

What are the values of a and x after the code below?

```js
let a = 2;
let x = 1 + (a *= 2);
```

My answers: 

* a == 4 because it was assigned during `a *= 2` which is the same as `a = a * 2`
* x == 5 because the result of a(4) was added to 1.

# Type conversions

> What are results of these expressions? Think well, write down and then compare with the answer.

My answers are added as comments in the code.

```js

// String concatentation, left to right
"" + 1 + 0 // "" becomes "1" then "10"
"$" + 4 + 5 // "$" becomes "$4" then "$45"
4 + 5 + "px" // "9px", 9 gets concatenated to "px"

// Math - types are converted to numbers.

// Strings
6 / "3" // 2
"2" * "3" // 6
"4" - 2 // 2
"  -9  " + 5 // -4, whitespace is removed
"  -9  " - 5 // -14, whitespace is removed
" \t \n" - 2 // -2, whitespace/tabs/newlines are removed

"" - 1 + 0 // -1, no concat with a subtraction operator (only works with +)
"4px" - 2 //  NaN, 'px' cannot be converted to a number for the operation

// Boolean
true + false // 1 + 0 = 1
null + 1 // 0 + 1 = 1

// undefined
undefined + 1 // NaN, can't convert to a number
```

I got one wrong: `"  -9  " + 5 // -4, whitespace is removed`. I forgot that strings get concatenated with +, so the right answer is `"  -9  5"`.

**Fix the addition**

> Here’s a code that asks the user for two numbers and shows their sum. It works incorrectly. The output in the example below is 12 (for default prompt values). Why? Fix it. The result should be 3.
>
> ```js
> let a = prompt("First number?", 1);
> let b = prompt("Second number?", 2);
> 
> alert(a + b); // 12
> ```

My answers:

* This is a question about type conversion, it's '12' because of string concatenation.
* To fix this, we can use the unary+ and rewrite the 4th line to `alert(+a + +b);`

# Comparisons

> What will be the result for these expressions?

My answers are added as comments in the code.

```js
5 > 4 // true
"apple" > "pineapple" // false since 'p' is greater than 'a'
"2" > "12" // false (same as 2 > 12)
undefined == null // true, special 'sweet-couple' rule
undefined === null // false, strict equality check
null == "\n0\n" // false, == for null/undefined does not come with type conversion
null === +"\n0\n" // false, strict equality check
```

I got one wrong: `"2" > "12" // false (same as 2 > 12)`. The answer is true because it's string comparison.

# Conditional branching: if, '?'

**if (a string with zero)**

> Will alert be shown?
>
> ```js 
> if ("0") {
>  alert( 'Hello' );
> }
> ```

An alert with "Hello' will be shown, "0" will evaluate to true since it is not an empty string.

**The name of JavaScript** [(see my code)](https://github.com/p2635/modern-js-tutorial/blob/443fd059d6086927bddf3636a2122f66eab8987c/part1/fundamentals/script.js#L32)

![](https://raw.githubusercontent.com/javascript-tutorial/en.javascript.info/ea7738bb7c3616bb51ff14ae3db2a2747d7888ff/1-js/02-first-steps/10-ifelse/2-check-standard/ifelse_task2.svg)

> Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’. If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

**Show the sign** [(see my code)](https://github.com/p2635/modern-js-tutorial/blob/638303a7701da88a18ce373e00370443790aef2b/part1/fundamentals/script.js#L45)

> Using if..else, write the code which gets a number via prompt and then shows in alert:
>
>* 1, if the value is greater than zero,
>* -1, if less than zero,
>* 0, if equals zero.
>
> In this task we assume that the input is always a number.

**Rewrite 'if' into '?'**

> Rewrite this if using the conditional operator '?':
> ```js
> let result;
>
> if (a + b < 4) {
>   result = 'Below';
> } else {
>   result = 'Over';
> }

My answer:

```js
let result = (a + b < 4) ? 'Below' : 'Over';
```

**Rewrite 'if..else' into '?'**

> Rewrite if..else using multiple ternary operators '?'. For readability, it’s recommended to split the code into multiple lines.
>
> ```js
> let message;
>
> if (login == 'Employee') {
>   message = 'Hello';
> } else if (login == 'Director') {
>   message = 'Greetings';
> } else if (login == '') {
>   message = 'No login';
> } else {
>   message = '';
> }
> ```

My answer:

```js
let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' :
    ''
```

# Logical operators

**What's the result of OR?**

> What is the code below going to output?
> `alert( null || 2 || undefined );`

My answer:

1. null returns false so it moves on to the next value.
2. The next value is 2 which is truthy, this gets alerted.
3. undefined is skipped (short-circuit evaluation).

**What's the result of OR'ed alerts?**

> What will the code below output?
> `alert( alert(1) || 2 || alert(3) );`

My answer:

1. `alert()` returns `None(undefined)` according to MDN web docs.
2. `alert(1)` will be `false` following my first point.
3. `2` is the next value and it's truthy, this gets alerted.
4. `alert(3)` is skipped (short-circuit evaluation).

What I missed: There is a step that happens after step 2, `alert(1)` still shows an alert even though it returns as false.

**What is the result of AND?**

> What is this code going to show?
> `alert( 1 && null && 2 );`

My answer:

1. && attempts to find the first falsy value.
2. 1 is truthy, the evaluation continues to the next one.
3. null is falsy so the alert will show 'null'.

**What is the result of AND'd alerts?**

> What is this code going to show?
> `alert( alert(1) && alert(2) );`

My answer:

1. && attempts to find the first falsy value.
2. `alert(1)` runs and shows '1' in an alert box.
3. `alert(1)` evaluates to false, because it returns `None(undefined)` according to MDN web docs.
4. Point 3 applies, this means the alert will finally show 'undefined' as the message.
5. `alert(2)` is skipped (short-circuit evaluation). 

**What is the result of OR AND OR?**

> What will the result be?
> `alert( null || 2 && 3 || 4 );`

My answer:

1. AND is highest precedence so (2 && 3) goes first.
2. (2 && 3) evaluates to true because 2 and 3 are positive numbers. 3 is returned since it's the last value between the two.
3. null is falsy so 3 is the first truthy value found by the OR operation.
4. An alert box is displayed with '3'.

**Check the range between**

> Write an if condition to check that age is between 14 and 90 inclusively.
> 
> “Inclusively” means that age can reach the edges 14 or 90.

```js
if(age >= 14 && age <= 90){
    // do something
}
```

**Check the range outside**

> Write an if condition to check that age is NOT between 14 and 90 inclusively.
> 
> Create two variants: the first one using NOT !, the second one – without it.

```js
let age; // Assign age somewhere down the line

// Variant 1
if(!(age >= 14 && age <= 90)){
    // do something
}

// Variant 2
if(age < 14 && age > 90){
    // do something
}
```

I almost got variant 2 correct but I should've used the OR like this `age < 14 || age > 90`. In our current reality, it's impossible to have a number satisfy both conditions.

**A question about "if"**

> Which of these alerts are going to execute?
> 
> What will the results of the expressions be inside if(...)?
> ```js
> if (-1 || 0) alert( 'first' );
> if (-1 && 0) alert( 'second' );
> if (null || -1 && 1) alert( 'third' );
> ```

Expression 1 will run:

* The 'if' part is `-1 || 0 = -1`
* -1 is truthy and this is returned.
* A box appears with the message 'first'.

Expression 2 will not run:

* The 'if' part is `-1 && 0 = 0`
* 0 is falsy and this is returned.

Expression 3 will run:

* The 'if' part is `-1 && 1 = 1` then `null || 1 = 1`.
* 1 is truthy and this is returned.
* A box appears with the message 'third'.

**Check the login** [(see my code)](https://github.com/p2635/modern-js-tutorial/blob/dbd9b3d7a978bb2c81f6439a0e5bfd86cf786051/part1/fundamentals/script.js#L60)

> Write the code which asks for a login with `prompt`.
>
> If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
>
> The password is checked as follows:
>
> * If it equals “TheMaster”, then show “Welcome!”,
> * Another string – show “Wrong password”,
> * For an empty string or cancelled input, show “Canceled”

The schema:

![](https://javascript.info/task/check-login/ifelse_task.svg)

# Loops: while and for

**Last loop value**

> What is the last value alerted by this code? Why?
> ```js
> let i = 3;
>
> while (i) {
>   alert( i-- );
> }

My answer: The last value alerted by this code is 1. The while loop ends when i becomes 0 (falsy).

**Which values does the while loop show?**

> For every loop iteration, write down which value it outputs and then compare it with the solution.
> 
> Both loops alert the same values, or not?
>
> ```js
> // The prefix form ++i:
> let i = 0;
> while (++i < 5) alert( i );
>
> // The postfix form i++
> let i = 0;
> while (i++ < 5) alert( i );
> ```

prefix form (recap: returns the value after the operation):

* i increments to 1 so the expression evaluates `(1 < 5)`. 1 gets alerted.
* This repeats until i gets incremented to 5 (`5 < 5` terminates the loop).
* The output is 1, 2, 3, 4.

postfix form (recap: returns the value before the operation).

* i increments to 1 but the expression still evaluates `(0 < 5)` since it's postfix.
* 1 gets alerted because it's separate to the comparison statement.
* This repeats until `i = 5` where `5 < 5` terminates the loop.
* The output is 1, 2, 3, 4, 5. The postfix form gets one more loop than prefix.
* Both loops do not alert the same values based on my other points.

**Which values get shown by the "for" loop?**

> For each loop write down which values it is going to show. Then compare with the answer.
>
> Both loops alert same values or not?
>
> ```js
> // The postfix form:
> for (let i = 0; i < 5; i++) alert( i );
> 
> // The prefix form:
> for (let i = 0; i < 5; ++i) alert( i );
> ```

My answer (WRONG): I expect the answer to be the same as the previous question. The only difference is that this uses the for loop format.

Correction: I failed to spot that the comparison statement is separate from the step. `i < 5` stands on its own for both loops, so they both output the same numbers.

**Output even numbers in the loop** [(see my code)](https://github.com/p2635/modern-js-tutorial/blob/616cf2411e299a5c3b3b8a61674e8745c250c7d0/part1/fundamentals/script.js#L87)

> Use the `for` loop to output even numbers from 2 to 10.

**Replace "for" with "while"** [(see my code)](https://github.com/p2635/modern-js-tutorial/blob/616cf2411e299a5c3b3b8a61674e8745c250c7d0/part1/fundamentals/script.js#L98)

> Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
>
> ```js
> for (let i = 0; i < 3; i++) {
>  alert( `number ${i}!` );
> }

**Repeat until the input is correct** [(see my code)](https://github.com/p2635/modern-js-tutorial/blob/616cf2411e299a5c3b3b8a61674e8745c250c7d0/part1/fundamentals/script.js#L132)

> Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
>
> The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
> 
> Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

I compared my answer `repeatUntilCorrect1()` to the solution on the website. My solution used 'while' and not 'do while' because the task did not instruct me to.

After a few hours, I implemented a do-while loop with `repeatUntilCorrect2()`  without looking at the solution. The solutions are similar but instead of doing `<= 100`, I did `< 101`.

**Output prime numbers** [(see my code)](https://github.com/p2635/modern-js-tutorial/blob/616cf2411e299a5c3b3b8a61674e8745c250c7d0/part1/fundamentals/script.js#L141)

> An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.
> 
> In other words, `n > 1` is a prime if it can’t be evenly divided by anything except 1 and n.
> 
> For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.
> 
> Write the code which outputs prime numbers in the interval from 2 to n.
> 
> For `n = 10` the result will be 2,3,5,7.
> 
> P.S. The code should work for any n, not be hard-tuned for any fixed value.

# The 'switch' statement

