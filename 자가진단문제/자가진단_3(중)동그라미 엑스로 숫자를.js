function solution(str) {
  let answer = 0;
  let point = 1;
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === "O") {
      answer += point;
      point++;
    } else {
      point = 1;
    }
  }

  return answer;
}
let str = "OXOOOXXXOXOOXOOOOOXO";

let str1 = "OOXXOXXOOO";
let str2 = "OXOXOXOXOXOXOX";
let str3 = "OOOOOOOOOO";
console.log(solution(str));
console.log(solution(str1));
console.log(solution(str2));
console.log(solution(str3));
