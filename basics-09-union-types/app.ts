const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  // tuple 은 배열안에 명시된 타입을 지정해줘야합니다.
} = {
  name: "Hoon",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [1, 2],
};

person.role.push("admin");
person.role[1] = 10;

// 튜플에서 [1] 에 저장된 타입은 string 이여서 오류가 출력됩니다
// 그렇지만 js으로 변환은 이루어집니다.
