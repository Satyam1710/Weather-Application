
// //const url = 'https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city='+ city;
// const getWeather=async(city) => {
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '597bd5f490mshc65f294f79f8b7cp12d8f4jsn2f4b5feaa3e5',
// 		'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city='+ city, options);
// 	const result = await response.json();
// 	console.log(result);
// 	cityName.innerHTML = city;


// 	CO.innerHTML = result.CO["concentration"];
// 	NO2.innerHTML = result.NO2["concentration"];
// 	O3.innerHTML = result.O3["concentration"];
// 	SO2.innerHTML = result.SO2["concentration"];
// 	PM2.innerHTML = result["PM2.5"]["concentration"];
// 	PM10.innerHTML = result.PM10["concentration"];
// 	overall_aqi.innerHTML = result.overall_aqi;

// } catch (error) {
// 	console.error(error);
// }
// }
// submit.addEventListener("click", (e)=>{
// 	e.preventDefault()
// 	getWeather(city.value)
// })
// getWeather("Delhi")

//New
const getWeather=async(city) => {
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '597bd5f490mshc65f294f79f8b7cp12d8f4jsn2f4b5feaa3e5',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options);
	const result = await response.json();
	console.log(result);
	cityName.innerHTML=city;

	temp1.innerHTML=result.temp;
	temp2.innerHTML=result.temp;
    feels_like.innerHTML = result.feels_like;
    humidity1.innerHTML = result.humidity;
    humidity2.innerHTML = result.humidity;
    min_temp.innerHTML = result.min_temp;
    max_temp.innerHTML = result.max_temp;
    wind_speed1.innerHTML = result.wind_speed;
    wind_speed2.innerHTML = result.wind_speed;
    wind_degrees.innerHTML = result.wind_degrees;
    sunrise.innerHTML = result.sunrise;
    sunset.innerHTML = result.sunset;
} catch (error) {
	console.error(error);
}
}
submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Delhi")