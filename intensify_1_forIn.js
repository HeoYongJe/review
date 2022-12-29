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

let yongjeScore = {
	'html': 70,
	'css': 70,
	'js': 10,
};

function pass(object) {

	let totalAdd = 0;
	for (let key in object) {
	 // console.log(key);
	 // console.log(object[key]);
    totalAdd += object[key];
	}
	if (totalAdd > 70) {
	  console.log('축하합니다! 합격입니다!');
	} else {
	  console.log('아쉽지만 불합격입니다..');
	}
}

pass(yongjeScore);