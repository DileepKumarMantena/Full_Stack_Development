// InheritanceExample/CombinedInheritance.java
class Machine {
    void run() {
        System.out.println("Machine runs.");
    }
}

class Computer extends Machine {
    void compute() {
        System.out.println("Computer computes.");
    }
}

class Laptop extends Computer {
    void portable() {
        System.out.println("Laptop is portable.");
    }
}

class Desktop extends Computer {
    void highPerformance() {
        System.out.println("Desktop has high performance.");
    }
}

public class CombinedInheritance {
    public static void main(String[] args) {
        Laptop laptop = new Laptop();
        Desktop desktop = new Desktop();

        // Multilevel Inheritance
        laptop.run(); // Machine method
        laptop.compute(); // Computer method
        laptop.portable(); // Laptop method

        // Hierarchical Inheritance
        desktop.run(); // Machine method
        desktop.compute(); // Computer method
        desktop.highPerformance(); // Desktop method
    }
}
