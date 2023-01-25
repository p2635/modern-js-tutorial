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
