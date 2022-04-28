const millisecondBox = document.querySelector(".millisecondBox");
const secondBox = document.querySelector(".secondBox");
const minuteBox = document.querySelector(".minutes");
const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");
const resetBtn = document.querySelector(".resetBtn");

millisecondBox.value = 00;
secondBox.value = 00;
minuteBox.value = 00;

const textFormat = (time) => {
    if (time < 10) {
        return `0${time}`;
    } else {
        return time;
    };
};

startBtn.addEventListener("click", () => {
    const startInterval = setInterval(startTimer, 10);

    stopBtn.addEventListener("click", () => {
        clearInterval(startInterval);
    });

    resetBtn.addEventListener("click", () => {
        clearInterval(startInterval);
        millisecondBox.textContent = "00";
        secondBox.textContent = "00";
        minuteBox.textContent = "00";
        millisecondBox.value = 0;
        secondBox.value = 0;
        minuteBox.value = 0;
    });
});

const startTimer = () => {
    millisecondBox.value++;
    millisecondBox.textContent = textFormat(millisecondBox.value);
    secondBox.textContent = textFormat(secondBox.value);
    minuteBox.textContent = textFormat(minuteBox.value);
    
    if (millisecondBox.value > 99) {
        millisecondBox.value = 0;
        secondBox.value++;
    };
        if (secondBox.value > 59) {
            secondBox.value = 0;
            minuteBox.value++;
        };
};