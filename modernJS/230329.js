//some 와 every / treu 혹은 false 두가지의 불린 타입의 값만 리턴
const numbers  = [1,2,3,4,5];

//some 조건을 만족하는 요소가 1개 이상 있는지
const someReturm = numbers.some((el) => el > 5);  

//every 모든 요소가 조건을 만족하는지
const everyReturn = numbers.every((el) => el > 5);

