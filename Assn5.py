'''
Alexander Fielding
Kim-Wilson Ngo
Tajbir Sandhu
CECS 424 Assignment 5

'''
import sys

#Kicks off the operations on the given number
def operatorSum(number, sum):
    result = []
    for i in range(1, len(number) + 1):
        #keeps us from getting double zeroes as a numIntue
        if i == 1 or (number[0] != "0" and i > 1): 
            numInt = int(number[:i])
            sumHelper(number[i:], number[:i], numInt, numInt, result, sum) 
    
    #accounts for negative numbers
    number = int(number) * -1
    number = str(number)       
    for i in range(2, len(number) + 1):
        #keeps us from getting double zeroes as a numIntue
        if numInt != '-' and i == 1 or (number[0] != "0" and i > 1 and numInt != '-'): 
            numInt = int(number[:i])
            sumHelper("-" + number[i:], number[:i], numInt, numInt, result, sum) 
            
    return result

#Helper function that adds to the list of expressions once number is fully processed
def sumHelper(number, subNum, current, last, result, sum):
    if not number:
        if current == sum:
            result.append(subNum)
        return
    #Processes numbers subparts at a time an adds in the operation
    for i in range(1, len(number) + 1):
        numInt = number[:i]
        if numInt != '-' and i == 1 or (i > 1 and number[0] != "0" and numInt != '-'): # prevent "00*" as a numberber
            sumHelper(number[i:], subNum + "+" + numInt, current + int(numInt), int(numInt), result, sum)
            sumHelper(number[i:], subNum + "-" + numInt, current - int(numInt), -int(numInt), result, sum)
            #sumHelper((number[i:]), '-' + subNum + "+" + numInt, current + int(numInt), int(numInt), result, sum)
            #sumHelper((number[i:]), '-' + subNum + "-" + numInt, current - int(numInt), -int(numInt), result, sum)

def main(number, sum):
    l = operatorSum(number, sum)


    print("# of matches: ", len(l))
    for i in range(len(l)):
        print(i+1, ":", l[i], "=", sum)


if __name__ == '__main__':
    main(str(sys.argv[1]), int(sys.argv[2]))
    #main("123456789", 0)
    

    
#main("123456789", 0)
