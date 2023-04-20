function solution(s) {
  let answer = "";
  let min = 999999;
  let max = 0;

  arr = s.split(" ");
  //console.log(arr);

  for (let item of arr) {
    let i = 2;
    let num = Number(item);
    while (i < num) {
      if (num % i == 0) break;

      i++;
    }
    if (i == num) {
      //console.log(num, "소수");
      if (max < num) {
        max = num;
      }
    } else {
      //console.log(num, "소수아님");
      if (min > num) {
        min = num;
      }
    }
  }

  answer = `${min} ${max}`;
  return answer;
}
let s = "97 75 88 99 95 92 73";
console.log(solution(s));
