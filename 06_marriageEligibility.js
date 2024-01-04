function merriageEligibility(gender, age) {
  if (gender.includes("female") && age >= 18) {
    console.log(`Gender= ${gender} age=${age} she is Eligible for Merriage Bcoz her age is ${age}`);
  } else if (gender.includes("female") && age < 18) {
    console.log(
      `Gender= ${gender} age=${age} unfortunately she is Not Eligible for Merriage Bcoz her age is ${age}`
    );
  } else if (gender.includes("male") && age >= 21) {
    console.log(`Gender= ${gender} age=${age} He is Eligible for Merriage Bcoz his age is ${age}`);
  } else if (gender.includes("male") && age < 21) {
    console.log(
      `Gender= ${gender} age=${age} unfortunately He is Not Eligible for Merriage Bcoz his age is ${age}`
    );
  } else {
    console.log("You have entered  wrong data....!");
  }
}
merriageEligibility("male", 17);
merriageEligibility("male", 25);
merriageEligibility("female", 28);
merriageEligibility("female", 16);
merriageEligibility("other", 35);
merriageEligibility("other", 41);