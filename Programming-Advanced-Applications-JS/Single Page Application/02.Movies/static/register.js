import { showView } from "./util.js";
import { loginPage } from "./login.js";
const section = document.querySelector('#form-sign-up');
const form = section.querySelector('#register-form');
form.addEventListener('submit', registerUser);
export function registerPage(){
    showView(section);
}

async function registerUser(e){
    e.preventDefault();
    const url = 'http://localhost:3030/users/register';
    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');
    const repass = formData.get('repeatPassword');
    if(!email || !password || !repass){
        alert('All fields must be filled!');
        return;
    }
    if(password !== repass){
        alert('Passwords don\'t match!');
        return;
    }
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })

        if(!res.ok){
            const error = await res.json();
            throw new Error(error.message)
        }
        alert('Successfull register!');
        form.reset();
        loginPage();
    } catch (error) {
        alert(error.message);
    }
    
}