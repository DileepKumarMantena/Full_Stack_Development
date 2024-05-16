public class Operaters {
    public static void main(String[] args) {
        int a=10;
        int b=20;
        // Arthametic Operaters
        int add= a+b;
        int sub=a-b;
        int mul=a*b;
        int div=a/b;
        System.out.println("New Changes");
        System.out.println(add);
        System.out.println(sub);
        System.out.println(mul);
        System.out.println(div);
        //Assignmanet operaters

        //NOrmal assignment
        int c=20;
        System.out.println(c);

        //compound assignment 
        int y = 5;
        y += 3;
        System.out.println(y);
        y-=3;
        System.out.println(y);

        //Comaparison operaters
        System.out.println("Comparison Operaters");
        int d=20;
        int e=30;
        System.out.println(d==e);
        System.out.println(d!=e);
        System.out.println(d>e);
        System.out.println(d<e);
        System.out.println(d>=e);
        System.err.println(d<=e);
        //Logical Operaters 
        System.out.println("Logical Operaters");
        int f=30;
        int g=40;

        System.out.println(f>10 && g<10);
        System.out.println(true || false);
        System.out.println(!true);
        //Increment and decrment 
        int inc =5;
        int dec =5;
        inc +=1;
        System.out.println(inc);
        System.out.println(++inc);
        System.out.println(--dec);

    }
}
