// // // // // // enum Direction {
// // // // // //     Up,
// // // // // //     Down,
// // // // // //     Left,
// // // // // //     Right,
// // // // // //   }
// // // // // //   let playerDirection: Direction;
// // // // // //   playerDirection = Direction.Up;
// // // // // //   console.log(playerDirection); // Output: 0
// // // // // enum Country{
// // // // //     india,
// // // // //     usa,
// // // // //     uk,
// // // // //     nz
// // // // // }
// // // // // let CountrySelected:Country
// // // // // CountrySelected=Country.india
// // // // // // enum Direction {
// // // // // //     Up = "UP",
// // // // // //     Down = "DOWN",
// // // // // //     Left = "LEFT",
// // // // // //     Right = "RIGHT",
// // // // // //   }
// // // // // //   let playerDirection: Direction;
// // // // //   playerDirection = Direction.Up;
// // // // //   console.log(playerDirection); // Output: "UP"
// // // // enum Even {
// // // //     One = 1,
// // // //     Two = 2,
// // // //     Three = 3,
// // // //     Four = 4,
// // // //   }
// // // //   let playerDirection: Even;
// // // //   playerDirection = Even.One;
// // // //   let value=playerDirection
// // // //   console.log(playerDirection)
// // // //   if (value %2==0){
// // // //     console.log('Even')
// // // //   }
// // // //   else{
// // // //     console.log('Odd')
// // // //   }
// // // enum Direction {
// // //     Up=1,
// // //     Down=2,
// // //     Left=3,
// // //     Right=4,
// // //   }
// // //   for (let key in Direction) {
// // //     if (isNaN(Number(key))) {
// // //       console.log(key, ":", Direction[key]);
// // //   }
// // //   }
// // enum Day {
// //     Sunday,
// //     Monday,
// //     Tuesday,
// //     Wednesday,
// //     Thursday,
// //     Friday,
// //     Saturday,
// //   }
// //   function getDayName(day: Day): string {
// //     switch (day) {
// //       case Day.Sunday:
// //         return "Sunday";
// //       case Day.Monday:
// //         return "Monday";
// //       case Day.Tuesday:
// //         return "Tuesday";
// //       case Day.Wednesday:
// //         return "Wednesday";
// //       case Day.Thursday:
// //         return "Thursday";
// //       case Day.Friday:
// //         return "Friday";
// //       case Day.Saturday:
// //         return "Saturday";
// //       default:
// //         return "Invalid day";
// //     }
// //   }
// //   console.log(getDayName(Day.Monday)); // Output: Monday
// //   enum Animal {
// //     Dog,
// //     Cat,
// //   }
// //   enum Breed {
// //     Labrador,
// //     Poodle,
// //     Persian,
// //   }
// // //   function getAnimalInfo(animal: Animal, breed: Breed): string {
// // //     ;
// // //   }
// // //   console.log(getAnimalInfo(Animal.Dog, Breed.Labrador));
// // console.log(Animal.Dog,Breed.Labrador)
// enum colour{
//     red,
//     green,
//     blue
// }
// enum shape{
//     circle,
//     square,
//     triangle
// }
// type combine=colour 
// function sample
var Even;
(function (Even) {
    Even[Even["One"] = 1] = "One";
    Even[Even["Two"] = 2] = "Two";
    Even[Even["Three"] = 3] = "Three";
    Even[Even["Four"] = 4] = "Four";
})(Even || (Even = {}));
for (var value in Even) {
    if (!isNaN(Number(value))) {
        var enumValue = value;
        if (Even[enumValue] % 2 === 0) {
            console.log("".concat(Even[enumValue], " is even"));
        }
        else {
            console.log("".concat(Even[enumValue], " is odd"));
        }
    }
}
