function search() {
   const lists = Array.from(document.querySelectorAll('#towns li'));
   const input = document.getElementById('searchText').value;
   const match = document.getElementById('result');
   let counter = 0;
   for (const list of lists) {
      if (input) {
         if (list.textContent.includes(input)) {
            list.style.fontWeight = 'bold';
            list.style.textDecoration = 'underline';
            counter++;
         }
         else {
            list.style.fontWeight = 'normal';
            list.style.textDecoration = 'none';
         }
      }
      else {
         list.style.fontWeight = 'normal';
         list.style.textDecoration = 'none';
      }
   }
   match.textContent = `${counter} matches found`
}
