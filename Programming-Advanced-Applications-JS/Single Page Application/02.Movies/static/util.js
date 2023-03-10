const views = [...document.querySelectorAll('.view-section')];
function hideAll(){
    views.forEach(v => v.style.display = 'none');
}

export function showView (section){
    hideAll();
    section.style.display = 'block';
}

export function updateNav(){
    const user = JSON.parse(localStorage.getItem('user'));
    const email = document.getElementById('welcome-msg');
    if(user){
        document.querySelectorAll('.user').forEach(e => e.style.display = 'inline-block');
        document.querySelectorAll('.guest').forEach(e => e.style.display = 'none');
        email.textContent = 'Welcome, ' + user.email;
    }else {
        document.querySelectorAll('.user').forEach(e => e.style.display = 'none');
        document.querySelectorAll('.guest').forEach(e => e.style.display = 'inline-block');
    }
}
