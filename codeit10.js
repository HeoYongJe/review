function welcome(name) {
  console.log('안녕하세요 ' + name + '님');
}

welcome('허용제');

function printSquare(x){
  console.log(x * x);
}

printSquare(2);
printSquare(4);
printSquare(6);


//우리가 흔히 사용하는 파일들의 용량 단위는 보통 GB 혹은 MB 단위인데요. 갑자기 2TB는 몇 GB, 몇 MB 인지 궁금해졌습니다.
//이 정보를 참고해서 TB 단위를 입력하면 GB 단위를 출력해주는 teraToGiga 함수와 TB 단위를 입력하면 MB 단위를 출력해주는 teraToMega 함수 두 가지 함수를 작성해 주세요.
//1mb = 1024kb
//1gb = 1024mb
//1tb = 1024gb

function teraToGiga(vol) {
  console.log(vol + 'TB는');
  console.log(vol * 1024 + 'GB 입니다.');

}

function teraToMega(vol) {
  console.log(vol + 'TB는');
  console.log(vol * 1024 * 1024 + 'MB 입니다.');

}

// TB -> GB 테스트
teraToGiga(2);
// TB -> MB 테스트
teraToMega(2);