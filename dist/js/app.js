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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_mediaQueries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/mediaQueries */ \"./src/js/functions/mediaQueries.js\");\n\nvar hamburgerButton = document.getElementById('hamburger-button');\nvar mainMenu = document.getElementById('main-menu');\nhamburgerButton.addEventListener('click', function () {\n  if (!_functions_mediaQueries__WEBPACK_IMPORTED_MODULE_0__[\"default\"].lg.matches) {\n    console.log(this);\n    this.classList.toggle('is-active');\n    mainMenu.classList.toggle('is-active');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzPzkwZTkiXSwibmFtZXMiOlsiaGFtYnVyZ2VyQnV0dG9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1haW5NZW51IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1RIiwibGciLCJtYXRjaGVzIiwiY29uc29sZSIsImxvZyIsImNsYXNzTGlzdCIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsZUFBZSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isa0JBQXhCLENBQXhCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBakI7QUFFQUYsZUFBZSxDQUFDSSxnQkFBaEIsQ0FBaUMsT0FBakMsRUFBMEMsWUFBWTtBQUNsRCxNQUFHLENBQUNDLCtEQUFFLENBQUNDLEVBQUgsQ0FBTUMsT0FBVixFQUFtQjtBQUNmQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaO0FBQ0EsU0FBS0MsU0FBTCxDQUFlQyxNQUFmLENBQXNCLFdBQXRCO0FBQ0FSLFlBQVEsQ0FBQ08sU0FBVCxDQUFtQkMsTUFBbkIsQ0FBMEIsV0FBMUI7QUFDSDtBQUNKLENBTkQiLCJmaWxlIjoiLi9zcmMvanMvYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1RIGZyb20gJy4vZnVuY3Rpb25zL21lZGlhUXVlcmllcyc7XG5cbmNvbnN0IGhhbWJ1cmdlckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYW1idXJnZXItYnV0dG9uJyk7XG5jb25zdCBtYWluTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLW1lbnUnKTtcblxuaGFtYnVyZ2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmKCFtUS5sZy5tYXRjaGVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICAgICAgICBtYWluTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICB9XG59KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ "./src/js/functions/mediaQueries.js":
/*!******************************************!*\
  !*** ./src/js/functions/mediaQueries.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar mediaQueries = {\n  xs: window.matchMedia(\"(min-width: 360px)\"),\n  sm: window.matchMedia(\"(min-width: 576)\"),\n  md: window.matchMedia(\"(min-width: 768px)\"),\n  lg: window.matchMedia(\"(min-width: 992px)\"),\n  xl: window.matchMedia(\"(min-width: 1200px)\")\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (mediaQueries);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvZnVuY3Rpb25zL21lZGlhUXVlcmllcy5qcz82MmUxIl0sIm5hbWVzIjpbIm1lZGlhUXVlcmllcyIsInhzIiwid2luZG93IiwibWF0Y2hNZWRpYSIsInNtIiwibWQiLCJsZyIsInhsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLElBQU1BLFlBQVksR0FBRztBQUNqQkMsSUFBRSxFQUFFQyxNQUFNLENBQUNDLFVBQVAsQ0FBa0Isb0JBQWxCLENBRGE7QUFFakJDLElBQUUsRUFBRUYsTUFBTSxDQUFDQyxVQUFQLENBQWtCLGtCQUFsQixDQUZhO0FBR2pCRSxJQUFFLEVBQUVILE1BQU0sQ0FBQ0MsVUFBUCxDQUFrQixvQkFBbEIsQ0FIYTtBQUlqQkcsSUFBRSxFQUFFSixNQUFNLENBQUNDLFVBQVAsQ0FBa0Isb0JBQWxCLENBSmE7QUFLakJJLElBQUUsRUFBRUwsTUFBTSxDQUFDQyxVQUFQLENBQWtCLHFCQUFsQjtBQUxhLENBQXJCO0FBUWVILDJFQUFmIiwiZmlsZSI6Ii4vc3JjL2pzL2Z1bmN0aW9ucy9tZWRpYVF1ZXJpZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtZWRpYVF1ZXJpZXMgPSB7XG4gICAgeHM6IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogMzYwcHgpXCIpLFxuICAgIHNtOiB3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDU3NilcIiksXG4gICAgbWQ6IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogNzY4cHgpXCIpLFxuICAgIGxnOiB3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDk5MnB4KVwiKSxcbiAgICB4bDogd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiAxMjAwcHgpXCIpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZWRpYVF1ZXJpZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/functions/mediaQueries.js\n");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzcz83MDY5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vc3JjL3Njc3Mvc3R5bGVzLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scss/styles.scss\n");

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi ./src/js/app.js ./src/scss/styles.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/nzou/Documents/sfmc-custom-modules/src/js/app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! /Users/nzou/Documents/sfmc-custom-modules/src/scss/styles.scss */"./src/scss/styles.scss");


/***/ })

/******/ });