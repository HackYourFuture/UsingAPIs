## 4. Fetch API

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

---

## 2. How to use the `fetch` API to do AJAX calls

### Explanation

- Modern replacement of XMLHttpRequest
- Uses Promise structure
- The Fetch API is defined in the browser (window.fetch)
- Only modern browsers support it (show [caniuse.com](https://caniuse.com/#feat=fetch))
- Fetch API documentations by mozilla [link](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

### Example

### Excercise

```
fetch('https://seriousnews.com/api/headlines')
  .then(function (response) {
    response.json();
  }).then(headlines => {
    console.log(headlines)
  }).catch(error => console.log(error));
```

### Essence

SECOND HALF (14.00 - 16.00)
