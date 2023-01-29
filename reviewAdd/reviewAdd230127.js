//d-day 계산기

let myDate = new Date("2023-01-28");
let today = new Date();
let timeDiff = myDate.getTime() - today.getTime();
let dDay = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) + ' day';
console.log(dDay);



// 공부시작한날 230101
let today1 = new Date(2023,01,29);
let studyStart = new Date(2023,01,01);

function studyDay(study) {
  let timeDiff1 = today1.getTime() - studyStart.getTime();
  let day = Math.floor( timeDiff1 / 1000 / 1000 / 24); 
  console.log(`오늘은 공부한지 ${day + 1} 일 되는 날입니다.`)
}

studyDay(studyStart);
