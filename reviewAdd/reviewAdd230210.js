// String
let myString = 'Hi heo yong je';


//요소 탐색
console.log(myString.indexOf('1')); // 해당 문자열이 없으면 -1반환


//요소 접근
console.log(myString[1]); //i


//길이
console.log(myString.length) // 14 공백을 포함한 길이


//대소문자 변환
console.log(myString.toUpperCase()) // HI HEO YONG JE
console.log(myString.toLowerCase()) // hi heo yong je


//부분 문자열 접근 start, end 0,3 일경우 0 index부터 2까지 출력
console.log(myString.slice(0,3));
console.log(myString.slice(1)); // index 1부터 출력
console.log(myString.slice()); // 모두 출력 