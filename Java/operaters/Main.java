// Operations/Main.java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Select operation type:");
        System.out.println("1. Arithmetic");
        System.out.println("2. Comparison");
        System.out.println("3. Logical");
        System.out.println("4. Assignment");

        int choice = scanner.nextInt();

        switch (choice) {
            case 1:
                performArithmeticOperations();
                break;
            case 2:
                performComparisonOperations();
                break;
            case 3:
                performLogicalOperations();
                break;
            case 4:
                performAssignmentOperations();
                break;
            default:
                System.out.println("Invalid choice");
                break;
        }

        scanner.close();
    }

    private static void performArithmeticOperations() {
        ArithmeticOperations ao = new ArithmeticOperations();
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter two numbers:");
        int a = scanner.nextInt();
        int b = scanner.nextInt();

        System.out.println("Select arithmetic operation:");
        System.out.println("1. Add");
        System.out.println("2. Subtract");
        System.out.println("3. Multiply");
        System.out.println("4. Divide");
        System.out.println("5. Modulus");

        int choice = scanner.nextInt();

        switch (choice) {
            case 1:
                System.out.println("Result: " + ao.add(a, b));
                break;
            case 2:
                System.out.println("Result: " + ao.subtract(a, b));
                break;
            case 3:
                System.out.println("Result: " + ao.multiply(a, b));
                break;
            case 4:
                System.out.println("Result: " + ao.divide(a, b));
                break;
            case 5:
                System.out.println("Result: " + ao.modulus(a, b));
                break;
            default:
                System.out.println("Invalid choice");
                break;
        }

        scanner.close();
    }

    private static void performComparisonOperations() {
        ComparisonOperations co = new ComparisonOperations();
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter two numbers:");
        int a = scanner.nextInt();
        int b = scanner.nextInt();

        System.out.println("Select comparison operation:");
        System.out.println("1. Equal");
        System.out.println("2. Not Equal");
        System.out.println("3. Greater Than");
        System.out.println("4. Less Than");
        System.out.println("5. Greater Than or Equal");
        System.out.println("6. Less Than or Equal");

        int choice = scanner.nextInt();

        switch (choice) {
            case 1:
                System.out.println("Result: " + co.isEqual(a, b));
                break;
            case 2:
                System.out.println("Result: " + co.isNotEqual(a, b));
                break;
            case 3:
                System.out.println("Result: " + co.isGreaterThan(a, b));
                break;
            case 4:
                System.out.println("Result: " + co.isLessThan(a, b));
                break;
            case 5:
                System.out.println("Result: " + co.isGreaterThanOrEqual(a, b));
                break;
            case 6:
                System.out.println("Result: " + co.isLessThanOrEqual(a, b));
                break;
            default:
                System.out.println("Invalid choice");
                break;
        }

        scanner.close();
    }

    private static void performLogicalOperations() {
        LogicalOperations lo = new LogicalOperations();
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter two boolean values (true/false):");
        boolean a = scanner.nextBoolean();
        boolean b = scanner.nextBoolean();

        System.out.println("Select logical operation:");
        System.out.println("1. AND");
        System.out.println("2. OR");
        System.out.println("3. NOT");

        int choice = scanner.nextInt();

        switch (choice) {
            case 1:
                System.out.println("Result: " + lo.and(a, b));
                break;
            case 2:
                System.out.println("Result: " + lo.or(a, b));
                break;
            case 3:
                System.out.println("Result: " + lo.not(a));
                break;
            default:
                System.out.println("Invalid choice");
                break;
        }

        scanner.close();
    }

    private static void performAssignmentOperations() {
        AssignmentOperations ao = new AssignmentOperations();
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter a number:");
        int a = scanner.nextInt();

        System.out.println("Enter another number (if needed):");
        int b = scanner.nextInt();

        System.out.println("Select assignment operation:");
        System.out.println("1. Assign");
        System.out.println("2. Add and Assign");
        System.out.println("3. Subtract and Assign");
        System.out.println("4. Multiply and Assign");
        System.out.println("5. Divide and Assign");
        System.out.println("6. Modulus and Assign");

        int choice = scanner.nextInt();

        switch (choice) {
            case 1:
                System.out.println("Result: " + ao.assign(a));
                break;
            case 2:
                System.out.println("Result: " + ao.addAndAssign(a, b));
                break;
            case 3:
                System.out.println("Result: " + ao.subtractAndAssign(a, b));
                break;
            case 4:
                System.out.println("Result: " + ao.multiplyAndAssign(a, b));
                break;
            case 5:
                System.out.println("Result: " + ao.divideAndAssign(a, b));
                break;
            case 6:
                System.out.println("Result: " + ao.modulusAndAssign(a, b));
                break;
            default:
                System.out.println("Invalid choice");
                break;
        }

        scanner.close();
    }
}
