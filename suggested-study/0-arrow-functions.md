## 3. Arrow Functions

One of a programmer's favorite things to do is to write clean and concise code. `Arrow Functions` are a new way to write functions, given to us by the ECMAScript 6 (The software standard JavaScript is based upon) update of JavaScript.

It's a little different from regular functions, take a look:

```js
// ES5 Function
function addNum(num1, num2) {
  return num1 + num2;
}

// Arrow Function (stored in variable)
const addNum = (num1, num2) => {
  return num1 + num2;
};
```

If you've done some research, you may come to the following conclusions:

1. First of all, the Arrow Function is anonymous by design. If we want to refer to it, we should store it into a variable.
2. Secondly, the way Arrow Functions can be written can differ (while still working the same way). Sometimes you don't need the `()` if there's a single parameter. Sometimes you can `return` a value without use for the `return` keyword.

Another big important feature of Arrow Functions (and difference with ES5 functions) is the way they relate to the `this` keyword: instead of creating a new `this` object, it actually inherits it from the parent scope!

If this sounds incomprehensible still, not to worry. In the next section will dive deep into the `this` keyword: what it means and how we can make use of it.

For now, go through the following resources to learn more about why arrow functions are important:

- [JavaScript ES6 Arrow Functions](https://www.youtube.com/watch?v=h33Srr5J9nY)
- [Let's learn ES6 - Arrow Functions](https://www.youtube.com/watch?v=oTRujqZYhrU)
- [When (and why) you should use ES6 arrow functions — and when you shouldn’t](https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/)

### The `this` keyword

In everyday communication, we use words like "this" or "that" whenever we want to refer to things in the world or something someone said. It's similarly used in JavaScript, only instead of real-world things we refer to objects.

In JavaScript `this` refers to any object it's defined in. The global object, `window` is the default value of `this`. So if you go to your console right now and type `this`, you'll get back a reference to the `window` object. The same thing would happen if you to log `this` inside of your JavaScript file:

```js
console.log('what is', this);
```

However, this isn't the only value `this` can have. The moment we create a new object, we create a new `this` keyword that refers to only that object.

```js
const wouter = {
  firstName: 'Wouter',
  lastName: 'Kleijn',
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;
  },
};
```

In this example `this` refers to the complete `wouter` object. If we execute `wouter.getFullName()`, we get back the value of `wouter.firstName` and `wouter.lastName`.

```js
wouter.getFullName(); // Result: Wouter Kleijn
```

As you can imagine, this means that there can be multiple `this` keywords at play: the global `this` keyword (which refers to the `window` object) and a `this` keyword for every object that is created within the application.

Go through the following resources to learn more about `this`:

- [What is THIS in JavaScript? in 100 seconds](https://www.youtube.com/watch?v=YOlr79NaAtQ)
- [JavaScript "this" keyword](https://www.youtube.com/watch?v=gvicrj31JOM)
- [Understanding "this" in JavaScript](https://www.codementor.io/dariogarciamoya/understanding--this--in-javascript-du1084lyn)
