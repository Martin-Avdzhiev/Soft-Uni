const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', loginUser);
document.getElementById('user').style.display = 'none';
const loginUrl = 'http://localhost:3030/users/login';
async function loginUser(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
        const response = await fetch(loginUrl,{
            method: 'POST',
            headers: {'Content-type': 'application-json'},
            body: JSON.stringify({
                email,
                password
            })
        })
        if(!response.ok){
            const error = await response.json();
            throw new Error(error.message);
        }
        const data = await response.json();
        const userData = {
            email: data.email,
            id: data._id,
            token: data.accessToken
        }
        localStorage.setItem('userData', JSON.stringify(userData));
        window.location = './index.html'
    } catch (error) {
        alert(error.message);
    }
}