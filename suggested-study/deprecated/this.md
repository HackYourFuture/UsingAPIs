## 3. The `this` keyword and its relationship with `scope`

### Explanation

- The environment(or scope) in which the line is being executed is know as “Execution Context”
- The object that `this` refers to, changes every time execution context is changed.
- Whatever is calling the function passes the `this` value to it by default.
- We can pass specific `this` by `.bind`, `.call` or `.apply`
- By default, “this” refers to global object which is `global` in case of NodeJS and `window` object in case of browser

### Example

#### this refers to new instance (constructors)

```javascript
function logColor() {
  // this inside the function refers to the calling javascript object
  console.log('This refers to: ', this);
  console.log('Color of this is: ' + this.color);
}
let dog = { age: 5, color: 'brown', logColor: logColor };
let car = { model: 'bmw', color: 'orange', logColor: logColor };

console.log('log color called with dog');
dog.logColor();
console.log('log color called with car');
car.logColor();
```

- In Javascript, property of an object can be a method or a simple value.
- When an Object’s method is invoked then “this” refers to the object which contains the method being invoked.

#### “this” refers to global object

```javascript
function logColor() {
  // this inside the function refers to the calling javascript object
  console.log('This refers to: ', this);
  console.log('Color of this is: ' + this.color);
}

console.log('log color called with no object');
logColor(); // no calling object so "this" refers to window by default
```

> Note: the value of “this” depends on how a method is being invoked as well.

#### “this” with call, apply methods

- These methods can be used to set custom value of `this` to the execution context of function, also they can pass arguments/parameters to the function

```javascript
function logColor() {
  // this inside the function refers to the calling javascript object
  console.log('This refers to: ', this);
  console.log('Color of this is: ' + this.color);
}
let cat = { likes: 'milk', color: 'white' };
logColor.call(cat); // calls the logColor function with cat as "this"
```

#### “this” with bind method

`bind` only create a copy of the function with the binded `this` inside without calling the function.

```
function callAfterOneSecond(cb) {
   setTimeout(function () {
      cb();
   }, 1000);
}
function logColor() {
    // this inside the function refers to the calling javascript object
    console.log('This refers to: ',this);
    console.log('Color of this is: '+this.color);
}
let cat = { likes: 'milk', color: 'white'};
let boundLogColor = logColor.bind(cat); // returns a function that can be executed later
console.log(boundLogColor);
// a few lines later
boundLogColor(); // executes logColor with cat as "this"

// callAfterOneSecond(boundLogColor);
```

> Note: If `strict mode` is enabled for any function then the value of “this” will be “undefined” as in strict mode, global object refers to undefined in place of windows object.

```
function foo() {
  'use strict';
  console.log("Simple function call")
  console.log(this === window);
}

foo();	//prints false on console as in “strict mode” value of “this” in global execution context is undefined.
```

#### “this” in arrow functions

- The `this` value inside the arrow function gets binded and calculated and assigned based on its wrapper/container/parent `this` value.
- The methods call(), apply(), and bind() will not change the value of this in arrow functions

Students will learn mroe about this when learning about classes in javascript.

### Excercise

In this excercise, let the students guess the result and then go line by line as if you were an interpreter and execute the code. Or use the debugger tools on devtools to execute line by line.

```javascript
let user = {
  a: 2,
  b: 3,
  print: function() {
    console.log(multiply(this.a, this.b));
  },
};
user.a = 5;
user.print();
user.b = 10;
function multiply(p, q) {
  return p * q;
}
```

Variant two (if students find variant one too easy)

```javascript
let user = {
  a: 2,
  b: 3,
  print: function() {
    multiply(this.a, this.b, function(total) {
      console.log(total);
      console.log(this.a * this.b);
    });
  },
};
user.a = 5;
user.print();
user.b = 10;
function multiply(p, q, callback) {
  callback(p * q);
}
```

### Essence

this is special keyword in javascript. this refers to different things depending on how a function is called.
