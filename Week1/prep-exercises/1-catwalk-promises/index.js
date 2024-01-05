'use strict';

const STEP_SIZE_PX = 10;
const STEP_INTERVAL_MS = 50;
const DANCE_TIME_MS = 5000;
const DANCING_CAT_URL =
    'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

function walk(img, startPos, stopPos, isDancing) {
    return new Promise((resolve) => {

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
        const originalImg = img.src;

        img.src = DANCING_CAT_URL;

        setTimeout(() => {
            img.src = originalImg;
            resolve();
        }, DANCE_TIME_MS);

    });
}

function catWalk() {
    const img = document.querySelector('img');
    const startPos = -img.width;
    const centerPos = (window.innerWidth - img.width) / 2;
    const stopPos = window.innerWidth;

    let isDancing = false;

    const loopFunc = () => {
        walk(img, startPos, centerPos, isDancing)
            .then(() => {
                isDancing = true;
                return dance(img);
            })
            .then(() => {
                isDancing = false;
                return walk(img, centerPos, stopPos, isDancing)
            })
            .then(loopFunc);
    };

    loopFunc();
}

window.addEventListener('load', catWalk);
