//에스프레소 
//아메리카노와 카페라떼 만들기
let espresso = ['espresso'];

let americano = espresso.slice();
americano.push('water');

let caffeLatte = americano.slice();
caffeLatte.push('milk');

console.log(espresso);
console.log(americano);
console.log(caffeLatte);