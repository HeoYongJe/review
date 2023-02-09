//Math 객체

//abs 절댓값 리턴
console.log(Math.abs(-10)); //10


//Max 가장 큰 값이 리턴
console.log(Math.max(5,2,10,1)); //10


//Max 가장 작은 값이 리턴
console.log(Math.min(5,2,10,1)); //1


//pow 거듭제곱 Math.pow(x,y) x의 y승의 결과값이 리턴
console.log(Math.pow(5,2)); //25


//sqrt 제곱근
console.log(Math.sqrt(64)); //8


//round 반올림 소수점 0.5이상이면 가장 가까운 정수값으로 반올림됨
console.log(Math.round(2.3)) // 소수점이 0.5미만이므로 반올림이 안되므로 2
console.log(Math.round(2.5)) //3


//floor은 소수점을 버리고, ceil은 소수점이 올림값으로 리턴
//소수점이 얼마인지는 상관없다

console.log(Math.floor(2.3)); //2
console.log(Math.floor(2.6)); //2
console.log(Math.ceil(2.3)); //3
console.log(Math.ceil(2.7)); //3