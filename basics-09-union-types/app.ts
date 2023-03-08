const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  // tuple 은 배열안에 타입과 크기를 지정하므로 배열과 용도를 달리 사용할 수 있습니다.
} = {
  name: "Hoon",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [1, 2],
};

person.role.push("admin");
// push는 예외적으로 튜플에서 허용되어 타입스크립트가 오류를 잡아내지 못합니다.
person.role[1] = 10;
// 튜플에서 [1] 에 저장된 타입은 string 이여서 오류가 출력됩니다
// 그렇지만 js으로 변환은 이루어집니다.
person.role = [0, "admin"];
