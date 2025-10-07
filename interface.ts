let user: object;

user = {
  name: "Alice",
  age: 30,
};

// console.log(user.name); // 오류: 'object' 형식에 'name' 속성이 없습니다.

// interface (객체의 구조를 정의)
type Score = "A" | "B" | "C" | "D" | "F";

interface User {
  name: string;
  age: number;
  gender?: string; // ? : optional
  readonly birthYear: number; // readonly : 읽기 전용
  [grade: number]: Score; //  index signature 인덱스 시그니처
}

let user1: User = {
  name: "Alice",
  age: 30,
  birthYear: 1993,
  1: "A",
  2: "B",
};

user1.age = 31; // 가능
user1.gender = "female"; // 가능
// user1.birthYear = 1994; // 오류: 읽기 전용 속성입니다.

console.log(user1);

// function interface
interface Add {
  (num1: number, num2: number): number;
}

const add1: Add = function (x, y) {
  return x + y;
};

add1(10, 20);

interface IsAdult {
  (age: number): boolean;
}

const a1: IsAdult = (age: number): boolean => {
  return age >= 19;
};

a1(33);

// class interface
// implements  : 구현하다
interface Car {
  color: string;
  wheels: number;
  start(): void;
}

interface Toy {
  name: string;
}

// 인터페이스 상속
interface ToyCar extends Car, Toy {
  price: number;
}

class Bmw implements Car {
  color;
  wheels = 4;
  constructor(c: string) {
    this.color = c;
  }
  start() {
    console.log("start");
  }
}

const b1 = new Bmw("black");
console.log(b1);
b1.start();
