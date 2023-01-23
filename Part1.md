# Part 1 - Written Assignments

## Variables ([external link](https://javascript.info/variables#tasks))

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

## Data types ([external link](https://javascript.info/types#tasks))

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

##  Operators ([external link](https://javascript.info/operators#tasks))

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

**Show the sign** [(see my code)](https://github.com/p2635/modern-js-tutorial/blob/443fd059d6086927bddf3636a2122f66eab8987c/part1/fundamentals/script.js#L45)

> Using if..else, write the code which gets a number via prompt and then shows in alert:
>
>* 1, if the value is greater than zero,
>* -1, if less than zero,
>* 0, if equals zero.
>
> In this task we assume that the input is always a number.

 