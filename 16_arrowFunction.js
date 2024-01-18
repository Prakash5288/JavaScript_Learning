const show= ()=>{
    console.log(`inside arrow funcion with no argument and no return`);
}
const add=(num1, num2)=>{
    console.log(`Addition= ${num1+num2}`);
}
add(10,20);
const multiply =(n1,n2)=>{
    return n1*n2;

}
const returnValue=multiply(10,20);
console.log(`Muliplication= ${returnValue}`);