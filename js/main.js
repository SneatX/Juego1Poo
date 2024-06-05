import { Creature } from "./modules/creature.js";
import { Monster, Orc, Goblin, Kobold } from "./modules/characters/monster.js";
import { Hero } from "./modules/characters/hero.js";
import { Game } from "./modules/game.js";


const hero = new Hero()
console.log(hero)

const game = new Game()
game.execute("investigate")
console.log(game.getLastRecord)
game.execute("attack")
console.log(game.getLastRecord)
game.execute("attack")
game.execute("investigate")
console.log(game.getLastRecord)
game.execute("attack")
console.log(game.getLastRecord)
console.log(game.getRecord)




