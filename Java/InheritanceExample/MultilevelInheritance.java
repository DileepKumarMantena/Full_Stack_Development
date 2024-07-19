// InheritanceExample/MultilevelInheritance.java
class LivingBeing {
    void respire() {
        System.out.println("Living being respires.");
    }
}

class Mammal extends LivingBeing {
    void walk() {
        System.out.println("Mammal walks.");
    }
}

class Human extends Mammal {
    void speak() {
        System.out.println("Human speaks.");
    }
}

public class MultilevelInheritance {
    public static void main(String[] args) {
        Human human = new Human();
        human.respire(); // LivingBeing method
        human.walk(); // Mammal method
        human.speak(); // Human method
    }
}
