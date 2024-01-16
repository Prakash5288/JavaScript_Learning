console.log('=============================== Step 1,2 ===========================');
class bank{
    constructor(bankName,location,ifscCode,branchCode){
        this.bankName=bankName;
        this.location=location;
        this.ifscCode=ifscCode;
        this.branchCode=branchCode;
    }
   bankDetails(){
    console.log('Bank Details=>');
    console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, IFSC Code: ${this.ifscCode}, Branch Code: ${this.branchCode}`);
   }
}
let yesBank= new bank('YesBank','Mumbai','YESB000987',1234);
yesBank.bankDetails();
let sbiBank= new bank('SBI Bank','Pune','SBIN007897',64536);
sbiBank.bankDetails();
let mahBank= new bank('Bank Of Maharashtra','Sangola','MAHA123512',32456);
mahBank.bankDetails();
let axisBank= new bank('AXIS Bank','Sangali','AXIS76453',54647);
axisBank.bankDetails();
console.log('=============================== Step 3,4,5 ===========================');
bank.prototype.openTime='9 AM IST';
bank.prototype.closeTime='6 PM IST';
console.log(`Opening time of SBI Bank is: ${sbiBank.openTime} and closimg time is: ${sbiBank.closeTime}`);