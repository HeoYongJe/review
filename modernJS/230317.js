//조건을 다루는 표현식
//삼항연산자
//조건 ? truthy 할떄 표현식 : falsy 할 때 표현식 
const cutLine = 70;

function passScore(score) {
  // return score > cutLine ? '합격' : '불합격'; 
  if(score > cutLine){
    return '합격';
  } else{
    return '불합격';
  }
}

console.log(passScore(60));


// spread 구문 (배열을 다룰때 유용) 하나로 묶인 값을 여러개의 값으로 펼친 개념
// 하나의 값으로 평가되는게 아니라 여러 값으 목록으로 평가
const numbers = [1,2,3];
console.log(...numbers);


const webPublishing = ['html','css'];
// const interactive = webPublishing.slice()
// const interactive = [...webPublishing]
const interactive = [...webPublishing, '파이썬'] //바로 요소를 추가할수도 있다

interactive.push('javascript')
console.log(webPublishing);
console.log(interactive);


const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [...arr1,...arr2]; //좀 더 직관적으로 가능

console.log(arr3); 