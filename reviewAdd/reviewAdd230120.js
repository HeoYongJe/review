//for 문 구구단
for(let i = 1; i <= 9; i ++) {
  for(let j = 1; j <= 9; j ++) {
    console.log(`${i} * ${j} = ${i} * ${j}`);
  }
}



//객체
// [function] = 함수
// [variable] = 변수
// [constant] = 상수

let myVoca = {
  function: '함수',
  variable: '변수',
  constant: '상수',
};

console.log(myVoca);
console.log(myVoca.function); // 객체불러오기