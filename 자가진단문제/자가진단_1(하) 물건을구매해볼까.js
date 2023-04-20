// function solution(num) {
//   let answer = 0;
//   let change = 1000 - num;

//   answer += parseInt(change / 500);
//   change %= 500;

//   answer += parseInt(change / 100);
//   change %= 100;

//   answer += parseInt(change / 50);
//   change %= 50;

//   answer += parseInt(change / 10);
//   change %= 10;
//   return answer;
// }
// let num1 = 160;
// console.log(solution(num1));

function solution(num) {
  let answer = 0;
  let change = 1000 - num;
  const coin = [500, 100, 50, 10];

  for (let i = 0; i < coin.length; i++) {
    answer += parseInt(change / coin[i]);
    change %= coin[i];
  }

  return answer;
}
let num1 = 160;
console.log(solution(num1));
