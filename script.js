var name = "pikachu";
var health = 80;
var hitpoints = 80;
var energyType = new EnergyType("electric", 10);
var move = new Move("Electric ring", 50);
var weakness = new Weakness(new EnergyType("Fire", 20), 1.5);
var resistance = new Resistance(new EnergyType("Fighting", 20), 20);

var pikachu = new Pikachu(name, health, hitpoints, energyType, move, weakness, resistance);

console.log(pikachu)

var name = "charmander";
var health = 60;
var hitpoints = 60;
var energyType = new EnergyType("fire", 10);
var move = new Move("flare", 30);
var weakness = new Weakness(new EnergyType("water", 20), 2);
var resistance = new Resistance(new EnergyType("lightning", 20), 10);

var charmander = new Charmander(name, health, hitpoints, energyType, move, weakness, resistance);

console.log(charmander);


