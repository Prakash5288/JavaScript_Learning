console.log("================ Step 01 ==============");
let professor = {
  name: "Subodh Bhat",
  age: 40,
  city: "Tassgoan",
  proffession: "Teaching",
  address: "Sangali",
  degrees: {
    engineering: "CSC",
    PHD: "Adv Computing",
    SubExperties: "DSA",
  },
  certificates: [
    "Hacker Rank",
    "Tcs NQT",
    "IIT",
    "Certificate in IFE course",
    "Certificate in Advance Programming",
  ],
};
console.log(professor);
console.log("================ Step 02 ==============");
console.table(professor.degrees);
console.log("================ Step 03 ==============");
console.table(professor.certificates);
console.log("================ Step 04 ==============");
professor.toatalExperiance = "14 years";
console.log(`total Experiance= ${professor.toatalExperiance}`);
console.log("================ Step 05 ==============");
professor.toatalExperiance = "15 years";
console.log("Modified Property=", professor.toatalExperiance);
console.log("================ Step 06 ==============");
professor.certificates.splice(2, 0, "Oracle Certified");
console.log("After adding one certificate.....!");
console.log(professor.certificates);
console.log("================ Step 07 ==============");
console.log("Last element of the Certificate Array....!");
console.log(professor.certificates[professor.certificates.length - 1]);
console.log("================ Step 08 ==============");
console.log("Complete object=");
console.log(professor);
console.log("================ Step 09 ==============");
console.log("Traversing array using for of loop............!");

for (const iterator of professor.certificates) {
    
    console.log(iterator);
}


