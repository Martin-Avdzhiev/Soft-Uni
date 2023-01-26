function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const input = document.getElementById('searchField');
      const elements = document.querySelectorAll('tbody tr');
      const matches = [];

      for (const el of elements) {
         el.classList.remove('select');
         if (input.value) {
            if (el.textContent.toLowerCase().includes(input.value.toLowerCase())) {
               matches.push(el.textContent);
               el.classList = 'select';
            }
         }
      }
      input.value = '';
      console.log(matches)
   }
}