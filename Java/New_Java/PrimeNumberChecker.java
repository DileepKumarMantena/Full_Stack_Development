public class PrimeNumberChecker {
    public static void main(String[] args) {
        int limit = 50; // Limit up to which to find prime numbers
        int num = 2; // Starting number

        while (num <= limit) {
            int i = 2;
            boolean isPrime = true;

            while (i <= num / 2) {
                if (num % i == 0) {
                    isPrime = false;
                    break; // Number is not prime
                }
                i++;
            }

            if (isPrime) {
                System.out.println(num + " is a prime number.");
            }
            num++;
        }
    }
}
