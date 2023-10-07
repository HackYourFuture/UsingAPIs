'use strict';

const STEP_SIZE_PX = 10;
const STEP_INTERVAL_MS = 50;
const DANCE_TIME_MS = 5000;
const DANCING_CAT_URL =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';



function walk(img, startPos, stopPos) {
  return new Promise((resolve) => {
    img.style.left = `${startPos}px`;
    const walkInterval = setInterval(() => {
      startPos += STEP_SIZE_PX;
      img.style.left = `${startPos}px`;
      if (startPos >= stopPos) {
        clearInterval(walkInterval);
        resolve();
      }
    }, STEP_INTERVAL_MS);
  });
}

function dance(img) {
  return new Promise((resolve) => {
    // Switch the `.src` of the `img` from the walking cat to the dancing cat
    const originalSrc = img.src;
    // Make good use of the `DANCING_CAT_URL` 
    img.src = DANCING_CAT_URL;
    // and, after a timeout, reset the `img` back to the walking cat.
    setTimeout(() => {
      img.src = originalSrc;
    //  Then resolve the promise.
      resolve();
    // and `DANCE_TIME_MS` constants.

    }, DANCE_TIME_MS);
  });
}

function catWalk() {
  const img = document.querySelector('img');
  const startPos = -img.width;
  const centerPos = (window.innerWidth - img.width) / 2;
  const stopPos = window.innerWidth;

  // Walk from `startPos` to `centerPos`
  walk(img, startPos, centerPos)
    // Dance for 5 seconds after reaching the center
    .then(() => {
      return dance(img);
    })
    // Walk from `centerPos` to `stopPos` after dancing
    .then(() => {
      return walk(img, centerPos, stopPos);
    })
    // Loop back to the start to repeat the sequence indefinitely
    .then(() => {
      catWalk();
    });
}

window.addEventListener('load', catWalk);