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
        this.hero = new Hero()
        this.combat = new Combat()
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

    execute(action){
        if(action === "attack"){
            this.combat.attack()
        }
        else if(action === "investigate"){
            this.investigate()
        }else{
            console.log("Opcion ingresada invalida")
        }
    }

    investigate(){
        if(!this.monster){
            const monstersArr = [Orc, Goblin, Kobold]
            let randomIndex = Math.floor(Math.random() * 3)
            this.monster = Monster.createInstance(monstersArr[randomIndex]) //Asignamos a this.monster la nueva instancia de la clase Monster que es aleatoria
            this.setRecord = `Has been generated a ${this.monster.getName}`
        }
        else{
            let monsterLife = this.monster.getLife //Tomamos la vida de la instancia viva
            if(monsterLife <= 0){
                this.monster = null
                this.investigate()
            }
            else{
                console.log(`The current monster hasn't died:
Monster life: ${monsterLife}`)
            }
        }
    }
}

export class Combat{
    attack(){
        let game = new Game()
        let hero = game.hero
        let monster = game.monster

        if(monster){
            let damage = hero.damage
            monster.setLife = -damage
            game.setRecord = `${hero.getName} do ${damage} damage to ${monster.getName}`
            console.log(game.getLastRecord) //Imprimimos el ataque
            let monsterLife = monster.getLife
            if(monsterLife <= 0){
                game.setRecord = `${hero.getName} defeat ${monster.getName}`
                game.monster = null
                Monster.deleteInstance()
            }
        }
        else{
            console.log("You cant attack, the monster was killed")
        }

    }
}