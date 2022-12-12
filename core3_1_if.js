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

