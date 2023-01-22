function calc() {
    let first = document.getElementById('num1').value;
    let second = document.getElementById('num2').value;
    let result = Number(first) + Number(second);
    let output = document.getElementById('sum');
    output.value = result;
}
