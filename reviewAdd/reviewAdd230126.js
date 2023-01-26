//for..in 예제

// 자격증 합격 기준은 총점이 60점
// 합격 기준을 충족할 경우 '합격입니다!' 라는 문자열을, 
// 충족하지 못할 경우 '불합격입니다.'라는 문자열을 출력

let yong = {
  'html' : 20,
  'css' : 30,
  'js' : 10,
  'react' : 5
};

let jin = {
  'html' : 20,
  'css' : 10,
  'js' : 10,
  'react' : 5
};

function passTest(score){
  let totalAdd = 0;
  for(let key in score) {
    console.log(key);
    totalAdd += score[key];
    console.log(totalAdd);
  }
  if(totalAdd > 60) {
    console.log('합격입니다!');
  } else {
    console.log('불합격입니다.')
  }
}


passTest(yong);
passTest(jin);