// https://openweathermap.org/

// const city = "Seoul";
// : input 창에서 지역명을 입력받는 값
// : Capitalize 사용
// >> 시작은 대문자, 기타 문자는 소문자

const apikey = "976e77fe870abf5a0fa39ee1840bd4e4";

const lang = "kr";

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}



/*
제공된 API를 사용하여 지역의 이름을 바탕으로 '해당 지역의 날씨 정보 데이터'를 호출
? units=metric: 시간이 지남에 따라 변화하는 데이터를 의미
 */

async function getWeatherData(city) {
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&lang=${lang}&units=metric`;

  try{
    const response = await fetch(api);

    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    displayWeather(data);
  } catch(error){
    console.error('Error: ', error);
    document.getElementById('weather-info').innerHTML = `<p>날씨 정보를 블러오는데 실패하였습니다. ${error.message}`;
  }
}

getWeatherData();

function displayWeather(data){
  const weatherImfoDiv = document.getElementById('weather-info');
  weatherImfoDiv.innerHTML = `
    <h2>${data.name}의 날씨</h2>
    <p>현재 온도: ${data.main.temp}</p>
    <p>체감 온도: ${data.main.feels_like}</p>
    <p>날씨: ${data.weather[0].main} (${data.weather[0].description})</p>
    `;
}

document.getElementById('search-button').addEventListener('click', () => {
  const cityInput = document.getElementById('city-input').value;
  const city = captalizeCity(cityInput);

  if(city === ''){

    alert('지역명을 입력해주세요');
    return;
  }

  getWeatherData(city);
  document.getElementById('city-input').value = '';
});

//& 첫 글자는 대문자, 나머지는 소문자로 변환하는 함수
// : 사용자 이용성 향상
function captalizeCity(city){
  const trimCity = city.trim();
  if(trimCity.length === '')return '';

  return trimCity.charAt(0).toUpperCase() + trimCity.slice(1).toLowerCase();
}

//& 입력창에 Enter키 입력시 버튼 클릭 이벤트 실행
document.getElementById('city-input').addEventListener('keyup', (e) => {
  if(e.key === "Enter"){
    document.getElementById('search-button').click();
  }
})