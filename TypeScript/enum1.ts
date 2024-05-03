enum Animal {
    Dog,
    Cat,
  }

enum Breed {
    Labrador,
    Poodle,
    Persian,
  }
  
type AnimalBreed=Animal | Breed;
const item:AnimalBreed=Animal.Dog
console.log(item)


