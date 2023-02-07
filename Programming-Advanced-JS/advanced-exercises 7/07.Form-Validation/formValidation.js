function validate() {

    // username
    const usernameInput = document.getElementById('username');
    const usernamePattern = /[a-zA-Z0-9]+/g;
    const submitButton = document.getElementById('submit');

    //password
    const passwordPattern = /\w+/g;
    const passwordInput = document.getElementById('password');

    //confirm password
    const confirmPasswordInput = document.getElementById('confirm-password');

    // email
    const emailPattern = /.+@{1}.+\.{1}.+/g;
    const emailInput = document.getElementById('email');
    // valid
    const validDiv = document.getElementById('valid');
    let isValid = true;

    //company
    const companyInput = document.getElementById('company');
    const companyInfoInput = document.getElementById('companyInfo');
    const companyNumberInput = document.getElementById('companyNumber');
    // event
    submitButton.addEventListener('click', function () {
        //username
        const username = usernameInput.value.match(usernamePattern);
        if (username) {
            if (username[0].length > 2 && username[0].length <= 20) {
                usernameInput.style.border = 'none';
            }
            else {
                usernameInput.style.borderColor = 'red';
                isValid = false;
            }
        }
        else {
            usernameInput.style.borderColor = 'red';
            isValid = false;
        }
        // password

        const password = passwordInput.value.match(passwordPattern);
        if (password) {
            if (password[0].length > 4 && password[0].length <= 15) {
                passwordInput.style.border = 'none';
            }
            else {
                passwordInput.style.borderColor = 'red';
                isValid = false;
            }
        }
        else {
            passwordInput.style.borderColor = 'red';
            isValid = false;
        }
        //confirm password
        const confirmPassword = confirmPasswordInput.value;
        if (password) {
            if (password[0] !== confirmPassword) {
                passwordInput.style.borderColor = 'red';
                confirmPasswordInput.style.borderColor = 'red';
                isValid = false;
            }
            else {
                passwordInput.style.border = 'none';
                confirmPasswordInput.style.border = 'none';
            }
        }
        else {
            passwordInput.style.borderColor = 'red';
            confirmPasswordInput.style.borderColor = 'red';
            isValid = false;
        }
        // email
        const email = emailInput.value.match(emailPattern);
        if (email) {
            emailInput.style.border = 'none';

        }
        else {
            emailInput.style.borderColor = 'red';
            isValid = false;
        }

        if(companyInput.checked){
            companyInfoInput.style.display = 'block';
            const number = (companyNumberInput.value);
            if (number>=1000 && number <=9999){
                companyNumberInput.style.border = 'none';
            }
            else {
                companyNumberInput.style.borderColor = 'red';
                isValid = false;
            }
        }  
        else {
            companyInfoInput.style.display = 'none';
        } 
        if (isValid){
            validDiv.style.display = 'block';
        }
        else {
            validDiv.style.display = 'none';
        }
    })
    companyInput.addEventListener('click', function(){
        if(companyInput.checked){
            companyInfoInput.style.display = 'block';
        }
        else {
            companyInfoInput.style.display = 'none';
        }
    })

}
