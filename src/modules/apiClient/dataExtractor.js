import apiConsumer from './apiConsumer';

const dataExtractor = {
  async cleanedCityData(city = 'Kampala') {
    const myCity = JSON.parse(await apiConsumer.returnCityData(city));
    const result = {
      name: (myCity.name),
      country: myCity.sys.country,
      condition: myCity.weather[0].main,
      desc: myCity.weather[0].description,
      temp: myCity.main.temp.toPrecision(3),
      pressure: myCity.main.pressure,
      humidity: myCity.main.humidity,
      visibility: myCity.visibility,
      icon: `http://openweathermap.org/img/wn/${myCity.weather[0].icon}@2x.png`,
    };

    return result;
  },
};

export default dataExtractor;