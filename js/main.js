import { Creature } from "./modules/creature.js";
import { Monster, Orc, Goblin, Kobold } from "./modules/characters/monster.js";
import { Hero, Inventory } from "./modules/characters/hero.js";
import { Game } from "./modules/game.js";


const hero = new Hero()
const inven = new Inventory()
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

game.restartGame()
console.log(Hero.instance)
console.log(Monster.instance)
console.log(Game.instance)