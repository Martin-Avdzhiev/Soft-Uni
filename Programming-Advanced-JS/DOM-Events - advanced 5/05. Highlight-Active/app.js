function focused() {
    const h1Elements = document.querySelectorAll('h1');
    
    for (const h1 of h1Elements){
        const currentSection = h1.parentNode;
        const currentInput = currentSection.children[1];
        currentInput.addEventListener('focus', ()=> {
            currentSection.className = 'focused';
        })
        currentInput.addEventListener('blur', () =>{
            currentSection.className = 'blur';
        })
    }
}