function solve() {
   let totalPrice = 0;
   const productsArray =[];
   const productElements = document.getElementsByClassName('product-title');
   const priceElements = document.getElementsByClassName('product-line-price');
   const addButtonElements = document.getElementsByClassName('add-product');
   const textareaElement = document.querySelector('body > div > textarea');
   const checkButtonElement = document.getElementsByClassName('checkout')[0];
   
   for (let i = 0 ; i<addButtonElements.length; i++) {
     const currentButton = addButtonElements[i];
     const currentPrice = Number(priceElements[i].textContent);
     const currentProduct = productElements[i].textContent;

     currentButton.addEventListener('click', ()=> {
      if (!productsArray.includes(currentProduct)){
      productsArray.push(currentProduct);
      }
      totalPrice += Number(currentPrice);
      textareaElement.textContent += `Added ${currentProduct} for ${currentPrice.toFixed(2)} to the cart.\n`;
     })
   }

   checkButtonElement.addEventListener('click', ()=> {

      textareaElement.textContent += `You bought ${productsArray.join(', ')} for ${totalPrice.toFixed(2)}.`;
      
      let butns = Array.from(document.querySelectorAll('button'));
      butns.forEach(button => button.disabled = true);
   })
}