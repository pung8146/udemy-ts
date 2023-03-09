function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  // 아무것도 반환하지 않지만 인수가 number 인 callback 함수 cb작성
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

addAndHandle(10, 20, (result) => {
  // result 에 number를 표기 하지않는 이유는 TS가 스스로 추론하기때문에
  // return 값을 넣어도 아무일이 생기지 않는 이유는 void로 아무일이 없다고 명시했기 때문입니다.
  console.log(result);
});

// 함수가 undefined 를 비롯 아무것도 반환하지 않는다면 void를 써야됩니다.
// TS 에서는 undefined 도 타입입니다.
