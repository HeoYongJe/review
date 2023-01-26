//d-day 계산기

let myDate = new Date("2023-01-28");
let today = new Date();
let timeDiff = myDate.getTime() - today.getTime();
let dDay = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) + ' day';
console.log(dDay);

