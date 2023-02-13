window.addEventListener('load', solution);

function solution() {
  const submitButton = document.getElementById('submitBTN');
  const preview = document.getElementById('infoPreview');
  const editButton = document.getElementById('editBTN');
  const continueButton = document.getElementById('continueBTN');
  const finalDiv = document.getElementById('block');

        submitButton.disabled = false;
        editButton.disabled = true;
        continueButton.disabled = true;

   const inputValues = Array.from(document.getElementById('form').querySelectorAll('input'));
   const labelValues = Array.from(document.getElementById('form').querySelectorAll('label'));
  inputValues.pop();
  submitButton.addEventListener('click',()=> {
    const fullname = inputValues[0];
    const email = inputValues[1];
    if(!fullname.value || !email.value){
      return;
    }
    for (let i = 0; i<inputValues.length; i++){
      const liElement = document.createElement('li');
      liElement.innerText = `${labelValues[i].innerText} ${inputValues[i].value}`;
      preview.appendChild(liElement);
    }
    for(const input of inputValues){
      input.value = '';
    }
        submitButton.disabled = true;
        editButton.disabled = false;
        continueButton.disabled = false;
  })
}
