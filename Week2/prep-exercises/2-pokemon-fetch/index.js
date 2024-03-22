'use strict';
/*------------------------------------------------------------------------------
 * In this exercise you will practice fetching data from a web API, using
 * `fetch`, promises, async/await and try/catch.
 *
 * Your solution should both work for the "happy" path (using VALID_URL) as
 * well handle the error in the "unhappy" path (when selecting INVALID_URL).
 *
 * You will need to decide which functions need to be made `async` and where
 * `try/catch` blocks should be added.
 *
 * The HTML file already contains the necessary HTML elements.
 *----------------------------------------------------------------------------*/

const VALID_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=5';
const INVALID_URL = 'https://pokeapi.co/api/v2/pokemons/?limit=5';

async function fetchJSON(url) {

  // Fetch the JSON data from the web API that responds to the `url` parameter
  // and return a promise that resolves to a corresponding JavaScript object.
  // Make sure to check for HTTP errors.
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);  
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log(`Failed to fetch: ${error.message}`);
  }
}

function renderResults(pokemons) {
  // 1. Clear the text content of the HTML element with id `error`.
  const errorElement = document.querySelector('#error');
  errorElement.innerText = '';

  // 2. Set the text content of the HTML element with id `json` to JSON text
  //    from the `pokemons` argument, formatted in a human readable form (i.e.,
  //    with indentation and line breaks).
  const pokemonsElement = document.querySelector('#json');
  pokemonsElement.innerText = JSON.stringify(pokemons, null, 2);
}

function renderError(err) {
  // 1. Clear the text content of the HTML element with id `json`.
  const pokemonsElement = document.querySelector('#json');
  pokemonsElement.innerText = '';

  // 2. Set the text content of the HTML element with id `error` to the
  //    `.message` property of the `err` parameter.
  const errorElement = document.querySelector('#error');
  errorElement.innerText = err;
}

function main() {
  const button = document.querySelector('#button');
  button.addEventListener('click', async () => {
    const option = document.querySelector('#option');
    const url = option.checked ? INVALID_URL : VALID_URL;

    // Use `fetchJSON()` to fetch data from the selected url.
    // If successful, render the data by calling function `renderResults()`.
    // On failure, render the error by calling function `renderError()`.
    try {
      const data = await fetchJSON(url);
      renderResults(data);
    } catch (error) {
      renderError(error);
    }
  });
}

window.addEventListener('load', main);