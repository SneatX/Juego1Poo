import { Creature } from "../creature.js"

export class Hero extends Creature{
    constructor(name, maxLife, damage){
        if(Hero.instance){
            return Hero.instance
        }
        
        super(name, maxLife, damage)
        
        Hero.instance = this

    }
}