/*
  Alexander Fielding
  Objective: write program that print all combinations
  that sum up to ‘sum’ by inserting the operators
  between digits in ‘number’
*/

// should get 22 results

/*
  param = "results" : Array that stores correct results
  param = "number"  : String of numbers passed as initial arguements
  param = "current" : The current number in the string
  param = "op" : operator; + or -
  param = "curValue" : the current sum curValue
  param = "prevVal" : the previous value for curValue
  param = "sum" : initial final value passed by user
*/
function depthFirst(results, number, current, op, position, curValue, prevVal, sum)
{
  if( position == number.length && curValue == sum)
  {
    results.push(current)
  }

  else {

    for(i=position+1; i <= number.length;i++)
    {
      var tmp = number.substring(position,i-position);

      now = Number(tmp);

      depthFirst(results, number, current+'+'+tmp, '+', i, curValue+now, now,  sum);
      depthFirst(results, number, current+'-'+tmp, '-', i, curValue-now, now,  sum);

    }
  }
}


/*
  param = "numbers" : user input of numbers to run
  param = "sum" : user input of target sum to search for
*/
function addOperators(numbers, sum)
{
  var results = new Array();

  if(numbers.length == 0)
  {
    return results;
  }

  for(i = 0; i <= numbers.length; i++)
  {
      var str = numbers.substring(0,i);
      current = Number(str);

      depthFirst(results, numbers, str, '', i, current, current, sum);
  }

  for(i = 0; i <= numbers.length; i++)
  {
      var str = numbers.substring(0,i);
      current = Number(str);

      str = str + "0,1,-";
      depthFirst(results, numbers, str, '', i, current, current, sum);
  }

  return results;
}
//retrieve command line arguements
var nums = process.argv[2];
var targetSum = process.argv[3];

//where we will store any results
var results = addOperators(nums,targetSum);

console.log('nums: ' + nums);
console.log('targetSum: ' + targetSum);

console.log(results.length)
for(i = 0; i < results.length; i++)
{
  console.log('here')
  console.log(i + ": " + results[i])
}

/*
//shoould be the amount of nums^2 combinatons
for(i = 0; i < nums.length; i++)
{
    var firstnum = nums[i];

    console.log(firstnum);
    var curResult = ""
    for(j = i + 1; j < nums.length; j++)
    {
      var curResult = ""

      if(Number(firstnum) + Number(nums[j]) == 0)
      {
        curResult = firstnum + "' + '" +  nums[j]
        results.push(curResult)
      }

      if(Number(firstnum) - Number(nums[j]) == 0)
      {
        curResult = firstnum + "' - '" + nums[j]
        results.push(curResult)
      }

      if(Number(nums[j] - Number(firstnum)) == 0)
      {
        curResult = nums[j] + "' - '" + firstnum
        results.push(nums[j] + "' - '" + firstnum)
      }
    }
}
*/

//process.stdout.write("Enter the numbers to check for zero sum seperated by white space")
