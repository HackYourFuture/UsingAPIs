## 3. Async/Await

Last week you learned about Promises. To recap, here's what we learned: in order to introduce **asynchronicity** in our applications we use `callbacks`. This allows us to perform multiple operations simultaneously, i.e. fetch data while a user is still able to navigate the page.

At first we learned about callbacks, as a way to do this:

```js
function someFunc(param1, callback) {
  const result = callback(param1);
  return result;
}
```

Then we learned about how Promises are an improvement upon callbacks, by providing the developer with a more readable syntax that avoids **callback hell**. Here's the basic structure again:

```js
new Promise(reject, resolve).then(...);
```

And now we've arrived at the latest upgrade of the callback mechanism: `async/await`. This construct is part of **ECMAScript 6** and its main benefit is to make using callbacks even more readable. Here's how it might look in action:

```js
async fetchData () {
  const fetchedData = await fetch('https://randomuser.me/api/');
  const parsedData = await fetchedData.json();
  return parsedData;
}
```

How do we use it? We put the keyword `async` in front of the function declaration that will contain asynchronous code. Then in every line that returns a Promise we put the keyword `await` in front. That's it.

For more research, check the following resources:

- [The Evolution of Callbacks, Promises & Async/Await](https://www.youtube.com/watch?v=gB-OmN1egV8)
- [Async JS Crash Course - Callbacks, Promises, Async/Await](https://www.youtube.com/watch?v=PoRJizFvM7s)

### Catching errors

As you might have noticed, the `async/await` keywords don't give us a way catching errors like it does in the Promise object.

But before we get into that, we should define "catching errors" a little bit. By "catching errors" we mean:

1. that a line of code has caused an error (because of incorrect syntax or data type)
2. that the program has shutdown to prevent any other errors from happening
3. that the application gives feedback to the developer and/or user about where the error came from

In the Promise object, we can use the function `catch` to take care of errors. It takes in a callback, which automatically receives an error object. Here's an example:

```js
Promise.catch(function(error) {
  console.log(error);
});
```

With the `async/await` keywords, we don't get a `catch` function to use. So instead we have to use some other solution: the `try... catch` block. It's also an addition to the language, given to us by **ECMAScript 6**:

```js
  // This function will run. If anything goes wrong...
  async fetchData () {
    try {
    const fetchedData = await fetch('https://randomuser.me/api/');
    const parsedData = await fetchedData.json();
    return parsedData;
    } catch (err) {
      // ...the code in this block will execute. The error that has been created will now be inserted into `err`
      console.log('Oops, something went wrong!', err);
    }
  }
```

Learn more about it here:

- [JavaScript Try Catch & Error Handling ES6 Tutorial](https://www.youtube.com/watch?v=ye-aIwGJKNg)
- [Error handling, "try..catch"](https://javascript.info/try-catch)
