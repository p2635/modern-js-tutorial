<h1>Objects Basics - Written Assignments</h1>

<h1>Contents</h1>

- [Objects](#objects)
- [Object methods, "this"](#object-methods-this)

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

# Object methods, "this"

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

See code in `03-objects.js`.

**Chaining**

> There’s a ladder object that allows to go up and down:
>
> ```js
> let ladder = {
>   step: 0,
>   up() {
>     this.step++;
>   },
>   down() {
>     this.step--;
>   },
>   showStep: function () {
>     // shows the current step
>     alert(this.step);
>   },
> };
> ```
>
> Now, if we need to make several calls in sequence, can do it like this:
>
> ```js
> ladder.up();
> ladder.up();
> ladder.down();
> ladder.showStep(); // 1
> ladder.down();
> ladder.showStep(); // 0
> ```
>
> Modify the code of up, down and showStep to make the calls chainable, like this:
>
> ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
>
> Such approach is widely used across JavaScript libraries.

See code in `03-objects.js`.

**Constructor, operator "new"**

> Is it possible to create functions A and B so that new A() == new B()?
>
> ```js
> function A() { ... }
> function B() { ... }
>
> let a = new A();
> let b = new B();
>
> alert( a == b ); // true
> ```
>
> If it is, then provide an example of their code.

I don't know where to start with this. Usually you can simply point variable b to a. However, the question asks how to create functions A and B to get the same result. Since `new` always returns a new object, I fail to see how this is possible. a and b will always be different...right?

It turns out I was wrong:

> If return is called with an object, then the object is returned instead of `this`.

Example:

```js
let obj = {};

function A() {
  return obj;
}
function B() {
  return obj;
}

alert(new A() == new B()); // true
```

**Create new Calculator**

> Create a constructor function Calculator that creates objects with 3 methods:
>
> - read() prompts for two values and saves them as object properties with names a and b respectively.
> - sum() returns the sum of these properties.
> - mul() returns the multiplication product of these properties.
>
> For instance:
>
> ```js
> let calculator = new Calculator();
> calculator.read();
>
> alert("Sum=" + calculator.sum());
> alert("Mul=" + calculator.mul());
> ```

See code in `03-objects.js`.

**Create new Accumulator**

> Create a constructor `function Accumulator(startingValue)`.
>
> Object that it creates should:
>
> - Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
> - The read() method should use prompt to read a new number and add it to value.
>
> In other words, the value property is the sum of all user-entered values with the initial value startingValue.
>
> Here’s the demo of the code:
>
> ```js
> let accumulator = new Accumulator(1); // initial value 1
>
> accumulator.read(); // adds the user-entered value
> accumulator.read(); // adds the user-entered value
>
> alert(accumulator.value); // shows the sum of these values
> ```

I got this right, see code in `03-objects.js`.
