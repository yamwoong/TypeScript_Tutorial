// 기본 타입
let age: number = 25;

let isAdult: boolean = true;

let a: number[] = [1, 2, 3];
let b: Array<number> = [1, 2, 3];

let week1: string[] = ["Mon", "Tue", "Wed"];
let week2: Array<string> = ["Mon", "Tue", "Wed"];

// 튜플 (고정된 길이와 타입을 가지는 배열) tuple
let c: [string, number];

c = ["zero", 0];
// c = [0, "zero"]; // 오류

c[0].toLowerCase();
// c[1].toLowerCase(); // 오류

// void (아무것도 반환하지 않는 함수)

function sayHello(): void {
  console.log("Hello!");
}

// never (절대 발생하지 않는 값)

function showError(): never {
  throw new Error();
}

function infLoop(): never {
  while (true) {
    // do something...
  }
}

// enum (열거형)
enum Os {
  Windows = 1,
  Mac = 10,
  Linux,
  Ios = "iOS",
}

let myOs: Os = Os.Mac;

// null & undefined

let u: null = null;
let n: undefined = undefined;
