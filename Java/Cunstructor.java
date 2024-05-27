public class Cunstructor {
    // Fields (attributes)
    String make;
    String model;
    int year;
    // Method to display car information
    public void displayInfo() {
    System.out.println("Make: " + make);
    System.out.println("Model:" + model);
    System.out.println("Year: " + year);
    }
    
        public static void main(String[] args) {
        // Create car objects
        Cunstructor car1 = new Cunstructor();
        Cunstructor car2 = new Cunstructor();
        
        // Initialize car1 properties
        car1.make = "Toyota";
        car1.model = "Corolla";
        car1.year = 2020;
        // Initialize car2 properties
        car2.make = "Honda";
        car2.model = "Civic";
        car2.year = 2022;
        // Display car information
        car1.displayInfo();
        System.out.println(); // Add a line break
        car2.displayInfo();
        }
        }