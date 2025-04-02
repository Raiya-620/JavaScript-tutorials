var name = "Suraiya";
const age = 20;
userAge = true;
const favFruit = "Grapes";

// for(initialization/Start; Condition; counter/iteration/increment)

// while(is the condition true):{
// then do this}


    // alert("hello World");
    // document.write("Suraiya  is my name");
    // document.write(`My name is ${name} and i am ${age} years old`);

    // userAge? document.write( "You are qualified" ): document.write("You are underage" ); 

    // switch (favFruit) {
    //     case "Apple":
    //         document.write(`Your favorite fruit is ${favFruit}. Hey ${favFruit}`);
    //         break;
    //     case "Lime":
    //         document.write(`Your favorite fruit is ${favFruit}. Yuck!!!`);
    //         break;
    //     case "Grapes":
    //         document.write(`Your favorite fruit is ${favFruit}. Strong`);
    //         break;
    
    //     default:
    //         break;
    // }

    // for(let x = 0; x < 20; x++){
    //     document.write(`i love you ${x}`);
    // }

//    let number = 0;
//     while (number < 500){
//     document.write(`The number is currently ${number} <br>`);
//     number++;
// }

// let user = 20;
// do{
//     document.write(`get out of here. You are underaged`);
// }
// while(user < 20);

// for(variable of iterable)
// {
//     code to be executed
// }

// let word = "fruits";
// for(letter of word){
//     document.write(letter);
//     console.log(letter) ;
// }

// const obj = {a:1, b:2}

// for(let i in obj){
//     document.write(i);
//     console.log(i);
// }

// for(let i = 0; i < 7; i++){
//     if(i === 5) break;
//     document.write(`${i} <br>`)
// }
// if(i === 5) continue;
//     document.write(`${i} <br>`)
// }
// sayHi();
// function sayHi(){
//     console.log("hi");
// }


// const fruitLover = ()=>{
//     console.log("i love fruits");
// }
// fruitLover();

// function addsTwoNumbers(firstNum, secondNum = 20){
//     console.log(firstNum + secondNum);
// }

// addsTwoNumbers(15);


// in javascript, there are three types of pop up boxes
//1. alert 2. confirm 3. prompt

// alert("No Kids allowed");

// confirm("I am immortal");

// prompt("Enter your name: ");

// alert("Gold club Membership");

// const fullName = prompt("Enter your name");

// const nameConfirm = confirm(`Is this the right name ${fullName}?`);

// if(nameConfirm === true){
//     document.write("Welcome to the club");
// }else{
//     document.write("Goodbye");
// }

// nameConfirm ? document.write("Welcome to the club") :  document.write("Goodbye");


// const fruits = ["apples", "bananas", "grapes"];

// fruits[1] = "mongo";
// fruits.push("watermelon", "dates") // to add items to an array

// fruits.unshift("orange"); // add elements to the beginning of the array

// fruits.pop(); // to remove elements in an array

// fruits.shift() // removes the first element in an array


// the splice method can perform three actions: delete, add, replace
// delete
// fruits.splice(Date, deleteCount)

// add
// fruits.splice(start, 0index, itemsToAdd)

// replace bananas with oranges and blackberry
// fruits.splice(1,1, "oranges", "blackberry");

// fruits.splice(1,2);
// console.log(fruits);
// console.log(fruits.length);


//maps
// fruits = ["apple", "guava", "bananas"];

// Array.map(function(currentValue, index(optional)Array(optional)), thisValue)

// const loveFruit = fruits.map(function(fruit, index){
//     return `I love ${fruit} ${index}`;
// });

// console.log(loveFruit);

const numbers = [1,2,3,4];

const multiplyByTwo = numbers.map(number => number * 2);

console.log(multiplyByTwo);