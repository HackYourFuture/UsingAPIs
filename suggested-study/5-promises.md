## 2. Promises

### Callback Hell

By now you should've had some practice using callbacks. To reiterate, we use callbacks **as a way to create asynchronicity** in our application: we want to enable our application to do multiple things simultaneously.

But what if you want to have callbacks within callbacks... within callbacks? This will lead to what is known as **callback hell**.

- [Callback Hell](http://callbackhell.com/)

This is where `Promises` come in. The idea of the `Promise` is a product of the evolution within the JavaScript language. A bunch of JavaScript developers wanted to figure out how to solve the problem of callback hell and this is what they came up with. Here's a basic example:

```js
const promise = new Promise(function(resolve, reject) {
  if (true) {
    resolve('It has succeeded!');
  } else {
    reject('It has failed...');
  }
});
```

### Promise States

A promise can be in 1 of 3 states:

1. Pending: The asynchronous code is being executed, with no result yet
2. Fulfilled (resolved): The asynchronous code has successfully been executed without problems
3. Rejected: The asynchronous code has failed because of some error

When a Promises is executed it will first execute the asynchronous code inside. In this process it will go into the `pending` state. After, depending on if it succeeded or not, it will be `resolved` or `rejected`.

### Chaining

What if you need to perform several asynchronous operations, that depend on the result of the one that came before it? For that we can use the `.then()` method: a special function, given to us by the Promise object, that allows us to directly use the return value of the asynchronous operation that happened before. Here's an example:

```js
new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000); // We wait 1 second and then resolve with value 1
})
  .then(function(result) {
    console.log(result); // Result: 1
    return result * 2;
  })
  .then(function(result) {
    alert(result); // Result: 2
    return result * 2;
  })
  .catch(error => {
    console.log(error);
  });
```

By chaining the Promise we can gain greater control over the results of our asynchronous operations!

### Benefits

The concept of a Promise, in execution, doesn't add anything new. It does exactly what callbacks aim to do, which is enabling `asynchronous actions`: for example, clicking a button to load in an image, while still being able to navigate the webpage.

So what are the benefits of using a Promise over a callback? Here's a few:

1. It makes writing asynchronous JavaScript code more readable for you, the developer. In effect, you could call Promises the updated version of callbacks. Callbacks version 2.0.
2. Better error handling, because of the `catch` block attached at the end. When something goes wrong within the Promise structure, it will throw an error. This error will then be caught and handled within the `catch` block.

Go through the following resources to learn more about Promises:

- [JavaScript Promises for Dummies](https://scotch.io/tutorials/javascript-promises-for-dummies)
- [Let's learn ES6 - Promises](https://www.youtube.com/watch?v=vQ3MoXnKfuQ)
- [JavaScript Promise in 100 Seconds](https://www.youtube.com/watch?v=RvYYCGs45L4)
- [A Simple Guide to ES6 Promises](https://codeburst.io/a-simple-guide-to-es6-promises-d71bacd2e13a)

---

## 1. Promises

### Explanation

- JS versions https://www.w3schools.com/js/js_versions.asp
  - the javascript language evolves, new things are added and some thing become obsolete
- It's a way to introduce asynchronicity to your application
- Makes asynchronous code read like it's synchronous

In the examples `setTimeout` is used to illustrate asynchronous code. In the real world there will be some code doing useful work here, for example `fetch`.

**Callback**

```javascript
let didFinishHomework = true;
let doHomeWork = function(cb) {
  setTimeout(function() {
    if (didFinishHomework) cb(null);
    // call callback function with NO error and no data
    else cb(new Error('homework not done, too lazy')); // call callback function with error
  }, 1000);
};

doHomeWork(function(err) {
  if (err) console.warn(err.message);
  else console.log('home work is done now');
});
```

**Promise**

```javascript
let didFinishHomework = true;
let promiseToDoHomeWork = new Promise(function(resolve, reject) {
  setTimeout(function() {
    if (didFinishHomework) resolve();
    // goto then
    else reject(new Error('homework not done, too lazy')); // goto catch and pass the error
  }, 1000);
});

promiseToDoHomeWork
  .then(function() {
    console.log('home work is done now');
  })
  .catch(function(err) {
    console.warn(err);
  });
```

**!!! Students should watch this video !!!**

- https://youtu.be/RvYYCGs45L4

### Example

#### Nested callback/promises example

```javascript
let attendClass = function(cb) {
  setTimeout(function() {
    if (true) cb(null, 'I attend the class');
    // call the callback function with no Error and some data
    else cb(new Error('class not attended, stayed home')); // call the callback function with an Error
  }, 1000);
};

let didFinishHomework = true;
let doTheHomeWork = function(message, cb) {
  setTimeout(function() {
    if (didFinishHomework) cb(null, message + ' then I did the homework');
    // call the callback function with no Error and some data
    else cb(new Error('homework not done, was lazy')); // call the callback function with an Error
  }, 1000);
};

let submitHomeWork = function(message, cb) {
  setTimeout(function() {
    if (true) cb(null, message + ' so I submit my homework');
    // call the callback function with no Error and some data
    else cb(new Error('homework not submited, github is down')); // call the callback function with an Error
  }, 1000);
};

// call attendClass, after it is finished call doTheHomeWork then submitHomeWork. In each step pass the output of the previous step. In case of an error show it in the console

attendClass(function(err, data) {
  if (err) console.warn(err.message);
  else
    doTheHomeWork(data, function(err1, data1) {
      if (err1) console.warn(err1.message);
      else
        submitHomeWork(data1, function(err2, data2) {
          if (err2) console.warn(err2.message);
          else console.log(data2);
        });
    });
});
```

Mention how this nested structure is hard to understand and read. Multiple variables with similar names and error handling is all over the place.
Simulate an error in doTheHomeWork by setting `didFinishHomework = false` and run the example again

```javascript
let attendClass = function() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (true) resolve('I attend the class');
      // goto then and pass the data
      else reject(new Error('class not attended, stayed home')); // goto catch and pass the error
    }, 1000);
  });
};

let didFinishHomework = true;
let doTheHomeWork = function(message) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (true) resolve(message + ' then I did the homework');
      // goto then and pass the data
      else reject(new Error('homework not done, was lazy')); // goto catch and pass the error
    }, 1000);
  });
};

let submitHomeWork = function(message) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (true) resolve(message + ' so I submit my homework');
      // goto then and pass the data
      else reject(new Error('homework not submited, github is down')); // goto catch and pass the error
    }, 1000);
  });
};

attendClass()
  .then(function(result) {
    return doTheHomeWork(result);
  })
  .then(function(result) {
    return submitHomeWork(result);
  })
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    // catches all errors
    console.warn(error.message);
  });
```

Simulate an error in doTheHomeWork by setting `didFinishHomework = false` and run the example again.

- Promise.all

Imagine that you are cleaning your house. If you are going to to it alone then it will take you the whole day. However if you ask your friend to help then you can be done in half the time.

```javascript
Promise.all([cleanKitchen('Me'), cleanBathroom('friend')]).then(function([
  res1,
  res2,
]) {
  console.log('all finished');
});
```

- Promise.race

Sometimes I get really hungry. Then I want to eat as soon as possible. So I order a pizza. But I never know how long it will take for the pizza to arrive. And I am really hungry. So I start frying some potatotes. When at one of them is ready either the pizza has arrived or the frites are done then I will eat and I do not have to wait for the other one.

```javascript
Promise.race([fryPotatoes(), orderPizza()]).then(function(food) {
  console.log('I am eating: ' + food);
});
```

### Exercise

#### Easy exercise (see difficult exercise alternative below)

**Part 1**
Rewrite the following code to use promise instead of callbacks. _As preparation for `fetch`_

```javascript
{
const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=amsterdam&appid=316f8218c0899311cc029a305f39575e`;

function fetchResourceAsCallback(url, cb) {
  const oReq = new XMLHttpRequest();
  oReq.open('GET', url);
  oReq.send();
  oReq.addEventListener('load', function (event) {
    const response = JSON.parse(this.response);
    if (response.code >= 400) {
      // error
      cb(new Error("Failed to get because:"+response));/´// call callback function with an error
    } else {
      //success
      cb(null, response); // call callback function with NO error and pass the response
    }
  });
}

fetchResourceAsCallback(WEATHER_URL,
  function (err, data) {
    if ( err )
      console.warn(err.message);
    else
      console.log(data);
 }
);

function fetchResourceAsPromise(url) {
  // your code goes in here
}

fetchResourceAsPromise(WEATHER_URL)
.then(function (result) {
  console.log(result);
})
.catch(function (err) {
  console.warn(err.message);
});
}

```

**Part 2**

Use `Promise.all` to load data for multiple cities in parallel. Ask students to discuss in which scenarios it would be better to load data in parallel. In what scenarios is loading data in parallel not better.

```javascript
const URLS_TO_LOAD = [
  'https://samples.openweathermap.org/data/2.5/weather?q=London&appid=316f8218c0899311cc029a305f39575e',
  'https://api.openweathermap.org/data/2.5/weather?q=amsterdam&appid=316f8218c0899311cc029a305f39575e',
];
```

- Hint: use `map` to convert from an array of URLs to an array of promises.

**Alternative exercise - Cooking pasta**

**❗❗❗ Difficult exercise ❗❗❗**

> Async can be hard to understand without real live example. Cooking is a great example of mixed synchronous and asynchronous tasks. In this assignment we'll cook pasta with promises 💍

Let's say we want a program to cook some pasta. Some of the steps involved in cooking pasta are:

1. Gathering the ingredients (pasta, garlic, tomatoes, sage, butter)
2. Cutting the garlic
3. Cutting the tomatoes
4. Cooking the water
5. Cooking the pasta
6. Baking the garlic
7. Baking the tomatoes
   X. Mixing the pasta with sauce

If we do this synchronously there is no chance of it becoming a good meal because the pasta would be cold by the time the vegetables are ready. It would also take way too long this way. So let's fix that!

1. Think about how to do this asynchronously; which tasks could be run at the same time? What steps should wait for what other steps? Try to write down a basic recipe (don't write any code yet!)
2. Now convert your recipe to pseudocode (in markdown). The point is to name functions and show which functions call which other functions. The logic should be there but we'll write the code in the next step.
3. Write the actual code using promises. Add timeouts to each task (estimate how many minutes a task would take and then set the timeout to that many seconds so 8 minutes for cooking pasta would be 8 seconds in your programme)
4. Can you get the code to work like you would cook pasta in the kitchen? Try using Promise.all if you want to wait for several tasks to finish.

<!--- Here is my own attempt at completing the exercise. It's actually pretty tough to get the whole thing working with promises so maybe see how far students can get. https://codepen.io/Razpudding/pen/Keygge --->

> Async await really helps simplify asynchronous (promisified) code. The previous example can be improved by applying it.

5. Try rewriting your previous attempt using Async/Await. ⏰🍝⏰

<!--- Here is my solution. It's a lot cleaner than the promises version but could still use some work. Would also be nice if the changes were reflected in the DOM. https://codepen.io/Razpudding/pen/RJZeJO --->

### Essence

- It's the accepted solution to [callback hell](http://callbackhell.com/)
- in terms of features it does not offer something new, everything one can do with promises could also be done with callbacks but it is easier to write and read the code when promises are used
