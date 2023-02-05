function solve (areaFunc, volFunc, json){
    const array = JSON.parse(json);
    const result = [];
    for (const shape of array){
        const currentArea = areaFunc.call(shape);
        const currentVol = volFunc.call(shape);
        const currentObject = {
            area: Number(currentArea),
            volume: Number(currentVol)
        }
        result.push(currentObject);
    }
    return result;
}

function area() {

return Math.abs(this.x * this.y);

};

function vol() {

return Math.abs(this.x * this.y * this.z);

};

solve (area, vol, `[

{"x":"1","y":"2","z":"10"},

{"x":"7","y":"7","z":"10"},

{"x":"5","y":"2","z":"10"}

]`)