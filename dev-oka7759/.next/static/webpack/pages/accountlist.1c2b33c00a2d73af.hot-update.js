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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/jeong-eoghwa/Desktop/\\u110B\\u1169\\u11AB\\u1107\\u1169\\u1103\\u1175\\u11BC/2\\u110E\\u1161/3-2/pre-onboarding-7th-3-2-10/dev-oka7759/component/TableComponent.tsx\",\n    _this = undefined;\n\n\n\n\nvar columns = [{\n  title: '고객명',\n  dataIndex: 'user_name',\n  key: 'user_name',\n  render: function render(text) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n      children: text\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 23\n    }, _this);\n  }\n}, {\n  title: '브로커명',\n  dataIndex: 'broker_name',\n  key: 'broker_name'\n}, {\n  title: '계좌번호',\n  dataIndex: 'number',\n  key: 'number'\n}, {\n  title: '계좌상태',\n  key: 'status',\n  dataIndex: 'status'\n}, {\n  title: '계좌명',\n  key: 'name',\n  dataIndex: 'name'\n}, {\n  title: '평가금액',\n  key: 'assets',\n  dataIndex: 'assets'\n}, {\n  title: '입금금액',\n  key: 'payments',\n  dataIndex: 'payments'\n}, {\n  title: '계좌활성화여부',\n  key: 'is_active',\n  dataIndex: 'is_active'\n}, {\n  title: '계좌계설일',\n  key: 'created_at',\n  dataIndex: 'created_at'\n}];\nvar data = [{\n  key: '1',\n  user_name: 'John Brown',\n  broker_name: '32',\n  number: 'New York No. 1 Lake Park',\n  status: 'nice',\n  name: 'string',\n  assets: 'string',\n  payments: 'string',\n  is_active: 'string',\n  created_at: 'string'\n}, {\n  key: '2',\n  user_name: 'Jim Green',\n  broker_name: '42',\n  number: 'London No. 1 Lake Park',\n  status: 'nice',\n  name: 'string',\n  assets: 'string',\n  payments: 'string',\n  is_active: 'string',\n  created_at: 'string'\n}, {\n  key: '3',\n  user_name: 'Joe Black',\n  broker_name: '32',\n  number: 'Sidney No. 1 Lake Park',\n  status: 'nice',\n  name: 'string',\n  assets: 'string',\n  payments: 'string',\n  is_active: 'string',\n  created_at: 'string'\n}];\n\nvar TableComponent = function TableComponent() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Table, {\n    columns: columns,\n    dataSource: data\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 106,\n    columnNumber: 40\n  }, _this);\n};\n\n_c = TableComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableComponent);\n\nvar _c;\n\n$RefreshReg$(_c, \"TableComponent\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvVGFibGVDb21wb25lbnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBZUEsSUFBTUUsT0FBOEIsR0FBRyxDQUNyQztFQUNFQyxLQUFLLEVBQUUsS0FEVDtFQUVFQyxTQUFTLEVBQUUsV0FGYjtFQUdFQyxHQUFHLEVBQUUsV0FIUDtFQUlFQyxNQUFNLEVBQUUsZ0JBQUNDLElBQUQ7SUFBQSxvQkFBVTtNQUFBLFVBQUlBO0lBQUo7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUFWO0VBQUE7QUFKVixDQURxQyxFQU9yQztFQUNFSixLQUFLLEVBQUUsTUFEVDtFQUVFQyxTQUFTLEVBQUUsYUFGYjtFQUdFQyxHQUFHLEVBQUU7QUFIUCxDQVBxQyxFQVlyQztFQUNFRixLQUFLLEVBQUUsTUFEVDtFQUVFQyxTQUFTLEVBQUUsUUFGYjtFQUdFQyxHQUFHLEVBQUU7QUFIUCxDQVpxQyxFQWlCckM7RUFDRUYsS0FBSyxFQUFFLE1BRFQ7RUFFRUUsR0FBRyxFQUFFLFFBRlA7RUFHRUQsU0FBUyxFQUFFO0FBSGIsQ0FqQnFDLEVBc0JyQztFQUNFRCxLQUFLLEVBQUUsS0FEVDtFQUVFRSxHQUFHLEVBQUUsTUFGUDtFQUdFRCxTQUFTLEVBQUU7QUFIYixDQXRCcUMsRUEyQnJDO0VBQ0VELEtBQUssRUFBRSxNQURUO0VBRUVFLEdBQUcsRUFBRSxRQUZQO0VBR0VELFNBQVMsRUFBRTtBQUhiLENBM0JxQyxFQWdDckM7RUFDRUQsS0FBSyxFQUFFLE1BRFQ7RUFFRUUsR0FBRyxFQUFFLFVBRlA7RUFHRUQsU0FBUyxFQUFFO0FBSGIsQ0FoQ3FDLEVBcUNyQztFQUNFRCxLQUFLLEVBQUUsU0FEVDtFQUVFRSxHQUFHLEVBQUUsV0FGUDtFQUdFRCxTQUFTLEVBQUU7QUFIYixDQXJDcUMsRUEwQ3JDO0VBQ0VELEtBQUssRUFBRSxPQURUO0VBRUVFLEdBQUcsRUFBRSxZQUZQO0VBR0VELFNBQVMsRUFBRTtBQUhiLENBMUNxQyxDQUF2QztBQWlEQSxJQUFNSSxJQUFnQixHQUFHLENBQ3ZCO0VBQ0VILEdBQUcsRUFBRSxHQURQO0VBRUVJLFNBQVMsRUFBRSxZQUZiO0VBR0VDLFdBQVcsRUFBRSxJQUhmO0VBSUVDLE1BQU0sRUFBRSwwQkFKVjtFQUtFQyxNQUFNLEVBQUUsTUFMVjtFQU1FQyxJQUFJLEVBQUUsUUFOUjtFQU9FQyxNQUFNLEVBQUUsUUFQVjtFQVFFQyxRQUFRLEVBQUUsUUFSWjtFQVNFQyxTQUFTLEVBQUUsUUFUYjtFQVVFQyxVQUFVLEVBQUU7QUFWZCxDQUR1QixFQWF2QjtFQUNFWixHQUFHLEVBQUUsR0FEUDtFQUVFSSxTQUFTLEVBQUUsV0FGYjtFQUdFQyxXQUFXLEVBQUUsSUFIZjtFQUlFQyxNQUFNLEVBQUUsd0JBSlY7RUFLRUMsTUFBTSxFQUFFLE1BTFY7RUFNRUMsSUFBSSxFQUFFLFFBTlI7RUFPRUMsTUFBTSxFQUFFLFFBUFY7RUFRRUMsUUFBUSxFQUFFLFFBUlo7RUFTRUMsU0FBUyxFQUFFLFFBVGI7RUFVRUMsVUFBVSxFQUFFO0FBVmQsQ0FidUIsRUF5QnZCO0VBQ0VaLEdBQUcsRUFBRSxHQURQO0VBRUVJLFNBQVMsRUFBRSxXQUZiO0VBR0VDLFdBQVcsRUFBRSxJQUhmO0VBSUVDLE1BQU0sRUFBRSx3QkFKVjtFQUtFQyxNQUFNLEVBQUUsTUFMVjtFQU1FQyxJQUFJLEVBQUUsUUFOUjtFQU9FQyxNQUFNLEVBQUUsUUFQVjtFQVFFQyxRQUFRLEVBQUUsUUFSWjtFQVNFQyxTQUFTLEVBQUUsUUFUYjtFQVVFQyxVQUFVLEVBQUU7QUFWZCxDQXpCdUIsQ0FBekI7O0FBdUNBLElBQU1DLGNBQXdCLEdBQUcsU0FBM0JBLGNBQTJCO0VBQUEsb0JBQU0sOERBQUMsdUNBQUQ7SUFBTyxPQUFPLEVBQUVoQixPQUFoQjtJQUF5QixVQUFVLEVBQUVNO0VBQXJDO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FBTjtBQUFBLENBQWpDOztLQUFNVTtBQUVOLCtEQUFlQSxjQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9UYWJsZUNvbXBvbmVudC50c3g/NDU0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWJsZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHR5cGUgeyBDb2x1bW5zVHlwZSB9IGZyb20gJ2FudGQvZXMvdGFibGUnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIERhdGFUeXBlIHtcbiAga2V5OiBzdHJpbmc7XG4gIHVzZXJfbmFtZTogc3RyaW5nO1xuICBicm9rZXJfbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IHN0cmluZztcbiAgc3RhdHVzOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgYXNzZXRzOiBzdHJpbmc7XG4gIHBheW1lbnRzOiBzdHJpbmc7XG4gIGlzX2FjdGl2ZTogc3RyaW5nO1xuICBjcmVhdGVkX2F0OiBzdHJpbmc7XG59XG5cbmNvbnN0IGNvbHVtbnM6IENvbHVtbnNUeXBlPERhdGFUeXBlPiA9IFtcbiAge1xuICAgIHRpdGxlOiAn6rOg6rCd66qFJyxcbiAgICBkYXRhSW5kZXg6ICd1c2VyX25hbWUnLFxuICAgIGtleTogJ3VzZXJfbmFtZScsXG4gICAgcmVuZGVyOiAodGV4dCkgPT4gPGE+e3RleHR9PC9hPixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn67iM66Gc7Luk66qFJyxcbiAgICBkYXRhSW5kZXg6ICdicm9rZXJfbmFtZScsXG4gICAga2V5OiAnYnJva2VyX25hbWUnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICfqs4TsoozrsojtmLgnLFxuICAgIGRhdGFJbmRleDogJ251bWJlcicsXG4gICAga2V5OiAnbnVtYmVyJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn6rOE7KKM7IOB7YOcJyxcbiAgICBrZXk6ICdzdGF0dXMnLFxuICAgIGRhdGFJbmRleDogJ3N0YXR1cycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ+qzhOyijOuqhScsXG4gICAga2V5OiAnbmFtZScsXG4gICAgZGF0YUluZGV4OiAnbmFtZScsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ+2PieqwgOq4iOyVoScsXG4gICAga2V5OiAnYXNzZXRzJyxcbiAgICBkYXRhSW5kZXg6ICdhc3NldHMnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICfsnoXquIjquIjslaEnLFxuICAgIGtleTogJ3BheW1lbnRzJyxcbiAgICBkYXRhSW5kZXg6ICdwYXltZW50cycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ+qzhOyijO2ZnOyEse2ZlOyXrOu2gCcsXG4gICAga2V5OiAnaXNfYWN0aXZlJyxcbiAgICBkYXRhSW5kZXg6ICdpc19hY3RpdmUnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICfqs4Tsoozqs4TshKTsnbwnLFxuICAgIGtleTogJ2NyZWF0ZWRfYXQnLFxuICAgIGRhdGFJbmRleDogJ2NyZWF0ZWRfYXQnLFxuICB9LFxuXTtcblxuY29uc3QgZGF0YTogRGF0YVR5cGVbXSA9IFtcbiAge1xuICAgIGtleTogJzEnLFxuICAgIHVzZXJfbmFtZTogJ0pvaG4gQnJvd24nLFxuICAgIGJyb2tlcl9uYW1lOiAnMzInLFxuICAgIG51bWJlcjogJ05ldyBZb3JrIE5vLiAxIExha2UgUGFyaycsXG4gICAgc3RhdHVzOiAnbmljZScsXG4gICAgbmFtZTogJ3N0cmluZycsXG4gICAgYXNzZXRzOiAnc3RyaW5nJyxcbiAgICBwYXltZW50czogJ3N0cmluZycsXG4gICAgaXNfYWN0aXZlOiAnc3RyaW5nJyxcbiAgICBjcmVhdGVkX2F0OiAnc3RyaW5nJyxcbiAgfSxcbiAge1xuICAgIGtleTogJzInLFxuICAgIHVzZXJfbmFtZTogJ0ppbSBHcmVlbicsXG4gICAgYnJva2VyX25hbWU6ICc0MicsXG4gICAgbnVtYmVyOiAnTG9uZG9uIE5vLiAxIExha2UgUGFyaycsXG4gICAgc3RhdHVzOiAnbmljZScsXG4gICAgbmFtZTogJ3N0cmluZycsXG4gICAgYXNzZXRzOiAnc3RyaW5nJyxcbiAgICBwYXltZW50czogJ3N0cmluZycsXG4gICAgaXNfYWN0aXZlOiAnc3RyaW5nJyxcbiAgICBjcmVhdGVkX2F0OiAnc3RyaW5nJyxcbiAgfSxcbiAge1xuICAgIGtleTogJzMnLFxuICAgIHVzZXJfbmFtZTogJ0pvZSBCbGFjaycsXG4gICAgYnJva2VyX25hbWU6ICczMicsXG4gICAgbnVtYmVyOiAnU2lkbmV5IE5vLiAxIExha2UgUGFyaycsXG4gICAgc3RhdHVzOiAnbmljZScsXG4gICAgbmFtZTogJ3N0cmluZycsXG4gICAgYXNzZXRzOiAnc3RyaW5nJyxcbiAgICBwYXltZW50czogJ3N0cmluZycsXG4gICAgaXNfYWN0aXZlOiAnc3RyaW5nJyxcbiAgICBjcmVhdGVkX2F0OiAnc3RyaW5nJyxcbiAgfSxcbl07XG5cbmNvbnN0IFRhYmxlQ29tcG9uZW50OiBSZWFjdC5GQyA9ICgpID0+IDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhU291cmNlPXtkYXRhfSAvPjtcblxuZXhwb3J0IGRlZmF1bHQgVGFibGVDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsiVGFibGUiLCJSZWFjdCIsImNvbHVtbnMiLCJ0aXRsZSIsImRhdGFJbmRleCIsImtleSIsInJlbmRlciIsInRleHQiLCJkYXRhIiwidXNlcl9uYW1lIiwiYnJva2VyX25hbWUiLCJudW1iZXIiLCJzdGF0dXMiLCJuYW1lIiwiYXNzZXRzIiwicGF5bWVudHMiLCJpc19hY3RpdmUiLCJjcmVhdGVkX2F0IiwiVGFibGVDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/TableComponent.tsx\n"));

/***/ })

});