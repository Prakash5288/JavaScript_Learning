var tcsInterview = function (gradScore, hcsScore, sscScore, CandidateName) {
  if (gradScore >= 70 || hcsScore >= 80 || sscScore >= 90) {
    console.log(` Congrats ${CandidateName} you are Eligible for intervivew!`);
  } else {
    console.log(
      `unfortunately ${CandidateName} you are not Eligible for intervivew`
    );
  }
};
tcsInterview(80,86,90,"Prakash");
tcsInterview(70,65,55,"Suraj");
tcsInterview(60,79,88,"Akash");