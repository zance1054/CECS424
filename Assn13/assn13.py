'''
    Alexander Fielding
    Kim-Wilson Ngo
    Tajhbir Sandhu
    Assignment
'''

import math
import numpy
import struct
import sys


#return the next greater number of the 'number' in the series of 32-bit floating point numbers
def nextfloat(num):
    return numpy.nextafter(num, numpy.finfo(numpy.float32).max)

#return the sign, exponent, and matissa of the number in '(sign,exponent,mantissa)' format.

def convertFloat(num):
    if(numpy.signbit(num)): #determines and stores the sign, True is neative, false is positive
        sign = 1

    else:
        sign = 0

    mantissa, exponent = math.frexp(num)

    exponent = exponent - 1 + 127

    mantissa = math.fabs(mantissa) * 2

    mantissa = mantissa - int(mantissa)

    sMantissa = ""

    while(mantissa != 0):
        mantissa *= 2
        sMantissa += str(int(mantissa))
        mantissa = mantissa - int(mantissa)

    sMantissa = sMantissa[:23]
    mantissa = (int(sMantissa,2) & 0x00ffffff)

    return sign, exponent, (mantissa + 1)

#return the number of 32-bit floating point numbers between lower and upper
def countBetween (lower, upper):
    return struct.unpack('I',struct.pack('f',upper))[0]-struct.unpack('I',struct.pack('f',lower))[0]


def main():
    #part 1
    print("i. Floating point number converter.\n")
    print(numpy.finfo(numpy.float32).max)
    pi = 3.14159265358979
    ans = str(pi) + ' -> ' + str(convertFloat(pi))

    print(ans)
    #part 2

    print("\n ii. Floating point number enumeration.\n")

    fp = numpy.float32(0.0)
    i = 0

    while(fp < 1.4e-44):
        fp = nextfloat(fp)
        tmp = str(i+1) + "th number: " + str(fp) + "\n"
        print(tmp)
        i = i + 1
        


    #part 3
    print("\niii. Floating point number counting\n")
    posFPs = countBetween(numpy.float32(0.0), numpy.finfo(numpy.float32).max)
    print("Number of positive floating point numbers: " + str(posFPs) + "\n")
    zeroOneFPs = countBetween(numpy.float32(0.0), numpy.float32(1.0))
    print("Number of floating point numbers between 0 and 1: " + str(zeroOneFPs) + "\n")
    print("Proportion (# of 0~1) / (# of positive): " + str( '%.4f'%(zeroOneFPs/posFPs * 100) ) + "%\n")


main()
