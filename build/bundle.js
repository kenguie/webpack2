/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _big = __webpack_require__(3);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = document.createElement('img');
image.src = 'http://lorempixel.com/400/400';

document.body.appendChild(image);

var smallImage = document.createElement('img');
smallImage.src = _small2.default;

document.body.appendChild(smallImage);

var bigImage = document.createElement('img');
bigImage.src = _big2.default;

document.body.appendChild(bigImage);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "743c8098b549117afb9fa110a2b90850.jpg";

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file doesn't export anything, we just place it on the page

var total = (0, _sum2.default)(10, 5);
console.log(total);

/***/ }
/******/ ]);