const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];
console.log(`#################################### Step 01#############################################`);
console.log("Reverse The Array.....");
const rev=arrayRollNumbers.reverse();
console.log(rev);
console.log(`#################################### Step 02#############################################`);
console.log(`sort() method without any custom sorting logic.....`);
const srt=arrayRollNumbers.sort();
console.log(srt);
console.log(`#################################### Step 03#############################################`);
console.log(`Sorting array using custom logic.....!`);
var str1=arrayRollNumbers.sort((a,b)=>{
return a>b ? 1: -1;
});
console.log(str1);
console.log(`#################################### Step 04#############################################`);
console.log(`Greatest number from the Array....`);
console.log(str1[str1.length-1]);
console.log(`#################################### Step 05#############################################`);
console.log("Smallest element from the array....");
console.log(str1[0]);
console.log(`#################################### Step 06#############################################`);
console.log(`Remove duplicate elements in the array....`);
const arraNew=[...new Set(arrayRollNumbers)];
console.log(arraNew);