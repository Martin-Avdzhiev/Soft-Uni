function solve (array,start,end){
    if (!Array.isArray(array)){
        return NaN;
    }
    start = Math.max(start,0);
    end = Math.min(array.length-1,end);
    const sum = array.slice(start,end+1).map(x => Number(x)).reduce((acc,z) => acc + z,0);
    return sum;
}

solve ([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)