const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String
});

catSchema.methods.makeSound = function () {
    console.log(`Hello, my name is ${this.name} and meow!`);
}
const Cat = mongoose.model('Cat', catSchema);

async function main() {
    mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb://127.0.0.1:27017/catShelter');


    console.log('Database Connected');


    const cats = await readCats();
    cats.forEach(cat => {
        console.log(cat)
        cat.makeSound();
    });
    await saveCat('Garry', 4, 'Angora');
}
async function saveCat(name, age, breed) {
    const cat = new Cat({
        name,
        age,
        breed
    });

    //await cat.save();
}
async function readCats() {
    const cats = await Cat.find();
   // console.log(cats);
    return cats;
}

main();