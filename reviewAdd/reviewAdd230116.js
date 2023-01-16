// if문을 활용해서 키 120cm를 기준으로 탑승 가능 유무를 알려주는 checkHeight 함수를 작성

function checkHeight(height) {

  if(height > 120) {
    console.log('탑승이 가능합니다.');
  } else{
    console.log('탑승이 불가능합니다.')
  }

}


checkHeight(100);
checkHeight(115);
checkHeight(130);


