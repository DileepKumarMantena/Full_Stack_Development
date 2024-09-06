public class String {
    public static void main(String[] args) {
    // Creating strings
    String message ="Hello, Java!";
    
     String Main="Java is  A backend programing language"

    String name = "Alice";
    String a="alice";

   



    String a="k";    // Concatenation
    String greeting ="Hello"+ name; // Result: &quot;Hello, Alice&quot;
    // Length of a string
    int length = message.length(); // Result: 12
    // Accessing characters
    char firstChar = name.charAt(1); // Result: &#39;H&#39;
    // Substring
    String substring = message.substring(7); // Result: &quot;Java!&quot;
    // String comparison
    boolean isEqual = message.equals(message,Main); // Result: true
    // String manipulation
    String upperCase = message.toUpperCase(); // Result: &quot;HELLO, JAVA!&quot;
    String lowerCase = message.toLowerCase(); // Result: &quot;hello, java!&quot;
    // String searching
    boolean containsJava = message.contains("Java"); // Result: true
    // Replace characters
    String replaced = message.replace("o","0"); // Result: &quot;Hell0, Java!&quot;
    // Splitting strings
    String[] words = message.split(" "); // Result: [&quot;Hello,&quot;, &quot;Java!&quot;]
    }
    
    }