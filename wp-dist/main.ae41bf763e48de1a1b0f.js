/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/ChooseLanguage/ChooseLanguage.tsx":
/*!**********************************************************!*\
  !*** ./src/components/ChooseLanguage/ChooseLanguage.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useAppDispatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useAppDispatch */ "./src/hooks/useAppDispatch.ts");
/* harmony import */ var _store_reducers_commonSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/reducers/commonSlice */ "./src/store/reducers/commonSlice.ts");
/* harmony import */ var _constants_CONST__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/CONST */ "./src/constants/CONST.ts");
/* harmony import */ var _UI_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UI/Button/Button */ "./src/components/UI/Button/Button.tsx");
/* harmony import */ var _styles_mainStyles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/mainStyles.module.scss */ "./src/styles/mainStyles.module.scss");
/* harmony import */ var _ChooseLanguage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChooseLanguage.module.scss */ "./src/components/ChooseLanguage/ChooseLanguage.module.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var CLOSE_BUTTON_STYLE = _styles_mainStyles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].chooseLanguage__button + " " + _ChooseLanguage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].chooseLanguage__closeButton;
var CHOICE_BUTTON_STYLE = _styles_mainStyles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].button + " " + _ChooseLanguage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].chooseLanguage__choice__button;
var RU_NAME = _constants_CONST__WEBPACK_IMPORTED_MODULE_3__.LANGUAGE.RU.LANGUAGE_NAME;
var EN_NAME = _constants_CONST__WEBPACK_IMPORTED_MODULE_3__.LANGUAGE.EN.LANGUAGE_NAME;
var ChooseLanguage = function ChooseLanguage() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    appear = _useState2[0],
    setAppear = _useState2[1];
  var dispatch = (0,_hooks_useAppDispatch__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setAppear(_styles_mainStyles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].appear);
    return function () {
      setAppear("");
    };
  }, []);
  var onChoice = function onChoice(langType) {
    dispatch((0,_store_reducers_commonSlice__WEBPACK_IMPORTED_MODULE_2__.setLanguage)({
      data: langType
    }));
  };

  // prettier-ignore
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ChooseLanguage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].chooseLanguage + " " + appear
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _ChooseLanguage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].chooseLanguage__header
  }, "\uD83D\uDCAD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ChooseLanguage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].chooseLanguage__choice
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: CHOICE_BUTTON_STYLE,
    onClick: function onClick() {
      onChoice(_constants_CONST__WEBPACK_IMPORTED_MODULE_3__.EN_CODE);
    }
  }, EN_NAME), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: CHOICE_BUTTON_STYLE,
    onClick: function onClick() {
      onChoice(_constants_CONST__WEBPACK_IMPORTED_MODULE_3__.RU_CODE);
    }
  }, RU_NAME)));
};
/* harmony default export */ __webpack_exports__["default"] = (ChooseLanguage);

/***/ }),

/***/ "./src/components/ChooseTheme/ChooseTheme.tsx":
/*!****************************************************!*\
  !*** ./src/components/ChooseTheme/ChooseTheme.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI_Button_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UI/Button/Button */ "./src/components/UI/Button/Button.tsx");
