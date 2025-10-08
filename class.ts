// 접근 제한자 (Access Modifiers) - public, private, protected
// 클래스 멤버(속성, 메서드)의 접근 범위를 제어하는 키워드
/**
 * public: 자식 클래스, 클래스 외부에서 모두 접근 가능 (기본값)
 * private: 클래스 내부에서만 접근 가능 (자식 클래스, 클래스 외부에서 접근 불가)
 * protected: 클래스 내부와 자식 클래스에서 접근 가능 (클래스 외부에서 접근 불가)
 */

// 1. public (기본값) - 어디서든 접근 가능
// public 생략 가능
// public name: string; 와 동일

class Car3 {
  name: string = "car";
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
  }
}

class Bmw3 extends Car3 {
  constructor(color: string) {
    super(color);
  }
  showName() {
    console.log(this.name);
  }
}

const z3 = new Car3("red");

// 2. private - 클래스 내부에서만 접근 가능
// private 필드 앞에 # 기호를 붙여서 선언
// private name: string; 와 동일
class Car4 {
  #name: string = "car";
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  strat() {
    console.log("start");
    console.log(this.#name);
  }
}

class Bmw4 extends Car4 {
  constructor(color: string) {
    super(color);
  }
  showName() {
    // console.log(this.#name); // 오류: private 필드이므로 자식 클래스에서 접근 불가
  }
}

const z4 = new Bmw4("blue");

// 3. protected - 클래스 내부와 자식 클래스에서 접근 가능
class Car5 {
  protected name: string = "car";
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  strat() {
    console.log("start");
    console.log(this.name);
  }
}

class Bmw5 extends Car5 {
  constructor(color: string) {
    super(color);
  }
  showName() {
    console.log(this.name);
  }
}

const z5 = new Bmw5("blue");
// console.log(z5.name); // 오류: protected 필드이므로 클래스 외부에서 접근 불가

// 추상 클래스 (Abstract Class)
// abstract 키워드를 사용하여 선언
// 인스턴스를 생성할 수 없고, 상속을 통해서만 사용 가능
// 추상 메서드(abstract method)를 가질 수 있으며, 추상 메서드는 반드시 자식 클래스에서 구현해야 함

abstract class Car6 {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
  }
  abstract doSomething(): void; // 추상 메서드
}

// const car6 = new Car6("red"); // 오류: 추상 클래스는 인스턴스를 생성할 수 없음

class Bmw6 extends Car6 {
  constructor(color: string) {
    super(color);
  }
  doSomething() {
    alert(3);
  }
}

const z6 = new Bmw6("black");
