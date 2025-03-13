// 구구단 출력기
// : 사용자로부터 정수값을 입력받으면 해당 값의 구구단을 출력

while(true){
  //! 구구단 출력
  const input = prompt('출력한 구구단의 숫자를 입력하세요(1 ~ 9) "exit"를 입력하면 종료합니다');
  // cf) 입력받은 값: string

  if(input.toLowerCase() === 'exit'){
    console.log('종료합니다');
    break;
  }
  // 입력받은 데이터값을 숫자 자료형으로 변환
  const number = Number(input);

  if(number <= 9 && number >= 1){
    //구구단 출력
    console.log(`${number}단`);

    for(let i = 1;  i <= 9 ;i++){
      console.log(`${number} X ${i} = ${number * i}`);
    }
  } else{
    console.log("1 ~ 9의 숫자를 입력해 주세요");
  }
}