public class MethodOverLoading {

            public static int add(int a, int b) {
            return a + b;
            }
            public static double add(double a, double b) {
            return a + b;
            }
            public static String add(String s1, String s2) {
            return s1 + s2;
            }

            public static void main(String[] args) {
             
                add(2,3);

            }
            
    }

