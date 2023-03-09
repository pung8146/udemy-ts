let userInput: unknown;
let userName: string;
// 어떤 사용자가 무엇을 입력할 수 없을지 모르기에 unknown 타입을 사용합니다
userInput = 5;
userInput = "hoon";
if (typeof userInput === "string") {
  userName = userInput;
}
// unknown type은 오류 발생합니다
// any type은 오류가 발생하지 않습니다.
// userInput 에서 사용될 타입을 알고있다면 유니온 타입을 쓰는게 유리합니다.

function generateError(message: string, code: number) {
  throw { message: message, errorCode: code };
}

const result = generateError("An error occrurred", 500);
console.log(result);
