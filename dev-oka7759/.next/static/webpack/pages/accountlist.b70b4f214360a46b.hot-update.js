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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_jeong_eoghwa_Desktop_2_3_2_pre_onboarding_7th_3_2_10_dev_oka7759_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/jeong-eoghwa/Desktop/\\u110B\\u1169\\u11AB\\u1107\\u1169\\u1103\\u1175\\u11BC/2\\u110E\\u1161/3-2/pre-onboarding-7th-3-2-10/dev-oka7759/component/TableComponent.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_Users_jeong_eoghwa_Desktop_2_3_2_pre_onboarding_7th_3_2_10_dev_oka7759_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\nvar columns = [{\n  title: '고객명',\n  dataIndex: 'user_fullname',\n  key: 'user_fullname',\n  render: function render(text) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"a\", {\n      children: text\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 23\n    }, _this);\n  }\n}, {\n  title: '브로커명',\n  dataIndex: 'broker_id',\n  key: 'broker_id'\n}, {\n  title: '계좌번호',\n  dataIndex: 'number',\n  key: 'number'\n}, {\n  title: '계좌상태',\n  key: 'status',\n  dataIndex: 'status'\n}, {\n  title: '계좌명',\n  key: 'name',\n  dataIndex: 'name'\n}, {\n  title: '평가금액',\n  key: 'assets',\n  dataIndex: 'assets'\n}, {\n  title: '입금금액',\n  key: 'payments',\n  dataIndex: 'payments'\n}, {\n  title: '계좌활성화여부',\n  key: 'is_active',\n  dataIndex: 'is_active',\n  render: function render(text) {\n    /*#__PURE__*/\n    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Tag, {\n      color: \"green\",\n      children: text\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, _this);\n  }\n}, {\n  title: '계좌계설일',\n  key: 'created_at',\n  dataIndex: 'created_at'\n}];\n\nvar TableComponent = function TableComponent(props) {\n  var buckets = props.buckets,\n      userInfo = props.userInfo;\n  var data = [];\n  buckets.forEach(function (item, idxs) {\n    userInfo.forEach(function (items) {\n      if (item.user_id === items.id) {\n        data.push(_objectSpread({\n          key: idxs,\n          user_fullname: items.name\n        }, item));\n      }\n    });\n  });\n  console.log(data);\n\n  var onChange = function onChange(pagination, filters, sorter, extra) {\n    console.log('params', pagination, filters, sorter, extra);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Table, {\n    columns: columns,\n    dataSource: data,\n    onChange: onChange\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 93,\n    columnNumber: 10\n  }, _this);\n};\n\n_c = TableComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableComponent);\n\nvar _c;\n\n$RefreshReg$(_c, \"TableComponent\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUDtBQUNELENBbEJEOztLQUFNaEI7QUFvQk4sK0RBQWVBLGNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1RhYmxlQ29tcG9uZW50LnRzeD80NTQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYmxlLCBUYWcgfSBmcm9tICdhbnRkJztcbmltcG9ydCB0eXBlIHsgQ29sdW1uc1R5cGUsIFRhYmxlUHJvcHMgfSBmcm9tICdhbnRkL2VzL3RhYmxlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBEYXRhVHlwZSB7XG4gIGtleTogbnVtYmVyO1xuICB1c2VyX2Z1bGxuYW1lOiBzdHJpbmc7XG4gIHVzZXJfbmFtZTogc3RyaW5nO1xuICBicm9rZXJfbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IHN0cmluZztcbiAgc3RhdHVzOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgYXNzZXRzOiBzdHJpbmc7XG4gIHBheW1lbnRzOiBzdHJpbmc7XG4gIGlzX2FjdGl2ZTogYm9vbGVhbjtcbiAgY3JlYXRlZF9hdDogc3RyaW5nO1xufVxuXG5jb25zdCBjb2x1bW5zOiBDb2x1bW5zVHlwZTxEYXRhVHlwZT4gPSBbXG4gIHtcbiAgICB0aXRsZTogJ+qzoOqwneuqhScsXG4gICAgZGF0YUluZGV4OiAndXNlcl9mdWxsbmFtZScsXG4gICAga2V5OiAndXNlcl9mdWxsbmFtZScsXG4gICAgcmVuZGVyOiAodGV4dCkgPT4gPGE+e3RleHR9PC9hPixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn67iM66Gc7Luk66qFJyxcbiAgICBkYXRhSW5kZXg6ICdicm9rZXJfaWQnLFxuICAgIGtleTogJ2Jyb2tlcl9pZCcsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ+qzhOyijOuyiO2YuCcsXG4gICAgZGF0YUluZGV4OiAnbnVtYmVyJyxcbiAgICBrZXk6ICdudW1iZXInLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICfqs4Tsoozsg4Htg5wnLFxuICAgIGtleTogJ3N0YXR1cycsXG4gICAgZGF0YUluZGV4OiAnc3RhdHVzJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn6rOE7KKM66qFJyxcbiAgICBrZXk6ICduYW1lJyxcbiAgICBkYXRhSW5kZXg6ICduYW1lJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn7Y+J6rCA6riI7JWhJyxcbiAgICBrZXk6ICdhc3NldHMnLFxuICAgIGRhdGFJbmRleDogJ2Fzc2V0cycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ+yeheq4iOq4iOyVoScsXG4gICAga2V5OiAncGF5bWVudHMnLFxuICAgIGRhdGFJbmRleDogJ3BheW1lbnRzJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn6rOE7KKM7Zmc7ISx7ZmU7Jes67aAJyxcbiAgICBrZXk6ICdpc19hY3RpdmUnLFxuICAgIGRhdGFJbmRleDogJ2lzX2FjdGl2ZScsXG4gICAgcmVuZGVyOiAodGV4dCkgPT4ge1xuICAgICAgPFRhZyBjb2xvcj1cImdyZWVuXCI+e3RleHR9PC9UYWc+O1xuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ+qzhOyijOqzhOyEpOydvCcsXG4gICAga2V5OiAnY3JlYXRlZF9hdCcsXG4gICAgZGF0YUluZGV4OiAnY3JlYXRlZF9hdCcsXG4gIH0sXG5dO1xuXG5pbnRlcmZhY2UgTGlzdFByb3BzIHtcbiAgYnVja2V0czogW107XG4gIHVzZXJJbmZvOiBbXTtcbn1cblxuY29uc3QgVGFibGVDb21wb25lbnQgPSAocHJvcHM6IExpc3RQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XG4gIGNvbnN0IHsgYnVja2V0cywgdXNlckluZm8gfSA9IHByb3BzO1xuXG4gIGNvbnN0IGRhdGE6IERhdGFUeXBlW10gPSBbXTtcbiAgYnVja2V0cy5mb3JFYWNoKChpdGVtOiB7fSwgaWR4czogbnVtYmVyKSA9PiB7XG4gICAgdXNlckluZm8uZm9yRWFjaCgoaXRlbXM6IHt9KSA9PiB7XG4gICAgICBpZiAoaXRlbS51c2VyX2lkID09PSBpdGVtcy5pZCkge1xuICAgICAgICBkYXRhLnB1c2goeyBrZXk6IGlkeHMsIHVzZXJfZnVsbG5hbWU6IGl0ZW1zLm5hbWUsIC4uLml0ZW0gfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICBjb25zdCBvbkNoYW5nZTogVGFibGVQcm9wczxEYXRhVHlwZT5bJ29uQ2hhbmdlJ10gPSAocGFnaW5hdGlvbiwgZmlsdGVycywgc29ydGVyLCBleHRyYSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdwYXJhbXMnLCBwYWdpbmF0aW9uLCBmaWx0ZXJzLCBzb3J0ZXIsIGV4dHJhKTtcbiAgfTtcblxuICByZXR1cm4gPFRhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGRhdGFTb3VyY2U9e2RhdGF9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUNvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJUYWJsZSIsIlRhZyIsIlJlYWN0IiwiY29sdW1ucyIsInRpdGxlIiwiZGF0YUluZGV4Iiwia2V5IiwicmVuZGVyIiwidGV4dCIsIlRhYmxlQ29tcG9uZW50IiwicHJvcHMiLCJidWNrZXRzIiwidXNlckluZm8iLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJpZHhzIiwiaXRlbXMiLCJ1c2VyX2lkIiwiaWQiLCJwdXNoIiwidXNlcl9mdWxsbmFtZSIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwib25DaGFuZ2UiLCJwYWdpbmF0aW9uIiwiZmlsdGVycyIsInNvcnRlciIsImV4dHJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/TableComponent.tsx\n"));

/***/ })

});