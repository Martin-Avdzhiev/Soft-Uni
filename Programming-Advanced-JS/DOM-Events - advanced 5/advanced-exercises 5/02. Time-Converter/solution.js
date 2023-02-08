function attachEventsListeners() {
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    const rations = {
        days: 1,
        hours: 24,
        minutes:1440,
        seconds:86400
    }

    document.getElementById('daysBtn').addEventListener('click',clicked);
    document.getElementById('hoursBtn').addEventListener('click',clicked);
    document.getElementById('minutesBtn').addEventListener('click',clicked);
    document.getElementById('secondsBtn').addEventListener('click',clicked);

    function clicked (event){
        
        const input =  event.target.parentElement.querySelector('input[type="text"]');
        const time = convert(Number(input.value), input.id);
        days.value = time.days;
        hours.value = time.hours;
        minutes.value = time.minutes;
        seconds.value = time.seconds;
    }

    function convert(value,id){
        const days = value/rations[id];
        return {
            days:days,
            hours:days*rations.hours,
            minutes:days*rations.minutes,
            seconds:days*rations.seconds
        }
    }
}