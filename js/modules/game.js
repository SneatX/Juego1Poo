import { Monster, Orc, Goblin, Kobold } from "./characters/monster.js"
import { Hero } from "./characters/hero.js"
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

    get getLastRecord(){
        let lastPos = this.record.length - 1
        return this.record[lastPos]
    }

    set setMonster(newMonster){
        this.monster = newMonster
    }

    investigar(){
        if(!this.monster){
            Monster.deleteInstance() //Eliminamos la instancia de mounstro viva por si se repite
            const monstersArr = [Orc, Goblin, Kobold]
            let randomIndex = Math.floor(Math.random() * 3)
            this.monster = Monster.createInstance(monstersArr[randomIndex]) //Asignamos a this.monster la nueva instancia de la clase Monster que es aleatoria
            this.setRecord = `Has been generated a ${this.monster.getName}`
        }
        else{
            let monsterLife = this.monster.getLife //Tomamos la vida de la instancia viva
            if(monsterLife <= 0){
                this.monster = null
                this.investigar()
            }
            else{
                console.log(`The current monster hasn't died:
Monster life: ${monsterLife}`)
            }
        }
    }

    atacar(damage){
        this.monster.setLife = damage
        this.setRecord = `${Hero.instance.getName} do ${damage} damage to ${this.monster.getName}`
        let monsterLife = this.monster.getLife
        if(monsterLife <= 0){
            this.setRecord = `${Hero.instance.getName} defeat ${this.monster.getName}`
        }
    }
}