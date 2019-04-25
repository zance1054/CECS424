import java.math.BigInteger;

public class Assn13 {
    public static void main(String[] args){
        System.out.println("i. Floating point number converter.");
        float pi = 3.14159265358979f;
        System.out.println( pi + " -> " + convertFloat(pi));

        System.out.println("\nii. Floating point number enumeration.\n");
        float fp = 0.0f;
        int i = 0;
        while (fp < 1.4E-44) {
            System.out.println(++i + "th number: " + (fp = nextFloat(fp)));
        }

        System.out.println( "\niii. Floating point number counting\n");
        long posFPs = countBetween(0.0f, Float.MAX_VALUE);
        long zeroOneFPs = countBetween(0.0f, 1.0f);
        System.out.println("Number of positive floating point numbers: " + posFPs);
        System.out.println("Number of floating point numbers between 0 and 1: " + zeroOneFPs);
        System.out.println("Proportion (# of 0~1) / (# of positive): " + (double) zeroOneFPs / (double) posFPs * 100.0 );

    }
    public static String convertFloat(float number){
        int sign = (Float.floatToIntBits(number)>>>31); //determines and stores the sign
        int exponent; //stores the exponent
        int mantissa = Float.floatToIntBits(number) & 0x7FFFFF; //gets the mantissa from a float
        exponent = Math.getExponent(number);
        exponent = exponent + 127;
        return ("(" + sign + ", " + exponent + ", " + mantissa + ")");
    }

    public static float nextFloat(float number) {
        int intBits = Float.floatToIntBits(number);
        String binary = Integer.toBinaryString(intBits);
        System.out.println(binary);
        return Math.nextAfter(number, Double.MAX_VALUE); //finds the next float in the direction of positive infinity
    }

    public static long countBetween(float lower, float upper) {
        long i = 0; //counter for the the number of floats between lower and upper
        //loops until lower in no longer less than uppen
        while (lower < upper)
        {
            lower = Math.nextAfter(lower, upper); //increments lower
            i++; //increments the counter
        }
        return i;
    }
}
