//값들의 순서가 중요할때는 객체보다 배열이 효과적
//배열의 index = 객체의 propertyName 과 동일

let fruit = [
  '사과',
  '바나나',
  '망고',
  '파인애플'
]

//index는 1이아닌 0부터 시작
console.log(fruit[1]); //바나나



for(let i = 0; i < fruit.length; i++){
  console.log(fruit[i]);
}