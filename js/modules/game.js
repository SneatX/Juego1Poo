import { Monster, Orc, Goblin, Kobold } from "./characters/monster.js"
export class Game{
    constructor(){
        //Si ya existe, devuelva la ya creada
        if(Game.instance){
            return Game.instance
        }
        Game.instance = this

        this.record = []
        this.monster
    }

    set setRecord(data){
        this.record.push(data)
    }

    get getRecord(){
        return this.record
    }

    set setMonster(newMonster){
        this.monster = newMonster
    }

    investigar(){
        if(!this.monster){
            const monstersArr = [Orc, Goblin, Kobold]
            let randomIndex = Math.floor(Math.random() * 3)
            this.monster = Monster.createInstance(monstersArr[randomIndex])
            console.log(`new monster: ${this.monster.getName}`)
            console.log(this.monster)
        }
        else{
            let monsterLife = this.monster.getLife
            if(monsterLife <= 0){
                this.monster = null
            }
            else{
                console.log(`The current monster hasn't died:
Monster life: ${monsterLife}`)
            }
        }
    }
}