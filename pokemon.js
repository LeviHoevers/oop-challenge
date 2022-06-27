class Pokemon{

    static amountOfPokemon = 0;
    static pokemonArray = [];
    
    constructor(name, health, hitPoints, energyType, move, weakness, resistance){

        this.name = name;
        this.health = health;
        this.hitPoints = hitPoints;
        this.energyType = energyType;
        this.move = move;
        this.weakness = weakness;
        this.resistance = resistance;
        Pokemon.amountOfPokemon++;

    }
    
    useMove(opponent, move, index){
        opponent.takeDamage(this.energyType, this.move, index);
    }

    takeDamage(energyType, move, index){
        if(energyType.name == this.resistance.energyType.name){
            move[index].damage = move[index].damage - this.resistance.value;
        }
        if(energyType.name == this.weakness.energyType.name){
            this.health = this.health - move[index].damage * this.weakness.multiplier;
        }
        else{
            this.health = this.health - move[index].damage;
        }
    }

    getAlive(){
        return amountOfPokemon;
    }

    static removeFainted(){
        for(var i=0; i<Pokemon.pokemonArray.length; i++){
            if(Pokemon.pokemonArray[i].health <= 0){
                Pokemon.pokemonArray.splice(Pokemon.pokemonArray[i], 1);
                amountOfPokemon--;
            }
        }
    }
}
