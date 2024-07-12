// import java.util.Arrays;

// public class Array {
//     public static void main(String[] args) {
//         int age = 18;
//         String result = (age >=18) ? " You are eligible to vote" : "NOtelgible to vote";
//         System.out.println(result);


//                 }
//     }


  
// Online Java Compiler
// Use this editor to write, compile and run your Java code online

class Array {
    public static void main(String[] args) {
        int[] numbers = new int[5]; // Creates an array that can hold 5 integers
// Initialize array elements
        numbers[0] = 10;
        numbers[1] = 20;
        numbers[2] = 30;
        numbers[3] = 40;
        numbers[4] = 50;
        // Access array elements
        int firstNumber = numbers[0]; // 10
        int thirdNumber = numbers[2]; // 30
        // Iterate through the array
        for (int i = 0; i< numbers.length; i++) {
            System.out.println(numbers[i]);
        }
            }
        }