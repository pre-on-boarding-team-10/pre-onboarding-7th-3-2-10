"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/accountlist",{

/***/ "./component/TableComponent.tsx":
/*!**************************************!*\
  !*** ./component/TableComponent.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_jeong_eoghwa_Desktop_2_3_2_pre_onboarding_7th_3_2_10_dev_oka7759_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/jeong-eoghwa/Desktop/\\u110B\\u1169\\u11AB\\u1107\\u1169\\u1103\\u1175\\u11BC/2\\u110E\\u1161/3-2/pre-onboarding-7th-3-2-10/dev-oka7759/component/TableComponent.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_Users_jeong_eoghwa_Desktop_2_3_2_pre_onboarding_7th_3_2_10_dev_oka7759_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\nvar columns = [{\n  title: '고객명',\n  dataIndex: 'user_fullname',\n  key: 'user_fullname',\n  render: function render(text) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"a\", {\n      children: text\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 23\n    }, _this);\n  }\n}, {\n  title: '브로커명',\n  dataIndex: 'broker_id',\n  key: 'broker_id'\n}, {\n  title: '계좌번호',\n  dataIndex: 'number',\n  key: 'number'\n}, {\n  title: '계좌상태',\n  key: 'status',\n  dataIndex: 'status'\n}, {\n  title: '계좌명',\n  key: 'name',\n  dataIndex: 'name'\n}, {\n  title: '평가금액',\n  key: 'assets',\n  dataIndex: 'assets'\n}, {\n  title: '입금금액',\n  key: 'payments',\n  dataIndex: 'payments'\n}, {\n  title: '계좌활성화여부',\n  key: 'is_active',\n  dataIndex: 'is_active',\n  render: function render(text) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Tag, {\n      children: [\"`$\", text, \"`\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 23\n    }, _this);\n  }\n}, {\n  title: '계좌계설일',\n  key: 'created_at',\n  dataIndex: 'created_at'\n}];\n\nvar TableComponent = function TableComponent(props) {\n  var buckets = props.buckets,\n      userInfo = props.userInfo;\n  var data = [];\n  buckets.forEach(function (item, idxs) {\n    userInfo.forEach(function (items) {\n      if (item.user_id === items.id) {\n        data.push(_objectSpread({\n          key: idxs,\n          user_fullname: items.name\n        }, item));\n      }\n    });\n  });\n  console.log(data);\n\n  var onChange = function onChange(pagination, filters, sorter, extra) {\n    console.log('params', pagination, filters, sorter, extra);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Table, {\n    columns: columns,\n    dataSource: data,\n    onChange: onChange\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 91,\n    columnNumber: 10\n  }, _this);\n};\n\n_c = TableComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableComponent);\n\nvar _c;\n\n$RefreshReg$(_c, \"TableComponent\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBTWhCO0FBb0JOLCtEQUFlQSxjQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9UYWJsZUNvbXBvbmVudC50c3g/NDU0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWJsZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHR5cGUgeyBDb2x1bW5zVHlwZSwgVGFibGVQcm9wcyB9IGZyb20gJ2FudGQvZXMvdGFibGUnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIERhdGFUeXBlIHtcbiAga2V5OiBudW1iZXI7XG4gIHVzZXJfZnVsbG5hbWU6IHN0cmluZztcbiAgdXNlcl9uYW1lOiBzdHJpbmc7XG4gIGJyb2tlcl9uYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogc3RyaW5nO1xuICBzdGF0dXM6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBhc3NldHM6IHN0cmluZztcbiAgcGF5bWVudHM6IHN0cmluZztcbiAgaXNfYWN0aXZlOiBib29sZWFuO1xuICBjcmVhdGVkX2F0OiBzdHJpbmc7XG59XG5cbmNvbnN0IGNvbHVtbnM6IENvbHVtbnNUeXBlPERhdGFUeXBlPiA9IFtcbiAge1xuICAgIHRpdGxlOiAn6rOg6rCd66qFJyxcbiAgICBkYXRhSW5kZXg6ICd1c2VyX2Z1bGxuYW1lJyxcbiAgICBrZXk6ICd1c2VyX2Z1bGxuYW1lJyxcbiAgICByZW5kZXI6ICh0ZXh0KSA9PiA8YT57dGV4dH08L2E+LFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICfruIzroZzsu6TrqoUnLFxuICAgIGRhdGFJbmRleDogJ2Jyb2tlcl9pZCcsXG4gICAga2V5OiAnYnJva2VyX2lkJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn6rOE7KKM67KI7Zi4JyxcbiAgICBkYXRhSW5kZXg6ICdudW1iZXInLFxuICAgIGtleTogJ251bWJlcicsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ+qzhOyijOyDge2DnCcsXG4gICAga2V5OiAnc3RhdHVzJyxcbiAgICBkYXRhSW5kZXg6ICdzdGF0dXMnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICfqs4TsoozrqoUnLFxuICAgIGtleTogJ25hbWUnLFxuICAgIGRhdGFJbmRleDogJ25hbWUnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICftj4nqsIDquIjslaEnLFxuICAgIGtleTogJ2Fzc2V0cycsXG4gICAgZGF0YUluZGV4OiAnYXNzZXRzJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn7J6F6riI6riI7JWhJyxcbiAgICBrZXk6ICdwYXltZW50cycsXG4gICAgZGF0YUluZGV4OiAncGF5bWVudHMnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICfqs4TsooztmZzshLHtmZTsl6zrtoAnLFxuICAgIGtleTogJ2lzX2FjdGl2ZScsXG4gICAgZGF0YUluZGV4OiAnaXNfYWN0aXZlJyxcbiAgICByZW5kZXI6ICh0ZXh0KSA9PiA8VGFnPmAke3RleHR9YDwvVGFnPixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn6rOE7KKM6rOE7ISk7J28JyxcbiAgICBrZXk6ICdjcmVhdGVkX2F0JyxcbiAgICBkYXRhSW5kZXg6ICdjcmVhdGVkX2F0JyxcbiAgfSxcbl07XG5cbmludGVyZmFjZSBMaXN0UHJvcHMge1xuICBidWNrZXRzOiBbXTtcbiAgdXNlckluZm86IFtdO1xufVxuXG5jb25zdCBUYWJsZUNvbXBvbmVudCA9IChwcm9wczogTGlzdFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcbiAgY29uc3QgeyBidWNrZXRzLCB1c2VySW5mbyB9ID0gcHJvcHM7XG5cbiAgY29uc3QgZGF0YTogRGF0YVR5cGVbXSA9IFtdO1xuICBidWNrZXRzLmZvckVhY2goKGl0ZW06IHt9LCBpZHhzOiBudW1iZXIpID0+IHtcbiAgICB1c2VySW5mby5mb3JFYWNoKChpdGVtczoge30pID0+IHtcbiAgICAgIGlmIChpdGVtLnVzZXJfaWQgPT09IGl0ZW1zLmlkKSB7XG4gICAgICAgIGRhdGEucHVzaCh7IGtleTogaWR4cywgdXNlcl9mdWxsbmFtZTogaXRlbXMubmFtZSwgLi4uaXRlbSB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIGNvbnN0IG9uQ2hhbmdlOiBUYWJsZVByb3BzPERhdGFUeXBlPlsnb25DaGFuZ2UnXSA9IChwYWdpbmF0aW9uLCBmaWx0ZXJzLCBzb3J0ZXIsIGV4dHJhKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3BhcmFtcycsIHBhZ2luYXRpb24sIGZpbHRlcnMsIHNvcnRlciwgZXh0cmEpO1xuICB9O1xuXG4gIHJldHVybiA8VGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YVNvdXJjZT17ZGF0YX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbIlRhYmxlIiwiUmVhY3QiLCJjb2x1bW5zIiwidGl0bGUiLCJkYXRhSW5kZXgiLCJrZXkiLCJyZW5kZXIiLCJ0ZXh0IiwiVGFibGVDb21wb25lbnQiLCJwcm9wcyIsImJ1Y2tldHMiLCJ1c2VySW5mbyIsImRhdGEiLCJmb3JFYWNoIiwiaXRlbSIsImlkeHMiLCJpdGVtcyIsInVzZXJfaWQiLCJpZCIsInB1c2giLCJ1c2VyX2Z1bGxuYW1lIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZSIsInBhZ2luYXRpb24iLCJmaWx0ZXJzIiwic29ydGVyIiwiZXh0cmEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/TableComponent.tsx\n"));

/***/ })

});