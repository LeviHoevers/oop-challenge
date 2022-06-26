var name = "Pikachu";
var health = 80;
var hitpoints = 80;
var energyType = new EnergyType("electric", 10);
var move = new Move("Electric ring", 50);
var weakness = new Weakness(new EnergyType("Fire", 20), 1.5);
var resistance = new Resistance(new EnergyType("Fighting", 20), 20);

var pikachu = new Pikachu(name, health, hitpoints, energyType, move, weakness, resistance);

Pokemon.pokemonArray.push(pikachu);

console.log(pikachu)

var name = "Charmander";
var health = 60;
var hitpoints = 60;
var energyType = new EnergyType("fire", 10);
var move = new Move("flare", 30);
var weakness = new Weakness(new EnergyType("water", 20), 2);
var resistance = new Resistance(new EnergyType("lightning", 20), 10);

var charmander = new Charmander(name, health, hitpoints, energyType, move, weakness, resistance);

Pokemon.pokemonArray.push(charmander);

console.log(charmander);

console.log(Pokemon.pokemonArray[0])

document.write("charmander has " + Pokemon.pokemonArray[1].health + " Health")
document.write("<br>")
document.write("Pikachu attacks charmander with Electric Ring!");
Pokemon.pokemonArray[0].useMove(Pokemon.pokemonArray[1], 0);
document.write("<br>")
document.write("charmander has " + Pokemon.pokemonArray[1].health + " Health")
document.write("<br>")
document.write("Pikachu has " + Pokemon.pokemonArray[0].health + " Health")
document.write("<br>")
document.write("charmander attacks Pikachu with Flare!")
Pokemon.pokemonArray[1].useMove(Pokemon.pokemonArray[0], 1);
document.write("<br>")
document.write("Pikachu has " + Pokemon.pokemonArray[0].health + " Health")
document.write("<br>")
Pokemon.removeFainted();
document.write("the winner is " + Pokemon.pokemonArray[0].name + "!")




