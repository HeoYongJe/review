//형 변환

console.log(4 + '2'); // 42 + 가있지만 순서에 상관없이 한쪽에 문자열이 잇다면 양쪽 모두 문자열로 바꾼다음 문자열 연산으로 동작
console.log(4 * false); //0
console.log('4' ** true)


//같음 비교 연산 ===, ==, !==, ==, !=
console.log(1 === '1'); //false
console.log(1 === true);
console.log(1 == '1'); //true
console.log(1 == true); //true


//템플릿 문자열
//template : 일정한 틀, 형식
let year = 2018;
let month = 2;
let day = 11;
console.log('생년월일은 ' + year + '년 ' + month + '월 ' + day + '일 ' + '입니다.');
console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다.`);

let myNumber = 3;

function getTwice(x) {
  return x * 2;
}

console.log(`${myNumber}의 두 배는 ${getTwice(myNumber)}`); //3의 두 배는 6

//문제
function calcWage(name, time, wage) {
  let total = time * wage;

  console.log(`${name}님의 근무 시간은 총 ${time}시간이며, 최종 급여는 ${total}원 입니다.`); // 괄호 안에 코드를 채워 넣으세요
}

calcWage('김윤식', 208, 11340);
calcWage('성규재', 175, 12160);
calcWage('손태웅', 161, 13070);
calcWage('허우선', 222, 10980);