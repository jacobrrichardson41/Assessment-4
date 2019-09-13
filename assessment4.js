//1. Create a for loop to iterate through the provided array. If an element is divisible by 3, console log the result of the number divided by 3.

var array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

 for (var i = 0; i < array.length; i++); {
    if (array[i] % 3 === 0) {
        console.log(array[i] / 3);
    }
} 


//2. Create a while loop that will run while the value of counter is less than 100. For each iteration, it should print out "The value of counter is: " followed by the value of counter. 1 should also be added to the counter during each iteration.

var counter = 0;

while (counter < 100) {
    console.log("The value of the counter is: " + counter);
    counter++;
}

//3. Create a function called subtractNumbers that takes in two numbers as input. The function should print out the difference between the two numbers.
function subtractNumbers(num1, num2) {
    console.log(num1-num2);
}

subtractNumbers(50, 47);
//4. Create a function that takes an array of strings as input. The function should return the shortest of the strings as output.
numbers= [ 
    45,
    1,
    657,

]
 function returnShortString (arrayOfStrings) {
     var shortestString = " ";
     for(String of arrayOfStrings){
         if(shortestString.length < string.length) {
             shortestString =string;
         }
     }
     return shortestString;
 }
  console.log(returnShortString(["Cat", "Dog", "Gerbal"]));

//5. Create a function called calculateLetterGrade that takes in an assignment grade as input. The function should use conditional logic to return the letter grade corresponding to the assignment grade, as indicated by the following scale:

/*
    A = 90-100
    B = 80-89
    C = 70-79
    D = 60-69
    F = < 60
*/

//BONUS: Create a function that takes in 3 numbers as input. The function should return true if all three of the numbers are less than 10 and the numbers multiplied together is less than 30.

//BONUS: Create a function that iterates through the numbers 0 to 100 that plays the Fizzbuzz game. 

/* 
    FizzBuzz rules:
        * If the number is divisible by both 3 and 5, print "FizzBuzz"
        * If the number is divisible by 3, print "Fizz"
        * If the number is divisible by 5, print "Buzz"

*/

//WHEN YOU ARE DONE WITH THIS ASSESSMENT: CREATE A LOCAL REPOSITORY, COMMIT YOUR FILES, AND CREATE A GITHUB REPOSITORY AND PUSH THEM UP!


