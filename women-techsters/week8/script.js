//write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz"instead of the number and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five,print "FizzBuzz"

for(var i = 1; i < 101; i++)
{
  if (i % 3 == 0 & i % 5 == 0)
  {
    console.log("FizzBuzz");
  }
  else if (i % 3 == 0)
  {
    console.log("Fizz");
  }
  else if (i % 5 == 0)
  {
    console.log("Buzz");
  }
 else 
 {
   i = i + 0;
 }
 
 console.log(i);
 
}
//Create a function that indicates if the input is an even number
function isEven(num){
  if(num % 2 === 0){
    return true;
  }
  else {
    return false;
  }
}
//Create a function that brings to the console number from N1 to N2 where N1 is the first parameter while the second one is the second parameter

function printNumber(n1, n2) {
  for (let i = n1; i <= n2; i++) {
    console.log(i);
  }
}

//Create a function that sum the values in between eg calfunc( 1,3)Return 6 ie 1+2 +3 
function calc(a, b) {
 return a + b;
}
calc(5, 7);

//Factorial Calculator:Write a function that calculates the factorial of a given number. DO NOT USE PROMPT, I WANT ONLY 1 CONSOLE.LOG, YOUR FUNCTION MUST BE REUSEABLE, AND MUST RETURN A VALUE

function factorial(num) {
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return (num * factorial(num - 1));
  }
}

