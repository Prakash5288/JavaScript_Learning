console.log("================= Step 01 ===============");
const banksbi ={
    bankName: 'State Bank Of India',
    branchcode: 'SBIN000798',
    branchmanager:'Mr. Suraj Gaikwad',
    bankstaff: 13
}
console.log(`Given banksbi object is : `,banksbi);

console.log("================= Step 02 ===============");
const bankLoaction={
    street:'BEG',
    city:'kirkee',
    pin: '411003'
}
console.log(`Given bankLocation object is:`, bankLoaction);

console.log("================= Step 03 ===============");
console.log(`After cloning banksbi and bankLocation:`)
let newsbi=Object.assign(banksbi, bankLoaction);
console.log(newsbi);
console.log("================= Step 04 ===============");
const rateOfInterest ={
    homeLoanInterest:6.5,
    personalLoanInterest:9.5,
    dueInterest:6.5
}
console.log(`Given rateOfInterest object is:`, rateOfInterest);
console.log("================= Step 05 ===============");
let bankDetails=Object.assign(banksbi,bankLoaction,rateOfInterest);
console.log(`Comlete Bankdetails are:`, bankDetails);
console.log("================= Step 06 ===============");
for (const key in bankDetails) {
    if (Object.hasOwnProperty.call(bankDetails, key)) {
        const element = bankDetails[key];
        console.log(key,"=>",element);
    }
}