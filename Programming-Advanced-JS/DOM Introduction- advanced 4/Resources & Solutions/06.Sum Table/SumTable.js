function sumTable() {
    const elements = document.querySelectorAll('tr td:nth-of-type(2)');
    const array = Array.from(elements)
    let sum = 0;
    array.forEach((el) =>{
        sum += Number(el.textContent) || 0;
    })
    const result = document.getElementById('sum');
    result.textContent = sum;
}