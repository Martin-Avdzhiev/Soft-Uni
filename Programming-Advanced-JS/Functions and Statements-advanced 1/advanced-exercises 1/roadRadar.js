function solve(speed, zone) {

    let object = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    }

    if (object[zone] >= speed) {
        console.log(`Driving ${speed} km/h in a ${object[zone]} zone`);
    }
    else if (speed<=object[zone] + 20) {
        console.log(`The speed is ${speed - object[zone]} km/h faster than the allowed speed of ${object[zone]} - speeding`);
    }
    else if (speed<=object[zone] + 40) {
        console.log(`The speed is ${speed - object[zone]} km/h faster than the allowed speed of ${object[zone]} - excessive speeding`);
    }
    else {
        console.log(`The speed is ${speed - object[zone]} km/h faster than the allowed speed of ${object[zone]} - reckless driving`);
    }
}

solve(200, 'motorway')