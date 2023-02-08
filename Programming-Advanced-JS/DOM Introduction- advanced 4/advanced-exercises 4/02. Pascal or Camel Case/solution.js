function solve() {
    const text = document.getElementById('text').value;
    const convention = document.getElementById('naming-convention').value;
    let result = [];
    const array = text.split(' ');
    if (convention === 'Pascal Case'){
      for (let word of array){
        let upperLetter = word[0].toUpperCase();
        word = word.toLowerCase();
        word = upperLetter + word.substring(1);
        result.push(word);
      }
      result = result.join('');
    }
    else if (convention === 'Camel Case'){
      for (let i = 0 ; i<array.length; i++){
        if (i === 0){
          array[i] = array[i].toLowerCase();
        }
        else {
          let upperLetter =array[i][0].toUpperCase();
          array[i] = array[i].toLowerCase();
          array[i] = upperLetter + array[i].substring(1);
        
        }
        result.push(array[i]);
      }
      result = result.join('');
    }
    else {
      result = 'Error!';
    }
    document.getElementById('result').textContent = result;
}