function colorize() {
    const elements = document.getElementsByTagName('tr');
    const array = Array.from(elements)
    array.forEach((el, i) => {
        if (i % 2 === 1){
            el.style.background = 'teal';
        }
    })
}