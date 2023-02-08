function walk(steps, metersPerStep, speed) {
    const distance = steps * metersPerStep;
    const speedMeterPerSecond = speed / 3.6;
    const rest = Math.floor(distance / 500) * 60;
    const time = distance / speedMeterPerSecond + rest;
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor(time / 60);
    const seconds = Math.round(time % 60);

    console.log(`${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`)
    //00:32:48
}

walk(4000, 0.60, 5)