// InheritanceExample/HierarchicalInheritance.java
class Vehicle {
    void start() {
        System.out.println("Vehicle starts.");
    }
}

class Car extends Vehicle {
    void drive() {
        System.out.println("Car drives.");
    }
}

class Bike extends Vehicle {
    void ride() {
        System.out.println("Bike rides.");
    }
}

public class HierarchicalInheritance {
    public static void main(String[] args) {
        Car car = new Car();
        Bike bike = new Bike();

        car.start(); // Vehicle method
        car.drive(); // Car method

        bike.start(); // Vehicle method
        bike.ride(); // Bike method
    }
}
