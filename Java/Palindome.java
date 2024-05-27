import java.util.Scanner;

public class Palindome {
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        System.out.println("Enter a number:");
        int OriginalNumber=scanner.nextInt();
        if (isPalindorme(OriginalNumber)){
            System.out.println("Number is a palindrome");


        }
        else {
            System.out.println("Number is not  a palindrome");

        }
        scanner.close();


    }
    public static boolean isPalindorme(int number) {

    int reversedNumber=0;
    int temp=number;
    while(temp!=0){
        int lastDigit=temp%10;//reminder value
        reversedNumber=reversedNumber*10+lastDigit;
        temp/=10;
    }
    return number ==reversedNumber;

    
}    
}

