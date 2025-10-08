// Generics in TypeScript
// 제네릭: 다양한 타입에 대해 재사용 가능한 컴포넌트 작성 가능
// 함수, 클래스, 인터페이스에서 사용 가능
// 제네릭 문법: <T, U, V ...> (타입 매개변수)
// T, U, V는 타입 매개변수로, 관례적으로 대문자 한 글자를 사용

function getSize<T>(arr: T[]): number {
  return arr.length;
}

// TypeScript는 전달된 인자의 타입을 보고 <T>를 자동으로 추론함
// 따라서 함수 호출 시 별도로 타입을 지정할 필요 없음

// 직접 <T>를 지정할 수도 있음
// 1. 타입 추론이 불가능한 경우
// 2. 명시적으로 특정 타입을 지정하고 싶은 경우
const arr1 = [1, 2, 3];
getSize<number>(arr1); // 3

const arr2 = ["a", "b", "c"];
getSize<string>(arr2); // 3

const arr3 = [true, false, true];
getSize(arr3); // 3

const arr4 = [{ name: "Sam" }, { name: "Jane" }, { name: "Tom" }];
getSize(arr4); // 3

// 제너릭 인터페이스: 옵션 타입이 유동적인 객체 정의 가능
// Mobile1<T> 인터페이스는 option 필드의 타입이 T로 지정되어 있어,
// Mobile1을 사용할 때마다 option 필드의 타입을 다르게 지정할 수 있음
interface Mobile1<T> {
  name: string;
  price: number;
  option: T;
}

// option 필드의 타입을 객체로 지정
const m1: Mobile1<{ color: string; coupon: boolean }> = {
  name: "iPhone",
  price: 100,
  option: {
    color: "red",
    coupon: false,
  },
};

// option 필드의 타입을 string으로 지정
const m2: Mobile1<string> = {
  name: "galaxy",
  price: 200,
  option: "good",
};

// 제네릭 함수: 다양한 타입의 객체를 처리할 수 있는 함수를 작성할 때 유용
// 함수의 매개변수 타입을 제네릭으로 지정하여,
// 호출 시 전달된 인자의 타입에 따라 자동으로 타입이 결정됨
// 'extends { name: string }' 제약을 사용하여,
// 반드시 name 속성을 가진 객체만 인자로 받을 수 있도록 제한함

interface User4 {
  name: string;
  age: number;
}

interface Car7<T> {
  name: string;
  color: string;
}

interface Book {
  price: number;
}

const user4: User4 = { name: "Sam", age: 30 };
const car4: Car7<string> = { name: "BMW", color: "Red" };
const book: Book = { price: 1000 };

function showName2<T extends { name: string }>(data: T): string {
  return data.name;
}

showName2(user4); // 'Sam'
showName2(car4); // 'BMW'
// showName2(book); // 오류: Book 타입에는 name 필드가 없음
