import { Creature } from "./modules/creature.js";
import { Monster, Orc, Goblin, Kobold } from "./modules/characters/monster.js";
import { Hero } from "./modules/characters/hero.js";
import { Game } from "./modules/game.js";


const hero = new Hero("Main Hero" , 50, 20)
console.log(hero)

const game = new Game()
game.investigar()
console.log(game.getLastRecord)
game.atacar(-50)
console.log(game.getLastRecord)
game.investigar()
console.log(game.getLastRecord)