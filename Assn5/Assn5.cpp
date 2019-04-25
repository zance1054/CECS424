/*
	Alexander Fielding
	Kim-Wilson Ngo
	Tajbir Sandhu
	CECS 424 Assignment 5
*/

#include<vector>
#include<string>
#include<iostream>
#include<algorithm>
#include<cmath>

using namespace std;

/*
    results:        stores all possible combinations to obtain the sum
    number:         stores the inital number string passed into the function
    current:        stores the current resulting string
    op:             stores the operator passed by the function call
    pos:            stores the current position in the original string
    cumulativeVal:  stores the cumulative value of the current string
    prevVal:        stores the old value from the previous function call
    sum:            stores the desired result

    This function is a depth first search to find all possible combinations of the
    user defined string and '+' '-' operators which result in the desired sum
*/
void depthFirstSearch(vector<string>& results, string& number, string current, int pos, int cumulativeVal,  int sum)
{
    // if the current position is at the end of the user defined number
    // and the cumulative sum is less the same as the desired sum, then
    // the combination is saved
    if (pos == number.size() && cumulativeVal == sum)
    {
        results.push_back(current); // adds the current string to the array which stores results
    }
    // other wise the depth first search continues
    else
    {
        // the search branches off into all other possible combonations
        // from the current position
        for (int i = pos + 1; i <= number.size(); i++)
        {
            string temp = number.substr(pos, i-pos); // stores a number string from the remaining numbers based on the current position
            int pastVal = stoi(temp); // convert the number string to an integer
            // branches off to a '+' operator
            depthFirstSearch(results, number, current + '+' + temp, i, cumulativeVal+pastVal,  sum);
            // branches off to a '-' operator
            depthFirstSearch(results, number, current + '-' + temp, i, cumulativeVal-pastVal,  sum);
        }
    }
}

/*
    number:     user defined number string
    sum:        user defined desired sum
*/
vector<string> addOperators(string number, int sum)
{
    vector<string> results; // a vector to store all possible combinations in
    // returns an empty vector if the number is empty
    if (number.length() == 0)
        return results;
    //number.insert(number.begin(), '0');
    // loop which calls the dfs and branches off to all possible combinations where 1 is positive
    for (int i = 1; i <= number.size(); i++)
    {
        string str = number.substr(0, i); // creates a string based on the current location
        int current = stoi(str); // converts the number string to an int
        depthFirstSearch(results, number, str, i, current, sum);
    }
    // loop which calls the dfs and branches off to all possible combinations where 1 is negative
    for (int i = 1; i <= number.size(); i++)
    {
        string str = number.substr(0, i); // creates a string based on the current location
        str.insert(0,1,'-'); // ensures that the number string is negative
        int current = stoi(str); // converts the number string to an int
        depthFirstSearch(results, number, str,  i, current, sum);
    }

    return results; // returns all possible combinations that result in the desired sum
}

int main(int argc, char* argv[])
{
    string numbers = argv[1]; // stores the number argument
    int sum = *argv[2] - '0'; // stores the sum argument
    vector<string>results = addOperators(numbers, sum); // the addOperators function is called and the results are stored
    // prints the resulting strings
    for (int i = 0; i < results.size(); i++)
    {
        std::cout << results[i] << endl;
    }
}
