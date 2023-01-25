<h1>Objects Basics - Written Assignments</h1>

<h1>Contents</h1>

- [Coding style](#coding-style)
- [Automated testing with Mocha](#automated-testing-with-mocha)

# Objects

**Hello, object**

> Write the code, one line for each action:
>
> 1. Create an empty object user.
> 2. Add the property name with the value John.
> 3. Add the property surname with the value Smith.
> 4. Change the value of the name to Pete.
> 5. Remove the property name from the object.

My answer:

```js
function helloObject() {
  let user = {};
  user.name = "John";
  user.surname = "Smith";
  user.name = "Pete";
  delete user.name;
}
```

**Check for emptiness**

> Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
>
> Should work like that:
>
> ```js
> let schedule = {};
> alert(isEmpty(schedule)); // true
> schedule["8:30"] = "get up";
> alert(isEmpty(schedule)); // false
> ```

My answer:

```js
function isEmpty(object) {
  for (let prop in object) {
    if (prop) return false;
  }
  return true;
}
```

After looking at the solution, I realized that I don't need to add `if(prop`. The loop only starts if the object has properties.

**Sum object properties**

> We have an object storing salaries of our team:
>
> ```js
> let salaries = {
>   John: 100,
>   Ann: 160,
>   Pete: 130,
> };
> ```
>
> Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
>
> If salaries is empty, then the result must be 0.

My answer:

```js
let sum = 0;
for (let salary in salaries) {
  sum += salary;
}
return sum;
```

Problems with my answer:

- The console.log output is 0JohnAnnPete.
- I iterate through keys instead of the values. I should use the pattern `object[key]`.
- I notice the keys are converted to strings in the output.
- The extra '0' in the output was intended for the negative case for empty salaries.

Rewriting the correct answer based on my errors:

```js
let sum = 0;
for (let person in salaries) {
  sum += salaries[person];
}
return sum;
```

- The value of sum is initialised with 0, which covers the criteria "If salaries is empty, then the result must be 0.".
- For each key in `person`, get the value and add it to sum.

**Multiply numeric property values by 2**

> Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
>
> For instance:
>
> ```js
> // before the call
> let menu = {
>   width: 200,
>   height: 300,
>   title: "My menu",
> };
>
> multiplyNumeric(menu);
>
> // after the call
> menu = {
>   width: 400,
>   height: 600,
>   title: "My menu",
> };
> ```
>
> Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
>
> P.S. Use typeof to check for a number here.

```js
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}
```

**Using "this" in object literal**

> Here the function makeUser returns an object.
>
> What is the result of accessing its ref? Why?
>
> ```js
> function makeUser() {
>   return {
>     name: "John",
>     ref: this,
>   };
> }
>
> let user = makeUser();
>
> alert(user.ref.name); // What's the result?
> ```

My answer (wrong): `this` is processed during call-time, so I think the result is the same as `user.name` (which is "John"). It's circular logic.

Lessons learned: The result is not what I thought, the alert actually shows `undefined`. This is because `this` is unbound. I was right about being processed during call-time, but I did not seem to understand this concept fully. This is what was actually going on:

1. When the user variable is declared, `makeUser()` is called and returns an object.
2. That object includes two properties, name (with string of "John") and ref (with the JS keyword `this`).
3. At that point in time, `this` is `undefined` because **the function is not invoked as a method of an object**. `this` only can refer to the name if it was declared as a method like `ref()` (and therefore `user.ref().name`).
4. This behaviour applies only when the JS script is running in strict mode.

**Create a calculator**

> Create an object `calculator` with three methods:
>
> - `read()` prompts for two values and saves them as object properties with names a and b respectively.
> - `sum()` returns the sum of saved values.
> - `mul()` multiplies saved values and returns the result.
>
> ```js
> let calculator = {
>   // ... your code ...
> };
>
> calculator.read();
> alert(calculator.sum());
> alert(calculator.mul());
> ```
