const x = "3";
const y = 5;
const z = x * y;
console.log(typeof z) //number


let a = 2 + "3";
console.log(a);
console.log(typeof a); //string


//기본형
Number
String
Boolean
// Symbol : 유일한 값을 만들 때(es2015)
// BigInt : 엄청 큰 숫자를 다룰 때(es2020)


//참조형
Object


//symbol
const user = Symbol(1);
console.log(user === 1); //false

const user2 = Symbol(1);
console.log(user === user2); //false


//Falsy 값과 Truthy 값

console.log(Boolean(false));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean());

console.log(Boolean(true));
console.log(Boolean('codeit'));
console.log(Boolean(123));
console.log(Boolean(-123));
console.log(Boolean([]));
console.log(Boolean({}));