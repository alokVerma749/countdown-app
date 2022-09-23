let container = document.querySelector(".container");
let input = document.querySelector("input");
let btnStart = document.querySelector("#button-start");
let content = document.querySelector("#input");
let output = document.querySelector(".output");
let error = document.querySelector(".error");
let onComplete = document.querySelector(".completed");
let interval;
let time;

// Click event for start button
btnStart.addEventListener("click", function start() {
    // changing style on start.
    container.style.color = "black";
    container.style.backgroundColor = "#fff";
    btnStart.innerText = "Started";
    btnStart.style.fontSize = "20px";

    // Make output window visible on start button click.
    output.classList.remove("hidden");

    time = Number(content.value);
    // calling countdown function on regular interval of 1 second.
    clearInterval(interval);
    interval = setInterval(countDown, 1000);
});

function countDown() {
    // handling corner case of if the time <=0 or undefined(no entered value) by user.
    if (time <= 0 || time === undefined || invalidTime(time)) {
        onComplete.classList.remove("hidden");
        container.style.backgroundColor = "red";
        clearInterval(interval);
        btnStart.innerText = "Start";
        content.value = "";
        return;
    }
    // Changing interface when time remaining is less than 5 seconds.
    if (time <= 6) {
        container.style.color = "#fff";
        container.style.backgroundColor = "red";
        container.style.transitionDuration = ".8s";
    }
    // decreasing time by 1 every second.
    time--;

    // check for "NaN" entered value.
    if (invalidTime(time)) {
        error.classList.remove("hidden");
        error.innerText = "Enter positive integers only";
        btnStart.innerText = "Start";
    }
    output.innerText = time;
}

// Making all div's hidden.
input.addEventListener("click", function () {
    if (time === 0 || time === undefined || invalidTime(time)) {
        output.classList.add("hidden");
        error.classList.add("hidden");
        onComplete.classList.add("hidden");
        output.innerText = "";
    }
});

// function to check whether time is NaN.
function invalidTime(time) {
    return (!((time / 0) === Infinity)) && (time != 0);
}

/** 
 * ******************************CORNER CASES**********************************************
 * when timer reache 0 the value in input field should become 0.
 * if time entered is NAN (DONE)
 * if time = 0 (DONE)
 * if time = undefined (DONE)
 * if time = NaN (DONE)
 * if time < 0 (negative)(DONE)
 * Changing button text from "start" to "started"
 * if time remains < 5 seconds(make the interface red)
 * Making all divs hidden when their use is complete
 */