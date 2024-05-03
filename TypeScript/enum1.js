var Animal;
(function (Animal) {
    Animal[Animal["Dog"] = 0] = "Dog";
    Animal[Animal["Cat"] = 1] = "Cat";
})(Animal || (Animal = {}));
var Breed;
(function (Breed) {
    Breed[Breed["Labrador"] = 0] = "Labrador";
    Breed[Breed["Poodle"] = 1] = "Poodle";
    Breed[Breed["Persian"] = 2] = "Persian";
})(Breed || (Breed = {}));
var item = Animal.Dog;
console.log(item);
