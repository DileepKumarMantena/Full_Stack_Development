import java.util.HashSet;
import java.util.Scanner;

public class ImprovedPerformanceExample {
    public static void main(String[] args) {
        HashSet<Integer> evenset = new HashSet<>();
        HashSet<Integer> oddset = new HashSet<>();

        Scanner scanner = new Scanner(System.in);

        // Adding elements dynamically
        System.out.println("Enter the number of elements you want to add:");
        int n = scanner.nextInt();

        System.out.println("Enter " + n + " elements:");
        for (int i = 0; i < n;  i++) {
            int element = scanner.nextInt();
            if (element%2==0){
                 evenset.add(element);
            }
            else {
                oddset.add(element);
            }
           
        }

        // Display the set
        System.out.println("EvenSet:"+evenset);
        System.out.println("OddSet: " + oddset);

        // Checking for a specific element
        System.out.println("Enter an element to check if it exists in the set:");
        int elementToCheck = scanner.nextInt();

       

        scanner.close();
    }
}