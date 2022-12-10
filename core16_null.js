//null 과 undefined 차이
// 선언만하고 아무런 것도 지정하지 않은것인지 (undefined) / 값이 없음을 의도적으로 표현한 것인지(null)
//undefined도 의도적으로 '없음'을 표현 할 수있지만 헷갈릴 수 있으니 의도적 없음을 표현할때는 null 사용


//null ,undefined 예시
let cup;
console.log(cup); //undefined / 컵에 아무것도 없다
cup = '물';
console.log(cup); //물 / 컵에 물을 담았다
cup = null;
console.log(cup); //null / 물을 마셔서 없다

//문제
let x;
console.log(x);
let y = x;
x = null;
console.log(y);
console.log(x);
x = y;
console.log(x);


// 숫자형과 문자열 재료
let material1 = 3;
let material2 = '3';
let material3 = 10;
let material4 = '4';
let material5 = 4;

// 연산 결과
let result1;
let result2;

// 연산을 통해 result1에 문자열 '34'를, result2에 숫자형 34를 만들어 넣어주세요
// 여기에 코드를 작성하세요

result1 = material2 + material4;
result2 = material1 * material3 + material5;

// 테스트 코드
console.log(result1);
console.log(typeof result1);
console.log(result2);
console.log(typeof result2);


