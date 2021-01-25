## **2. JavaScript exercises**

> Inside of your `JavaScript3` fork and inside of the `Week2` folder, create a folder called `homework`. Inside of that folder, create a folder called `js-exercises`. For all the following exercises create a new `.js` file in that folder (3 files in total). Make sure the name of each file reflects its content: for example, the filename for exercise one could be `getName.js`.

**Exercise 1: John who?**

Take a look at the following function (and try it out in your console):

```js
const getAnonName = (firstName, callback) => {
  setTimeout(() => {
    if (!firstName)
      return callback(new Error("You didn't pass in a first name!"));

    const fullName = `${firstName} Doe`;

    return callback(fullName);
  }, 2000);
};

getAnonName('John', console.log);
```

Rewrite this function, but replace the callback syntax with the Promise syntax:

- Have the `getAnonName` function return a `new Promise` that uses the `firstName` parameter
- If the Promise `resolves`, pass the full name as an argument to resolve with
- If the Promise `rejects`, pass an error as the argument to reject with: "You didn't pass in a first name!"

**Exercise 2: Is it bigger than 10?**

Write a function called `checkDoubleDigits` that:

- Takes 1 argument: a number
- Returns a `new Promise`
- If the number is bigger than 10, resolve with the string: "The number is bigger than 10!"
- If the number is smaller than 10, reject with the error: "Error! The number is smaller than 10..."

**Exercise 3: Gotta catch 'em all**

> Inside of your `homework` folder, create another folder called `pokemon-app`. There, create an `index.html` and `script.js` file

Let's catch all original 151 Pokemon in our own little web application! Here's an example of what you'll be building for this exercise:

![Pokemon App](./../assets/pokemon-app.gif)

In this exercise you're going to do several things:

1. Create and append DOM elements using JavaScript only
2. Fetch data twice from a public API [PokeAPI](https://pokeapi.co/)
3. Display the results in the DOM.

Here are the requirements:

- Create 3 functions: `fetchData`, `addPokemonToDOM` and `main`
- The `main` function executes the other functions and contains all the variables
- In the `fetchData` function, make use of `fetch` and its Promise syntax in order to get the data from the public API
- Execute the `main` function when the window has finished loading