/* harmony import */ var _constants_CONST__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/CONST */ "./src/constants/CONST.ts");
/* harmony import */ var _hooks_useAppDispatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useAppDispatch */ "./src/hooks/useAppDispatch.ts");
/* harmony import */ var _hooks_useAppSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useAppSelector */ "./src/hooks/useAppSelector.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_HaikuOracleService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/HaikuOracleService */ "./src/services/HaikuOracleService.ts");
/* harmony import */ var _store_reducers_commonSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/reducers/commonSlice */ "./src/store/reducers/commonSlice.ts");
/* harmony import */ var _ChooseTheme_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ChooseTheme.module.scss */ "./src/components/ChooseTheme/ChooseTheme.module.scss");
/* harmony import */ var _styles_mainStyles_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/mainStyles.module.scss */ "./src/styles/mainStyles.module.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var ChooseTheme = function ChooseTheme() {
  var dispatch = (0,_hooks_useAppDispatch__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();
  var theme = (0,_hooks_useAppSelector__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(function (state) {
    return state.common.theme;
  });
  var language = (0,_hooks_useAppSelector__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(function (state) {
    return state.common.language;
  });
  var getHaiku = (0,_services_HaikuOracleService__WEBPACK_IMPORTED_MODULE_5__.useGetHaikuQuery)(theme);
  var _useLazyGetHaikuQuery = (0,_services_HaikuOracleService__WEBPACK_IMPORTED_MODULE_5__.useLazyGetHaikuQuery)(),
    _useLazyGetHaikuQuery2 = _slicedToArray(_useLazyGetHaikuQuery, 1),
    lazyGetHaiku = _useLazyGetHaikuQuery2[0];

  // @ts-ignore
  language = language.toUpperCase();
  // @ts-ignore
  var _LANGUAGE$language = _constants_CONST__WEBPACK_IMPORTED_MODULE_1__.LANGUAGE[language],
    CHOOSE_THEME = _LANGUAGE$language.CHOOSE_THEME,
    THEME_1 = _LANGUAGE$language.THEME_1,
    THEME_2 = _LANGUAGE$language.THEME_2,
    THEME_3 = _LANGUAGE$language.THEME_3;
  var keepLang = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(language);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    appear = _useState2[0],
    setAppear = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (appear === "" && keepLang.current !== language) {
      setAppear(_styles_mainStyles_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].appear);
      keepLang.current = language;
    }
  }, [language]);
  var onChoice = function onChoice(theme) {
    dispatch((0,_store_reducers_commonSlice__WEBPACK_IMPORTED_MODULE_6__.setTheme)({
      data: theme
    }));
    lazyGetHaiku(theme).unwrap().then(function (res) {
      var haikuBody = res.responseBody;
      dispatch((0,_store_reducers_commonSlice__WEBPACK_IMPORTED_MODULE_6__.setHaikuText)({
        data: haikuBody
      }));
    }).catch(function (rejected) {
      return console.error(rejected);
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: _ChooseTheme_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].chooseTheme + " " + appear
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", null, CHOOSE_THEME), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: _ChooseTheme_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].chooseTheme__choice
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_0__["default"], {
    className: _ChooseTheme_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].chooseTheme__choice__button,
    onClick: function onClick() {
      onChoice(_constants_CONST__WEBPACK_IMPORTED_MODULE_1__.THEME_1_CODE);
    }
  }, THEME_1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_0__["default"], {
    className: _ChooseTheme_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].chooseTheme__choice__button,
    onClick: function onClick() {
      onChoice(_constants_CONST__WEBPACK_IMPORTED_MODULE_1__.THEME_2_CODE);
    }
  }, THEME_2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_0__["default"], {
    className: _ChooseTheme_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].chooseTheme__choice__button,
    onClick: function onClick() {
      onChoice(_constants_CONST__WEBPACK_IMPORTED_MODULE_1__.THEME_3_CODE);
    }
  }, THEME_3)));
};
/* harmony default export */ __webpack_exports__["default"] = (ChooseTheme);

/***/ }),

/***/ "./src/components/HaikuItem/HaikuItem.tsx":
/*!************************************************!*\
  !*** ./src/components/HaikuItem/HaikuItem.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useAppSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useAppSelector */ "./src/hooks/useAppSelector.ts");
/* harmony import */ var _HaikuItem_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HaikuItem.module.scss */ "./src/components/HaikuItem/HaikuItem.module.scss");
/* harmony import */ var _styles_mainStyles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/mainStyles.module.scss */ "./src/styles/mainStyles.module.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var HaikuItem = function HaikuItem() {
  var haikuText = (0,_hooks_useAppSelector__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)(function (state) {
    return state.common.haikuText;
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    appear = _useState2[0],
    setAppear = _useState2[1];
  var keepHaiku = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)("");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (appear === "" && keepHaiku.current !== haikuText) {
      setAppear(_styles_mainStyles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].appear);
    }
  }, [haikuText]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HaikuItem_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].haikuItem + " " + appear
  }, haikuText);
};
/* harmony default export */ __webpack_exports__["default"] = (HaikuItem);

/***/ }),

/***/ "./src/components/MainComponent/MainComponent.tsx":
/*!********************************************************!*\
  !*** ./src/components/MainComponent/MainComponent.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChooseLanguage_ChooseLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ChooseLanguage/ChooseLanguage */ "./src/components/ChooseLanguage/ChooseLanguage.tsx");
/* harmony import */ var _ChooseTheme_ChooseTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ChooseTheme/ChooseTheme */ "./src/components/ChooseTheme/ChooseTheme.tsx");
/* harmony import */ var _HaikuItem_HaikuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../HaikuItem/HaikuItem */ "./src/components/HaikuItem/HaikuItem.tsx");
/* harmony import */ var _hooks_useTelegram__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useTelegram */ "./src/hooks/useTelegram.ts");
/* harmony import */ var _MainComponent_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MainComponent.module.scss */ "./src/components/MainComponent/MainComponent.module.scss");






var MainComponent = function MainComponent() {
  var _useTelegram = (0,_hooks_useTelegram__WEBPACK_IMPORTED_MODULE_4__.useTelegram)(),
    tg = _useTelegram.tg;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    tg.ready();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _MainComponent_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].mainComponent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _MainComponent_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].mainComponent__content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ChooseLanguage_ChooseLanguage__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ChooseTheme_ChooseTheme__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HaikuItem_HaikuItem__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
};
/* harmony default export */ __webpack_exports__["default"] = (MainComponent);

