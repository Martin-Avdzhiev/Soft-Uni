function validate() {
   const pattern = /[a-z]+@{1}[a-z]+\.{1}[a-z]+/g;
   const input = document.getElementById('email');
   input.addEventListener('change', function (){
        const value = input.value;
        const match = value.match(pattern);
        if (match == null){
           // input.style.borderColor = 'red';
           
            input.className = 'error'
        }
        else {
           
            //input.style.borderColor = 'black';
            input.className = ''
        } 
   })
}