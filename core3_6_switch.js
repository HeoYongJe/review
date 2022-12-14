//switch
let myChoice = 2;
switch(myChoice) {
  case 1:
    console.log('토끼를 선택한 당신, ...');
    break;
  case 2:
    console.log('돼지를 선택한 당신, ...');
    break;
  case 3:
    console.log('오리를 선택한 당신, ...');
    break;
  defult:
  console.log('1~4사이의 숫자를 선택해 주세요')
}


if (myChoice === 1) {
  console.log('토끼를 선택한 당신, ...');
} else if (myChoice === 2) {
  console.log('돼지를 선택한 당신, ...');
} else if (myChoice === 3) {
  console.log('오리를 선택한 당신, ...');
} else {
  console.log('1~4사이의 숫자를 선택해 주세요');
}