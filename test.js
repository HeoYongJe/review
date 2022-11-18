let result = 10 + 20;
console.log(result);

const arr = ['a','b','c'];
console.log(arr);
arr[0];

// alert('Hello World');
//         let fruite = ['apple','grape']
//         console.log(fruite);


// alert("에러가 발생합니다.")
// [1, 2].forEach(alert)

// alert("제대로 동작합니다.");
// [1, 2].forEach(alert)

// let message = 'hello';
// message = 'hello!!';

// alert(message);

const birthday = '890222';
// birthday = '19890222';
// Uncaught SyntaxError: Missing initializer in const declaration 상수 재할당 x 
// alert(birthday);
console.log(birthday);


let n = 123;
n = 12.222;
console.log(n);


let name = "heo";
console.log(`hello, ${name}`);
// "" , '' 상관x  / ``역따옴표는 위처럼 변수나 표현식을 감싼후 ${}안에 넣어서 사용가능


let num = 10;
100 + num;


let a = 5;
console.log('a++ = ' + a++); //5
console.log('a++ = ' + a++); //6
console.log('a++ = ' + a++); //7 


let eq = 10;
let eq2 = '10';

console.log(eq == eq2); //값을비교
console.log(eq !== eq2); 
console.log(eq === eq2); //타입을 비교 eq는 숫자 eq2는 문자열 타입이 다르다