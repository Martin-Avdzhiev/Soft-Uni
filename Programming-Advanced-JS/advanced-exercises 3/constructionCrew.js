function solve (worker){
    if (worker.dizziness == false){
        return worker;
    }
    else {
        worker.dizziness = false;
    }
    const neededWater = 0.1 * worker.weight * worker.experience;
    worker.levelOfHydrated += neededWater;
    return worker;
}

solve ({ weight: 80,

    experience: 1,
    
    levelOfHydrated: 0,
    
    dizziness: true })