const apiKey = "ccbbe741d8f9e6d24c21a0833eafd0b1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + apiKey;
async function checkWeather(city) {
      try {
            const response = await fetch(`${apiUrl}&q=${city}`);
            const weather_icon = document.querySelector(".weatherLogo");
            if (response.status == 404) {
                  document.querySelector(".error").style.display = "block";
                  document.querySelector(".weather").style.display = "none";
            } else {
                  const data = await response.json();
                  document.querySelector(".cityName").innerHTML = data.name;
                  document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
                  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
                  switch (data.weather[0].main) {
                        case "Clouds":
                              weather_icon.src = "./External/images/clouds.png";
                              break;
                        case "Clear":
                              weather_icon.src = "./External/images/clear.png";
                              break;
                        case "Rain":
                              weather_icon.src = "./External/images/rain.png";
                              break;
                        case "Drizzle":
                              weather_icon.src = "./External/images/drizzle.png";
                              break;
                        case "Mist":
                              weather_icon.src = "./External/images/mist.png";
                              break;
                        default:
                              break;
                  }
                  document.querySelector(".error").style.display = "none";
                  document.querySelector(".weather").style.display = "block";
            }
      } catch (error) {
            console.log("Error: ", error);
      }
}
try {
      const search_btn = document.querySelector(".form .btn");
      search_btn.addEventListener("click", (event) => {
            event.preventDefault();
            const search_box = document.querySelector(".form .inputBox");
            checkWeather(search_box.value);
      });
} catch (error) {
      console.log("Error setting up event listener: ", error);
}
