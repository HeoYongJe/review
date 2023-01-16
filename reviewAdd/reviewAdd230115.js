
function grade(score01, score02) {
  let totalScore = score01 + score02;
  if(totalScore >= 90){
    console.log('A');
  } else if(totalScore >= 80 && totalScore < 90) {
    console.log('B');
  } else if(totalScore >= 70 && totalScore < 80) {
    console.log('C');
  } else if(totalScore >= 60 && totalScore < 70) {
    console.log('D');
  } else {
    console.log('F');
  }
}


grade(20, 30); // F
grade(60, 35); // A 
grade(50, 30); // B 
grade(30, 35); // D