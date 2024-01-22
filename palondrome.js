
const revValue= (st)=>{
    let myRevVal=st.toString().split("").reverse().join("");
    let mystrVal= st.toString();
    console.log(myRevVal);
    if(mystrVal == myRevVal){
        console.log("Palindrome")
    }
    else{
        console.log('Not a palindrome');
    }
};
revValue(123);