import { Creature } from "../creature.js"

export class Monster extends Creature{
    constructor(name, maxLife, damage){
        super(name, maxLife, damage)
        
    }
}

export class Orc extends Monster{
    constructor(){
        super("Orc", 20, 10)

    }
}

export class Goblin extends Monster{
    constructor(){
        super("Goblin", 10, 15)
        
    }
}

export class Kobold extends Monster{
    constructor(){
        super("Kobold", 5, 20)
        
    }
}