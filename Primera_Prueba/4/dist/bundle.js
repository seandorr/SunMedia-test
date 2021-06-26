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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Event.js":
/*!**********************!*\
  !*** ./src/Event.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction _instanceof(left, right) { if (right != null && typeof Symbol !== \"undefined\" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Event =\n/*#__PURE__*/\nfunction () {\n  function Event(second, type, message) {\n    _classCallCheck(this, Event);\n\n    this.second = second;\n    this.type = type;\n    this.message = message;\n  }\n\n  _createClass(Event, [{\n    key: \"logMessage\",\n    value: function logMessage() {\n      var _this = this;\n\n      setTimeout(function () {\n        console.log(\"> At second \".concat(_this.second), {\n          type: _this.type,\n          message: _this.message\n        });\n      }, this.second * 1000);\n    }\n  }]);\n\n  return Event;\n}();\n\nexports.default = Event;\n;\n\n//# sourceURL=webpack:///./src/Event.js?");

/***/ }),

/***/ "./src/EventManager.js":
/*!*****************************!*\
  !*** ./src/EventManager.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction _instanceof(left, right) { if (right != null && typeof Symbol !== \"undefined\" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar EventManager =\n/*#__PURE__*/\nfunction () {\n  function EventManager(filteredEvents) {\n    _classCallCheck(this, EventManager);\n\n    this.filteredEvents = filteredEvents;\n  }\n\n  _createClass(EventManager, [{\n    key: \"run\",\n    value: function run() {\n      this.filteredEvents.map(function (event) {\n        event.logMessage();\n      });\n    }\n  }]);\n\n  return EventManager;\n}();\n\nexports.default = EventManager;\n;\n\n//# sourceURL=webpack:///./src/EventManager.js?");

/***/ }),

/***/ "./src/EventManagerFactory.js":
/*!************************************!*\
  !*** ./src/EventManagerFactory.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _EventManager = _interopRequireDefault(__webpack_require__(/*! ./EventManager */ \"./src/EventManager.js\"));\n\nvar _Event = _interopRequireDefault(__webpack_require__(/*! ./Event */ \"./src/Event.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _instanceof(left, right) { if (right != null && typeof Symbol !== \"undefined\" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar EventManagerFactory =\n/*#__PURE__*/\nfunction () {\n  function EventManagerFactory() {\n    _classCallCheck(this, EventManagerFactory);\n  }\n\n  _createClass(EventManagerFactory, null, [{\n    key: \"create\",\n    value: function create(events, types) {\n      var filteredEvents = events.filter(function (event) {\n        return types.includes(event.type);\n      }).map(function (event) {\n        var second = event.second,\n            type = event.type,\n            message = event.message;\n        return new _Event.default(second, type, message);\n      });\n      return new _EventManager.default(filteredEvents);\n    }\n  }]);\n\n  return EventManagerFactory;\n}();\n\nexports.default = EventManagerFactory;\n;\n\n//# sourceURL=webpack:///./src/EventManagerFactory.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _EventManagerFactory = _interopRequireDefault(__webpack_require__(/*! ./EventManagerFactory */ \"./src/EventManagerFactory.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar xhttp = new XMLHttpRequest();\n\nvar onReadyStateChange = function onReadyStateChange(onSuccess) {\n  return function () {\n    if (this.readyState === 4 && this.status === 200) {\n      var response = JSON.parse(xhttp.responseText);\n      onSuccess(response);\n    }\n  };\n};\n\nvar onSuccess = function onSuccess(response) {\n  var eventManager = _EventManagerFactory.default.create(response.events, response.types);\n\n  eventManager.run();\n};\n\nxhttp.onreadystatechange = onReadyStateChange(onSuccess);\nxhttp.open(\"GET\", \"https://gist.githubusercontent.com/sunmedia-tv/60036547f107d748386d46f7afb498c0/raw/3b6722589df7cbbff02fd827beca3c05de3d41a6/test.json\", true);\nxhttp.send();\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });