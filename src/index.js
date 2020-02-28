import renderForecast from './modules/domMaster';
import utilities from './modules/utilities';

renderForecast();

const searchForm = utilities.getEl('search-form');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  utilities.getEl('weather-data').innerHTML = '';
  const city = utilities.getEl('search-city');
  renderForecast(city.value);
});
