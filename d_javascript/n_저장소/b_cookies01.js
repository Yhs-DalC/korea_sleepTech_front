//# 쿠키
// : 웹 사이트가 사용자의 브라우저에 저장하는 작은 텍스트 파일

//! 1. 쿠키의 구조
// - 이름: 각 쿠키의 식별자(구분)
// - 값: 각 쿠키에 저장하는 정보(문자열 데이터)
// - 만료 날짜: 쿠키의 수명

//? +) 경로, 도메인, Secure 플래그, HttpOnly플래그

//! 2. 쿠키의 한계
// : 용량 제한(4kb), 보안에 취약(개인 정보 보호 문제)

//! 3. 쿠키 생성 및 수정
// 1) 생성
// : document.cookie 속성
// : 웹 브라우저에 쿠키를 생성하고 관리(쿠키 설정, 읽기, 수정, 삭제)
// - document.cookie에 문자열을 할당하면 생성과 수정이ㅡ가능
//    >> (필수)쿠키이름, 쿠키값
//    >> (선탤)만료날짜, 경로, 도매인 등

//? - 기본 형식
//document.cookie = '쿠키이름 = 쿠키값; expires=날짜; path=경로; domain=도메인;

// EX)사용자 이름 쿠키 설정
//      :username의 이름에 LSA의 값을 저장

document.cookie = 'username = lsa; path=/;'
// cf) 경로: 해당 웹 페이지에서 쿠키값에 접근할 수 있는 경로를 지정
//    > '/' 빈 슬래시 사용: 어떤 경로에서든 쿠키값에 접근 가능

// 1) 도메인: 웹 사이트 주소 ''www.naver.com' 등의 서버 위치(IP주소)를 식별하는 역할

//2) 경로
//       : 도메인 뒤에 이어지는 부분, 서버 (사이트)내의 특정 파일이나 페이지 위치를 나타냄 'naver.com.news' 등

//? 2. 만료 날짜 설정
// : expires 속성을 설정
// - 기본값 (설정 X): 세션 쿠키로 자동 설정되어 브라우저가 닫힐 때 자동 삭제
// - 만료 날짜값은 UTC(협정 세계시)시간 단위를 가짐
// >> KST(한국 표준시)시간 단위보다 9시간 느림

let date = new Date();// 현재 날짜/시간을 반환
// date 객체에 .getTime()속성: 시간 데이터 가져오기(밀라초)
// date 객체에 .setTime()속성: 시간 데이터 설정하기

//1h === 60m
//1m === 60s
//1s === 1000ms
// date.setTime(date.getTime() + (24 * 60 * 60 *  1000));// 24시간(1일)
date.setTime(date.getTime() + (1 * 60 * 60 *  1000));// 1시간

let expires = "expires=" + date.toUTCString(); // 시간을 협정 세계시 문자열로 반환
// expires: 시간 문자열

document.cookie = "userEmail=qwe123" + expires + ";path=/;";
// "userEmail=qwe123; expires=시간문자열; path=/;";