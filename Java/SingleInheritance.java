// Single Inheritance Example
class Animal {
    void eat() {
        System.out.println("This animal eats food");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("The dog barks");
    }
}

// Multilevel Inheritance Example
class Mammal extends Animal {
    void walk() {
        System.out.println("This mammal walks");
    }
}

class DogMultilevel extends Mammal {
    void bark() {
        System.out.println("The dog barks");
    }
}

// Hierarchical Inheritance Example
class Cat extends Animal {
    void meow() {
        System.out.println("The cat meows");
    }
}

public class SingleInheritance {
    public static void main(String[] args) {
        // Single Inheritance
        System.out.println("Single Inheritance:");
        Dog dog = new Dog();
        dog.eat();  // eat animal class 
        dog.bark(); // dog class
        System.out.println();

        // Multilevel Inheritance
        System.out.println("Multilevel Inheritance:");
        DogMultilevel dogMultilevel = new DogMultilevel();
        dogMultilevel.eat();  // Inherited from Animal
        dogMultilevel.walk(); // Inherited from Mammal
        dogMultilevel.bark(); // DogMultilevel's own method
        System.out.println();

        // Hierarchical Inheritance
        System.out.println("Hierarchical Inheritance:");
        Dog dogHierarchical = new Dog();
        dogHierarchical.eat();  // Inherited from Animal
        dogHierarchical.bark(); // Dog's own method

        Cat cat = new Cat();
        cat.eat();  // Inherited from Animal
        cat.meow(); // Cat's own method
    }
}