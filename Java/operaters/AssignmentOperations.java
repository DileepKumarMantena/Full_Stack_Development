// Operations/AssignmentOperations.java
public class AssignmentOperations {
    public int assign(int a) {
        return a;
    }

    public int addAndAssign(int a, int b) {
        a += b;
        return a;
    }

    public int subtractAndAssign(int a, int b) {
        a -= b;
        return a;
    }

    public int multiplyAndAssign(int a, int b) {
        a *= b;
        return a;
    }

    public int divideAndAssign(int a, int b) {
        if (b == 0) {
            throw new ArithmeticException("Division by zero");
        }
        a /= b;
        return a;
    }

    public int modulusAndAssign(int a, int b) {
        a %= b;
        return a;
    }
}
