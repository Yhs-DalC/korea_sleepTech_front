//! 1. 배열 합계 구하기

let array = [1, 2, 3, 4, 5];

function sumArray(array) {
  let sum = 0;// 배열의 요소 합을 저장

  let length = array.length;
  for(let i = 0; i < length; i++){
    sum += array[i];
  }
  return sum;
}

console.log(sumArray(array));// 15
console.log(sumArray([24, 31, 76, 45]));// 176

//! 2. 특정 수 이상의 요소 필터링

// 전달되는 배열 안에서 10 이상의 요소만 필터링 >> 새로운 배열로 반환
function filterTen(array){
  let filteredValue = [];
  let length = array.length;

  for(let i = 0; i < length; i++){
    if(array[i] >= 10){
      filteredValue.push(array[i]);
    }
  }
  return filteredValue;
}
console.log(filterTen([3, 15, 31, 2, 6, 11, 87, 35]));// [ 15, 31, 11, 87, 35 ]
console.log(filterTen([12, 3, 54, 7, 32, 10, 11, 9]));// [ 12, 54, 32, 10, 11 ]

//! 3. 배열의 평균 구하기
function findAverage(array){
  let length = array.length;
  let sum = 0;
  for(let i = 0; i < length; i++){
    sum += array[i];
  }
  return sum/length;
}


//! 4. 최대값 찾기
function findMax(array){
  let temp = array[0];
  let length = array.length;
  for(let i = 1; i < length; i++){
    if(temp < array[i]) temp = array[i]; 
  }
  return temp;
}