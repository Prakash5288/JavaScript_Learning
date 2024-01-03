console.log("*********** Step 1 **********");
function evenOrOdd (num1){
    if(num1%2==0){
        console.log(`${num1} is even number...!`);
    }
    else{
        console.log(`${num1} is Odd number...!`);
    }
}
evenOrOdd(45);
evenOrOdd(70);
evenOrOdd(67);
evenOrOdd(98);
console.log("*********** Step 2 **********");
function voterAgelimit(age){
    if(age>=18){
        console.log(`Your age is ${age} Hence U R Eligible for Voting...!`);
    }
    else{
        console.log(`Your age is ${age} Hence U R Not Eligible for Voting....!`);
    }
}
voterAgelimit(18);
voterAgelimit(20);
voterAgelimit(17);
voterAgelimit(40);
console.log("*********** Step 3 **********");
function charCount(word){
    var len=word.length;
    console.log(`Given string is ${word}`);
    if(len==10){
        console.log(`The given string contains ${len} character & it is more than 10....! `);
    }
    else{
        console.log(`Given string is ${word}`);
        console.log(`The given string contains ${len} character & it is less than 10....! `);
    }
}
charCount("JavaScript - ES6");
console.log("********** Step 4 **********");
function checkStrat(word){
    if(word.startsWith("Java")){
        console.log(`Given string ${word} is starts with 'Java'`);
    }
    else{
        console.log(`Given string ${word} is  not starts with 'Java'`);
    }
}
checkStrat("JavaScript Language");