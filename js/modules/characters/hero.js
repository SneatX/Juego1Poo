import { Creature } from "../creature.js"

export class Hero extends Creature{
    constructor(name, maxLife, damage){
        super(name, maxLife, damage)
        
        if(Hero.instance){
            return Hero.instance
        }
        Hero.instance = this

    }
}