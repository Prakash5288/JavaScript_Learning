console.log("########################### Step 1 ######################");
console.log(
  "Count the total number vowels including small and capital vowels using for loop"
);
function vowels(str) {
  var count = 0;
  for (let i = 0; i <= str.length; i++) {
    let ch = str.charAt(i);

    if (
      ch == "a" ||
      ch == "i" ||
      ch == "e" ||
      ch == "o" ||
      ch == "u" ||
      ch == "A" ||
      ch == "I" ||
      ch == "E" ||
      ch == "O" ||
      ch == "U"
    ) {
      count = count + 1;
    }
  }
  console.log(`The given string is= ${str}`);
  console.log(`Total no of vowels in given string is= ${count}`);
}
vowels("I am very good IT Developer");
console.log("########################### Step 2 ######################");
console.log("Write a function to get the sum of cube of numbers from 1 to 5");
function cube(num) {
  var sum = 0;
  for (i = 0; i <= num; i++) {
    sum = sum + i * i * i;
  }
  console.log(sum);
}
cube(5);
console.log("########################### Step 3 ######################");
function oddPositionChars(str) {
  console.log(`The given string is= ${str}`);
  for (i = 0; i < str.length; i++) {
    let chr = str.charAt(i);
    if (i % 2 == 1 && chr !== " ") {
      console.log(` ${chr}`);
    }
  }
}
oddPositionChars("Hard work always pays back");
oddPositionChars("Soon I will be UI IT Champ");
