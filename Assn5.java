/*
	Alexander Fielding
	Kim-Wilson Ngo
	Tajbir Sandhu
	CECS 424 Assignment 5
*/

import java.util.ArrayList;
import java.util.List;

public class Assn5 {

	public static void main(String[] args)
	{
		System.out.println("test");

		String number = args[0];
		int sum = Integer.parseInt(args[1]);
		//String number = "123456789";
		//int sum = 0;
		List<String> l = operatorSum(number, sum);
		System.out.println("# of matches: " + l.size());
		for(int i = 0; i < l.size(); i++)
		{
			System.out.println((i+1) + ": " + l.get(i) + "= " + sum);
		}
	}

	/**
	 * Kicks off the operations on the given number
	 * @param number
	 * @param sum
	 * @return list of expressions
	 */
	public static List<String> operatorSum(String number, int sum)
	{
		List<String> result = new ArrayList<String>();

		for(int i = 1; i < number.length() + 1; i++)
		{
			if(i == 1 || (Character.toString(number.charAt(0)) != "0" && i > 1))
			{

				int numInt = Integer.parseInt(number.substring(0, i));
				String numString = number.substring(i);
				String numString2 = number.substring(0,i);
				sumHelper(numString, numString2, numInt, numInt, result, sum);
			}
		}
		
		int temp = Integer.parseInt(number) * -1;
		number = temp + "";
		
		for(int i = 2; i < number.length() + 1; i++)
		{
			
			int numInt = Integer.parseInt(number.substring(0,i));
			if(i == 1 || (Character.toString(number.charAt(0)) != "0" && i > 1))
			{
				numInt = Integer.parseInt(number.substring(0,i));
				String numString = number.substring(i);
				String numString2 = number.substring(0,i);
				sumHelper(("-" + numString), numString2, numInt, numInt, result, sum);
			}
		}
		

		return result;
	}

	/**
	 * Helper function that adds to the list of expression once number is fully processed
	 * @param number
	 * @param subNum
	 * @param current
	 * @param last
	 * @param result
	 * @param sum
	 */
	public static void sumHelper(String number, String subNum, int current, int last, List<String> result, int sum)
	{
		if(number.equals(""))
		{
			if(current == sum)
			{
				result.add(subNum);

			}
			return;
		}

		//Processes numbers subparts at a time an adds in the operation
		for(int i = 1; i < number.length() + 1; i++)
		{
			String numInt = number.substring(0, i);
			String numInt2 = number.substring(i);
			if(!numInt.equals("-") && i == 1 || (!numInt.equals("-") && i > 1 && Character.toString(number.charAt(0)) != "0"))
			{
				sumHelper(numInt2, subNum + "+" + numInt, (current + Integer.parseInt(numInt)), Integer.parseInt(numInt), result, sum);
				sumHelper(numInt2, subNum + "-" + numInt, (current - Integer.parseInt(numInt)), (-1*(Integer.parseInt(numInt))), result, sum);
				
			}
		}
	}

}
