import java.util.concurrent.ConcurrentHashMap;

public class ThreadSafeExample {
    public static void main(String[] args) {
        ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
        
        // Adding elements
        map.put("Apple", 1);
        map.put("Banana", 2);
        map.put("Cherry", 3);
        
        // Retrieving elements in a thread-safe manner
        System.out.println("Value for Banana: " + map.get("Banana"));



        
    }
}
