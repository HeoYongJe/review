//array
let course = [
  'html',
  'css',
  'javaScript'
];

// indexing (0~...)
//console.log(배열이름[index]);
console.log(course[0 + 2]);

let member = ['사과','딸기','망고','바나나','체리'];
console.log(typeof member);
console.log(member.length);

//추가
member[5] = '메론';
console.log(member[5]);


//예제
//각각의 섭씨온도들을 화씨로 변환
//F = ( C * 9 / 5 ) + 32; 화씨 변환 공식

let celsiusTemps = [5, 20, 21, 18, 29, 6, 12];
let fahrenheitTemps = [];

for(let i = 0; i < celsiusTemps.length; i++){
  console.log(celsiusTemps[i]);
  fahrenheitTemps[i] = (celsiusTemps[i] * 9 / 5) + 32
}


console.log(fahrenheitTemps);
