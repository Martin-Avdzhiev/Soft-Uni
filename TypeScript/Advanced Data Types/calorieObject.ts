
const transform: (arr:string[]) => Record<string, number> = (arr) => {
    const foods: string[] = arr.filter((x,index) => index % 2 == 0);
    const calories: number[] = arr.filter((x,index) => index % 2 == 1).map((x) => Number(x));
    const result:Record<string, number> = {};
    for (let i = 0; i< foods.length; i++) {
        result[foods[i]] = calories[i]; 
    }
    return result;
}
console.log(transform(["Yoghurt", "48", "Rise", "138", "Apple", "52"]));