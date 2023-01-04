let sum = 0.1 + 0.2;
console.log(sum);

// 이자계산
// n = 납입 개월 수
// r = 이자율
// v = 월 납입금 
// 위와 같은 상황에서 이자 금액은 다음과 같은 식으로 계산할 수 있다

// interest = v * n * (n+1) / 2 * r / 12

function interestCalculator(rate, payment, term) {
  let interest = payment * term * (term + 1) / 2 * 0.055/12;
  console.log(Number(interest.toFixed(1)));
}


// 이율이 5.5%일 때 매월 100만원씩 24개월 납입할 경우
interestCalculator(0.043, 1000000, 24);

// 이율이 5.5%일 때 매월 50만원씩 24개월 납입할 경우
interestCalculator(0.043, 500000, 24);