# Written assignments

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
