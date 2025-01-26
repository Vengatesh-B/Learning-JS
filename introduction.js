"use strict";

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

let firstNum = 8;
let secondStr = "cat";

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

// Loops
// while loop
let i = 0;
while (i <= 5) {
  console.log(i);
  i = i + 1;
}

// do while loop

let j = 59;
do {
  console.log(j);
  j = j + 1;
} while (j < 60)

// for loop 

for (i = 0; i < 3; i++) {
  console.log(i);
}

let nameprint = "programming";
for (i = 0; i < nameprint.length; i++) {
  console.log(nameprint.charAt(i));
}

// break: to exit the loop

let ku = 0;
while (ku < 6) {
  if (ku === 2) {
    break;
  }
  console.log(ku);
  ku = ku + 1;
}

// continue: to skip the particular iteration

let con = 0;
for (let co = 0; co < 5; co++) {
  if (co === 2) {
    continue;
  }
  console.log(co);
  con = con + co;
}

// Functions 

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(10, 2));
console.log(sum(1, 4));
console.log(sum(5, 6));

// example to remove the string after the @ symbol from the email

function getUserNameFromEmail(email) {
  return (email.slice(0, email.indexOf("@")));
}

// Here we give the parameter that named as email
console.log(getUserNameFromEmail("contactme@gmail.com"));

// Create proper string with using fuction

function toProperCase(word) {
  return (((word.slice(0, 1).toUpperCase())) + word.slice(1).toLowerCase());
}

//we can use variable also

const toProperCase2 = function (word) {
  return (((word.slice(0, 1).toUpperCase())) + word.slice(1).toLowerCase());
}

// another method to define the function (new feat ES6)

const toProperCase3 = (word) => {
  return (((word.slice(0, 1).toUpperCase())) + word.slice(1).toLowerCase());
}

console.log(toProperCase3("suPeR"));

// scope var, let, const

// global scope

var a = 1;
let b = 2;
const c = 3;

console.log(`global:${a}`);
console.log(`global:${b}`);
console.log(`global:${c}`);



// local scope -- function scope

function myFunc() {
  var c = 5;

  // var is a function scope let const are not

  // local scope -- block scope

  if (true) {
    var b = 7;

    console.log(`block:${a}`);
    console.log(`block:${b}`);
    console.log(`block:${c}`);
    // this variable only use this block of codes we can't use it outside of this block code
  }
  console.log(`function:${a}`);
  console.log(`function:${b}`);
  console.log(`function:${c}`);
}
myFunc()
console.log(b);

// Note the global variable can use within local block code but the local variable can't use outside of that block code

// Arrays

const myArray = [];
// adding elements in array

myArray[0] = "my";
myArray[1] = "array";
myArray[2] = 554;
myArray[3] = true;
myArray[4] = 56;

console.log(myArray);

console.log(myArray.length);

// add or delete element in last index

myArray.push("last one");
console.log(myArray);
myArray.pop();
console.log(myArray);

// add or delete element in first index

myArray.unshift("first one");
console.log(myArray);
myArray.shift();
console.log(myArray);

// when we will save push and pop element in one variable

const lastItem = myArray.push("last item");
console.log(lastItem); // it gives the length of the array

const firstItem = myArray.unshift("first item");
console.log(firstItem); // it give the length of the array

const lastItemRemove = myArray.pop();
console.log(lastItemRemove); // it stores the last removed item

const firstItemRemove = myArray.shift();
console.log(firstItemRemove); // it stores the first removed item

// to delete the particular item in a array

delete myArray[2];
console.log(myArray);
console.log(myArray[2]); // it give undefined data so we will not use it

// best way to remove item in a array

myArray.splice(2, 1);

console.log(myArray);

// we can replace the item using splice

myArray.splice(2, 1, "false");
console.log(myArray);

// array slice -- it create the new array copy

const newArray = myArray.slice(1, 3);
console.log(newArray);

// reverse the array

const reverseArray = myArray.reverse();
console.log(reverseArray);

// array join 

const joinArray = myArray.join();
console.log(joinArray); // it gives string with sepeartion of , seperator

// array split

const splitArray = joinArray.split(',');
console.log(splitArray); // Note when we join and split the array all the data type will change to strings

// adding two different arrays

const arrayA = ["fist", 1, "second", 2];
const arrayB = ["third", 3, "fourth", 4];

const addedArray = arrayA.concat(arrayB);
console.log(addedArray);

// using spread operator we can concatinate the arrays

const addedArray2 = [...arrayA, ...arrayB];
console.log(addedArray2);

// two and threed dimensional arrays

const frontEnd = ["html", "css", "js", "react"];
const backEnd = ["python", "java", "nodejs", "go"];
const dataBase = ["mysql", "mongodb", "cassendra"];
const courses = ["dataanalytics", "dsa", "oops"];
const giveMoney = ["help others"]

console.log(frontEnd[2], backEnd[1]);

const fullStack = [frontEnd, backEnd];
const dataBaseCourses = [dataBase, courses];


console.log(fullStack[0][2], fullStack[1][1]);

const threeDimensionarray = [fullStack, dataBaseCourses, giveMoney];
console.log(threeDimensionarray[0][0][2], threeDimensionarray[1][1][2], threeDimensionarray[2][0]);


//objects
// key-value pairs in curly braces

const firstObject = { sweet: "laddu" };

console.log(firstObject);
console.log(firstObject.sweet);

// we can add multiple data types in object

