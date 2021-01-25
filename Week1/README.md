# Reading Material Using API's Week 1

## Agenda

These are the topics for week 1:

1. Synchronous vs. asynchronous
   - Synchronous
   - Asynchronous
   - Introducing asynchronicity using callbacks 
2. Promises
   - Callback Hell
   - Promise States
   - Chaining
   - Benefits
3. The Event Loop


## 0. Video Lectures

Your teacher Stasel has made video lectures for this week's material. You can find them here: [Videos 1, 2, 6, 7](https://www.youtube.com/playlist?list=PLVYDhqbgYpYVchJ9QQ3rC2WxYKrOiceYX)

<a href="https://www.youtube.com/playlist?list=PLVYDhqbgYpYVchJ9QQ3rC2WxYKrOiceYX" target="_blank"><img src="../assets/stasel.png" width="600" height="350" alt="HYF Video" /></a>

## 1. Synchronous vs. asynchronous

### Synchronous

In the previous module you've learned about **control flow**. In short: it's the order in which the computer executes statements in a script. In JavaScript this goes from left to right, top to bottom.

Let's look at code execution from another angle. The program that executes your code can do it in two basic ways: synchronous or asynchronous. Whenever code blocks are executed line after line (from top to bottom) we call this **synchronous execution**. However, when code blocks can be executed **without having to wait until a command ends**, we call this **asynchronous execution**. This is illustrated in the following diagram:

![Sync vs. Async](../assets/javascript-sync-vs-async.png)

Now imagine the following scenario:

> Noer wants to have breakfast but he doesn't have any food at home. He decides he want to eat oatmeal. The ingredients (oats and milk) can be bought at the supermarket. How to do this? First Noer takes a shower. Then he puts on some clothes. Then some shoes. Then he opens the door and goes outside. Then he jumps on the bike and goes to the closest supermarket. After looking for some time he finds the ingredients. Then Noer buys the ingredients. Then he jump back on the bike and go home. Then he mixes the ingredients and makes oatmeal. Then Noer eats and feels amazing!

In this example, each action could only happen after the previous has been completed. Noer can't put on his shoes, while taking a shower. Or, he can't eat oatmeal while he buys the ingredients.

As you can see, each action is executed in a synchronous manner. This is to say: in a logical order sequentially and only one action at a time.

**This is also how JavaScript by default operates**. Only one operation can happen at a time. If something else wants to start, it has to wait until the current action has finished.

### Asynchronous

Sometimes we want to do multiple things at the same time, without each action to be dependent on each other. Asynchronous execution avoids this bottleneck. You are essentially saying, “I know this function call is going to take a great deal of time, but my program doesn’t want to wait around while it executes.” Consider the following scenario:

> Wouter is feeling hungry, so he decides to go to a restaurant. He arrives there and gets into the line to order food. After ordering he takes a seat and, while he waits, reads a book. Occassionally he looks around and sees different things happening: new people enter the restaurant, some people get their food served and others are just talking. After a short while Wouter's food arrives and it's time to dig in!

In this example Wouter reads a book, but that doesn't affect his meal from being prepared. While his meal is prepared there are other people walking around, eating or just talking with each other. In short: multiple things are happening simultaneously and every event is not dependent upon another.

This does not happen by default in JavaScript, and needs to be invoked. A way to do that is by using `callbacks`, which you'll be learning about in the next section.

### Introducing asynchronicity using callbacks

Imagine the following situation:

> It's 15.00 and you're studying at home for an exam on the next day. Suddenly, your phone rings. You pick up and find it's your best friend! They ask if you'd like to hang out later. What do you do? On the one hand, you'd love to hang out have fun. On the other hand, you really should study some more. You don't know so you tell your friend that you're going to _call back_ later with your answer. You end the conversation and go back to studying. Maybe you take a break or have a snack as well. On the other line your friend hangs up the phone and continues along with their day: they go out grocery shopping, cleaning the house and cooking dinner. After finishing your studies you call your friend and makes plans to go out together.

This example illustrates the concept of **asynchronicity**: there are multiple processes happening simultaneously, without any single thing being dependent upon another. Your friend is not waiting by the phone until you have the answer. Or in technical terms: until the callback (which is you) has the return value (the answer to your friend's request to hang out).

This is the utility of `callbacks`: they allow us to introduce asynchronicity into the control flow of an application.

Study the following resources to learn more about the importance of callbacks:

- [Asynchronous JavaScript](https://www.youtube.com/watch?v=YxWMxJONp7E)
- [Understanding JavaScript Callbacks](https://www.youtube.com/watch?v=Nau-iEEgEoM)
- [Callback Functions](https://www.youtube.com/watch?v=QRq2zMHlBz4)

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

## 3. The Event Loop

If a webpage contains JavaScript, then the browser knows it has to execute the instructions contained in the script files. But how does the browser know what to do first? This is where the `Event Loop` comes in.

Note: while this mechanism is important to be aware of, keep in mind that you won't be using it actively in development.

In simple terms, the `Event Loop` is a mechanism that operates in the browser. It keeps track of the order of execution of JavaScript commands. consists of 4 parts:

1. Heap. This is where the browser assigns space in memory to each process
2. Call Stack. This is the amount of JavaScript commands (read: function calls and events) that need to be executed
3. Web APIs. These are objects (like the document) and functions (like XMLHttpRequest) that can be used within the JavaScript commands found in the Call Stack
4. Callback Queue. This is the "waiting line" for asynchronous function calls

To see it in action check out the following resources:

- [What the heck is an event loop?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- [JavaScript Event Loop](https://www.youtube.com/watch?v=XzXIMZMN9k4)
- [Loupe](http://latentflip.com/loupe/?code=!!!)

## Finished?

Are you finished with going through the materials? High five! If you feel ready to get practical, click [here](./MAKEME.md).
