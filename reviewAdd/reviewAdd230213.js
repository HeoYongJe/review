//slice를 이용한 특정자료 뽑아내기

let nationalAnthem = '[1절] 동해물과 백두산이 [2절] 남산위에 저 소나무 [3절] 가을 하늘 공활한데 [4절] 이 기상과 이 맘으로';
second = null;

let startIndex = nationalAnthem.indexOf('[2절]');
let lastIndex = nationalAnthem.indexOf('[3절]');

console.log(startIndex);

second = nationalAnthem.slice(startIndex,lastIndex);
console.log(second);