"use strict";
class Trainer {
    constructor(name, pokemons) {
        this.name = name;
        this.pokemons = pokemons;
        this.badges = 0;
    }
}
class Pokemon {
    constructor(name, element, health) {
        this.name = name;
        this.element = element;
        this.health = health;
    }
}
function getPokemons(data) {
    const trainers = formatData(data);
    let element = data.shift();
    while (element != "End" && element != undefined) {
        for (const trainer of trainers) {
            const isHasElement = trainer.pokemons.some((x) => x.element == element);
            if (isHasElement) {
                trainer.badges++;
            }
            else {
                for (let i = 0; i < trainer.pokemons.length; i++) {
                    const pokemon = trainer.pokemons[i];
                    pokemon.health -= 10;
                    if (pokemon.health <= 0) {
                        trainer.pokemons.splice(i, 1);
                    }
                }
            }
        }
        element = data.shift();
    }
    trainers.sort((a, b) => b.badges - a.badges);
    for (const trainer of trainers) {
        console.log(`${trainer.name} ${trainer.badges} ${trainer.pokemons.length}`);
    }
}
function formatData(array) {
    let line = array.shift();
    const trainers = [];
    while (line != "Tournament" && line != undefined) {
        let [trainerName, pokemonName, pokemonElement, pokemonHealthString] = line.split(" ");
        let pokemonHealth = Number(pokemonHealthString);
        const newPokemon = new Pokemon(pokemonName, pokemonElement, pokemonHealth);
        const index = trainers.findIndex((x) => x.name == trainerName);
        if (index == -1) {
            const pokemonsArray = [];
            pokemonsArray.push(newPokemon);
            const newTrainer = new Trainer(trainerName, pokemonsArray);
            trainers.push(newTrainer);
        }
        else {
            trainers[index].pokemons.push(newPokemon);
        }
        line = array.shift();
    }
    return trainers;
}
getPokemons([
    "Sam Blastoise Water 18",
    "Narry Pikachu Electricity 22",
    "John Kadabra Psychic 90",
    "Tournament",
    "Fire",
    "Electricity",
    "Fire",
    "End"
]);
//# sourceMappingURL=pokemonTrainer.js.map