webpackJsonp([2,3],{

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

"use strict";


// import sum from './sum';
// import './image_viewer';  // this file doesn't export anything, we just place it on the page
//
// const total = sum(10, 5);
// console.log(total);

var button = document.createElement('button');
button.innerText = 'Click me';

button.onclick = function () {
  __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 2)).then(function (module) {
    module.default();
  });
};

document.body.appendChild(button);

/***/ }

},[4]);