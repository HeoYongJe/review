// try catch 문
try {
  // 코드
} catch (error) {
  //에러가 발생했을 때 동작할 코드
};


try {
  console.log('에러 전');

  const codeit = '코드잇';
  console.log(codeit)

  codeit = 'codeit';

  const language = 'javaScript';
  console.log(language);

} catch (error) {
  console.log('에러 후');
}

//15번 줄에서 에러가 발생 해서 20번줄인 catch로 넘어가서 에러 후 가 나오지만, 에러가 발생 시점 이후 코드는 실행 안되므로 
// 17번 줄이 실행 되지 않는다


//try catch 활용
function printMembers(members) {
  try {
    for (member of members) {
      console.log(member);
    }
  } catch (err) {
    console.error(err);
    alert(`${err.name}가 발생 했습니다.`);
  }
}

const teamA = ['용제','진주'];
printMembers(teamA)

const codeit = {name:'자바스크립트'};
printMembers(codeit);

const teamB = ['사과','바나나'];
printMembers(teamB);

