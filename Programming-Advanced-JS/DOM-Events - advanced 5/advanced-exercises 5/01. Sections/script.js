function create(words) {
   for (const word of words){
      const currentParagraph = document.createElement('p');
      
      currentParagraph.textContent = word;
      
      const currentDiv = document.createElement('div');
      currentParagraph.style.display = 'none';
      const bigDiv = document.getElementById('content');
      currentDiv.appendChild(currentParagraph);
      bigDiv.appendChild(currentDiv);
      
      currentDiv.addEventListener('click', ()=> {
         currentParagraph.style.display = '';
      })
   }
}