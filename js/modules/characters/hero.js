import { Creature } from "../creature.js"
import { Game } from "../game.js"

export class Hero extends Creature{
    constructor(name = "Main Hero", maxLife = 50, damage = 20){
        if(Hero.instance){
            return Hero.instance
        }

        super(name, maxLife, damage)
        
        Hero.instance = this
    }

    get getInventory(){
        return this.inventory
    }

    static deleteHeroInstance(){
        Hero.instance = null
    }
}

export class Item{
    constructor(name, lifePoints){
        this.name = name
        this.lifePoints = lifePoints
    }
    get getName(){
        return this.name
    }
    get getPoints(){
        return this.lifePoints
    }
}

export class Inventory{
    constructor(){
        if(Inventory.instance){
            return Inventory.instance
        }
        Inventory.instance = this
        this.items = []
    }

    get getItems(){
        return this.items
    }

    addItem(item){
        this.items.push(item)
    }

    useItem(item){
        let hero = new Hero()
        hero.setLife = item.lifePoints
        this.removeItem(item)
    }

    removeItem(item){
        let index = this.items.indexOf(item)
        this.items.splice(index, 1)
    }

    showItems(){
        let game = new Game()
        let str = `Hero inventory: \n`
        this.items.forEach(item => {
            console.log(item)
            str+= `    -${item.getName} : ${item.getPoints}\n`
        });
        game.addRecord = str
    }
}