// AdvancedMain.java
import java.util.Scanner;

public class AdvancedMain {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        AdvancedArithmeticOperations operations = new AdvancedArithmeticOperations();

        System.out.println("Select an operation to perform: ");
        System.out.println("1. Addition");
        System.out.println("2. Subtraction");
        System.out.println("3. Multiplication");
        System.out.println("4. Division");
        System.out.println("5. Modulus");
        System.out.println("6. Exponentiation");
        int choice = scanner.nextInt();

        System.out.println("Enter the first number: ");
        double num1 = scanner.nextDouble();

        System.out.println("Enter the second number: ");
        double num2 = scanner.nextDouble();

        switch (choice) {
            case 1:
                System.out.println("Addition Result: " + operations.add((int) num1, (int) num2));
                break;
            case 2:
                System.out.println("Subtraction Result: " + operations.subtract((int) num1, (int) num2));
                break;
            case 3:
                System.out.println("Multiplication Result: " + operations.multiply((int) num1, (int) num2));
                break;
            case 4:
                try {
                    System.out.println("Division Result: " + operations.divide((int) num1, (int) num2));
                } catch (ArithmeticException e) {
                    System.out.println(e.getMessage());
                }
                break;
            case 5:
                try {
                    System.out.println("Modulus Result: " + operations.modulus((int) num1, (int) num2));
                } catch (ArithmeticException e) {
                    System.out.println(e.getMessage());
                }
                break;
            case 6:
                System.out.println("Exponentiation Result: " + operations.power(num1, num2));
                break;
            default:
                System.out.println("Invalid choice!");
        }

        scanner.close();
    }
}
