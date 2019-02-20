#include<vector>
#include<string>
#include<iostream>
#include<algorithm>
#include<cmath>

using namespace std;

void depthFirstSearch(vector<string>& results, string& number, string current, char op, int pos, int cumulativeVal, int prevVal,  int sum) 
{
    if (pos == number.size() && cumulativeVal == sum) 
    {
        results.push_back(current);
    } 
    else 
    {
        for (int i=pos+1; i<=number.size(); i++) 
        {
            string t = number.substr(pos, i-pos);
            int now = stoi(t);
            if (to_string(now).size() == t.size())
            {
                depthFirstSearch(results, number, current+'+'+t, '+', i, cumulativeVal+now, now,  sum);
                depthFirstSearch(results, number, current+'-'+t, '-', i, cumulativeVal-now, now,  sum);
            }
        }
    }
}

vector<string> addOperators(string number, int sum) 
{
    vector<string> results;
    if (number.length() == 0) 
        return results;
    for (int i = 1; i <= number.size(); i++) 
    {
        string str = number.substr(0, i);
        int current = stoi(str);
        if (to_string(current).size() == str.size())
            depthFirstSearch(results, number, str, ' ', i, current, current,  sum);
    }
    for (int i = 1; i <= number.size(); i++) 
    {
        string str = number.substr(0, i);
        str.insert(0,1,'-');
        int current = stoi(str);
        if (to_string(current).size() == str.size())
            depthFirstSearch(results, number, str, ' ', i, current, current,  sum);
    }

    return results;
}

int main(int argc, char* argv[])
{
    string numbers = argv[1];
    int sum = *argv[2] - '0';
    vector<string>results = addOperators(numbers, sum);
    cout << results.size() << endl;

    for (int i = 0; i < results.size(); i++)
    {
        std::cout << results[i] << endl;
    }
}