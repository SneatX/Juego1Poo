import { Creature } from "./modules/creature.js";

import { Hero } from "./modules/characters/hero.js";
import { Monster, Orc, Goblin, Kobold } from "./modules/characters/monster.js";


const hero = new Hero("Main Hero" , 50, 20)
console.log(hero)

const hero2 = new Hero("segundo heroe" , 50, 12133240)
console.log(hero2)

Monster.createInstance(Orc)
Monster.createInstance(Goblin)

console.log(Monster.instance)



