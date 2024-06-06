import { Monster, Orc, Goblin, Kobold } from "./characters/monster.js"
import { Hero, Item, Inventory } from "./characters/hero.js"
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
        this.Inventory = new Inventory()
    }

    set addRecord(data){
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

    static deleteGameInstance(){
        Game.instance = null
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
        let random = Math.floor(Math.random() * 4)
        if(random != 3){
            if(!this.monster){
                const monstersArr = [Orc, Goblin, Kobold]
                let randomIndex = Math.floor(Math.random() * 3)
                this.monster = Monster.createInstance(monstersArr[randomIndex]) //Asignamos a this.monster la nueva instancia de la clase Monster que es aleatoria
                this.addRecord = `Hero investigate: Has been generated a ${this.monster.getName}`
            }
            else{
                let monsterLife = this.monster.getLife //Tomamos la vida de la instancia viva
                if(monsterLife <= 0){
                    this.monster = null
                    this.investigate()
                }
                else{
                    console.log(`The current monster hasn't died, Monster life: ${monsterLife}`)
                }
            }
        }
        else{
            const itemsName = ["Item 1", "Item 2", "Item 3"]
            let randomIndex = Math.floor(Math.random() * 3)
            let lifePoints = Math.floor(Math.random() * 30) + 1
            let newIntem = new Item(itemsName[randomIndex], lifePoints)
            this.addRecord = `${this.hero.getName} find a ${itemsName[randomIndex]} with ${lifePoints} life points`
            this.Inventory.addItem(newIntem)
        }
    }

    showRecord(){
        console.clear()
        this.getRecord.forEach(element => {
            console.log(element)
        });
    }

    restartGame(){
        Monster.deleteMonsterInstance()
        Hero.deleteHeroInstance()
        Game.deleteGameInstance()
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

            game.addRecord = `Combat: ${hero.getName} do ${heroDamage} damage to ${monster.getName} and recieve ${monsterDamage} damage`
            console.log(game.getLastRecord) //Imprimimos el ataque

            if(monster.getLife <= 0){
                game.addRecord = `${hero.getName} defeat ${monster.getName}`
                game.monster = null
                Monster.deleteMonsterInstance()
            }
            if(hero.getLife <= 0){
                game.addRecord = `The hero ${hero.getName} was killed`
                game.addRecord = `---The game ends---`
            }
        }
        else{
            console.log("You cant attack, the monster was killed")
        }

    }
}