public class MethodExample {
    // Method to calculate the sum of two integers
    public static int calculateSum(int num1, int num2) {
    int sum = num1 + num2;
    return sum; // Return the calculated sum
    }
    public static int calculatesub(int num1, int num2) {
        int sum = num1 - num2;
        return sum; // Return the calculated sum
        }
    public static void main(String[] args) {
    int a = 5;
    int b = 7;
    int result = calculateSum(a, b); // Call the method and store the result
    int subresult=calculatesub(a, b);
    System.out.println("The sum of" + a + " and " + b + " is:" + result);
    System.out.println("The sum of" + a + " and " + b + " is:" + subresult);










    

    }
    }