const foods = {
  food: "dinner",
  person: 2,
  variety: { // include another object also
    mainDish: "pulav",
    sidish: "paneer tikka"
  },
  juices: ["apply", "orange", "mango"], // adding array
  isTasty: true,
  action: function () {        // add a function type also
    return `Have a Dinner ${this.variety.mainDish}`; // call the property mentioned in the object this is the way to call object inside the function
  }
};

console.log(foods.action());

// object inheritance concept

const house = {
  hall: 2,
  kitchen: function () {
    return "cooking room";
  }
};

console.log(house.kitchen());

// create another object using previous object 

const rooms = Object.create(house);

//add property in rooms object

rooms.bedRooms = 3;

// modify the properties

rooms.kitchen = function () {
  return "kithcen room has 2 subrooms";
};

console.log(rooms.kitchen());

const roomSelfs = Object.create(rooms);

roomSelfs.kitchen = function () {
  return "kitchen has 4 selfs";
};

console.log(house.kitchen());

//for in loop in object

const movie = {
  actor: "sivaji",
  music: "arr",
  director: "mani",
  singer: "janaki"
};

// add and delete key and values already exists object

movie.actress = "sridevi";
delete movie.director;

//print values and keys 

//to check whether to property is available in object or not 
console.log(movie.hasOwnProperty("director"));

console.log(Object.keys(movie));
console.log(Object.values(movie));

for (let job in movie) {
  console.log(`${job} is`, `${movie[job]}`);
}

// destruturing the objects

// assign a variable using object properties
const { actor: myFavActor } = movie;
console.log(myFavActor);

// another way to assign variable using object properties

const { actor, actress, music, director, singer } = movie;
console.log(actress);

function sings({ music }) {
  return music;
};

console.log(sings(movie));

// classes 

// class is a templates to create the javascript objects

// for example we create below object using class
const myPizza = {
  size: "medium",
  crust: "original",
  bake: function () {
    return console.log(`Baking a ${this.size} ${this.crust} crust pizza.`);
  }
};

myPizza.bake();

class pizza {
  constructor(typePizza,sizePizza,crustPizza) {
    this.type = typePizza; //using parameters
    this.size = sizePizza;
    this.crust = crustPizza; // we add the value here but that is not best practice
    this.toppings = "mushroom";
    this.spicy = "more";
    this.veggies = [];
  }
  get toppingsPizza() {
    return this.toppings;
  }
  set toppingsPizza(topItems){
    this.toppings = topItems;
  }
  getSpicy() {
    return this.spicy;
  }
  setSpicy(spicyLevel) {
    this.spicy = spicyLevel;
  }
  getVeggies() {
    return this.veggies;
  }
  setVeggies(veggies) {
    this.veggies.push(veggies);
  }
  bake() {
    return console.log(`Baking a ${this.size} ${this.crust} ${this.type} crust pizza with ${this.toppings} with ${this.spicy} spicy add ${this.veggies}`);
  }
}

// Now create an object using this class
// using parameter in class

const anotherPizza = new pizza("margarita","medium","original");
// anotherPizza.toppings = "cheese";  (we should not change it directly, so we use get and set method  here)
anotherPizza.toppingsPizza = "cheese";

anotherPizza.setSpicy("medium");

anotherPizza.setVeggies("cabbage");
anotherPizza.setVeggies("capsicum");
anotherPizza.bake();
 // sometimes we need to change the value for the property in that case 

 // parent & child class concept 

 class car {
  constructor(carBrand) {
    this.brand = carBrand; // public property
    this.carModel = "delux";
  }
  getCarModel() {
    return this.carModel;
  }
  setCarModel(carModel) {
    this.carModel = carModel;
  }
 }

// create child class

class smallCar extends car {
  #color = "white"; // private property
  constructor(carBrand) {
    super(carBrand);
  
  }
  carType() {
    return console.log(`our car ${this.brand} ${this.carModel} ${this.#color} color`);
  }
}

const parentCar = new smallCar("volvo");  //create object
parentCar.carModel = "super delux";
parentCar.color = "red";
parentCar.carType();

// naming conventions :: we could change the value of the property in outside the class but some cases we need not to allow it, how do not allow to change the property value outside the class 
// so that we add # before the property it don't allow to change the property outside the class.

// Factory Function

function pizzaFactory(sizePizza) {
  const crust = "original";
  const size = sizePizza;
  return {
    bake: ()=> console.log(`Baking a ${size} ${crust} crust pizza`)
  };
}

const newPizza = pizzaFactory("small");
newPizza.bake();

// we could not change the value of the property in factory funcation and also we could not access the value this is the problem of factory fucntion

console.log(newPizza.crust); // undefined 

//Note we only access the value through get method 

console.log(parentCar.color); // only it shows outside declared value could the access the private property this is the new feature


//JSON - Javascript Object Notation
// text format
// it is used to send and receive data in many programming languages

const sendJSON = JSON.stringify(parentCar);
console.log(sendJSON);
console.log(sendJSON.name); // could not access the data
console.log(typeof(sendJSON)); // string

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON); // it converts into object

//Note only the string data send and receive in json the function will not send in json format, it is just a text file


// Errors and Error Handling

const box = "yellow";
console.log(box);
// it is executed but the problem is we actually put let const var.. to avoid this reference error we should use strict in the beginning of this file

//Object..create();  // throw syntax error (the entire code will not executed)

// box = "blue";  // throw type error because box is already constant

// Note: in type and reference errors the code will executed it is difficult to debug the process to avoid this we will try catch method

const makeError = () => {
  try {
    const name = "ram";
    name = "sid";
  }
  catch(err) {
    console.log(err);
    console.error(err);
    console.warn(err.stack);
    console.table(err);
  }
};

makeError();