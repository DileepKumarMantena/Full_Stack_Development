public class ForLoop {
    public static void main(String[] args) {
        for (int i = 1; i<= 10; i++) {
            System.out.println("The Value is "+i);
            if (i %2==0){
                System.out.println("even"+i);
                break;
            }
            else {
                System.out.println("odd"+i);
            }
            }
    }
}


/// for (initilization ;condition;inc/dec)
// i=1 -c true 
// i=2 -c true
// i=3 -c true