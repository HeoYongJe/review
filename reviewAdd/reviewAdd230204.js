let fruits = ['사과', '메론', '레몬', '오렌지'];
let ages = [10, 15, 20, 25, 30, 35];
let numbers = [];


//레몬을 삭제하고 그자리에 딸기 수박 추가
fruits.splice(2,1,'딸기','수박');
console.log(fruits);

//첫번째 요소 사과 삭제
fruits.splice(0,1);
console.log(fruits);

//ages 35삭제
ages.splice(5,1);
console.log(ages);

// numbers 에 1 2 3 5 6 7 9 추가
numbers.splice(0,0,1,2,3,5,6,7,9);
console.log(numbers);

// numbers 배열 요소중 홀수 삭제
for(let i = 0; i < numbers.length; i++) {
  if(numbers[i] % 2 !== 0){
    numbers.splice(i,1);
    i--;
    console.log(numbers);
  }
}
console.log(numbers);