//arguments 객체를 활용해서 함수를 호출할 때 전달하는 단어들의 첫 글자만 따서 줄임말을 만들기

function firstWords() {
  let word = '';
  console.log(arguments);
  
  for(const arg of arguments){
    console.log(arg[0]);
    word += arg[0];
  }

  console.log(word);
}

firstWords('프론트엔드', '개발자');
firstWords('나는', '배가', '고픔');
firstWords('아메리카노', '카페모카', '에스프레소', '카라멜마키야또', '고구마라떼');