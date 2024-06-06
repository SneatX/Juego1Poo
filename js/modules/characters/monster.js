import { Creature } from "../creature.js"

export class Monster extends Creature{
    constructor(name, maxLife, damage){
        super(name, maxLife, damage)
        this.name = name
        this.life = maxLife
        this.damage = damage
    }

    static createInstance(type){
        if(Monster.instance && Monster.instance instanceof type){
            return Monster.instance;
        }

        if (Monster.instance) {
            Monster.instance = null;
        }
        Monster.instance = new type();
        return Monster.instance;
    }

    static deleteInstance(){
        Monster.instance = null
    }

    set setLife(points){
        this.life += points
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