/***/ }),

/***/ "./src/components/UI/Button/Button.tsx":
/*!*********************************************!*\
  !*** ./src/components/UI/Button/Button.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.module.scss */ "./src/components/UI/Button/Button.module.scss");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var Button = function Button(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({}, props, {
    className: _Button_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button + " " + props.className
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/constants/CONST.ts":
/*!********************************!*\
  !*** ./src/constants/CONST.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": function() { return /* binding */ API_URL; },
/* harmony export */   "EN_CODE": function() { return /* binding */ EN_CODE; },
/* harmony export */   "LANGUAGE": function() { return /* binding */ LANGUAGE; },
/* harmony export */   "RU_CODE": function() { return /* binding */ RU_CODE; },
/* harmony export */   "THEME_1_CODE": function() { return /* binding */ THEME_1_CODE; },
/* harmony export */   "THEME_2_CODE": function() { return /* binding */ THEME_2_CODE; },
/* harmony export */   "THEME_3_CODE": function() { return /* binding */ THEME_3_CODE; }
/* harmony export */ });
var EN = {
  LANGUAGE_NAME: "English",
  CHOOSE_THEME: "Choose the theme",
  THEME_1: "Eternity",
  THEME_2: "Love",
  THEME_3: "Freedom"
};
var LANGUAGE = {
  EN: EN,
  RU: {
    LANGUAGE_NAME: "Русский",
    CHOOSE_THEME: "Выберите тему",
    THEME_1: "Вечность",
    THEME_2: "Любовь",
    THEME_3: "Свобода"
  },
  DEFAULT: EN
};
var EN_CODE = "en";
var RU_CODE = "ru";
var THEME_1_CODE = "eternity";
var THEME_2_CODE = "love";
var THEME_3_CODE = "freedom";
var API_URL = "http://localhost:3001";

/***/ }),

/***/ "./src/hooks/useAppDispatch.ts":
/*!*************************************!*\
  !*** ./src/hooks/useAppDispatch.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAppDispatch": function() { return /* binding */ useAppDispatch; }
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

// Use throughout your app instead of plain `useDispatch` and `useSelector`
var useAppDispatch = react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch;

/***/ }),

/***/ "./src/hooks/useAppSelector.ts":
/*!*************************************!*\
  !*** ./src/hooks/useAppSelector.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAppSelector": function() { return /* binding */ useAppSelector; }
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

// Use throughout your app instead of plain `useDispatch` and `useSelector`
var useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;

/***/ }),

/***/ "./src/hooks/useTelegram.ts":
/*!**********************************!*\
  !*** ./src/hooks/useTelegram.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTelegram": function() { return /* binding */ useTelegram; }
/* harmony export */ });
// @ts-ignore
var tg = window.Telegram.WebApp;
function useTelegram() {
  var onClose = function onClose() {
    tg.close();
  };
  return {
    tg: tg,
    onClose: onClose
  };
}

/***/ }),

/***/ "./src/services/HaikuOracleService.ts":
/*!********************************************!*\
  !*** ./src/services/HaikuOracleService.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHaiku": function() { return /* binding */ getHaiku; },
/* harmony export */   "haikuAPI": function() { return /* binding */ haikuAPI; },
/* harmony export */   "useGetHaikuQuery": function() { return /* binding */ useGetHaikuQuery; },
/* harmony export */   "useLazyGetHaikuQuery": function() { return /* binding */ useLazyGetHaikuQuery; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ "./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js");
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ "./node_modules/@reduxjs/toolkit/dist/query/rtk-query.esm.js");
/* harmony import */ var _constants_CONST__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/CONST */ "./src/constants/CONST.ts");


var haikuAPI = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.createApi)({
  reducerPath: "haikuAPI",
  baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__.fetchBaseQuery)({
    baseUrl: _constants_CONST__WEBPACK_IMPORTED_MODULE_0__.API_URL
  }),
  endpoints: function endpoints(builder) {
    return {
      getHaiku: builder.query({
        query: function query(theme) {
          return "haiku/".concat(theme);
        }
      })
    };
  }
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
var useGetHaikuQuery = haikuAPI.useGetHaikuQuery,
  useLazyGetHaikuQuery = haikuAPI.useLazyGetHaikuQuery;

var getHaiku = haikuAPI.endpoints.getHaiku;


/***/ }),

/***/ "./src/store/reducers/commonSlice.ts":
/*!*******************************************!*\
  !*** ./src/store/reducers/commonSlice.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "commonReducer": function() { return /* binding */ commonReducer; },
