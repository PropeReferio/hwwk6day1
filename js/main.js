// Creating JavaScript in STRICT MODE
'use strict'

// JavaScript Variable Declarations
name = "Bo"
var lastName;
console.log(name, lastName);

lastName = " Stevens"
console.log("After Definition: " + lastName);

// Using the Let keyword for Declaration, safer to avoid hinging and
// undefined variables, import for scope
let number = 6
console.log(number)
number = 10;

console.log("After change: " + number)

// Using the const keyword for Variable Declaration
const number_const = 22; // makes it unchangeable

console.log(number_const)

// number_const = 33;

// console.log("After Change: " + number_const)

// fullname = 'Lemuel B Stevens IV'

// Creating Functions in JavaScript
function addNums(){
    let num1 = 5;
    let num2 = 10;

    return num1 + num2
}

console.log(addNums());

function sayHello(name){
    return "Hello, " + name
}

function array(arr){
    result = arr.splice(1,2)
    }

// Creating a function using variables, doesn't seem to add functionality
// AKA anonymous function
let addAge = function(age){
    return age + 1
}

// Control Flow in JavaScript
function determineAge(age){
    if (age <= 18){
        return "Minor"
    }
    else if (age > 18 && age <= 65){
        return "Adult not Retired"
    }
    else{
        return 'Elderly Person'
    }
}

// Ternary operation, allows one liners with conditional statements, similar to 
// list comprehensions in Python
function determineAge_ter(age){
    return (age < 18) ? "Minor":(age >= 18 && age <= 65) ? "Mid Age Adult": "Old Person"
}

/*
function determineAge_ter(age){
    if(age < 18){
        return something
    }
    else if (age >= 18 && age <= 65){
        return something else
    }
    else{
        return defaulted option
    }
}
*/

// For loop
// for(counter; expression; incrementation/decrementation)
// like start stop step of python slicing, but more nuanced, more
// functionality
function countByOne(){
    for(let i = 0;i < 20; i++){
        console.log(i)
    }
    return 'Counting Stopped'
}

// While loop in JavaScript
function countWithWhile(){
    let i = 0;
    let text;

    while (i < 10){
        text += "This number is..." + i + ' '
        i++
    }

    console.log(text)
}

// Do - While in JavaScript
function countWithDoWhile(){
    let i = 11;
    let text;
    do {
        text += "This number is now..." + i
        i++
    }
    while(i<10)
    console.log(text)
}

let groupOfNames = ['Terry', 'Ben', 'Ash', 'Brock', 'Misty']

console.log(groupOfNames.toString())
console.log(groupOfNames.join(" and "))

// toString in function
function longFormToString(){
    for (let i = 0; i < groupOfNames.length; i++){
        console.log(groupOfNames[i] + "," + '\xa0')
    }
}

//String Methods - search()
console.log(groupOfNames[0].search('e')) // like python index

//Array Method - slice()
console.log(groupOfNames.slice(0,3))

//Array Method - splice()
console.log(groupOfNames.splice(3,2,"Freddie","Karen"))
console.log(groupOfNames)