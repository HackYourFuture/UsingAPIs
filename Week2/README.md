# Reading Material Using API's Week 2

## Agenda

These are the topics for week 2:

1. Application Programming Interface (API)
   - Public/private APIs
   - Connecting with APIs
2. Fetch API
3. Async/Await
   - Catching errors with try/catch

## 0. Video Lectures

Your teacher Stasel has made video lectures for this week's material. You can find them here: [Videos 9](https://www.youtube.com/playlist?list=PLVYDhqbgYpYVchJ9QQ3rC2WxYKrOiceYX)

<a href="https://www.youtube.com/playlist?list=PLVYDhqbgYpYVchJ9QQ3rC2WxYKrOiceYX" target="_blank"><img src="../assets/stasel.png" width="600" height="350" alt="HYF Video" /></a>

## 1. Application Programming Interface (API)

Whenever we talk about software development, we'll inevitably end up talking about `Application Programming Interfaces`, or APIs for short. But what is all the fuss about?

The first thing we need to understand is that API means different things to different people. Some people use it to refer to a complete application (frontend + backend), others use it to only refer to the server, or there's even people who use it to refer to any part of an application (i.e. "frontend API"/"server API")

For our purposes it's useful to stick to one definition, while keeping in mind that others will use it differently. Here's the definition we'll use:

```markdown
An Application Programming Interface (API) is an interface to an application. It's the point of connection for any other application, in order to communicate with it. The API defines the terms of how to connect to it.
```

You can think of an API as a wall socket:

![Wall Socket](./../assets/API.png)

As you can see on the image, the wall socket has a certain shape. This shape defines in what way something can connect to it. If you were to use a plug that had a different shape, it would never fit and thus never be able to connect. But if you had a plug that was in the correct shape, you got plug it in and proceed to connect to whatever is behind the socket (which in this case is the service of electricity).

In a way, you could say that an API is the frontend to an application. It's similar to the frontend part of a website. The biggest difference is, however, that instead of giving a way for human users to interact with it, an API gives a way for other applications to interact with it.

For more research, check out the following resources:

- [APIs Are Like User Interfaces - Just With Different Users in Mind](https://www.programmableweb.com/news/apis-are-user-interfaces-just-different-users-mind/analysis/2015/12/03)
- [What are APIs - series](https://www.youtube.com/watch?v=cpRcK4GS068&list=PLcgRuP1JhcBP8Kh0MC53GH_pxqfOhTVLa)
- [APIs for Beginners](https://www.youtube.com/watch?v=GZvSYJDk-us)

### Public/private APIs

There are 2 different types of APIs: **public** and **private** APIs.

An API is **public** when software companies publish parts of their software to be freely used by developers from the outside world. If you were to integrate the Facebook API as a login system in your application, you would be using their API as a public API.

Conversely, there are also **private** APIs: software companies that grant access to parts of their backend applications to internal developers only, in order to develop new services to be used either internally or for the outside world.

In reality, there are way more private than public APIs. This is because it's usually in the company's best interest to keep their code base hidden from the public eye: it would be like giving your secret recipe away for free.

Keep this in mind: in the real world **programming is only a means to serving a business end**. In this course you're learning how to program, to make nice-looking, well-functioning applications. However, this is always done within a business context. This is to say: does this software lead to making more money/gaining more popularity/or the achievement of any other business goal?

- [The Business Impact of Private, Partner and Public APIs](https://www.youtube.com/watch?v=Bk50AYGvs-g)

### Connecting with APIs

A big part of what applications do is **moving data from one place to another**. Let's say you are on the HackYourFuture website and feel like donating some money. First of all, that's very nice of you! You head out to the website and click on the donate button. You type in the amount and click on "donate". You'll notice you immediately get redirected to a different website, namely checkout.stripe.com. How did Stripe know how to do this?

It's because the HackYourFuture website sends a **HTTP Request** to Stripe. The request basically says "Hey Stripe, some user from the HackYourFuture site wants to make a digital payment, can you handle that?". As a response Stripe answers "Of course, send the user to this specific URL and I'll take it from there!".

> Anytime a request to an API is made this is called a `HTTP Request`. However, in practice people use different terms for the same thing. Synonyms for `HTTP Request` are `API call/request`, `Network call/request`, `Web request/call` or`HTTP call`. Which do you prefer?

A HTTP Request has to be made using a special method. The browser gives us two of them: `XMLHttpRequest` and `Fetch API`. `XMLHttpRequest` (or XHR for short) is the older, more verbose method. It looks like this:

```js
// 1. Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// 2. Configure it: GET-request for the URL /article/.../load
xhr.open('GET', '/article/xmlhttprequest/example/load');

// 3. Send the request over the network
xhr.send();

// 4. This will be called after the response is received
xhr.onload = function() {
  if (xhr.status != 200) {
    // analyze HTTP status of the response
    alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  } else {
    // show the result
    alert(`Done, got ${xhr.response.length} bytes`); // response is the server
  }
};

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    alert(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    alert(`Received ${event.loaded} bytes`); // no Content-Length
  }
};

xhr.onerror = function() {
  alert('Request failed');
};
```

This way of making HTTP Requests is outdated (and not recommended to use), but it's good to be aware of it as you might still see it in old code bases.

The newer way of making HTTP Requests involves using the `Fetch API`. You'll learn more about that next week!

For further study of how to make HTTP Requests, check out the following resources:

- [Working with APIs in JavaScript](https://www.youtube.com/watch?v=ecT42O6I_WI)
- [Making HTTP Requests in JavaScript](https://www.kirupa.com/html5/making_http_requests_js.htm)

## 2. Fetch API
Last week you learned about making HTTP Requests. You learned how to do this using the `XHR` object, which we can access through the browser's `window` object.

Now as we've learned in the previous sections, JavaScript as a language evolves continually. But so do browsers! New features get added to increase the user experience and make life easier for developers.

One of those features added to browsers is an upgraded version of the XHR object. It's called the `Fetch API` and it's the modern way to making HTTP Requests. It incorporates Promises, making it easier to handle your server responses. Here's a basic example:

```js
fetch('https://pokeapi.co/api/v2/pokemon')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log('Pokemon data', data);
    return data;
  })
  .catch(error => {
    console.log('err', error);
  });
```

Where is this function defined, you may wonder? Simple: it's found in the global `window` object in the browser. You can check it out by opening your console in the browser. Type in `fetch` and you'll get back a function definition.

When your JavaScript file is loaded into the DOM, it automatically will have access to any of the browser's web APIs (one if which is the `Fetch API`). That's why you can use it in your JavaScript files.

> Keep in mind that `fetch` only works on newer browser versions. To figure out which browsers can use fetch, check [this](https://caniuse.com/#feat=fetch) out.

To learn more and practice with the `Fetch API`, check out the following:

- [Fetch API Introduction](https://www.youtube.com/watch?v=Oive66jrwBs)
- [Sending JavaScript Http Requests with the fetch() API](https://www.youtube.com/watch?v=23hrM4saaMk)
- [Fetch() - Working with Data and APIs in JavaScript](https://www.youtube.com/watch?v=tc8DU14qX6I)

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

## Finished?

Are you finished with going through the materials? High five! If you feel ready to get practical, click [here](./MAKEME.md).
