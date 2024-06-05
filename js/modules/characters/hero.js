import { Creature } from "../creature.js"

export class Hero extends Creature{
    constructor(name = "Main Hero", maxLife = 50, damage = 20){
        if(Hero.instance){
            return Hero.instance
        }
        
        super(name, maxLife, damage)
        
        Hero.instance = this
    }
}