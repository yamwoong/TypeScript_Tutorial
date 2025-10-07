// 접근 제한자 (Access Modifiers) - public, private, protected
// 클래스 멤버(속성, 메서드)의 접근 범위를 제어하는 키워드

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
    console.log(super.name);
  }
}

const z1 = new Car3("red");

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

const z4 = new Bmw3("blue");
