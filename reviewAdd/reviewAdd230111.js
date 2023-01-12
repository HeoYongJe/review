//and or
console.log(1 < 2 && 3>5);

// 불린 (Boolean)
console.log(7 !== 7 || 4 < 3);

// 불린 (Boolean)
let x = 3;
console.log(x > 4 || !(x > 2));



//type of 연산자
// typeof도 연산자이기 때문에 다른 연산과 함께 사용할때는 연산의 우선순의를 고려하면 된다
console.log(typeof 3);
console.log(typeof (3 + 5));
console.log(typeof 'Hello');
console.log(typeof ('Hello' + 'yongje'));

console.log(typeof typeof (3 + 5));
//3+5를 먼저 연산하여 typeof 8 로 number 나왔으나 다시한번 typeof를 하여 typeof number 로 string가 나온다



//형변환

let change1 = Number('10') + Number('5')
console.log(typeof change1); 
console.log(change1);

let change2 = String(10) + String(5)
console.log(typeof change2); 
console.log(change2);

// 형변환 불린형은 일반적으로 어떤값을 불린으로 변환할때 true가 된다
// 문자를 불린으로 변환시 '' 비어있으면 false 
// 숫자를 불린으로 변환시 0이면 false 숫자가 아닌 NaN도 false