

// ************************************ REMOVE DUPLICATES ****************************************    
var array = [1,2,3,4,5,5,7,8,7,7];

var unique = array.filter((x,i) => array.indexOf(x) == i );

console.log(unique);

// ************************************ SUM *********************************************

var array = [1,2,3,4,5,5,7,8,7,7];

var sum = array.reduce((x,y) => x+y);

console.log(sum);

// ************************************ REVERSE A STRING***************************************

var string = "vivek is my name";

var reverse = string.split("").reverse().join("");

console.log(reverse);

// ************************ REVERSE A FUNCTION WITH RECURSION *******************************

function reverseString(str){
    if (str === "") {
        return "";
    }else{
        return reverseString(str.substr(1)) + str.charAt(0);
    }
    
}
console.log(reverseString("Hello"));

// **************************** ADDITION OF MATRIX********************************************
    
    
var arrA = [
    [2,3],
    [4,5],
   ];
var arrB = [
    [4,3],
    [4,5],
   ];
var arrC=[
    [0,0],
    [0,0],
   ];

for(i=0;i<2;i++){
for(j=0;j<2;j++){
arrC[i][j] = arrA[i][j] + arrB[i][j];
console.log(arrC[i][j] + "");
}
console.log('<br>');
}

// *************************************** FIZZ BUZZ PROBLEM *************************************

for (let i = 1; i <= 100; i++) {
    let f = i % 3 == 0, b = i % 5 == 0;
     console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
   }

// ****************************  COUNT THE NUMBERS IN THE ARRAY ***********************************
var arr = [8, 7, 5, 4, 1, 3, 2, 1, 4, 3, 2, 5, 1, 6, 3, 6, 7, 8, 3, 9 ,1];
var result = {};
for(i=0;i<arr.length;i++){
    if( ! result[arr[i]]){
       result[arr[i]] = 0;
    }
    result[arr[i]] += 1;
    
}
console.log(result);

// ************************************************************************************************
let a = [ 8, 7, 5, 4, 1, 3, 2, 1, 4, 3, 2, 5, 1, 6, 3, 6, 7, 8, 3, 9 ,1];
console.log( a.reduce( (acc, item ) => { acc[item] = (acc[item] || 0) + 1; return acc; }, {}) );

// ***************************************** Rotating the matrix by 90 degree************************
var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

var result = [];

for ( i=0; i<arr.length; i++ ) {

for(j=0;j<arr.length; j++ ) {
       
    if ( !result[i] ) {
        result[i] = [];
    }
    result[i][j]= arr[j][i];
}
result[i] = result[i].reverse();
}
console.log(result);

// ********************************************* TWO array elements are equal **************************

const A = [1, 2, 5, 4, 0];
const B = [2, 4, 5, 0, 1];

const checkArrays = ( a, b ) => a.sort().toString() === b.sort().toString() ? 1: 0;

console.log(checkArrays( A, B));



// **************************************Minimum subset questions *******************************

<script>

// JAVAscript code to partition a set into two subsets
// such that the difference of subset sums
// is minimum

	// Function to find the minimum sum
	function findMinRec(arr, i, sumCalculated, sumTotal)
	{
	
		// If we have reached last element.
		// Sum of one subset is sumCalculated,
		// sum of other subset is sumTotal-
		// sumCalculated. Return absolute
		// difference of two sums.
		if (i == 0)
			return Math.abs((sumTotal-sumCalculated) -
								sumCalculated);
	
	
		// For every item arr[i], we have two choices
		// (1) We do not include it first set
		// (2) We include it in first set
		// We return minimum of two choices
		return Math.min(findMinRec(arr, i - 1, sumCalculated
								+ arr[i-1], sumTotal),
								findMinRec(arr, i-1,
								sumCalculated, sumTotal));
	}
	
	// Returns minimum possible difference between
	// sums of two subsets
	function findMin(arr, n)
	{
	
		// Compute total sum of elements
		let sumTotal = 0;
		for (let i = 0; i < n; i++)
			sumTotal += arr[i];
	
		// Compute result using recursive function
		return findMinRec(arr, n, 0, sumTotal);
	}
	
	/* Driver program to test above function */
	let arr=[3, 1, 4, 2, 2, 1];
	let n = arr.length;
	document.write("The minimum difference"+
						" between two sets is " +
						findMin(arr, n));
	
	// This code is contributed by rag2127
</script>

// ************************************************  Camel case to snake case **********************************

var s1 = 'SomeTextHere';
var o1 = s1.split(/(?=[A-Z])/).join('_').toLowerCase();
console.log(o1);

// *********************************************** Snake case to camel case **************************************
function convertsnaketocamel(str){
    var str1 = "";
    for(i=0;i<str.length;i++){
        if(str[i] == '_'){
             str1 += str[i+1].toUpperCase();
             i++;
        }else{
            str1 += str[i];
        }
    }
    console.log(str1);
}
convertsnaketocamel("this_is_string");

// ****************************************** Square of every digit and concatenate the numbers
var num = '98';
var result = num.split('').map((x) => x*x).join("");
console.log(result);
//**********************************************Non repeated Character in the string ***************** */
function firstNonRepeatedCharacter(string) {
    for (var i = 0; i < string.length; i++) {
        var c = string.charAt(i);
        if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
            return c;
        }
    }
    return null;
}

var someString = 'iiaoaaaak';
console.log(firstNonRepeatedCharacter(someString));

//****** Uncommon characters in the two strings ******************************************************** */
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
    
var MAX_CHAR = 26;

function findUncommon(str1, str2){
    
    var present = Array(MAX_CHAR);
    for(i=0;i< MAX_CHAR; i++)
       present[i] = 0;
       
     var l1 = str1.length;
     var l2 = str2.length;
     
     for(i=0;i<l1;i++)
     present[str1[i].charCodeAt(0)-'a'.charCodeAt(0)] = 1;
     for(i=0;i<l2;i++){
          if (present[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)] == 1
            || present[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)] == -1){
            
            present[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)] = -1;
 
        // else mark its presence as 2
       } else{
            present[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)] = 2;
     }
     console.log(present);
     }
         
      // print all the uncommon characters
    for (var i=0; i<MAX_CHAR; i++)
        if (present[i] == 1 || present[i] == 2 )
            document.write( (String.fromCharCode(i + 'a'.charCodeAt(0))) + " ");
    
}

var str1 = "characters";
var str2 = "alphabets";

findUncommon(str1, str2);

