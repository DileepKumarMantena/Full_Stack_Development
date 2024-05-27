public class Recursion {

            public static int factorial(int n) {
            if (n == 0 || n == 1) {
            return 1; // Base case
            } else {
            return n * factorial(n - 1); // Recursive case
            }
            }
            public static void main(String[] args) {
            int result = factorial(5);
            System.out.println("Factorial of 5 is: " + result);
            }
        }
            
//5*4*3*2*1=120