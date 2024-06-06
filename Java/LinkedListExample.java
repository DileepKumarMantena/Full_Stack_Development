import java.util.LinkedList;

public class LinkedListExample {
    public static void main(String[] args) {
        LinkedList<String> list = new LinkedList<>();
        
        // Adding elements
        list.add("Apple");
        list.add("Banana");
        list.addFirst("Cherry");
        list.addLast("Date");
        
        // Accessing elements
        System.out.println("First Element: " + list.getFirst());
        System.out.println("Last Element: " + list.getLast());
        
        // Removing elements
        list.removeFirst();
        list.removeLast();
        System.out.println(list);
        
        // Iterating through the list
        for (String fruit : list) {
            System.out.println(fruit);
        }
    }
}
