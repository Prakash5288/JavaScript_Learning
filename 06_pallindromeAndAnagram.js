
console.log(`-------------------------------------------STEP-1-------------------------------------------`);

const isPalindrome = function(arg){
  const word = arg.toLowerCase();
  const reversWord = word.split("").reverse().join("");
  return word == reversWord?true:false;
}
const result = isPalindrome("madam");
console.log(`Given word "madam" is Palindrome => ${result}`);

const result2 = isPalindrome("dad");
console.log(`Given word "dad" is Palindrome => ${result2}`);

const result3 = isPalindrome("hello");
console.log(`Given word "hello" is Palindrome => ${result3}`);
console.log(`-------------------------------------------STEP-2-------------------------------------------`);

const isAnagram = (str1, str2) =>{
  const resultString1 = str1.toLowerCase().split("").sort().join("");
  const resultString2 = str2.toLowerCase().split("").sort().join("");
  return resultString1 == resultString2?true:false;
}
const resultAnagram = isAnagram("Silent","Listen");
console.log(`Given words "Silent" and "Listen" are Anagram: ${resultAnagram}`);

const resultAnagram1 = isAnagram("Hello","World");
console.log(`Given words "Hello" and "Word" are Anagram: ${resultAnagram1}`);

const resultAnagram2 = isAnagram("Such","Much");
console.log(`Given words "Such" and "Much" are Anagram: ${resultAnagram2}`);
