let fruits = ['사과','바나나','포도','딸기','오렌지'];
console.log(fruits);


//splice(startIndex, deleteCount, item)
fruits.splice(4,1,'메론');
console.log(fruits) //사과,바나나,포도,딸기,메론

//splice를 이용하면, 요소를 수정 삭제 +@ 가 가능하다



//예제
// numbers 배열에 1, 2, 3, 5, 8, 9를 순서대로 추가해 주세요
let numbers = [];
numbers.splice(0,0,1,2,3,5,8,9);
console.log(numbers);

// 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제해 주세요
for(let i = 0; i < numbers.length; i++){
  if(numbers[i] % 2 !== 0){
    numbers.splice(i,1);
    i--; 
  }
}
console.log(numbers);