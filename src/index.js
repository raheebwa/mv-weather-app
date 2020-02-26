import domMaster from './modules/domMaster';
import utilities from './modules/utilities';

domMaster.renderForecast();

const searchForm = utilities.getEl('search-form');

searchForm.addEventListener('submit', () => {
  utilities.getEl('weather-data').innerHTML = '';
  const city = utilities.getEl('search-city');
  domMaster.renderForecast(city.value);
});
