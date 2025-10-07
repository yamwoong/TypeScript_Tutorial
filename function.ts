// 함수 매개변수에 타입 지정
function hello(name?: string): string {
  return `Hello, ${name || "world"}`;
}

function hello2(name = "world"): string {
  return `Hello, ${name}`;
}

const result = hello();
const result2 = hello("TypeScript");
// const result3 = hello(123); // 오류

// rest parameter
// ... : 나머지 매개변수
function add2(...nums: number[]) {
  return nums.reduce((result, nums) => result + nums, 0);
}

add2(1, 2, 3, 4, 5);

// interface
// this : 함수가 속한 객체의 타입 지정
// this 매개변수는 항상 첫 번째 매개변수로 작성
interface User1 {
  name: string;
}

const Sam: User1 = { name: "Sam" };

function showName(this: User1, age: number, gender: "m" | "f") {
  console.log(this.name, age, gender);
}

const a2 = showName.bind(Sam);
a2(30, "m");

// function overloading
// 함수 중복 선언
interface User2 {
  name: string;
  age: number;
}

function join(name: string, age: string): string;
function join(name: string, age: number): User2;
function join(name: string, age: number | string): User2 | string {
  if (typeof age === "number") {
    return { name, age };
  } else {
    return "나이는 숫자로 입력해주세요.";
  }
}

const sam: User2 = join("Sam", 30);
const jane: string = join("Jane", "30");
