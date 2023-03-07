// AND와 OR의 연산 방식 /ex

console.log('String' && 123); // 123
console.log({} || []); // {}
console.log(0 && false); // 0
console.log(null || undefined); // undefined
console.log(NaN && 'Codeit'); // NaN
console.log('' || true); // true
console.log('JavaScript' && null); // null
console.log(3000 || undefined); // 3000


//null 병합 연산자
const example1 = null ?? 'I';
const example2 = undefined ?? 'love';
const example3 = 'Codeit' ?? 'JavaScript';
// 연산자 왼편의 값이 null 이나 undefined라면 연산자 오른편의 값이 리턴되고, 
// example3처럼 연산자 왼편의 값이 null 이나 undefined가 아니라면 연산자 왼편의 값이 리턴되는 원리

console.log(example1,example2,example3);


const title1 = false || 'codeit';
const title2 = false ?? 'codeit';

console.log(title1); // codeit
console.log(title2); // false


//변수와 스코프
let a = 1;
// let a = 2; // 중복선언 x , Uncaught ReferenceError : a is not defined 오류

a = 2;
console.log(a) //2 let은 재할당은 가능 ,const 는 중복선언,재할당 둘다 x

var x = 1; // 함수 스코프
let y = 1; // 블록 스코프
const z = 1; // 블록 스코프

//ex
const sum = 0;

function getSum(x, y) {
  const sum = x + y;

  return sum;
}

if (getSum(3, 3) > 3) {
  const sum = 2 + 2;
  console.log(sum) 
}
 
console.log(sum); //0


// 함수를 만드는 법
//함수선언
printCode();
function printCode(){
  console.log('code'); //code
}
// 함수선언방식은 선언하기전에 호출이 가능


//함수표현식
printCode2(); //에러
const printCode2 = function printCode2(){
  console.log('code'); //code
}
//변수의 특성상 변수에 할당하면 선언 이전에 접근을 할 수 x



{
  let sayHi = function () {
    console.log('Hi!');
  };
}

sayHi(); //에러
// 이유는 코드 블록 안에서 let으로 변수를 활용했기 때문에 블록 스코프를 가짐, 
// 블록스코프를 가진 sayHi 함수는 코드 블록 밖에서 사용할 수 없으므로 에러
