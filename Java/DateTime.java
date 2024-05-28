import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class DateTime {
    public static void main(String[] args) {
// Get the current date
    LocalDate currentDate = LocalDate.now();
    System.out.println("Current Date:" + currentDate);
// Get the current time
LocalTime currentTime = LocalTime.now();
    System.out.println("Current Time: " + currentTime);
// Format a date using a custom pattern
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM-dd-yyyy");
    String formattedDate = currentDate.format(formatter);
    System.out.println("Formatted Date:" + formattedDate);

    // DateTimeFormatter timeformat = DateTimeFormatter.ofPattern("HHH-MM-SS");
    // String formattedTime = currentDate.format(timeformat);
    // System.out.println("Formatted Time:" + formattedTime);
}
} 
    
