

function operatorSum(number, sum)
{
	var result = [];
	
	for(i = 1; i < number.length + 1; i++)
	{
		if ((i == 1) || (i > 1 && String(number.charAt(0)) != "0"))
		{
			var numInt = Number(number.substring(0,i));
			var numString = number.substring(i);
			var numString2 = number.substring(0,i);
			sumHelper(numString, numString2, numInt, numInt, result, sum);
		}
	}
	
	var temp = Number(number) * -1;
	number = String(temp);
	
	for(i = 2; i < number.length + 1; i++)
	{	
		if ((i == 1) || (i > 1 && String(number.charAt(0)) != "0"))
		{
			var numInt = Number(number.substring(0,i));
			var numString = number.substring(i);
			var numString2 = number.substring(0,i);
			sumHelper(("-" + numString), numString2, numInt, numInt, result, sum);
		}
	}
	
	return result;
}

function sumHelper(number, subNum, current, last, result, sum)
{
	if(number == "")
	{
		if(current == sum)
		{
			result.push(subNum);
		}
		return;
	}
	
	for(i = 1; i < number.length + 1; i++)
	{
		var numInt = number.substring(0,i);
		var numInt2 = number.substring(i);
		if ((numInt != "-" && i == 1) || (numInt != "-" && i > 1 && String(number.charAt(0)) != "0"))
		{
			sumHelper(numInt2, (subNum + "+" + numInt), (current + Number(numInt)), Number(numInt), result, sum);
			sumHelper(numInt2, (subNum + "-" + numInt), (current - Number(numInt)), (-1*(Number(numInt))), result, sum);
		}
		
	}
}

var number = "123456789";
var sum = 0;

var l = operatorSum(number,sum);

for(i = 0; i < l.length; i++)
{
	console.log((i+1) + ": " + l[i] + "= " + sum);
}
console.log(l.length);