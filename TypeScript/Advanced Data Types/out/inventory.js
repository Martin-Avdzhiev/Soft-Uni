"use strict";
function getHeroes(arr) {
    const heroes = [];
    for (const data of arr) {
        let info = data.split(" / ");
        const hero = {
            Hero: info[0],
            level: Number(info[1]),
            Items: info[2].split(", ")
        };
        heroes.push(hero);
    }
    heroes.sort((a, b) => a.level - b.level);
    const result = [];
    for (const hero of heroes) {
        result.push(`Hero: ${hero.Hero}\nlevel => ${hero.level}\nitems => ${hero.Items.join(", ")}`);
    }
    return result.join("");
}
console.log(getHeroes(["Isaac / 25 / Apple, GravityGun", "Derek / 12 / BarrelVest, DestructionSwor", "Hes / 1 / Desolator, Sentinel, Antara"]));
//# sourceMappingURL=inventory.js.map