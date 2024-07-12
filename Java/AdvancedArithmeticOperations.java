// AdvancedArithmeticOperations.java
public class AdvancedArithmeticOperations {

    // Method for addition
    public int add(int a, int b) {
        return a + b;
    }

    // Method for subtraction
    public int subtract(int a, int b) {
        return a - b;
    }

    // Method for multiplication
    public int multiply(int a, int b) {
        return a * b;
    }

    // Method for division
    public int divide(int a, int b) throws ArithmeticException {
        if (b == 0) {
            throw new ArithmeticException("Division by zero is not allowed");
        }
        return a / b;
    }

    // Method for modulus
    public int modulus(int a, int b) throws ArithmeticException {
        if (b == 0) {
            throw new ArithmeticException("Division by zero is not allowed");
        }
        return a % b;
    }

    // Method for exponentiation
    public double power(double a, double b) {
        return Math.pow(a, b);
    }
}
