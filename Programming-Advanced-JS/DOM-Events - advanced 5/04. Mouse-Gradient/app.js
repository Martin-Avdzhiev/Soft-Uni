function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient');
    const output = document.getElementById('result');
    gradientElement.addEventListener('mousemove', (e)=> {
        const currentPosition = Number(e.offsetX);
        const percent = Math.floor((Number(currentPosition)/300) *100) +'%';
        output.textContent = percent;
    })
}