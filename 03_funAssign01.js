console.log("================ Step 1 ===========");
function myFirstFunction() {
  console.log("This is my first Function");
}
myFirstFunction();
function secondFunction() {
  console.log("This my second function with No Arg and No return value");
}
secondFunction();
console.log("=========== Step 2 ==========");
function personalDetails(firstName, lastName, collegeName) {
  console.log(firstName, lastName, collegeName);
}
personalDetails("Prakash", "Gadekar", "Sangola college");
console.log("=========== Step 3 ==========");
function swapValues(value1, value2) {
  console.log("Values before swap->", value1, value2);
  var temp;
  temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("Values after Swap->", value1, value2);
}
console.log("-------- Step 3.2 ------");
swapValues("Virat", "Anushka");
console.log("--------- Step 3.3 -------");
swapValues(1000, 2000);
console.log("=========== Step 4 ==========");
function addThreeValues(num1, num2, num3) {
  console.log(num1 + num2 + num3);
}
console.log("--------- Step 4.2 --------");
addThreeValues(10.23, 600, 40);
console.log("--------- Step 4.3 --------");
addThreeValues("Hello", "Good", "Morning");
