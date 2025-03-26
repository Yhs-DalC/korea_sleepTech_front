export const tmp = '';

//! 인터페이스
// : 객체(속성, 메소드) 구조를 정의하는 TS 기능
// +) 함수 타입 정의도 가능

// - 컴파일 시점에 타입 체킹을 사용: 
// 다양한 구현체에 동일한 인터페이스 사용하여 일관성과 재사용성을 향상

//? cf) 타입 별칭(type alias)
// : 데이터 타입 명시
// - 원시타입, 유니온, 인터섹션 등의 모든 타입을 별칭으로 지정 가능
type UserType = {
  name: string;
  age: number;
}
//? 1) 인터페이스 구현 방법
// : interface 키워드 사용
// - 인터페이스 명은 대문자로 시작
// - 객체의 문법 체계를 모두 사용 가능 (옵셔널, readonly)
interface IUser{
  // 객체 속성 명시
  name?: string;
  readonly age: number;

  // 객체 메소드 명시
  // : 메소드명(매개변수: 타입): 반환타입
  greet(name: string): void;
}

let userA: IUser = {
  age: 50,
  // greet(name) {
  //   console.log(`${name} hello`);
  // }
  greet: (name) => {
    console.log(`${name} hello`);
  }
}
userA.greet('이승아');

//? 클래스에서 인터페이스 구현
// : implements 키워드를 사용하여 해당 타입을 가지는 클래스를 정의
class Student implements IUser{
  name: string;
  age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  greet(name: string): void{
    console.log(`hello, my name is ${name}`);
    console.log(`hello, my name is ${this.name}`);
  }
}

const student1 = new Student('권형준', 20);
const student2 = new Student('최낙원', 30);

student1.greet('이준우');
// hello, my name is 이준우
// hello, my name is 권형준 - this.name
student1.greet('박미진');
// hello, my name is 박미진
// hello, my name is 권형준 - this.name

//? 인터페이스의 확장
// : extends 키워드 
// (인터페이스 >> 인터페이스)
// (클래스 >> 클래스)

// vs implements 키워드
// (인터페이스 >> 클래스)

interface Shape {
  color: string;
}

interface Square extends Shape{
  sideLength: number;
  //color: string; - 해당 속성이 생략된 것 처럼 작동
}

let Square1: Square = {
  color: 'red',
  sideLength: 10
}