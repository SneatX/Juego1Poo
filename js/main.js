import { Creature } from "./modules/creature.js";
import { Monster, Orc, Goblin, Kobold } from "./modules/characters/monster.js";
import { Hero } from "./modules/characters/hero.js";
import { Game } from "./modules/game.js";


const hero = new Hero()
console.log(hero)

const game = new Game()
game.execute("investigate")
game.execute("attack")
game.execute("attack")
game.execute("investigate")
game.execute("attack")
game.execute("investigate")
game.execute("attack")
game.execute("investigate")
game.execute("attack")

game.showRecord()

console.log(hero)






