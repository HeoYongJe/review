function calculateChange(payment, cost) {

  let change = payment - cost;
  
  const fiftyCount = (change - (change % 50000)) / 50000;
  change = change - 50000 * fiftyCount;

  console.log(`50000원 지폐 : ${fiftyCount}장`);

}


calculateChange(100000, 33000);
console.log('');
calculateChange(500000, 378000);


// 해당 내용이 출력 되게끔 코드 짜기
// 50000원 지폐: 1장
// 10000원 지폐: 1장
// 5000원 지폐: 1장
// 1000원 지폐: 2장

// 50000원 지폐: 2장
// 10000원 지폐: 2장
// 5000원 지폐: 0장
// 1000원 지폐: 2장