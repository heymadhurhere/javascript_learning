// generate random color
const randomColor = function() {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

let intervalID;

const changeColors = function() {
    if (!intervalID) {
        intervalID = setInterval(changeBGC, 1000);
    }
    function changeBGC() {
     document.body.style.backgroundColor = randomColor();
    }
}

const stopColors = function() {
    clearInterval(intervalID);
    intervalID = null; // after work done, intervalID flushed out
}

document.querySelector("#start").addEventListener('click', changeColors);

document.querySelector("#stop").addEventListener('click', stopColors);