// practice.js

//! 객체, 배열, 함수 복습 문제

//? 문제 1

//& 1. 객체 생성
// : person 객체 생성 - name (문자열), age (숫자), isStudent (불리언) 속성을 추가

// cf) 불리언 타입의 변수명 지정
// : true(참), false(거짓) - 2가지의 값만을 가짐
// >> is, has와 같이 동사와 명사를 결합한 변수명을 주로 사용

// is: 명사 >> isStudent?: 학생이니?
// has: 동사 >> hasEatLunch?: 점심 먹었어?
let person = {
  name: '홍길동',
  age: 10,
  isStudent: true
};

//& 2. 배열 사용
// : fruits 배열을 생성하고, 여러 가지 과일 이름을 문자열로 추가(3가지)
// : 두 번째 과일을 콘솔에 출력
let fruits = ['apple', 'banana', 'orange'];
  console.log(fruits[1]);
//& 3. 함수 정의
// : 두 개의 숫자를 매개변수로 받아 그 합을 반환하는 함수 add를 작성
// >> 매개변수 O, 반환값 O
function add (a, b){
  return a + b;
}
//? 문제 2
console.log('=== 문제 2 ===');

//& 1. 객체 탐색
// : 초급에서 작성한 person 객체의 모든 속성과 값을 순회하며 콘솔에 출력하는 코드를 작성
// >> for in 반복문 사용
for (let key in person) {
  // (let 변수명 in 객체명)
  // : 객체를 순회하며 객체의 키(key)들을 변수에 할당

  // 객체의 값에 접근: 객체명[키명]
  console.log(`${key}: ${person[key]}`);
}
//* for in 반복문
// : 객체와 배열의 순회를 가볍게 처리하는 반복문 (for문의 객체, 배열 순회 - 인덱스번호가 필요 X)

let array = [1, 2, 3, 4, 5];

for(let num in array){
  // let 변수명 in 배열명
  // : 배열을 순회하며 각 요소의 인덱스를 변수에 할당

  //배열의 요소에 접근: 배열명[인덱스값]
  console.log(array[num]);
}
//& 2. 배열 메서드(배열 내장 함수) 사용
// : 초급에서 작성한 fruits의 모든 과일을 대문자로 변환하여 새 배열에 저장하고, 이 배열을 콘솔에 출력

// cf) 배열 메서드 & 콜백 함수(함수에 인자로 전달하는 함수)
// - forEach: 반환 X / 전체 요소에 동일한 기능을 적용

// - map: 새로운 배열을 반환 / 전체 요소에 동일한 기능을 적용

// - filter: 새로운 배열을 반환 / 해당 조건식을 참으로 통과하는 요소만 새로운 배열로 반환

// +) 대문자 변환: 문자열.toUpperCase()

// 배열 메서드에서 쓰이는 콜백함수의 인자 (value, index, array)
let UpperCasefruits = fruits.map(function(value, index, array){
  // 반환되는 새로운 배열에는 이전 배열의 요소값을 대문자로 변환하여 저장
  return value.toUpperCase();
});

// cf) 배열 메소드의 콜백함수는 주로 화살표 함수 형태 사용
fruits.map(value => value.toUpperCase());

console.log(UpperCasefruits);

//& 3. 함수 활용
// : 두 개의 배열을 매개변수로 받아, 첫 번째 배열의 모든 요소에 두 번째 배열의 요소를 순서대로 더한 새 배열을 반환하는 함수를 작성

// [1, 2, 3]
// [4, 5, 6]
// >> [5, 7, 9]
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

function combineArrays(arr1, arr2){
  // arr1을 전체 순회: 각 요소의 값과 그 요소의 인덱스 번호 추출
  // >> 인덱스 번호값을 통해 동일한 인덱스 arr2값 추출
  let result = arr1.map((element, index) => {
    return element + arr2[index];
  });

  return result;
}

console.log(combineArrays(arr1, arr2));
//? 문제 3
//& 1. 객체 깊은 복사
// : person 객체를 '깊은 복사'하는 함수를 작성

// +) 객체의 깊은 복사 JSON 자료형을 사용
// >> JSON.stringfy(객체데이터)
// >> JSON.parse(JSON데이터)
function deepCopy(obj){
  return JSON.parse(JSON.stringify(obj));
}
let personCopy = deepCopy(person);
//& 2. 배열과 객체를 활용한 데이터 처리
// : 아래의 users 배열에서 성인 사용자(18세 이상)만 필터링(filter)하고, 필터링된 사용자의 이름을 새 배열로 만들어 반환(map)하는 함수를 작성
// : 메서드 체이닝 사용

const users = [
  {name: "John", age: 25},
  {name: "Jane", age: 17},
  {name: "Doe", age: 18},
];

// 사용자 리스트에서 성인 사용자 필터링 + 이름값 추출
function adultUserNames(users){
  return users
  // 배열의 각 요소의 타입: 객체 (user의 타입: 객체)
    .filter(user => user.age >= 18)
    .map(user => user.name);
}
console.log(adultUserNames(users));