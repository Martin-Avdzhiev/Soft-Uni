const vectra = {
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
function solve (car){
    const enginePower = {
        small: [90,1800],
        normal: [120,2400],
        monster: [200,3500]
    }

    if (car.power<=enginePower.small[0]){
        car.volume = 1800;
        car.power = enginePower.small[0];
    }
    else if (car.power<=enginePower.normal[0]){
        car.volume = 2400;
        car.power = enginePower.normal[0];
    }
    else {
        car.volume = 3500;
        car.power = enginePower.monster[0];
    }
    if (car.wheelsize % 2 == 0){
        car.wheelsize -= 1;
    }

    const result = {
        model: car.model,
        engine : { power: car.power, volume: car.volume },
        carriage: { type: car.carriage, color: car.color },
        wheels: Array(4).fill(car.wheelsize)
    }
    return result;
}

console.table(solve(vectra));