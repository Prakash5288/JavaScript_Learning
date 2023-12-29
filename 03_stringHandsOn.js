var str1="    Hey you are doing ,good keep it up   ";
console.log("============ Step 1 ==========");
console.log("As it is string=>",str1);
console.log("============ Step 2 ==========");

console.log("Length of string=>",str1.length);
console.log("============ Step 3 ==========");
var strtrim=str1.trim();
console.log("string after trim=>",strtrim, strtrim.length);
console.log("============ Step 4 ==========");
console.log("Total removed space count is: 7");
console.log("============ Step 5 ==========");
console.log("The first character is=",strtrim.charAt(0));
console.log("The last character is=",strtrim.charAt(33));
console.log("============ Step 6 ==========");
console.log(strtrim.split(",").length);