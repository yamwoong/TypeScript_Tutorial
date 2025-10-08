// keyof Operator
// keyof 연산자는 객체 타입의 모든 키를 유니언 타입으로 반환합니다.
// 객체의 키를 타입으로 사용하고 싶을 때 유용합니다.
interface User5 {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

type UserKey = keyof User5; // "id" | "name" | "age | "gender"

let uk: UserKey = "id";

// Partial<T>
// Partial 제네릭은 특정 타입의 모든 속성을 선택적으로 만듭니다.
// 즉, Partial<User6>는 User6의 모든 속성을 optional로 변경한 타입입니다.
// 부분적인 업데이트가 필요할 때 유용합니다.
interface User6 {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

// Partial<User6>는 User6의 모든 속성을 optional로 변경
// interface User6 {
//   id?: number;
//   name?: string;
//   age?: number;
//   gender?: "m" | "f";
// }

let admin: Partial<User6> = {
  id: 1,
  name: "Alice",
};

// Required<T>
// Required 제네릭은 특정 타입의 모든 속성을 필수로 만듭니다.
// 즉, Required<User7>는 User7의 모든 속성을 required로 변경한 타입입니다.
// 모든 속성이 반드시 필요할 때 유용합니다.

interface User7 {
  id: number;
  name: string;
  age?: number;
}

let admin2: Required<User7> = {
  id: 1,
  name: "Alice",
  age: 30, // age 속성도 필수
};

// Readonly<T>
// Readonly 제네릭은 특정 타입의 모든 속성을 읽기 전용으로 만듭니다.
// 즉, Readonly<User8>는 User8의 모든 속성을 readonly로 변경한 타입입니다.
interface User8 {
  id: number;
  name: string;
  age?: number;
}

let admin3: Readonly<User8> = {
  id: 1,
  name: "Alice",
};

// admin3.id = 2; // 오류: 읽기 전용 속성입니다.

// Record<K, T>
// Record 제네릭은 특정 키 타입 K와 값 타입 T를 사용하여 객체 타입을 만듭니다.
// 즉, Record<"a" | "b", number>는 { a: number; b: number } 타입과 같습니다.
// 객체의 키와 값의 타입을 명확히 지정하고 싶을 때 유용합니다.
type Grade1 = "A" | "B" | "C" | "D" | "F";
type Score1 = 0 | 1 | 2 | 3 | 4 | 5;

const Score: Record<Grade1, Score1> = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
  F: 0,
};

interface User9 {
  id: number;
  name: string;
  age: number;
}

// User9의 각 속성에 대해 유효성 검사 결과를 담는 객체 생성
function isValid(user: User9) {
  const result: Record<keyof User9, boolean> = {
    id: user.id > 0,
    name: user.name !== "",
    age: user.age > 0,
  };
  return result;
}

// Pick<T, K>
// Pick 제네릭은 특정 타입 T에서 일부 속성 K만 선택하여 새로운 타입을 만듭니다.
// 즉, Pick<User10, "id" | "name">는 User10에서 id와 name 속성만 포함하는 타입입니다.
// 객체의 일부 속성만 필요할 때 유용합니다.
interface User10 {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

const admin4: Pick<User10, "id" | "name"> = {
  id: 1,
  name: "Alice",
};

// Omit<T, K>
// Omit 제네릭은 특정 타입 T에서 일부 속성 K를 제외한 나머지 속성으로 새로운 타입을 만듭니다.
// 즉, Omit<User11, "age" | "gender">는 User11에서 age와 gender 속성을 제외한 타입입니다.
// 객체의 특정 속성을 제외하고 싶을 때 유용합니다.
interface User11 {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

const admin5: Omit<User11, "age" | "gender"> = {
  id: 1,
  name: "Alice",
};

// Exclude<T, U>
// Exclude 제네릭은 유니언 타입 T에서 특정 타입 U를 제외한 나머지 타입으로 새로운 타입을 만듭니다.
// 특정 타입을 제외하고 싶을 때 유용합니다.
type T1 = string | number | boolean;
type T2 = Exclude<T1, boolean | string>; // number

// NonNullable<T>// NonNullable 제네릭은 유니언 타입 T에서 null과 undefined를 제외한 나머지 타입으로 새로운 타입을 만듭니다.
// null과 undefined를 제외하고 싶을 때 유용합니다.
type T3 = string | null | undefined | void;
type T4 = NonNullable<T3>;
