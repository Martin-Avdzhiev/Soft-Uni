function validate() {
    const pattern = /[a-z]+@{1}[a-z]+\.[a-z]+/g;
    const input = document.getElementById('email');

    input.addEventListener('change', (event) => {
        if (pattern.test(event.target.value)) {
            event.target.removeAttribute('class');
        }
        else {
            event.target.className = 'error';
        }
    })

}