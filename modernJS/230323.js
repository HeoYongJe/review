//정리

//조건부 연산자
const cutOff = 80;

const passChecker = (score) => score > cutOff ? '합격입니다!' : '불합격입니다!';

console.log(passChecker(75));


//spread 구문
// 배열은 객체로 펼칠 수 있지만 객체는 배열로 펼칠 수 x
const members = ['태호', '종훈', '우재'];
const newObject = { ...members };

console.log(newObject); // {0: "태호", 1: "종훈", 2: "우재"}

const topic = {
  name: '모던 자바스크립트',
  language: 'JavaScript', 
}
const newArray = [...topic]; // TypeError!


// 모던한 프로퍼티 표기법
const title = 'codeit';
const birth = 2017;

const user = {
  title, 
  birth, 
};

console.log(user);


// 구조분해
//Array Destructuring
const members2 = ['가', '나', '다'];
const [macbook, ipad, coupon] = members;

console.log(macbook); // 코딩하는효준
console.log(ipad); // 글쓰는유나
console.log(coupon); // 편집하는민환


// Object Destructuring
const macbookPro = {
  title2: '맥북 프로 16형',
  price: 3690000,
};

const { title2, price } = macbookPro;

console.log(title); // 맥북 프로 16형
console.log(price); // 3690000