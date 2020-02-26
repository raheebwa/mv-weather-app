
import dataExtractor from './apiClient/dataExtractor';
import utilities from './utilities';


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
    tempValue.innerText = data.temp;
    temp.appendChild(tempValue);
    const degValue = utilities.createEl('span', ['deg']);
    degValue.innerText = '0';
    temp.appendChild(degValue);
    const myA = utilities.createEl('a');
    myA.setAttribute('href', '#');
    const tempType = utilities.createEl('span', ['temp-type']);
    if (1 === 1) {
      tempType.innerText = 'C';
    } else {
      tempType.innerText = 'F';
    }
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
};

export default domMaster;