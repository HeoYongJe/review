//변수와 상수
let x = 1;
x = 2;
console.log(x); // 1 -> 2로 변경이 됨

const y = 1;
// y = 2;
console.log(y); // Assignment to constant variable 오류 



//const와 참조형

//slice는 원본배열 수정 x
//splice 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경

let box1 = ['사과','오렌지','메론'];
const box2 = box1;

box1.splice(2,1,'수박');
box2.splice(2,1,'바나나');

console.log(box1); //사과 오렌지 바나나
console.log(box2); //사과 오렌지 바나나

// const 키워드로 변수를 선언하게 되면 값을 재할당 할 수는 없지만,
// 할당된 값이 객체나 배열이 경우 메소드를 통해 그 값을 변경할 수 있다