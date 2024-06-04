import { Creature } from "./modules/creature.js";

import { Hero } from "./modules/characters/hero.js";
import { Monster, Orc, Goblin, Kobold } from "./modules/characters/monster.js";


//const creature = new Creature("Criatura 1" , 20, 10)
const hero = new Hero("Main Hero" , 50, 20)
const orc = new Orc()
const goblin = new Goblin()
const kobold = new Kobold()

console.log(hero)
console.log(orc)
console.log(goblin)
console.log(kobold)

