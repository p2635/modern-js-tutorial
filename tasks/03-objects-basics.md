<!-- omit in toc -->
# Objects Basics - Written Assignments

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
    user.name = 'John';
    user.surname = 'Smith';
    user.name = 'Pete';
    delete user.name;

}
```