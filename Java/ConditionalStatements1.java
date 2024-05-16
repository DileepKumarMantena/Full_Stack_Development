public class ConditionalStatements1 {
    public static void main(String[] args) {
        int x = 10;
        int y = 5;
        if (x > 0) {
            if (y > 0) {
                    System.out.println("Both x and y are positive.");
            }
             else {
                System.out.println("x is positive, but y is not.");
                    }
            } else {
                System.out.println("x is not positive.");
                    }
            }
}
