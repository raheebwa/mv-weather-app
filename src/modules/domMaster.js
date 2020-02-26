
import dataExtractor from './apiClient/dataExtractor';
import utilities from './utilities';

const changeToFahren = (celcius) => ((celcius * 9) / 5) + 32;
const changeToCel = (fahren) => ((fahren - 32) * 5) / 9;


const domMaster = {
  renderForecast(data = dataExtractor.cleanedCityData()) {
    const myHeading = utilities.createEl('h1', ['heading']);
    myHeading.innerText = data.condition;
    const desc = utilities.createEl('small', ['font-italic']);
    desc.innerText = data.desc;
    const lineBr = utilities.createEl('br');
    myHeading.appendChild(lineBr);
    myHeading.appendChild(desc);

    const locn = utilities.createEl('h3', ['location']);
    locn.innerText = data.name;

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

    const toggleBtn = utilities.getEl('toggle-deg');
    toggleBtn.setAttribute('isCel', 1);

    myA.appendChild(tempType);
    temp.appendChild(myA);

    const wrapper = utilities.createEl('div', ['wrapper']);
    wrapper.appendChild(myHeading);
    wrapper.appendChild(locn);
    wrapper.appendChild(temp);

    const weatherCard = utilities.getEl('weather-data');
    weatherCard.classList.add('top');
    weatherCard.appendChild(wrapper);

    return weatherCard;
  },

  toggleMetric() {
    const toggleBtn = utilities.getEl('toggle-deg');
    const tempType = utilities.getEl('the-temp-type');
    const theTempValue = utilities.getEl('the-temp-value');
    const isCel = toggleBtn.getAttribute('isCel');

    const MyTempValue = theTempValue.innerText;

    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (Number(isCel) === 1) {
        const fahrenValue = changeToFahren(Number(MyTempValue));
        theTempValue.innerText = String(fahrenValue);
        toggleBtn.innerText = 'Change to Celsius';
        toggleBtn.setAttribute('isCel', 0);
        tempType.innerText = 'F';
      } else {
        theTempValue.innerText = theTempValue;
        toggleBtn.innerText = 'Change to Fahrenheit';
        toggleBtn.setAttribute('isCel', 1);
        tempType.innerText = 'C';
      }
    });
  },
};

export default domMaster;