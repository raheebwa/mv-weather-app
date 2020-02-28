/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_domMaster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/domMaster */ \"./src/modules/domMaster.js\");\n/* harmony import */ var _modules_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/utilities */ \"./src/modules/utilities.js\");\n\n\n\nObject(_modules_domMaster__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst searchForm = _modules_utilities__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getEl('search-form');\n\nsearchForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n  _modules_utilities__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getEl('weather-data').innerHTML = '';\n  const city = _modules_utilities__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getEl('search-city');\n  Object(_modules_domMaster__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(city.value);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/apiClient/apiConsumer.js":
/*!**********************************************!*\
  !*** ./src/modules/apiClient/apiConsumer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nconst apiConsumer = {\n  async returnCityData(city) {\n    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=4e08624b108ae2264bc0075454e1f595`, {\n      mode: 'cors',\n    });\n    const weatherData = await response.json();\n\n    return JSON.stringify(weatherData);\n  },\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (apiConsumer);\n\n//# sourceURL=webpack:///./src/modules/apiClient/apiConsumer.js?");

/***/ }),

/***/ "./src/modules/apiClient/dataExtractor.js":
/*!************************************************!*\
  !*** ./src/modules/apiClient/dataExtractor.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apiConsumer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiConsumer */ \"./src/modules/apiClient/apiConsumer.js\");\n\n\nconst dataExtractor = {\n  async cleanedCityData(city = 'Kampala') {\n    const myCity = JSON.parse(await _apiConsumer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].returnCityData(city));\n    const result = {\n      name: (myCity.name),\n      country: myCity.sys.country,\n      condition: myCity.weather[0].main,\n      desc: myCity.weather[0].description,\n      temp: myCity.main.temp.toPrecision(3),\n      pressure: myCity.main.pressure,\n      humidity: myCity.main.humidity,\n      visibility: myCity.visibility,\n      icon: `http://openweathermap.org/img/wn/${myCity.weather[0].icon}@2x.png`,\n    };\n\n    return result;\n  },\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dataExtractor);\n\n//# sourceURL=webpack:///./src/modules/apiClient/dataExtractor.js?");

/***/ }),

/***/ "./src/modules/domMaster.js":
/*!**********************************!*\
  !*** ./src/modules/domMaster.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apiClient_dataExtractor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiClient/dataExtractor */ \"./src/modules/apiClient/dataExtractor.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ \"./src/modules/utilities.js\");\n\n\n\n\nconst changeToFahren = (celcius) => (((celcius * 9) / 5) + 32).toPrecision(3);\n// const changeToCel = (fahren) => ((fahren - 32) * 5) / 9;\n\nconst renderForecast = async (city = 'Kampala') => {\n  const data = await _apiClient_dataExtractor__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cleanedCityData(city);\n  const icon = _utilities__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createEl('img', ['img-rounded']);\n  icon.setAttribute('src', data.icon);\n  const myHeading = _utilities__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createEl('h1', ['heading']);\n  myHeading.innerText = data.condition;\n  const desc = _utilities__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createEl('small', ['font-italic']);\n  desc.innerText = data.desc;\n  const lineBr = _utilities__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createEl('br');\n  myHeading.appendChild(icon);\n  myHeading.appendChild(lineBr);\n  myHeading.appendChild(desc);\n\n  const locn = _utilities__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createEl('h3', ['location']);\n  locn.innerText = `${data.name} / ${data.country}`;\n\n\n  const temp = _utilities__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createEl('p', ['temp']);\n  const tempValue = _utilities__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createEl('span', ['temp-value']);\n  tempValue.setAttribute('id', 'the-temp-value');\n  tempValue.innerText = data.temp;\n  temp.appendChild(tempValue);\n  const degValue = _utilities__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createEl('span', ['deg']);\n  degValue.innerText = '0';\n  temp.appendChild(degValue);\n  const myA = _utilities__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createEl('a');\n  myA.setAttribute('href', '#');\n  const tempType = _utilities__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createEl('span', ['temp-type']);\n  tempType.setAttribute('id', 'the-temp-type');\n  tempType.innerText = 'C';\n\n  const toggleBtn1 = _utilities__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getEl('toggle-deg');\n  toggleBtn1.setAttribute('isCel', 1);\n\n  const toggleBtn2 = _utilities__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getEl('toggle-deg-1');\n  toggleBtn2.setAttribute('isCel', 0);\n\n  myA.appendChild(tempType);\n  temp.appendChild(myA);\n\n  const wrapper = _utilities__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createEl('div', ['wrapper']);\n  wrapper.appendChild(myHeading);\n  wrapper.appendChild(locn);\n  wrapper.appendChild(temp);\n\n  const weatherCard = _utilities__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getEl('weather-data');\n  weatherCard.classList.add('top');\n  weatherCard.appendChild(wrapper);\n\n  const theTempValue = await _utilities__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getEl('the-temp-value');\n  const isCel1 = toggleBtn1.getAttribute('isCel');\n  const isCel2 = toggleBtn2.getAttribute('isCel');\n\n  const MyTempValue = theTempValue.innerText;\n\n  toggleBtn1.addEventListener('click', () => {\n    if (Number(isCel1) === 1) {\n      const fahrenValue = changeToFahren(Number(MyTempValue));\n      theTempValue.innerText = String(fahrenValue);\n      toggleBtn1.setAttribute('isCel', 0);\n      tempType.innerText = 'F';\n    }\n  });\n\n\n  toggleBtn2.addEventListener('click', () => {\n    if (Number(isCel2) === 0) {\n      theTempValue.innerText = data.temp;\n      tempType.innerText = 'C';\n    }\n  });\n\n  const weatherBg = weatherCard.parentElement;\n  if (String(data.condition) === 'Rain') {\n    weatherBg.classList.remove('cloudy');\n    weatherBg.classList.add('rain');\n  } else if (String(data.condition) === 'Clouds') {\n    weatherBg.classList.remove('rain');\n    weatherBg.classList.add('cloudy');\n  } else {\n    weatherBg.classList.remove('rain');\n    weatherBg.classList.remove('cloudy');\n  }\n\n  return weatherCard;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderForecast);\n\n//# sourceURL=webpack:///./src/modules/domMaster.js?");

/***/ }),

/***/ "./src/modules/utilities.js":
/*!**********************************!*\
  !*** ./src/modules/utilities.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nconst utilities = {\n  createEl(el, classes = []) {\n    const myEl = document.createElement(el);\n    if (classes !== []) {\n      classes.forEach(el => {\n        myEl.classList.add(el);\n      });\n    }\n    return myEl;\n  },\n  getEl(id) {\n    const myEl = document.getElementById(id);\n    return myEl;\n  },\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (utilities);\n\n//# sourceURL=webpack:///./src/modules/utilities.js?");

/***/ })

/******/ });