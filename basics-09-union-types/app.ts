function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);
const combinedNames = combine("john", "max");
// 서로 다른 두 종류의 값을 사용해야 하는 어플리케이션에서
// 함수나 상수 혹은 변수의 매개 변수
