function intro(name, age, nation) {
  console.log(`${name}, ${age}, ${nation}`);
}

intro('허용제', '35', '대한민국');



// 저체중 : 18.5 미만
// 정상체중 : 18.5 이상 23 미만
// 과체중 : 23이상 25미만
// 경도비만 : 25이상 30미만
// 중도비만 : 30이상 35미만
// 고도비만 : 35이상

// 체질량지수 공식
// 단위: 체중 = kg, 신장 = cm
// 체질량지수 = 체중 / (신장 * 신장 / 10000)

function bmiCalculator(name, weight, height){
  let bmi = weight / (height * height / 10000);
  console.log(`${name}님의 체질량지수는 ${bmi}입니다.`)
}


bmiCalculator('홀쭉이', 43.52, 160);
bmiCalculator('코린이', 61.25, 175);
bmiCalculator('통통이', 77.76, 180);