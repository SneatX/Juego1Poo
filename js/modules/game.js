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
        this.inventory = new Inventory()
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

    execute(action, indexItem = 0){
        let hero = new Hero()
        if(hero.getLife > 0){
            if(action === "attack"){
                this.combat.attack()
            }
            else if(action === "investigate"){
                this.investigate()
            }
            else if(action === "showItems"){
                this.inventory.showItems()
            }
            else if(action === "useItem"){
                let items = this.inventory.getItems
                if(items.length > 0){
                    if(indexItem <= items.length -1){
                        this.inventory.useItem(items[indexItem]) //En teoria esta validacion no es necesaria, pero al ser por consola hay que hacerla
                    }else{
                        this.addRecord = "The hero dont have any items in that position"
                    }
                }else{
                    this.addRecord = "The hero dont have any items"
                }
            }
            else{
                this.addRecord = "Opcion ingresada invalida"
            }
        }else{
            this.addRecord = "The hero is dead"
        }
        this.showRecord()
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
                    this.addRecord = `The current monster hasn't died, Monster life: ${monsterLife}`
                }
            }
        }
        else{
            const itemsName = ["Item 1", "Item 2", "Item 3"]
            let randomIndex = Math.floor(Math.random() * 3)
            let lifePoints = Math.floor(Math.random() * 30) + 1
            let newIntem = new Item(itemsName[randomIndex], lifePoints)
            this.addRecord = `${this.hero.getName} find a ${itemsName[randomIndex]} with ${lifePoints} life points`
            this.inventory.addItem(newIntem)
        }
    }

    showRecord(){
        console.clear()
        this.getRecord.forEach(element => {
            console.log(element)
        });
    }

    restartGame(){
        location.reload();
    }


}

export class Combat{
    attack(){
        let game = new Game()
        let hero = new Hero()
        let monster = game.monster

        if(monster){
            let heroDamage = hero.damage
            let monsterDamage = monster.damage
            monster.setLife = -heroDamage
            hero.setLife = -monsterDamage

            game.addRecord = `Combat: ${hero.getName} do ${heroDamage} damage to ${monster.getName} and recieve ${monsterDamage} damage`

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
            game.addRecord = "You can't attack, there are no monsters"
        }

    }
}