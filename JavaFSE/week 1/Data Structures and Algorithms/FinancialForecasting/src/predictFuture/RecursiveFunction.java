package predictFuture;

public class RecursiveFunction {
	    //Recursive function to calculate future value
	    public static double Value(double initialAmt, double growthRate, int years) {
	        //Base case
	        if (years == 0) {
	            return initialAmt;
	        }

	        //Recursive case
	        return Value(initialAmt, growthRate, years - 1) * (1 + growthRate);
	    }

	    public static void main(String[] args) {
	        double initialAmount = 5000.0;  
	        double growthRate = 0.80;       
	        int years = 7;
	        double future = Value(initialAmount, growthRate, years);
	        System.out.printf("Future value after %d years: ₹%.2f", years, future);
	    }
	}