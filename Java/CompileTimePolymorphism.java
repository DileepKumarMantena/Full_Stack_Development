class CompileTimePolymorphisms {
    int add(int a, int b) {
    return a + b;
    }
    double add(double a, double b) {
    return a + b;
    }

    public static void main(String[] args) {
    CompileTimePolymorphisms calculator = new CompileTimePolymorphisms();
    int result1 = calculator.add(5, 10); // Calls the int version of add
    double result2 = calculator.add(3.5, 2.7); // Calls the double version of add
    System.out.println(result1);
    System.out.println(result2);
    }
}