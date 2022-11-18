let x = 7;
let result = x % 2 ? '홀수' : '짝수';

console.log(result) //홀수



let y = 2, result2;
if (y % 2) result2 = '홀수';
else result2 = '짝수';
console.log(result2);



let z = 10;
let result3 = z %2 ? '홀수' : '짝수';
console.log(result3);



//논리연산자
alert( null || 2 || undefined ); //2가출력
alert( 1 && null && 2 ); //null 출력 
alert( null || 2 && 3 || 4 ); // && 가 || 보다 우선순위가 높으므로 먼저 실행, 이후 2 && 3 = 3 이므로 3이 출력
