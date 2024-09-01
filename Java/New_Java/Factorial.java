public public class Factorial {
    public static void main(String[] args) {
        int number = 5;
        long factorial = factorial(number);
        System.out.println("Factorial of " + number + " is " + factorial);
    }

    public static long factorial(int n) {
        if (n == 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }
}
 {
    
}
