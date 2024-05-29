 public class StringConcatenationExample {
    public static void main(String[] args) {
    String firstName ="John";
    String lastName = "Doe";
    // Using the + operator for string concatenation
    String fullName1 = firstName +""+lastName;
    System.out.println(fullName1);
    // Using the concat method for string concatenation
    String fullName2 = firstName.concat("").concat(lastName);
    System.out.println("Using concat method:" + fullName2);
    

    //split 

    String sentence = "This is a sample sentence for splitting and substring.";
    // Splitting the sentence into words using space as a delimiter
    String[] words = sentence.split("");
    System.out.println("Words in the sentence:");
    for (String word : words) {
    System.out.println(word);   
    }
// Extracting a substring from the original sentence
    String substring = sentence.substring(10, 23); // Extracts &quot;sample sentence&quot;
    System.out.println("Extracted Substring:" + substring);


    //Replace

    String originalString = "Hello, World!";
// Replace &quot;World&quot; with &quot;Java&quot;
    String replacedString = originalString.replace("World","Java");
    System.out.println("Original String:" + originalString);
    System.out.println("Replaced String:" + replacedString);
    }
    } 
    
