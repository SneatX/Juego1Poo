import { Creature } from "../creature.js"

export class Hero extends Creature{
    constructor(name = "Main Hero", maxLife = 50, damage = 20){
        if(Hero.instance){
            return Hero.instance
        }

        super(name, maxLife, damage)
        
        Hero.instance = this
        this.inventory = []
    }

    get getInventory(){
        return this.inventory
    }

    static deleteHeroInstance(){
        Hero.instance = null
    }

    useItem(item){
        item.utilizar(this)
        let index = this.inventory.indexOf(item)
        this.inventory.splice(index, 1)
    }
}

export class Item{
    constructor(name, lifePoints){
        this.name = name
        this.lifePoints = lifePoints
    }

    utilizar(objetivo){
        objetivo.setLife = this.lifePoints
    }
}