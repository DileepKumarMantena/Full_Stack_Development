import java.util.ArrayList;

public class ArrayListExample {
    public static void main(String[] args) {
        // Creating an ArrayList of Strings
        ArrayList<String> fruits = new ArrayList<>();

        // Adding elements to the ArrayList
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");
        fruits.add("Mango");

        // Accessing elements
        System.out.println("First fruit: " + fruits.get(0));
        System.out.println("Second fruit: " + fruits.get(1));

        // Iterating through the ArrayList using a for-each loop
        System.out.println("\nList of fruits:");
        for (String fruit : fruits) {
            System.out.println(fruit);
        }

        // Iterating through the ArrayList using a for loop with index
        System.out.println("\nList of fruits (using index):");
        for (int i = 0; i < fruits.size(); i++) {
            System.out.println(fruits.get(i));
        }

        // Checking if the ArrayList contains a specific element
        if (fruits.contains("Orange")) {
            System.out.println("\nThe list contains Orange");
        } else {
            System.out.println("\nThe list does not contain Orange");
        }

        // Removing an element from the ArrayList
        fruits.remove("Banana");
        System.out.println("\nList after removing Banana:");
        for (String fruit : fruits) {
            System.out.println(fruit);
        }

        // Removing an element by index
        fruits.remove(2); // Removing the third element (index 2)
        System.out.println("\nList after removing the third element:");
        for (String fruit : fruits) {
            System.out.println(fruit);
        }

        // Clearing all elements from the ArrayList
        fruits.clear();
        System.out.println("\nList after clearing all elements:");
        System.out.println("Size of the list: " + fruits.size());
    }
}
