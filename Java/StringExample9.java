public class StringExample9 {
    public static void main(String[] args) {
    String str1 = "Madam";
    String str2 = "madam";
    // Comparing strings ignoring case
    boolean palindrome = str1.equalsIgnoreCase(str2); // true
    // Displaying the result
    System.out.println("str1 equals (ignore case) str2:" + palindrome);
    if (palindrome==true){
        System.out.println("Palindrome");

    }
    else {
        System.out.println("Not a palindrome");
    }
    }
    }