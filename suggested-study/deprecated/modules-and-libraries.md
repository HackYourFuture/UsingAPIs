## 3. Modules & Libraries

### What's a module?

A `module` is a part of an application that contains usually a single functionality. For example, a single function that has only 1 job could be considered a module. For example:

```js
function addNums(num1, num2) {
  return num1 + num2;
}
```

If this little function has its own dedicated `.js` file and you can import it into another file, it's a module!

When developing applications you'll always be writing multiple functionalities in order for your software to work as expected. These can be written all in one file, and that would still work. The browser/operating system would be able to interpret and execute it anyway. But for you, the human, it's very hard to keep overview of what is happening at what level of the application. Can you only imagine having to look through one big file of 1000's of lines of code, just to find

In order to keep a better overview, we can choose to **modularize** our application. This means: splitting it up into smaller parts (modules) that, in theory, all work independently.

However, creating better overview is not the only reason. Among other reasons, modules make a developer's job easy by:

- Making the application easier to maintain, by making it more readable and thus easier to modify
- Isolating individual blocks of code, in order to make errors more easily traceable
- Encouraging the developer to write code in a way that makes it reusable

For more information about this, go through the following:

- [Introduction to Modular Design](https://www.youtube.com/watch?v=20JP8w6_nVA)
- [JavaScript Patterns: The Traditional Module Pattern](https://www.youtube.com/watch?v=SKBmJ9P6OAk)
- [JavaScript Modules in 100 Seconds](https://www.youtube.com/watch?v=qgRUr-YUk1Q)
- [JavaScript Modules: From IIFEs to CommonJS to ES6 Modules](https://www.youtube.com/watch?v=qJWALEoGge4)

### What's a library?

If you've ever written code you know how easy it is to duplicate it: you just copy and paste it.

Modules are small blocks of code that make up a functionality. But what if you have a bunch of modules that collectively aim to solve a bigger problem, like creating [data visualizations](https://d3js.org/) or make DOM manipulation easier ([jQuery](https://jquery.com/))?

For this we use a `library`: code that a developer (or a team of developers) has written in order to solve these bigger problems within an application. A library, typically, contains a collection of modules that work together in order to solve a bigger problem.

> Like many things in programming, people use various terms to describe the same thing. In the case of `library`, you'll often hear it spoken of as `package`, `namespace` or `dependency`.

Why do we use libraries? We use them to help us make building applications easier. Think of it like building a house: in theory you could do it all by hand. But as you can imagine, this is highly inefficient and time-consuming. So instead we use tools to help us out. These can be small tools (like a hammer or screwdriver) or bigger ones (like a concrete mixer or wheel barrow).

In the real-world developers use libraries all the time. They either make them themselves, or make use of public ones. If the original developers of a library have published their code, through a platform like [npmjs.com](https://www.npmjs.com/) for example, it can legally be used in custom applications for free. This is called **open-source**: the source code is open for any to look into, use and modify to their own needs.

Examples of common JavaScript libraries are the following:

- [jQuery](https://jquery.com/)
- [D3](https://d3js.org/)
- [React.js](https://reactjs.org/)
- [Socket.io](https://socket.io/)
- [Lodash](https://lodash.com/)

When researching these it's important to ask yourself two questions:

- What problem does the library solve?
- How does it fit in the architecture of the software I am trying to make?

For further study, check the following:

- [Code Libraries](https://www.youtube.com/watch?v=FQAQTXE_vt4)
- [JavaScript Libraries](https://www.youtube.com/watch?v=uq7omoxwA7A)
- [https://www.youtube.com/watch?v=24GF5MVEEjE](https://www.youtube.com/watch?v=24GF5MVEEjE)

### An example of a library

In a previous section we discussed APIs and the importance of being able to make HTTP Requests so that we can communicate with them. We have seen that we can use the `XHR` object to do so. In this section we'll discuss a `library` that makes this process easier for us. It's called [axios](https://github.com/axios/axios), a JavaScript library that allows us to make HTTP Requests in an easier way.

Here's what it looks like in action:

```js
const axios = require('axios'); // We have to load in the library first

// Make a GET request to get user data from the Pokemon API
axios
  .get('https://pokeapi.co/api/v2/pokemon')
  .then(function(response) {
    console.log(response);
    // Do something with data
  })
  .catch(function(error) {
    console.log(error);
    // Do something with error
  });
```

Any library that exists is developed to solve some problem. The main problems `axios` aims to solve are the following:

1. how to make an `HTTP request` in an easier way
2. how to write more readable asynchronous code

Here's how `axios` solves problem 1:

- It abstracts away/simplifies the XHR logic needed to make a HTTP Request and wraps it inside of functions that are more descriptive (like `axios.get` or `axios.post`, to indicate a GET and POST request)

Here's how `axios` solves problem 2:

- It makes use of the Promise structure, which will allow you (the developer) to "chain" operations in a readable and intuitive way.

### How to use a library

Now that you've learned about the utility of libraries, let's talk a little about how to approach using a library. Keep in mind that this is not the only way to do it, but it will set you off on a good start.

1. **Do your research**. Doing research means finding out more about the library. Is it new? Is it fully functional? What do other people say about using it? Is it backed by a sizable developer community? Does the library have a GitHub/NPM page?
2. **Read the documentation**. If code has been published for everyone to use, most likely the developers have written a guide on how to use it. This is called `documentation`. After doing your research delve into it and try to figure out what the philosophy and usages of the library are.
3. **Try out a basic example**. A basic example can usually be found in the documentation. Copy and paste it into an empty file for yourself and try it out. It's best to try it out in isolation first, so that you can learn exactly what makes it work. Then slowly start playing around with it: change names, move lines of code.
4. **Try to integrate it with your own code base**. Once you've tried it out it's time integrate it into your own code. Figure out where to best put it. The documentation can help you out with that. Look at other developer's code and see how they use it. Watch videos or read articles online.

As an example, try it out with `axios`. To help you out, here are some resources:

- [Documentation](https://github.com/axios/axios)
- [Axios Crash Course | HTTP Library](https://www.youtube.com/watch?v=6LyagkoRWYA)

---

## 3. How to use libraries (`axios`)

### Explanation

- A library is a code solution a developer (or a team) has written to a common problem
- Usually open-source
- Helps to solve a problem within an application
- Read the documentation on how to use it

### Example

Same example but using axios

```javascript
axios
  .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}`)
  .then(function(response) {
    // handle success
    console.log(response.data);
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  })
  .finally(function() {
    // always be executed
    console.log('I am always here');
  });
```

> Note: Give example at the end with binding/showing these data in a DOM element like a <div> or a list instead of only showing them on the console using console.log.

### Excercise

### Essence
