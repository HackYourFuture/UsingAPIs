## 2. Asynchronous JavaScript and XML (AJAX)

AJAX is the idea that data can be loaded into a webpage without refreshing the entire website. It's a **web development technique** when building websites, NOT a technology or programming language.

The term is an acronym for `asynchronous JavaScript and XML`. Let's pick that apart:

- Asynchronous JavaScript often refers to the act of using an asynchronous function to make an HTTP Request to fetch data. As we've learned in the previous module, an asynchronous function allows the browser to do multiple things simultaneously. In this way we fetch data in the background, while the user is still able to navigate the webpage.
- XML is a data format used to send information from a server to a client, and vice versa.

This technique was used back in the days when the web wasn't that advanced. Back then we used XML is the standard format we used to structure our data in. Nowadays we have replaced it with another data format: `JSON`.

### JavaScript Object Notation (JSON)

`JSON` stands for JavaScript Object Notation and is a very JavaScript-like data format. Here's a small example:

```json
{
  "first name": "Noer",
  "last name": "Paanakker",
  "age": 28,
  "address": {
    "street address": "Strekkerweg 79",
    "city": "Amsterdam",
    "postal code": "1033 DA"
  }
}
```

If you look closely it almost looks exactly like a regular JavaScript object. There are 2 big differences: (1) in a JSON object everything is turned into a string (als known as "stringified"), and (2) it's not tied to the JavaScript language. Actually, many other languages can work with JSON!

In AJAX we make a HTTP Request to a web server, that then responds back with information to be used in the frontend. Generally speaking, this data will be send in `JSON` format. The web server "stringifies" (makes into a string) the data to be send first before it sends it.

### Stringifying and parsing JSON

JSON is the modern web standard data format to send and receive data in. In order to make something into JSON format we need to `stringify` it: make the whole object into one string. Luckily, JavaScript gives us a way to do this:

```js
const noer = {
  firstName: 'Noer',
  lastName: 'Paanakker',
};

const noerJSON = JSON.stringify(noer);

console.log(noerJSON); // Result: {"firstName":"Noer","lastName":"Paanakker"}
```

Here's another way of looking at the "stringifying" process: let's say you want to send your mother a gift, a brand new HackYourFuture T-shirt. Would you just put the shirt right into the mailbox, like that? Of course not! You would wrap it up nicely and put it into a box. Then you put it in the mailbox and off it goes!

This act of putting something into a box is what's happening when we `stringify` data (either on the client-side or server-side).

After the JSON data has been send, the receiver has to be able to interpret it. This process of making JSON interpretable by the programming language within that environment is called `parsing`. As we're using JavaScript, it doesn't seem like a big stretch. But what if we're using some other programming language like Python or Java?

To follow our analogy, this is basically your mother unpacking her T-shirt from out of the box you put it in!

Again, in JavaScript we can use another method gained from the global `JSON` object in order to `parse` our JSON data:

```js
const noer = {
  firstName: 'Noer',
  lastName: 'Paanakker',
};

const noerJSON = JSON.stringify(noer);

const noerParsed = JSON.parse(noerJSON);

console.log(noerParsed); // Result: { firstName: 'Noer', lastName: 'Paanakker' };
```

Nowadays we use JSON to perform asynchronous operations using JavaScript. So, technically speaking, the term would actually be AJAJ. However, the industry has decided to stick with the term AJAX to refer to these processes. Keep that in mind whenever someone asks you about it!

Go through the following to learn more about JSON and AJAX:

- [JSON - Introduction](https://www.w3schools.com/js/js_json_intro.asp)
- [Learn JSON in 10 Minutes](https://www.youtube.com/watch?v=iiADhChRriM)
- [JSON Crash Course](https://www.youtube.com/watch?v=wI1CWzNtE-M)

### XMLHttpRequests (XHR)

Traditionally, in order to make use of the AJAX technique we need to make use of a special type of object, called `XMLHttpRequest`(shortened to XHR). It's an object predefined for us by the `window` object in the browser.

> The `window` object is the most top-level object available to us in the browser. It contains the `document`, which contains all the HTML/CSS and JavaScript we write. Besides this, the `window` also contains a lot of other things we use when writing frontend code: `setTimeout()`, `alert()` and it even contains a reference to the `console` (from which we get `console.log()`). Try it out in the console if you want to see for yourself!

By creating a new instance of this object we can start making HTTP requests!

```js
const xhr = new XMLHttpRequest();
```

Making XHR requests is the primary way of making HTTP Requests. It allows us to send and retrieve data from other services.

However, this method is outdated and we use more modern means now (using the `Fetch Web API` or a solution like `axios`). You will learn about that next week!

Check the following resources to learn more about XHR.

- [XMLHttpRequest](https://github.com/hackyourfuture/fundamentals/blob/master/fundamentals/XMLHttpRequest.md)
- [AJAX Crash Course](https://www.youtube.com/watch?v=82hnvUYY6QA)
- [Sending JavaScript HTTP Requests with XMLHttRequest](https://www.youtube.com/watch?v=4K33w-0-p2c)

---

## 2. What is `AJAX` and how to apply it (`XMLHttpRequest`)

### Explanation

- Before AJAX all page reload for all requests, via refreshing the url in the address bar with the new resource.
- It's a technique, not a technology
- `AJAX` stands for Asynchronous JavaScript and XML
- Nowadays we use `JSON` instead of `XML`
- Fetch data without reloading the page
- The XMLHttpRequest API is defined in the browser (window.XMLHttpRequest)

### Example

Example using the XMLHttpRequest

```javascript
const oReq = new XMLHttpRequest();
oReq.open(
  'GET',
  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}`,
);
oReq.send();
oReq.addEventListener('load', function(event) {
  const data = JSON.parse(this.response);
  if (data.cod >= 400) {
    // error
    console.log(data.message);
  } else {
    //success
    console.log(data.coord.lat);
  }
});

// or another way of getting data
oReq.load = function(event) {
  // use oReq.response or this.response
  const data = JSON.parse(this.response);
  if (data.cod >= 400) {
    // error
    console.log(data.message);
  } else {
    //success
    console.log(data.coord.lat);
  }
};
```

### Excercise

Steps of doing the following example:-
\*\* Install the live server plugin in VS (go to plugins -> live server -> install)

1. Create self-invoked function to wrap your code
2. Create an object instance of `XMLHttpRequest`
3. Call the `open` function to fill it with the Request URL and the request Method
4. Call the `send` function to make the request
5. Add event listener with a callback for the sucess event `load`

### Essence

SECOND HALF (14.00 - 16.00)
