# -*- coding: utf-8 -*-
"""
Created on Tue Feb 19 02:40:03 2019

@author: Giga
"""
import sys


def operatorSum(number, sum):
    result = []
    for i in range(1, len(number) + 1):
        #keeps us from getting double zeroes as a numIntue
        if i == 1 or (number[0] != "0" and i > 1): 
            numInt = int(number[:i])
            sumHelper(number[i:], number[:i], numInt, numInt, result, sum) 
    return result

def sumHelper(number, subNum, current, last, result, sum):
    if not number:
        if current == sum:
            result.append(subNum)
        return
    
    for i in range(1, len(number) + 1):
        numInt = number[:i]
        if i == 1 or (i > 1 and number[0] != "0"): # prevent "00*" as a numberber
            sumHelper(number[i:], subNum + "+" + numInt, current + int(numInt), int(numInt), result, sum)
            sumHelper(number[i:], subNum + "-" + numInt, current - int(numInt), -int(numInt), result, sum)

def main(number, sum):
    l = operatorSum(number, sum)
    print("# of matches: ", len(l))
    for i in range(len(l)):
        print(i+1, ":", l[i], "=", sum)


if __name__ == '__main__':
    main(str(sys.argv[1]), int(sys.argv[2]))
    #main("12345",0)
    

'''
def main():
    Assn5("12345678", 0)

    
main()
'''
