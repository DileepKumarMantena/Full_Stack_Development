import java.io.*;

public class ExceptionHandlingExample {
    public static void main(String[] args) {
        try {
            int a=10;
            int b =0;
            System.out.println(a/b);
        } catch ( Exception e) {
            System.out.println("Cannot Divide a number by zero " + e.getMessage());
        } finally {
            System.out.println("Cleanup tasks...");
        }
    }
}


// try :What ever code you think error may occur is been placed in try block
// catch : What should the jv m do when an error occur 
// finally :irrespecctive of the error the excution code 