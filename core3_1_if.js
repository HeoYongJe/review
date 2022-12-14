//if 문
// if (조건부분) {
//   동작부분
// }

let temperature = -100;

if(temperature <= 0) {
  console.log('물이 업니다.');
} else if(temperature < 100) {
  console.log('물이 얼지도 끓지도 않습니다.')
} else if(temperature < 150) {
  console.log('물이 끓습니다.');
} else{
  console.log('물이 모두 수증기가 되었습니다.')
}



//서열문제 
// 나이가 같으면 친구
// 나보다 어린데 성별이 남성 : 남동생
// 나보다 어린데 성별이 여성 : 여동생
// 나보다 많은데 성별이 남성 : 형
// 나보다 많은데 성별이 남성 : 누나

// 나의 나이와, 나의 성별을 저장하는 변수
let myAge = 34;
let myGender = 'male';

// 호칭을 담은 변수
let bigBrother = '형';
let bigSister = '누나';
let Friend = '친구';
let smallSister = '여동생';
let smallBrother = '남동생';

function callYou(youAge, youGender){
  if(myAge === youAge){
    return Friend;
  } else if(myAge > youAge){
    if(youGender === 'male'){
      return smallBrother;
    } else if(youGender ==='female'){
      return smallSister;
    }
  } else{
      if(youGender === 'male'){
        return bigBrother;
      } else if(youGender === 'female'){
        return bigSister;
      }
  }
}


let result1 = callYou(30, 'female');
let result2 = callYou(22, 'male');
let result3 = callYou(34, 'female');
let result4 = callYou(36, 'male');
let result5 = callYou(36, 'female');

console.log(result1); //여동생
console.log(result2); //남동생
console.log(result3); //친구
console.log(result4); //형
console.log(result5); //누나