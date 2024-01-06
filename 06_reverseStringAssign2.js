function reverseString(str) {
  console.log(`The given string is= ${str}`);
  var result = "";
  for (i = str.length - 1; i >= 0; i--) {
    let chr = str.charAt(i);
    if (chr != " ") {
      result = result + chr;
    }
  }
  console.log(result);
}
reverseString("Hard work always pays back");
reverseString("Soon I will be React IT Champ");