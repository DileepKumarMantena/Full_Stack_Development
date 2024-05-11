// class Animal {
//     name: string;

//     constructor(name: string) {
//         this.name = name;
//     }

//     makeSound() {
//         console.log('Animal makes a sound');
//     }
// }

// class Dog extends Animal {
//     constructor(name: string) {
//         super(name);
//     }

//     makeSound() {
//         console.log('Dog barks');
//     }
//     sample(){
//         console.log('Sample')
// }
    
//    }

// class Cat extends Dog{
//     constructor(name: string) {
//         super(name);
//     }

//     makeSound() {
//         console.log('Cat barks');
//     }
// }


// const cat= new Cat('Buddy');
// cat.makeSound(); 

// const mat=new Cat('Barks');
// cat.sample()














class Jump{
    jump(){
        console.log('Jump')
    }
}
class Fly{
    fly(){
        console.log("Fly")
    }
}
class Cat implements Jump,Fly{
    jump:()=>void
    fly:()=>void


}

