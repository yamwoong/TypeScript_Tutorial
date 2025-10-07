// literal Types
// 특정 값만 가질 수 있음
const userName1 = "Alice";
let userName2: string | number;
userName2 = 3;

type Job = "developer" | "designer" | "pm";

interface User3 {
  name: string;
  job: Job;
}

const user3: User3 = {
  name: "Bob",
  job: "developer",
  // job: "teacher", // 오류
};

// Union Types
// | : 또는
// 두 가지 이상의 타입 중 하나를 가질 수 있음

interface Car1 {
  name: "car";
  color: string;
  start(): void;
}

interface Mobile {
  name: "mobile";
  color: string;
  call(): void;
}

function getGift(gift: Car1 | Mobile) {
  console.log(gift.color);
  if (gift.name === "car") {
    gift.start();
  } else {
    gift.call();
  }
}

// Intersection Types
// & : 그리고
// 두 가지 이상의 타입을 모두 만족해야 함
interface Car2 {
  name: string;
  start(): void;
}

interface Toy2 {
  name: string;
  color: string;
  price: number;
}

const toyCar1: Toy2 & Car2 = {
  name: "타요",
  start() {},
  color: "red",
  price: 1000,
};
