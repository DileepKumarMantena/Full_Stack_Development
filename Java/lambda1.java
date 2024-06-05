import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

public class lambda1 {
    public static void main(String[] args) {
        // Create an ArrayList with some integers
        List<Integer> numbers = new ArrayList<>();
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
        numbers.add(4);
        numbers.add(5);
        
        // Lambda function to check if a number is even
        Predicate<Integer> isEven = num -> num % 2 == 0;
        
        // Lambda function to check if a number is odd
        Predicate<Integer> isOdd = num -> num % 2 != 0;

        // Use the lambda functions to filter even and odd numbers
        List<Integer> evenNumbers = filter(numbers, isEven);
        List<Integer> oddNumbers = filter(numbers, isOdd);
        
        // Print the results
        System.out.println("Even Numbers: " + evenNumbers);
        System.out.println("Odd Numbers: " + oddNumbers);
    }

    // Method to filter numbers based on a predicate
    public static List<Integer> filter(List<Integer> numbers, Predicate<Integer> condition) {
        List<Integer> result = new ArrayList<>();
        for (Integer number : numbers) {
            if (condition.test(number)) {
                result.add(number);
            }
        }
        return result;
    }
}