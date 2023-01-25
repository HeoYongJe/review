//for..in
//객체안에 있는 프로퍼티들을 반복적으로 사용할때

let fruit = {
  '3': '사과',
  '2': '바나나',
  '1': '망고'
}

for(varietyFruit in fruit){
  console.log(varietyFruit);
  console.log(typeof varietyFruit);
  console.log(fruit[varietyFruit]); // 망고 바나나 사과 
  // 객체는 정수형 프로퍼티 네임을 오름차순으로 먼저 정렬하고, 나머지 프로퍼티들은 추가한 순서대로 정렬하는 특징이 있습니다.
}
