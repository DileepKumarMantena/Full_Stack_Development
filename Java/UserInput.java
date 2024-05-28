import java.util.Scanner;

public class UserInput {
    public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.print("Enter your number:");
    int number = scanner.nextInt();
    if (number %2==0){
        System.out.println(number+"Even Number");
    }
    else{
        System.out.println(number+"Odd Number");

    }
    scanner.close();
}
} 
    

