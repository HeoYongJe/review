// filter와 find
const devices = [
  {name: 'Galay', brand: 'samsung'},
  {name: 'ipad', brand: 'Apple'},
  {name: 'iphone', brand: 'Apple'},
  {name: 'Gram', brand: 'LG'},
];

const apples = devices.filter((el) => el.brand === 'Apple');

console.log(apples);


// 하나의 값만 찾고 싶을 경우 find , 조건이 만족하는 순간 끝
// 존재하지 않는 값을 찾을 경우 undefined를 출력
const myLaptop = devices.find((el) => el.name === 'Gram');
console.log(myLaptop);