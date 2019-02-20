/*
  Alexander Fielding
  Objective: write program that print all combinations
  that sum up to ‘sum’ by inserting the operators
  between digits in ‘number’
*/

// should get 22 results

//retrieve command line arguements
var nums = process.argv[2];
var targetSum = process.argv[3];

//where we will store any results
var results = new Array();

console.log('nums: ' + nums);
console.log('targetSum: ' + targetSum);

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

for(i = 0; i < results.length; i++)
{
  console.log(i + ": " + results[i])
}


//process.stdout.write("Enter the numbers to check for zero sum seperated by white space")
