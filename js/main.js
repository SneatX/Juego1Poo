import { Creature } from "./modules/creature.js";
import { Monster, Orc, Goblin, Kobold } from "./modules/characters/monster.js";
import { Hero, Inventory } from "./modules/characters/hero.js";
import { Game } from "./modules/game.js";

const newHeroButton = document.getElementById("newHeroButton")
const investigateButton = document.getElementById("investigateButton")
const attackButton = document.getElementById("attackButton")
const showItemsButton = document.getElementById("showItemsButton")
const useItemsButton = document.getElementById("useItemsButton")
const restartButton = document.getElementById("restartButton")


newHeroButton.addEventListener("click" , (e)=>{
    e.preventDefault()
    e.stopPropagation()
    const hero = new Hero()
    game.addRecord = hero
    game.showRecord()
})

investigateButton.addEventListener("click" , (e)=>{
    e.preventDefault()
    e.stopPropagation()
    game.execute("investigate")
    game.showRecord()
})

attackButton.addEventListener("click" , (e)=>{
    e.preventDefault()
    e.stopPropagation()
    game.execute("attack")
    game.showRecord()
})

showItemsButton.addEventListener("click" , (e)=>{
    e.preventDefault()
    e.stopPropagation()
    game.execute("showItems")
    game.showRecord()
})

useItemsButton.addEventListener("click" , (e)=>{
    e.preventDefault()
    e.stopPropagation()
    let inven = new Inventory()
    inven.showItems
    let option = Number(prompt("Insert the index of the item"))
    game.execute("useItem", option)
    
})

restartButton.addEventListener("click" , (e)=>{
    e.preventDefault()
    e.stopPropagation()
    game.restartGame()
})


const game = new Game()
