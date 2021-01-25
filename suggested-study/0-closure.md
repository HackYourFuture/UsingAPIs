## 4. Closures

### Explanation

Credits to Yash:
A closure is when inner function remembers the environment in which it was created even after the outer function has returned.

One powerful use of closures is to use the outer function as a factory for creating functions that are somehow related.

In the code snippet underneath we can see that the `carColor` function has still got access to the outer function's properties like `wheels`, `seats` and `brand` even after the function `manufactureCar` has returned. We can then use the `carColor` as a factory to create multiple cards of the same type but with a different color.

### Example

```JavaScript
function manufactureCar() {
  const wheels = 4;
  const seats = 5;
  const brand = 'Some Brand';

  return function carColor(color) {
    return {
      wheels,
      seats,
      brand,
      color,
    }
  };
}

const basicCar = manufactureCar();

const redCar = basicCar('red');
const blueCar = basicCar('blue');
const greenCar = basicCar('green');
```

```Javascript
{
  'use strict';

  const printName = () => {
    const message = 'My name is ';

    const displayName = name => {
      console.log(`${message}${name}`);
    }

    return displayName;
  };

  const name = printName();
  name('Yash Kapila');
}
```

### Exercise

### Essence

---

## 3. Closures

Simply put, a closure is a function that is defined inside another function. This special function has access to the outer scope (and thus its variables), the scope that's created by the function that contains the closure function.

That's nice and all, but in order to really understand what it is and why we need it we need to take a look at another concept.

### Why do we need closures?

Closures are commonly used to give objects data privacy. We don't want certain data to be available globally. Think of it as "keeping something a secret. Take, for example, the following situation:

> You want to log in to your email account, so you need a password. Usually you have that password in your head, or somewhere written down in a place that can only be accessed in a certain way. It's not out there in public, able to be accessed by anyone.

In this example your password is the data you want to keep locally scoped. Your act of logging in is the inner function. The outer function could be your act of being on the computer, where your password is stored in a file somewhere.

For further study please check the following resources:

- [The Ultimate Guide to Execution Contexts, Hoisting, Scoping and Closures in JavaScript](https://www.youtube.com/watch?v=Nt-qa_LlUH0)
- [Understanding Closures](https://www.youtube.com/watch?v=rBBwrBRoOOY)
- [Master the JavaScript interview: what is a closure](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36)
- [I never understood JavaScript closures](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)
