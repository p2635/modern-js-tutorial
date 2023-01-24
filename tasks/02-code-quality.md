<!-- omit in toc -->
# Code Quality - Written Assignments

- [Coding style](#coding-style)
- [Automated testing with Mocha](#automated-testing-with-mocha)

# Coding style

**Bad style**

> What’s wrong with the code style below? Fix it.
> 
> ```js
> function pow(x,n)
> {
>   let result=1;
>   for(let i=0;i<n;i++) {result*=x;}
>   return result;
> }
> 
> let x=prompt("x?",''), n=prompt("n?",'')
> if (n<=0)
> {
>   alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
> }
> else
> {
>   alert(pow(x,n))
> }
> ```

I'm going to do this manually, no linting tools allowed for this exercise!

```js
function pow(x, n) {
  
  let result = 1; 
  
  for(let i = 0; i < n; i++) {
    result *= x; 
    }
  
  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if(n <= 0) {
  alert(`Power ${n} is not supported, please enter an
    integer number greater than zero`);
} else {
  alert(pow(x, n));
}
```

Rules that I applied:

1. Egyptian style for the opening braces.
2. Spaces added in binary statements.
3. Grouping logical statements together.
4. Variable declarations on each line.
5. Added missing semicolon delimiters.
6. `} else {` on one line.
7. The line with the long string broken into two lines.

What I missed: I can expand add spaces to `alert(pow(x, n));` so it becomes `alert( pow(x, n) );`

# Automated testing with Mocha

**What's wrong in the test?**

> What’s wrong in the test of pow below?
> 
> ```js
> it("Raises x to the power n", function() {
>   let x = 5;
> 
>   let result = x;
>   assert.equal(pow(x, 1), result);
> 
>   result *= x;
>   assert.equal(pow(x, 2), result);
> 
>   result *= x;
>   assert.equal(pow(x, 3), result);
> });
> ```
> 
> P.S. Syntactically the test is correct and passes.

My answers:

1. There are three tests in one, it's better to split this for modular tests and readability.
2. Alternatively to point 1, you could implement a 'makeTest' loop like the tutorial explains.
3. Limited test coverage, the title is 'Raises x to the power n'. But what it is really testing is 'Raises 5 to the power 3'.

After looking at the solution, ther was a few things I missed:

1. The three tests that I suggested, they can be wrapped under one `describe` section.
2. The test name can include the result e.g. 'Raises 5 to the power 3 equals 125'
3. Another reason to split the tests is to more easily debug. If you went with the 'all in one' approach, you have to spend more time fixing tests, than fixing the code.
