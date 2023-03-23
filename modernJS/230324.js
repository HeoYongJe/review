//forEach 와 map
const members =['용제','진주','은우'];

for(let member of members) {
  console.log(`${member}님이 입장하셨습니다.`);
}

//for of 와 다른 forEach 활용법
const firstName = ['용제','진주','은우'];
const lastName = ['허','김','허'];

firstName.forEach((firstName,i) => {
  console.log(`${i}${firstName}님이 입장하셨습니다.`)
});


//map
const firstName2 = ['용제','진주','은우'];
const lastName2 = ['허','김','허'];

const fullNames = firstName2.map((a, i) => {
  return lastName2[i] + a;
});

//arrow function을 통해 좀더 간결하게 가능
// const fullNames = firstName2.map((firstName2,i) => lastName2[i] + firstName2);

console.log(fullNames);

// forEach 와 map의 차이 : map은 콜백 함수의 반환값들로 구성된 새로운 배열을 반환

// 단순히 배열의 반복작업으 할 경우는 forEach를
// 반복작업을 통해 새로운 배열이 필요한 경우 map메소드를
