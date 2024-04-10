class Trainer {
    name: string;
    badges: number;
    pokemons: Pokemon[];
    constructor(name: string, pokemons: Pokemon[]) {
        this.name = name;
        this.pokemons = pokemons;
        this.badges = 0;
    }
}
class Pokemon {
    name: string;
    element: string;
    health: number;
    constructor(name: string, element: string, health: number) {
        this.name = name;
        this.element = element;
        this.health = health;
    }
}
function getPokemons(data: string[]): void {
    const trainers = formatData(data);
    let element = data.shift();
    while(element != "End" && element !=undefined){
        for (const trainer of trainers) {
            const isHasElement:boolean = trainer.pokemons.some((x) => x.element == element);
            if(isHasElement){
                trainer.badges++;
            }
            else{
                for (let i = 0; i < trainer.pokemons.length; i++) {
                    const pokemon = trainer.pokemons[i];
                    pokemon.health -= 10;
                    if(pokemon.health <= 0){
                        trainer.pokemons.splice(i,1);
                    }
                    
                }
            }
        }
        element = data.shift();
    }
    trainers.sort((a,b) => b.badges - a.badges);
    for (const trainer of trainers) {
        console.log(`${trainer.name} ${trainer.badges} ${trainer.pokemons.length}`)
    }
}
function formatData(array: string[]): Trainer[] {
    let line = array.shift();
    const trainers: Trainer[] = [];
    while (line != "Tournament" && line != undefined) {
        let [trainerName, pokemonName, pokemonElement, pokemonHealthString] = line.split(" ");
        let pokemonHealth = Number(pokemonHealthString);
        const newPokemon = new Pokemon(pokemonName, pokemonElement, pokemonHealth);
        const index = trainers.findIndex((x) => x.name == trainerName);
        if (index == -1) {
            const pokemonsArray: Pokemon[] = [];
            pokemonsArray.push(newPokemon);
            const newTrainer = new Trainer(trainerName, pokemonsArray);
            trainers.push(newTrainer);
        }
        else {
            trainers[index].pokemons.push(newPokemon);

        }
        line = array.shift();
    }
    return trainers
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