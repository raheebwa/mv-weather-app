
import dataExtractor from './apiClient/dataExtractor';
import utilities from './utilities';

const changeToFahren = (celcius) => (((celcius * 9) / 5) + 32).toPrecision(3);
// const changeToCel = (fahren) => ((fahren - 32) * 5) / 9;

const renderForecast = async (city = 'Kampala') => {
  const data = await dataExtractor.cleanedCityData(city);
  const icon = utilities.createEl('img', ['img-rounded']);
  icon.setAttribute('src', data.icon);
  const myHeading = utilities.createEl('h1', ['heading']);
  myHeading.innerText = data.condition;
  const desc = utilities.createEl('small', ['font-italic']);
  desc.innerText = data.desc;
  const lineBr = utilities.createEl('br');
  myHeading.appendChild(icon);
  myHeading.appendChild(lineBr);
  myHeading.appendChild(desc);

  const locn = utilities.createEl('h3', ['location']);
  locn.innerText = `${data.name} / ${data.country}`;


  const temp = utilities.createEl('p', ['temp']);
  const tempValue = utilities.createEl('span', ['temp-value']);
  tempValue.setAttribute('id', 'the-temp-value');
  tempValue.innerText = data.temp;
  temp.appendChild(tempValue);
  const degValue = utilities.createEl('span', ['deg']);
  degValue.innerText = '0';
  temp.appendChild(degValue);
  const myA = utilities.createEl('a');
  myA.setAttribute('href', '#');
  const tempType = utilities.createEl('span', ['temp-type']);
  tempType.setAttribute('id', 'the-temp-type');
  tempType.innerText = 'C';

  const toggleBtn1 = utilities.getEl('toggle-deg');
  toggleBtn1.setAttribute('isCel', 1);

  const toggleBtn2 = utilities.getEl('toggle-deg-1');
  toggleBtn2.setAttribute('isCel', 0);

  myA.appendChild(tempType);
  temp.appendChild(myA);

  const wrapper = utilities.createEl('div', ['wrapper']);
  wrapper.appendChild(myHeading);
  wrapper.appendChild(locn);
  wrapper.appendChild(temp);

  const weatherCard = utilities.getEl('weather-data');
  weatherCard.classList.add('top');
  weatherCard.appendChild(wrapper);

  const theTempValue = await utilities.getEl('the-temp-value');
  const isCel1 = toggleBtn1.getAttribute('isCel');
  const isCel2 = toggleBtn2.getAttribute('isCel');

  const MyTempValue = theTempValue.innerText;

  toggleBtn1.addEventListener('click', () => {
    if (Number(isCel1) === 1) {
      const fahrenValue = changeToFahren(Number(MyTempValue));
      theTempValue.innerText = String(fahrenValue);
      toggleBtn1.setAttribute('isCel', 0);
      tempType.innerText = 'F';
    }
  });


  toggleBtn2.addEventListener('click', () => {
    if (Number(isCel2) === 0) {
      theTempValue.innerText = data.temp;
      tempType.innerText = 'C';
    }
  });

  const weatherBg = weatherCard.parentElement;
  if (String(data.condition) === 'Rain') {
    weatherBg.classList.remove('cloudy');
    weatherBg.classList.add('rain');
  } else if (String(data.condition) === 'Clouds') {
    weatherBg.classList.remove('rain');
    weatherBg.classList.add('cloudy');
  } else {
    weatherBg.classList.remove('rain');
    weatherBg.classList.remove('cloudy');
  }

  return weatherCard;
};

export default renderForecast;