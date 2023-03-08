const form = document.querySelector('form');
form.addEventListener('submit', registerUser);
const registerUrl = 'http://localhost:3030/users/register';
document.getElementById('user').style.display = 'none';
async function registerUser(e){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { email, password, rePass } = Object.fromEntries(formData);
    const array = [... formData.values()];
    try {
        if(array.some(x => x=== '')){
            throw new Error('All inputs must be filled');
        }
        if(array[1] !== array[2]){
            throw new Error('Passwords don\'t match');
        }
        
        const response = await fetch(registerUrl,{
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                email,
                password,
                rePass
            })
        });
        if(!response.ok){
            const error = await response.json();
            throw new Error(error.message);
        }
        const data = await response.json();
        console.log(data)
        const user = {
            email: data.email,
            id: data._id,
            token: data.accessToken
        }
        localStorage.setItem('userData', JSON.stringify(user));
        window.location = './index.html';
    } catch (error) {
        alert(error.message)
    }
}