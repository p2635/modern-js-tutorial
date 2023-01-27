<h1>Data Types - Written Assignments</h1>

<h1>Contents</h1>

- [Methods of primitives](#methods-of-primitives)

# Methods of primitives

**Can I add a string property?**

> Consider the following code:
>
> ```js
> let str = "Hello";
>
> str.test = 5;
>
> alert(str.test);
> ```
>
> What do you think, will it work? What will be shown?

1. A string primitive is called initially as "Hello"
2. On line 3, `str.test = 5`, the coder attempts to create a new property with the number `5`
3. There is a String object wrapper, but I'm not certain if a new property can be assigned to it.
4. Even if it was possible, the `test` property disappears because special objects are destroyed.
5. Assuming that is the case `alert(str.test)` would attempt to access an undefined property. I think that it will either:
   1. Fail with an error (because String is a special obj wrapper), or
   2. Show 'undefined' in the alert box.

I was almost correct on my 5th point after reviewing the solution. The behaviour depends on strict mode, 5.1 applies on line 3 (meaning an error appears on assignment). Otherwise, 5.2 applies at the end, which is the answer I got right.
