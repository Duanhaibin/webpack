!function(e){var n={};function r(o){if(n[o])return n[o].exports;var s=n[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=n,r.d=function(e,n,o){r.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s="./src/app.js")}({"./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\n\nvar _layer = __webpack_require__(/*! ./components/layer/layer.js */ "./src/components/layer/layer.js");\n\nvar _layer2 = _interopRequireDefault(_layer);\n\nvar _qwe = __webpack_require__(/*! ./components/layer/qwe.js */ "./src/components/layer/qwe.js");\n\nvar _qwe2 = _interopRequireDefault(_qwe);\n\n__webpack_require__(/*! ./css/common.css */ "./src/css/common.css");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App() {\n    var a = 1;\n    console.log(_layer2.default);\n    console.log(_qwe2.default);\n    alert(a);\n};\n\nnew App();\n\n//# sourceURL=webpack:///./src/app.js?')},"./src/components/layer/layer.js":
/*!***************************************!*\
  !*** ./src/components/layer/layer.js ***!
  \***************************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\n\n__webpack_require__(/*! ./layer.less */ "./src/components/layer/layer.less");\n\nvar layer = function layer() {\n    alert(12312312312312312312312312312312312321);\n    return {\n        "name": "layer"\n    };\n};\n\nexports.default = layer;\n\n//# sourceURL=webpack:///./src/components/layer/layer.js?')},"./src/components/layer/layer.less":
/*!*****************************************!*\
  !*** ./src/components/layer/layer.less ***!
  \*****************************************/
/*! no static exports found */function(module,exports){eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/components/layer/layer.less?")},"./src/components/layer/qwe.js":
/*!*************************************!*\
  !*** ./src/components/layer/qwe.js ***!
  \*************************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\n\n__webpack_require__(/*! ./layer.less */ "./src/components/layer/layer.less");\n\nvar layer123 = function layer123() {\n    alert(\'qqqqqqqqqq   q1qqqq\');\n    return {\n        "name": "layer"\n    };\n};\n\nexports.default = layer123;\n\n//# sourceURL=webpack:///./src/components/layer/qwe.js?')},"./src/css/common.css":
/*!****************************!*\
  !*** ./src/css/common.css ***!
  \****************************/
/*! no static exports found */function(module,exports){eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/css/common.css?")}});