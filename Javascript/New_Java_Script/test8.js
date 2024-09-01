class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    speak() {
        console.log(this.name + " says " + this.sound);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name, "woof");
    }
}

let myDog = new Dog("Buddy");
myDog.speak(); // Buddy says woof
