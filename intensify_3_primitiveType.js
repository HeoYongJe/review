//기본형 Number, String, Boolean, Null, Undefined

let x = 3;
let y = x;

console.log(typeof(x))
console.log(typeof(y))

//참조형
//객체는 참조형이다
//배열도 참조형이다

let drink = {'음료' : '사이다'};
let drink2 = drink;

console.log(drink);
console.log(drink2);

drink2.food = '삼겹살';

console.log(drink); // '음료':'사이다', food:'삼겹살'
console.log(drink2); // '음료':'사이다', food:'삼겹살'

//drink2는 복사가 아닌 drink와 값은 객체값을 참조 하고 있기 때문에 위와같은 결과가 나온다

