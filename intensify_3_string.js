//string
let myString = 'Hi yongje';

//문자열 길이
console.log(myString.length);

//대소문자 변환
console.log(myString.toUpperCase()); //대문자
console.log(myString.toLowerCase()); //소문자



// 배열은 바뀔 수 있는
let myArray = ['Y', 'o', 'n', 'g', 'j', 'e'];
myArray[0] = 'B';
console.log(myArray) ; //['Y', 'o', 'n', 'g', 'j', 'e']

// 문자열은 바뀔 수 업는
let myString2 = 'Yongje';
myString[0] = 'B';
console.log(myString2); //Yongje



//예제
let nationalAnthem = '[1절] 동해물과 백두산이 마르고 닳도록..[2절]남산 위에 저 소나무..[3절]안녕하세요 반갑습니다..[4절]이 기상과 이맘으로 충성을 다하여..';

let extraction = null;

//있는지 유무
console.log(nationalAnthem.indexOf('[3절]'))
console.log(nationalAnthem.indexOf('[4절]'))

let startIndex = nationalAnthem.indexOf('[3절]');
let endIndex = nationalAnthem.indexOf('[4절]');

extraction = nationalAnthem.slice(startIndex,endIndex);


console.log(extraction);
