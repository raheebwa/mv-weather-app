import apiConsumer from './apiConsumer';

const dataExtractor = {
  cleanedCityData() {
    const myCity = JSON.parse(apiConsumer.returnCityData());

    const result = {
      name: myCity.name,
      condition: myCity.weather[0].main,
      desc: myCity.weather[0].description,
      temp: myCity.main.temp,
      pressure: myCity.main.pressure,
      humidity: myCity.main.humidity,
      visibility: myCity.visibility,
    };

    return result;
  },
};

export default dataExtractor;