/* harmony export */   "commonSlice": function() { return /* binding */ commonSlice; },
/* harmony export */   "setHaikuText": function() { return /* binding */ setHaikuText; },
/* harmony export */   "setLanguage": function() { return /* binding */ setLanguage; },
/* harmony export */   "setTheme": function() { return /* binding */ setTheme; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

var initialState = {
  language: "DEFAULT",
  theme: "DEFAULT",
  haikuText: ""
};
var commonSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "commonSlice",
  initialState: initialState,
  reducers: {
    setLanguage: function setLanguage(state, action) {
      state.language = action.payload.data;
    },
    setTheme: function setTheme(state, action) {
      state.theme = action.payload.data;
    },
    setHaikuText: function setHaikuText(state, action) {
      state.haikuText = action.payload.data;
    }
  }
});
var _commonSlice$actions = commonSlice.actions,
  setLanguage = _commonSlice$actions.setLanguage,
  setTheme = _commonSlice$actions.setTheme,
  setHaikuText = _commonSlice$actions.setHaikuText;

var commonReducer = commonSlice.reducer;

/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": function() { return /* binding */ store; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit/query */ "./node_modules/@reduxjs/toolkit/dist/query/rtk-query.esm.js");
/* harmony import */ var _reducers_commonSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/commonSlice */ "./src/store/reducers/commonSlice.ts");
/* harmony import */ var _services_HaikuOracleService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/HaikuOracleService */ "./src/services/HaikuOracleService.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var initialState = {};
var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.configureStore)({
  reducer: _defineProperty({
    common: _reducers_commonSlice__WEBPACK_IMPORTED_MODULE_0__.commonReducer
  }, _services_HaikuOracleService__WEBPACK_IMPORTED_MODULE_1__.haikuAPI.reducerPath, _services_HaikuOracleService__WEBPACK_IMPORTED_MODULE_1__.haikuAPI.reducer),
  preloadedState: {},
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(_services_HaikuOracleService__WEBPACK_IMPORTED_MODULE_1__.haikuAPI.middleware);
  },
  devTools: "development" !== "production"
});
(0,_reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_3__.setupListeners)(store.dispatch);

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MainComponent_MainComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MainComponent/MainComponent */ "./src/components/MainComponent/MainComponent.tsx");
/* harmony import */ var _styles_mainStyles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/mainStyles.module.scss */ "./src/styles/mainStyles.module.scss");



function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_mainStyles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].app
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_MainComponent_MainComponent__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/store */ "./src/store/store.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
  store: _store_store__WEBPACK_IMPORTED_MODULE_3__.store
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null))));

/***/ }),

/***/ "./src/components/ChooseLanguage/ChooseLanguage.module.scss":
/*!******************************************************************!*\
  !*** ./src/components/ChooseLanguage/ChooseLanguage.module.scss ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"appear":"wd8p7xcVVhjqtdbW6WTn","chooseLanguage":"idFVpHA_uEPKNa4ingTN","chooseLanguage__header":"Hykqc6xhvF8F3JZ2rDHR","chooseLanguage__choice":"sViBqL9whgYfdgrKDCAl","chooseLanguage__choice__button":"c92D4XLu_v6gWjXxeK9_"});

/***/ }),

/***/ "./src/components/ChooseTheme/ChooseTheme.module.scss":
/*!************************************************************!*\
  !*** ./src/components/ChooseTheme/ChooseTheme.module.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"appear":"AHn4Kpn3SOgOGkp3WY1q","chooseTheme":"rNSxjjtZao0rkP0ISD8r","chooseTheme__choice":"lWUdeDJOkwUjg0xiHs6g","chooseTheme__choice__button":"Eojn6lk9yBZFoxD3C67D"});

/***/ }),

/***/ "./src/components/HaikuItem/HaikuItem.module.scss":
/*!********************************************************!*\
  !*** ./src/components/HaikuItem/HaikuItem.module.scss ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"appear":"ETj_5UueqwImD8xdAch9","haikuItem":"aWtvztgr5JMB3yOxWfa0"});

/***/ }),

/***/ "./src/components/MainComponent/MainComponent.module.scss":
/*!****************************************************************!*\
  !*** ./src/components/MainComponent/MainComponent.module.scss ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"mainComponent":"ktP9eSRGU7U1HtEwW2vd"});

/***/ }),

/***/ "./src/components/UI/Button/Button.module.scss":
/*!*****************************************************!*\
  !*** ./src/components/UI/Button/Button.module.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"button":"WTsBDLCOKo9YUGHVtMxw"});

/***/ }),

/***/ "./src/styles/mainStyles.module.scss":
/*!*******************************************!*\
  !*** ./src/styles/mainStyles.module.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"appear":"Hw7eQUH4a791VkfINKFs"});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhaiku_oracle"] = self["webpackChunkhaiku_oracle"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_reduxjs_toolkit_dist_query_react_rtk-query-react_esm_js-node_modules_rea-69d4d8"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;