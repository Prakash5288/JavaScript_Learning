console.log(
  `######################################## Step 01 ##############################`
);
let greet = () => {
  console.log(`Greet with Arrow function....!`);
  console.log(`Good Morning, Today is Thursday..!`);
};
greet();
console.log(
  `######################################## Step 02 a ##############################`
);
let multiply = (n1, n2, n3 = 1) => {
  console.log(`Multiplication with Arrow function`);
  return n1 * n2 * n3;
};
let res = multiply(5, 5, 2);
console.log("Multiplication of three no=:", res);
console.log(
  `######################################## Step 02 b ##############################`
);
console.log(`Same function calling with default parameter value`);
let res2 = multiply(10, 4);
console.log("Multiplication of two with one Default paramater no=:", res2);
console.log(
  `######################################## Step 03 ##############################`
);
let addition = (n1, n2, n3, n4, n5) => {
  return n1 + n2 + n3 + n4 + n5;
};
let result = addition(100, 100, 200, 349, 756);
console.log(`Addition of 100,100,200,349,756`);
console.log(
  `######################################## Step 03 a ##############################`
);
console.log(`Addition of given no: ${result}`);
console.log(
  `######################################## Step 03 c ##############################`
);
let result2 = addition("I am", "learning", "ES6", "features", "in depth");
console.log("Concatenation of string using same funcion Addition");
console.log(result2);
