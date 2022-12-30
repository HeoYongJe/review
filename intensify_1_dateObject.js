//date
let myDate = new Date();
console.log(myDate);

//new date('yyyy-mm-dd')
let myDate1 = new Date('2022-12-30');
console.log(myDate1);

//Date.getTime();
let myDate2 = new Date(2023,0,1,10,10,10);
console.log(myDate2.getTime());
console.log(myDate2.getDay());


//Date 객체 정보 수정하기
let myDate3 = new Date(2017, 4, 18, 19, 11, 16);

let myDate4 = new Date(1000);
console.log(myDate4)



//예제
let today = new Date(2022, 12, 31);
let yongjeStart = new Date(2022, 11, 30);



function workDayCalc(startDate) {

  let timeDiff = today.getTime() - yongjeStart.getTime();
  let dayDiff = timeDiff / 1000 / 60 / 60 / 24; //

  console.log(`오늘은 공부한 지 ${dayDiff + 1}일째 되는 날 입니다.`) 
  //dayDiff는 두 날짜간의 차이 값이기 때문에, 며칠째 인지를 계산하려면 당일 날짜를 하나 더 더해줘야 합니다.
}

workDayCalc(yongjeStart);