const propertyName = 'birth';
const getJob = () => 'job';

const codeit = {
  ['topic' + 'Name']: 'Modern JavaScript',
  [propertyName]: 2017,
  [getJob()]: '프로그래밍 강사',
};

console.log(codeit[propertyName]);


// 옵셔널 체이닝
// 옵셔널 체이닝 연산자 왼편의 프로퍼티 값이 undefined 또는 null이 아니라면 그다음 프로퍼티 값을 리턴
// 그렇지 않은 경우 undefined를 반환

function printCatName(user) {
  console.log(user.cat?.name); //crew
  console.log(user.cat2?.name); //undefined
  console.log((user.cat === null || user.cat === undefined) ? undefined : user.cat.name); //crew  / 삼항연산자
  console.log(user.cat?.name2 ?? '함께 지내는 고양이가 없습니다.'); // null 병합 연산자 활용
}

const user1 = {
  name: 'Captain',
  cat: {
    name: 'Crew',
    breed: 'British Shorthair',
  }
}

printCatName(user1);


//구조분해 Destructuring
const rank = ['용제','진주','은우','가','나','다'];

// const ipad = rank[0];
// const iphone = rank[1];
// const airpods = rank[2];

const [ipad,iphone,airpods, ...coupon] = rank; //할당 연산자 오른쪽이 배열의 값이 아니거나 아무것도 할당하지 않으면 오류발생

console.log(ipad);
console.log(iphone);
console.log(airpods);
console.log(coupon);


let macbook = '용제';
let ipad2 = '진주';

[macbook, ipad2] = [ipad2, macbook]; // 변수에 할당된 값을 서로 교환
// 할당 연산자는 오른쪽 값을 왼쪽 피연산자에 할당
