export class Creature{
    constructor(name, maxLife, damage){
        this.name = name
        this.life = maxLife
        this.maxLife = maxLife
        this.damage = damage
    }

    set setLife(points){
        this.life += points
    }

    get getName(){
        return this.name
    }
}