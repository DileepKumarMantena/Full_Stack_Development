// // // // enum Direction {
// // // //     Up,
// // // //     Down,
// // // //     Left,
// // // //     Right,
// // // //   }
// // // //   let playerDirection: Direction;
// // // //   playerDirection = Direction.Up;
// // // //   console.log(playerDirection); // Output: 0
// // // enum Country{
// // //     india,
// // //     usa,
// // //     uk,
// // //     nz
// // // }
// // // let CountrySelected:Country
// // // CountrySelected=Country.india
// // // // enum Direction {
// // // //     Up = "UP",
// // // //     Down = "DOWN",
// // // //     Left = "LEFT",
// // // //     Right = "RIGHT",
// // // //   }
// // // //   let playerDirection: Direction;
// // //   playerDirection = Direction.Up;
// // //   console.log(playerDirection); // Output: "UP"
// // enum Even {
// //     One = 1,
// //     Two = 2,
// //     Three = 3,
// //     Four = 4,
// //   }
// //   let playerDirection: Even;
// //   playerDirection = Even.One;
// //   let value=playerDirection
// //   console.log(playerDirection)
// //   if (value %2==0){
// //     console.log('Even')
// //   }
// //   else{
// //     console.log('Odd')
// //   }
// enum Direction {
//     Up=1,
//     Down=2,
//     Left=3,
//     Right=4,
//   }
//   for (let key in Direction) {
//     if (isNaN(Number(key))) {
//       console.log(key, ":", Direction[key]);
//   }
//   }
var Day;
(function (Day) {
    Day[Day["Sunday"] = 0] = "Sunday";
    Day[Day["Monday"] = 1] = "Monday";
    Day[Day["Tuesday"] = 2] = "Tuesday";
    Day[Day["Wednesday"] = 3] = "Wednesday";
    Day[Day["Thursday"] = 4] = "Thursday";
    Day[Day["Friday"] = 5] = "Friday";
    Day[Day["Saturday"] = 6] = "Saturday";
})(Day || (Day = {}));
function getDayName(day) {
    switch (day) {
        case Day.Sunday:
            return "Sunday";
        case Day.Monday:
            return "Monday";
        case Day.Tuesday:
            return "Tuesday";
        case Day.Wednesday:
            return "Wednesday";
        case Day.Thursday:
            return "Thursday";
        case Day.Friday:
            return "Friday";
        case Day.Saturday:
            return "Saturday";
        default:
            return "Invalid day";
    }
}
console.log(getDayName(Day.Monday)); // Output: Monday
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
//   function getAnimalInfo(animal: Animal, breed: Breed): string {
//     ;
//   }
//   console.log(getAnimalInfo(Animal.Dog, Breed.Labrador));
console.log(Animal.Dog, Breed.Labrador);
