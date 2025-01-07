// comment in js

// data types in js

/* 1. Number
2. String
3 .Boolean */

// to find the type of variable 

// typeof ("string")
// typeof (75) -- number
// typeof true or false -- Boolean


// To declare the variable

// let myVariable;

// we can execute the mathematical operations

firstNum = 8;
secondStr = "cat";

let result = firstNum + secondStr;
console.log(result); // when we give number and string addition it will convert to string type

console.log(typeof (result));


// To find the true or false 

let me = 20;
console.log(me);
console.log(me === 20); // true
console.log(me !== 23); // true
console.log(me !== 20); // false
console.log(me <= 12); // false
console.log(me >= 45); // false





console.log("learn javascript");
console.log(typeof (65));
console.log(typeof ("hai"));

// strings property

let vari = "datetime";

console.log(vari);

// to find length of the string

console.log(vari.length);

// string methods

console.log(vari.charAt(0)); // to find the position of the character

console.log(vari.indexOf("at")); // to find the index of the variable in the given string

console.log(vari.lastIndexOf("y")); // to find the last index of the variable in the given string

console.log(vari.slice(2, 6)); // slice the word

console.log(vari.toLowerCase());

console.log(vari.toUpperCase());

console.log(vari.includes("date"));

console.log("welcome to my home".split("o")) // split the word by the specified letter

console.log("welcome to my home".split(""))


// Numbers concept 

const myNumber = 34;

let myFloat = 34.01;

console.log(typeof (myFloat));

console.log(myFloat);

console.log(myFloat === myNumber);

// convert string into number 

const myStrToNum = "34";

let str = "me";

console.log(Number(str)); // It give a result as NaN (Not a Number)

console.log(Number(myStrToNum));

console.log(Number(true)); // When give the boolean data it give 1 false 0 

// string + number = string

let myStr = "kk";

console.log(myStr + myNumber);  // result is string ("kk34")

// number + number = number

console.log(myNumber + myNumber); // result is number (68)


// Number concepts

console.log('numberconcepte');

console.log(Number.isInteger(myNumber));

let parseString = "45.456676abcd";

let parseFloat = 34.4545;


console.log(Number.parseInt(parseFloat)); // separate the float value from the string

console.log(Number.parseFloat(parseString)); // separate the integer value from the string 

console.log(Number.parseFloat(parseString).toFixed(2)); // It return as a string

console.log(myNumber.toString()); // convert number to string

// Chaining concept

const ethoo = "424.84738ljkl";

console.log(Number.parseFloat(ethoo).toFixed(2).toString());

console.log(Number.isNaN(56)); // false because 56 is a number

console.log(isNaN("money")); // money is not a Number

// Math Properties


console.log(Math.PI.toFixed(1));
console.log(Math.trunc(Math.PI)); //truncate the number
console.log(Math.round(Math.PI));

console.log(Math.round(4.5)); // below 0.5 gives previous number and above 0.5 gives the next number
console.log(Math.ceil(4.3)); // It give the next number whatever the float value is..

console.log(Math.floor(4.8)); // It give the previous number whatever the float value is..

console.log(Math.pow(2, 3)); // power of in this 2 power 3 is 8

console.log(Math.min(10, 3, 0.5, 4, 87, 45)); // give the minimum value

console.log(Math.max(54, 0.2, 2, 58, 5757)); // give the maximum value

console.log(Math.random()); // it gives the random number within the value of 0 to 1 only

console.log(Math.ceil(Math.random() * 10)); // give 1 to 10 number

console.log(Math.floor(Math.random() * 100 + 1)); // give 1 to 100 number


//Generate the random character give string
const randomlet = "vengateshprogrammer";
console.log(randomlet.charAt(Math.random() * randomlet.length));

// if statements

let customerISBanned = false;
let viewer = "js course"
let reply;
let finance = true;
if (customerISBanned) {
  reply = 'sorry';
  console.log(reply);
}
else if (viewer && finance) { // use relational operator AND
  reply = `Enjoy ${viewer} and finance course`;
  console.log(reply);
}
else if (viewer) {
  reply = `Enjoy ${viewer}`;
  console.log(reply);
}
else {
  reply = 'course not available';
  console.log(reply);
}

// nested if

let testScore = 6;
let grade;
let collegeStudent = true;

if (testScore >= 90) {
  grade = 'A';
}
else if (testScore >= 80) {
  grade = 'B';
}
else if (testScore >= 70) {
  grade = 'C';
}
else if (testScore >= 60) {
  grade = 'D';
}
else {
  if (collegeStudent) {
    grade = 'RA';
  }
  else {
    grade = 'F'
  }
}
console.log(grade);


// switch statements

let numb = 40;

switch (numb) {
  case 40:
    console.log("The number is 40");

    break;
  default:
    console.log("The number is not 40");
}

// ternary opeators

// to simplify the if else statements

const age = 5;

let drink = age >= 18 ? "Beer" : "Juice";
console.log(drink);

let testScores = 50;
let grades = testScore > 89 ? "A"
  : testScore > 79 ? "B"
    : testScore > 69 ? "C"
      : "D";
console.log(grades);

// get input from users

// let dataFromCustomer = alert("it shows just ok");
// console.log(dataFromCustomer);

// the console prints undefined data 

// let dataFromCustomer2 = confirm("ok === true/n cancel === False");
// console.log(dataFromCustomer2);

// type the data from user

// let userdata = prompt("Enter your name");
// console.log(userdata);

//sometimes the user denied to enter the name the console print null value, to avoid the scenario we use null collasking operator

// let userdatanull = prompt("Enter your name");
// console.log(userdata ?? "You didn't enter the name");

// if the user just click ok nothing data will provide to avoid this problem 

/*let user2 = prompt("Enter your name");
if (length.user2) {
  console.log(user2);
}
else {
  console.log(user2 ?? "you didn't enter the name");
}*/

//note that null and empty is different

//trim fuction to remove unwanted space from the data

// console.log(user2.trim().length);


// Rock,paper and Scissors game

let userConfirmation = confirm("Shall we play the Rock,Paper and Scissors game?");
if (userConfirmation === true) {
  //alert("welcome to the Game");

  let player = prompt("Choose: Rock or Paper or Scisscors");
  if (player) {
    player = player.toLowerCase().trim();
    let rock = 1;
    let paper = 2;
    let scisscors = 3;
    let computer = Math.ceil(Math.random() * 10);
    if (computer <= 3) {
      computer = "rock";
      if (player === computer) {
        alert("game tie");
      }
      else if (player === "paper") {
        alert("Computer select rock! you lose..");
      }
      else if (player === "scissors") {
        alert("Computer select rock! you lose..")
      }
    }
    else if (computer <= 6 && computer > 3) {
      computer = "paper";
      if (player === computer) {
        alert("Computer select paper! game tie");
      }
      else if (player === "rock") {
        alert("Computer select paper! You wins!");
      }
      else if (player === "scissors") {
        alert("Computer select paper! You Wins!");
      }
    }
    else {
      computer = "scissors";
      if (player === computer) {
        alert("Computer select Scissors! game tie");
      }
      else if (player === "paper") {
        alert("Computer select Scissors! you lose..");
      }
      else if (player === "rock") {
        alert("Computer select Scissors! You lose!");
      }
    }
    let playagain = confirm("Play again?");
    playagain ? location.reload() : alert("Ok, thanks for playing.");
  }

  else {
    alert("Okay!! you didn't enter your choice, try next time");
  }
}
else {
  alert("Okay, Maybe next time..");
}

console.log(userConfirmation);

