// Calculate area of a rectangle
console.log(" Q1: Calculate area of a rectangle")

let width = 7 , length= 11
let rectangle = width * length
console.log(`The area of rectangle is ${rectangle}`)



// The Temperature Converter
console.log("\n Q2: The Temperature Converter")

let celsiusTemp = 25
let fahernheitTemp = 9/5*(celsiusTemp) +32
console.log(`${celsiusTemp} in F is: ${fahernheitTemp}`)
celsiusTemp = 5/9*(fahernheitTemp-32)
console.log(`${fahernheitTemp} in C is: ${celsiusTemp}`)



// Numbers' summations
console.log("\n Q3: Numbers' summations")

let Numbers = [23,54,32,87,47]
for(i=1; i<Numbers.length; i++)
{
    console.log(Numbers[i])
}



// Maximum number
console.log("\n Q4: Maximum number")

let maximumArray = [16,4,2,0,19,6]
let maxnumber = maximumArray[0]
for(i=1; i<maximumArray.length; i++)
{
if( maximumArray[i]> maxnumber)
{
    maxnumber = maximumArray[i]
}

else
{
}

}

console.log(`the maximum number is: ${maxnumber}`)



// Reverse Array
console.log("\n Q5: Reverse Array\n")

let reverseArray = [1,2,3,4,5,6,7,8,9,10]
for(i=reverseArray.length - 1; i>=0; i--)
{
    console.log(reverseArray[i])
}



//stars pattern
console.log("\n Q6: stars pattern")

let rows = 5;
for (i=1; i<=rows; ++i) {

  for (j=1; j<=i; ++j) {
    process.stdout.write("*");
  }
  console.log("")
}