
const apiConsumer = {
  async returnCityData(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=4e08624b108ae2264bc0075454e1f595`, {
      mode: 'cors',
    });
    const weatherData = await response.json();

    return JSON.stringify(weatherData);
  },
};


export default apiConsumer;