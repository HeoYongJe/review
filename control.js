let foo = 10;
console.log(foo);

let x = 0;
while (x < 10){
    x++;
} //블록문의 끝에는 세미콜론을 붙이지 않는다
console.log(x);


let num = 2;
let kind;

if (num > 2) {
    kind = '양수';
} else if (num < 0){
    kind = '음수';
} else {
    kind = '0';
}
console.log(kind) // else 로 0

//삼항연산자
let y = 2;

let result = y % 2 ? '홀수' : '짝수';
console.log(result)