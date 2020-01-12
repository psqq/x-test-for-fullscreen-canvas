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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fullscreen-canvas/fullscreen-canvas.js":
/*!*************************************************************!*\
  !*** ./node_modules/fullscreen-canvas/fullscreen-canvas.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FullscreenCanvas; });\n\nclass FullscreenCanvas {\n    constructor() {\n        this.el = document.createElement(\"canvas\");\n    }\n    makeFullscreen() {\n        const can = this.el;\n        can.width = window.innerWidth;\n        can.height = window.innerHeight;\n    }\n    makeAlwaysFullscreen() {\n        this.makeFullscreen();\n        window.addEventListener('resize', () => {\n            this.makeFullscreen();\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZnVsbHNjcmVlbi1jYW52YXMvZnVsbHNjcmVlbi1jYW52YXMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZnVsbHNjcmVlbi1jYW52YXMvZnVsbHNjcmVlbi1jYW52YXMuanM/MTZkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bGxzY3JlZW5DYW52YXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICB9XG4gICAgbWFrZUZ1bGxzY3JlZW4oKSB7XG4gICAgICAgIGNvbnN0IGNhbiA9IHRoaXMuZWw7XG4gICAgICAgIGNhbi53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBjYW4uaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIH1cbiAgICBtYWtlQWx3YXlzRnVsbHNjcmVlbigpIHtcbiAgICAgICAgdGhpcy5tYWtlRnVsbHNjcmVlbigpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tYWtlRnVsbHNjcmVlbigpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/fullscreen-canvas/fullscreen-canvas.js\n");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fullscreen_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fullscreen-canvas */ \"./node_modules/fullscreen-canvas/fullscreen-canvas.js\");\n\n\nconst fscan = new fullscreen_canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst can = fscan.el;\nconst ctx = can.getContext(\"2d\");\ndocument.body.appendChild(fscan.el);\nfscan.makeAlwaysFullscreen();\n\nfunction go() {\n    ctx.beginPath();\n    ctx.moveTo(0, 0);\n    ctx.lineTo(can.width, can.height);\n    ctx.moveTo(can.width, 0);\n    ctx.lineTo(0, can.height);\n    ctx.stroke();\n    requestAnimationFrame(go);\n}\n\nrequestAnimationFrame(go);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZ1bGxzY3JlZW5DYW52YXMgZnJvbSBcImZ1bGxzY3JlZW4tY2FudmFzXCI7XG5cbmNvbnN0IGZzY2FuID0gbmV3IEZ1bGxzY3JlZW5DYW52YXMoKTtcbmNvbnN0IGNhbiA9IGZzY2FuLmVsO1xuY29uc3QgY3R4ID0gY2FuLmdldENvbnRleHQoXCIyZFwiKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZnNjYW4uZWwpO1xuZnNjYW4ubWFrZUFsd2F5c0Z1bGxzY3JlZW4oKTtcblxuZnVuY3Rpb24gZ28oKSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oMCwgMCk7XG4gICAgY3R4LmxpbmVUbyhjYW4ud2lkdGgsIGNhbi5oZWlnaHQpO1xuICAgIGN0eC5tb3ZlVG8oY2FuLndpZHRoLCAwKTtcbiAgICBjdHgubGluZVRvKDAsIGNhbi5oZWlnaHQpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ28pO1xufVxuXG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ28pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

/******/ });