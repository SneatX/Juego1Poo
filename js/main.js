import { Creature } from "./modules/creature.js";

import { Hero } from "./modules/characters/hero.js";
import { Monster, Orc, Goblin, Kobold } from "./modules/characters/monster.js";
import { Game } from "./modules/game.js";


const hero = new Hero("Main Hero" , 50, 20)
console.log(hero)

const record = new Game()
record.investigar()
record.investigar()
// console.log(record.getRecord)






