//for..in

let codeit = {
  name: '허용제',
  bornYear: 1989,
  bestCourse: '자바스크립트'
}

for (let k in codeit) {
  console.log(k);
  console.log(codeit[k]);
}