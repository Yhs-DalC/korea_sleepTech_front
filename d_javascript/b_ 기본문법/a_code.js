// # 자바스크립트 표준 스타일 가이드
// 코딩 컨벤션, 코딩 스타일, 표준 스타일

// cf)구글 에어비엔비에서 배포한 것을 기준으로 작성

// ! 1. 코드 들여쓰기
// : tab의 공백(space의 2, 4칸으로 설정을 권장
// +) 주로 space 2칸 사용

for(let i; i < 5; i++){//중괄호 내의 코드는 들여쓰기가 기본
  let j = 0;
}

// ! 2. 세미콜론(;)으로 문장 구분
// JS는 세미클론 없어도 오류 안남
// cf) 자바는 세미콜론 필수
//>> 한 줄에 여러 구문 작성 시 반드시 세미콜론으로 구문 분리

// ! 3. 공백 사용(가독성)
// : 예약어, 연산자, 값 사이에는 공백 작성
// - 콜론(:) 사용 시 '앞의 내용: 뒤의 내용'
// - 반복문 for() {...}: 소괄호와 중괄호 사이의 공백
// - 등호 양 옆은 공백

// ! 4) 주석 사용: 남발 X, 필요한 내용만 작성