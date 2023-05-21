const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9bc6a72212msh2b8601073564398p19b5d6jsn6f36683c23a7',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather =(city) =>{
	cityname.innerHTML = city;
fetch(url+ city, options)
	.then(response => response.json())
	.then((response) => {

		console.log(response);
		if(response.temp <20){
			document.body.style.backgroundImage = "url('cold.jpg')";
		}
		else{
			document.body.style.backgroundImage = "url('hot1.jpg')";
		}
		temp.innerHTML = response.temp
		temp1.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity1.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed1.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
	})
	.catch(err => console.log(err))
}
const getcity = () =>{
	var x = document.getElementById("Getcity").value;
        getweather(x);
}
getweather('Delhi');