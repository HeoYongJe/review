let fruits = ['사과', '메론', '레몬', '오렌지'];


//배열 첫요소 삭제
fruits.shift();
console.log(fruits);


//배열 첫요소 추가
fruits.unshift('오렌지');
console.log(fruits);


//배열 맨 마지막 요소 삭제
fruits.splice(fruits.length -1, 1);
console.log(fruits);

fruits.pop();
console.log(fruits);


//배열 맨 마지막 요소 추가
fruits.splice(fruits.length, 0, '바나나');
console.log(fruits);

fruits.push('자몽');
console.log(fruits);
