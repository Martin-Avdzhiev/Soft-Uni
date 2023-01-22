function rectangle (width,height,color){
    let capitalLetter = color[0].toUpperCase();
    color = color.replace(color[0],'');
    capitalLetter +=color;
    color = capitalLetter;
    const object = {
        width,
        height,
        color,
        calcArea: function (){
            return object.width * object.height; 
        }
    }
    return object;
}

let rect = rectangle(4, 5, 'red');

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());