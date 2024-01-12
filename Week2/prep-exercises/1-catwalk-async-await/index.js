'use strict';

const STEP_INTERVAL_MS = 50;
const STEP_SIZE_PX = 10;
const DANCE_TIME_MS = 5000;
const DANCING_CAT_URL =
    'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

function walk(img, startPos, stopPos, isDancing) {
    return new Promise((resolve) => {
        // Copy over the implementation from last week
        let currentPos = startPos;

        const move = () => {
            if (!isDancing) {
                currentPos += STEP_SIZE_PX;
                img.style.left = currentPos + 'px';

                if (currentPos < stopPos) {
                    setTimeout(move, STEP_INTERVAL_MS);
                } else {
                    resolve();
                }
            } else {
                resolve(); //skip
            }
        };

        setTimeout(move, 0);
    });
}

function dance(img) {
    return new Promise((resolve) => {
        // Copy over the implementation from last week
        const originalImg = img.src;

        img.src = DANCING_CAT_URL;

        setTimeout(() => {
            img.src = originalImg;
            resolve();
        }, DANCE_TIME_MS);
    });
}

async function catWalk() {
    const img = document.querySelector('img');
    const startPos = -img.width;
    const centerPos = (window.innerWidth - img.width) / 2;
    const stopPos = window.innerWidth;

    // Use async/await syntax to loop the walk and dance functions

    let isDancing = false;

    const loopFunc = async () => {
        while (true) {
            await walk(img, startPos, centerPos, isDancing);

            isDancing = true;
            await dance(img);


            isDancing = false;
            await walk(img, centerPos, stopPos, isDancing);
        }

    };

    loopFunc();
}

window.addEventListener('load', catWalk);