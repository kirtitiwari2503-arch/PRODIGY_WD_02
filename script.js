let timer = false;
let hr = 0, min = 0, sec = 0;

function start() {
    if (!timer) {
        timer = true;
        stopwatch();
    }
}

function stop() {
    timer = false;
}

function reset() {
    timer = false;
    hr = min = sec = 0;
    document.getElementById("display").innerHTML = "00:00:00";
}

function stopwatch() {
    if (timer) {
        sec++;

        if (sec === 60) {
            min++;
            sec = 0;
        }
        if (min === 60) {
            hr++;
            min = 0;
            sec = 0;
        }

        let h = hr < 10 ? "0" + hr : hr;
        let m = min < 10 ? "0" + min : min;
        let s = sec < 10 ? "0" + sec : sec;

        document.getElementById("display").innerHTML = `${h}:${m}:${s}`;

        setTimeout(stopwatch, 1000);
    }
}
