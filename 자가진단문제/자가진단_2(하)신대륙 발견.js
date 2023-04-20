function solution(month, day) {
  let result = "";

  let date = new Date(`2025-${month}-${day}`); //2025년,2026년은 윤년이아니다
  date.setDate(date.getDate() + 98);
  //console.log(date);
  result = `${date.getMonth() + 1}월 ${date.getDate()}일`;
  return result;
}
console.log(solution(1, 18));
