import { Monster, Orc, Goblin, Kobold } from "./characters/monster.js"
import { Hero } from "./characters/hero.js"
export class Game{
    constructor(){
        //Si ya existe, devuelva la ya creada
        if(Game.instance){
            return Game.instance
        }
        Game.instance = this

        this.record = ["---The game starts---"]
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
        if(this.hero.getLife > 0){
            if(action === "attack"){
                this.combat.attack()
            }
            else if(action === "investigate"){
                this.investigate()
            }else{
                console.log("Opcion ingresada invalida")
            }
        }else{
            console.log("The hero is dead")
        }
    }

    investigate(){
        if(!this.monster){
            const monstersArr = [Orc, Goblin, Kobold]
            let randomIndex = Math.floor(Math.random() * 3)
            this.monster = Monster.createInstance(monstersArr[randomIndex]) //Asignamos a this.monster la nueva instancia de la clase Monster que es aleatoria
            this.setRecord = `Hero investigate: Has been generated a ${this.monster.getName}`
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

    showRecord(){
        console.clear()
        this.getRecord.forEach(element => {
            console.log(element)
        });
    }
}

export class Combat{
    attack(){
        let game = new Game()
        let hero = game.hero
        let monster = game.monster

        if(monster){
            let heroDamage = hero.damage
            let monsterDamage = monster.damage
            monster.setLife = -heroDamage
            hero.setLife = -monsterDamage

            game.setRecord = `Combat: ${hero.getName} do ${heroDamage} damage to ${monster.getName} and recieve ${monsterDamage} damage`
            console.log(game.getLastRecord) //Imprimimos el ataque

            if(monster.getLife <= 0){
                game.setRecord = `${hero.getName} defeat ${monster.getName}`
                game.monster = null
                Monster.deleteInstance()
            }
            if(hero.getLife <= 0){
                game.setRecord = `The hero ${hero.getName} was killed`
                game.setRecord = `---The game ends---`
            }
        }
        else{
            console.log("You cant attack, the monster was killed")
        }

    }
}