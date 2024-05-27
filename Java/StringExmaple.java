public class StringExmaple {
    public static void main(String[] args) {
       
            // Creating strings
            String message ="Hello, Java!";
            String name ="Alice";
            // Concatenation
            String greeting = "Hello," + name; // Result: &quot;Hello, Alice&quot;
            System.out.println(greeting);
            // Length of a string
            int length = message.length(); // Result: 12
            // Accessing characters
            System.out.println(length);
            char firstChar = message.charAt(0); // Result: &#39;H&#39;
            // Substring
            System.out.println(firstChar);
            String substring = message.substring(7); // Result: &quot;Java!&quot;
            // String comparison
            System.out.println(substring);
            boolean isEqual = message.equals("Hello, Java!"); // Result: true
            // String manipulation
            System.out.println(isEqual);
            String upperCase = message.toUpperCase(); // Result: &quot;HELLO, JAVA!&quot;
            String lowerCase = message.toLowerCase(); // Result: &quot;hello, java!&quot;
            // String searching
            System.out.println(upperCase);
            System.out.println(lowerCase);
            boolean containsJava = message.contains("Sample"); // Result: true
            // Replace characters
            System.out.println(containsJava);
            String replaced = message.replace('o','0'); // Result: &quot;Hell0, Java!&quot;
            // Splitting strings
            System.out.println(replaced);
                    }
    
        }