<!-- omit in toc -->
# Code Quality - Written Assignments

- [Coding style](#coding-style)

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
