//여러개의 파라미터

function printSum(num1, num2) {
  console.log(num1 + num2);
}

printSum(10,5);
printSum(150,10);
printSum(200,200);


function introduce(name, birth, nationality, job) {
  console.log('안녕하세요 ' + '이름은 ' + name + ' 입니다.');
  console.log('생년월일은 ' + birth + ' 이고')
  console.log('국적은 ' + nationality + ' 입니다.')
  console.log('직업은 ' + job + ' 입니다.') 
}

introduce('허용제', '89.02.22','대한민국', '취준생');


//실습
//체질량지수 = 체중 / (신장 * 신장 / 10000)
//위 공식을 참고해서 이름(name)과 체중(weight), 그리고 신장(height)을 파라미터로 입력받고 체질량지수를 계산해주는 bmiCalculator함수를 작성해 주세요.

function bmiCalculator(name, weight, height){
  console.log(name + '님의 ' + '체질량지수는 ' + weight / (height * height / 10000) + '입니다.');
  
}



// 테스트 코드
bmiCalculator('홀쭉이', 43.52, 160);
bmiCalculator('코린이', 61.25, 175);
bmiCalculator('통통이', 77.76, 180);