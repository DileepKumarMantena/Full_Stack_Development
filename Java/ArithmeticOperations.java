// ArithmeticOperations.java
public class ArithmeticOperations {
    
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
}
