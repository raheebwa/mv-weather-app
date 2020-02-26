import apiConsumer from './apiConsumer';

const dataExtractor = {
  async cleanedCityData(city = 'Kampala') {
    const myCity = JSON.parse(await apiConsumer.returnCityData(city));
    const result = {
      name: (myCity.name),
      country: myCity.sys.country,
      condition: myCity.weather[0].main,
      desc: myCity.weather[0].description,
      temp: Math.floor(myCity.main.temp - 273.15),
      pressure: myCity.main.pressure,
      humidity: myCity.main.humidity,
      visibility: myCity.visibility,
    };

    return result;
  },
};

export default dataExtractor;