const startbutton = document.querySelector("#start");
const stopbutton = document.querySelector("#stop");

const randomcolor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
};

let intervalid = null;
function changeBg() {
    document.body.style.backgroundColor = randomcolor();
}

const startchange = function () {
    if (intervalid === null) {
        intervalid = setInterval(changeBg, 1000);
    }
};
startbutton.addEventListener("click",startchange);

const stopChange = function() { 
    if (intervalid !== null) {
        clearInterval(intervalid);
        intervalid = null;
    }
}
stopbutton.addEventListener("click",stopChange)
