function lockedProfile() {
    const proifilesElements = document.querySelectorAll('.profile');
    const buttonsElements = document.getElementsByTagName('button');

    for (let i = 0; i < proifilesElements.length; i++) {
        const currentButton = buttonsElements[i];
        const currentProfileUnlock = proifilesElements[i].querySelector(`input[value="unlock"]`);
        const currentHiddenElement = document.getElementById(`user${i + 1}HiddenFields`);
        currentButton.addEventListener('click', () => {
            if (currentProfileUnlock.checked) {
                if (currentButton.textContent == 'Show more') {
                    currentHiddenElement.style.display = 'inline';
                    currentButton.textContent = 'Hide it';
                }
                else {
                    currentButton.textContent = 'Show more';
                    currentHiddenElement.style.display = '';
                }
            }
        })
    }
}