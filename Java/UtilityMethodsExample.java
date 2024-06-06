
import java.util.ArrayList;
import java.util.Collections;

public class UtilityMethodsExample {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Banana");
        list.add("Apple");
        list.add("Cherry");
        
        ArrayList<Integer> list1 = new ArrayList<>();
        list1.add(1);
        list1.add(5);
        list1.add(2);

        System.out.println(list1);
        
        // Sorting the list
        Collections.sort(list);
        System.out.println("Sorted List: " + list);
        
        // Shuffling the list
        Collections.shuffle(list);
        System.out.println("Shuffled List: " + list);
        
        // Reversing the list
        Collections.reverse(list);
        System.out.println("Reversed List: " + list);

        if (list.contains("Banana")) {
            System.out.println("Set contains Banana");
        }
    }
}
