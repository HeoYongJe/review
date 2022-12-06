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

//반복문
for (let i = 0; i < 5; i++){
    console.log(i) // 0,1,2,3,4
}

//주사위 6 만들기
for (let a = 1; a <= 6; a++){
    for(let b = 1; b <= 6; b++){
        if (a + b === 6) console.log(`[${a}, ${b}]`);
    }
}
