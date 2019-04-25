/*
Authors: Alec Fielding, Tajbir Sandhu, Kim-Wilson Ngo
Assignment 13
*/
function convertFloat(number){
	var num = number;
	
	//binary data buffer, byte length 4
    var binArr = new ArrayBuffer(4); 
	//Javascript default is 64-bit. this is important to create a 32-bit float.
    var floatArr = new Float32Array(binArr); 
	//fill with parameter num 
    floatArr.fill(num); 
	
	//32-bit unsigned integer array, does this for num
    var unsignIntNum = new Uint32Array(binArr);
	// 0x007fffff is biggest denormal. mantissa bits 22-0.
	var mantissa =  (unsignIntNum & 0x007fffff); 
	//sign bit 31 
    var sign =  (unsignIntNum & 0x80000000) >>> 31; 
	//exp bits 30-23
    var exp =   (unsignIntNum & 0x7f800000) >>> 23;
	
	//IEEE 754 Format
	var ret = "( " + sign + ", " + exp + ", " + mantissa + " )";
    return (ret);   
};

function nextFloat(number){
	var num = number;
	//binary data buffer, byte length 4
	var binArr = new ArrayBuffer(4); 
	//Javascript default is 64-bit. this is important to create a 32-bit float.
	var floatArr = new Float32Array(binArr); 
	floatArr.fill(num); 
	
	//32-bit unsigned integer array, does this for num
	var unsignIntNum = new Uint32Array(binArr); 
	//increments to next float 
	unsignIntNum.fill(unsignIntNum[0]+1); 
	
	return floatArr;
};

function countBetween(lower, upper){
	var low = lower;
	var up = upper; 
	
    var binArr = new ArrayBuffer(4); 
    var floatArr = new Float32Array(binArr);
	//fill with LOWER 
    floatArr.fill(low); 
	
	//32-bit unsigned integer array, does this for num
    var unsignIntNum = new Uint32Array(binArr); 
	//get unsigned int lower 
    var lowerB = unsignIntNum[0];
	//fill with UPPER
    floatArr.fill(up); 
	
	//unsigned upper
    var upperB = unsignIntNum[0]; 
	//returns the between of upper and lower 
    return upperB - lowerB; 
};


function main()
{
	//Part i
	console.log("i. Floating point number converter.\n");
	var pi = 3.141592653589;
	console.log(pi + " -> " + convertFloat(pi));


	//Part ii
	console.log("\nii. Floating point number enumeration.\n");
	fp = 0.0; //float 
	var i = 0;
	while (fp < 1.4e-44) {
		++i;
        console.log(i + "th number: "+ (fp = nextFloat(fp)));
    }

    //Part iii
	console.log("\niii. Floating point number counting\n");
	var posFPs = countBetween(0.0, 3.40282346638528860E38);
	var zeroOneFPs = countBetween(0.0, 1.0);
	console.log("Number of positive floating point numbers: " + posFPs);
	console.log("Number of floating point numbers between 0 and 1: " + zeroOneFPs);
	console.log("Proportion (# of 0~1) / (# of positive): " + zeroOneFPs / posFPs * 100.0 +"%\n");
    
}

main()
