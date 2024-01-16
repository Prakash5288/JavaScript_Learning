console.log(`=============== Step 01 ===============`);
console.log("Removing duplicate element from array......");
function getUnique(arr){
    let uniqueArr = [];
    for(let i of arr){
        if(uniqueArr.indexOf(i)=== -1){
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}
const array= [11,3,4,11,4,7,3];
console.log(`Original array= ${array}`);
console.log(`After removing duplicate element...!`);
getUnique(array);
console.log(`=============== Step 02 ===============`);
const str="How are you mate";
console.log(`Original string is==> ${str}`);
let resultString="";
for(let i=0; i<str.length; i++){
    if(i==0 || i==str.length-1){
        resultString+= str[i].toUpperCase();

    }
    else if(str[i-1]==" " || str[i+1]==" "){
        resultString+=str[i].toUpperCase();
    }
    else{
        resultString+= str[i].toLowerCase();
    }
}
console.log(`Result of string => ${resultString}`);