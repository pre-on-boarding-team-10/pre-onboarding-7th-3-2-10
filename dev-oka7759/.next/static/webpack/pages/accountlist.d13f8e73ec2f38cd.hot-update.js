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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/jeong-eoghwa/Desktop/\\u110B\\u1169\\u11AB\\u1107\\u1169\\u1103\\u1175\\u11BC/2\\u110E\\u1161/3-2/pre-onboarding-7th-3-2-10/dev-oka7759/component/TableComponent.tsx\",\n    _this = undefined;\n\n\n\n\nvar columns = [{\n  title: '고객명',\n  dataIndex: 'user_id',\n  key: 'user_id',\n  render: function render(text) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n      children: text\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 23\n    }, _this);\n  }\n}, {\n  title: '브로커명',\n  dataIndex: 'broker_id',\n  key: 'broker_id'\n}, {\n  title: '계좌번호',\n  dataIndex: 'number',\n  key: 'number'\n}, {\n  title: '계좌상태',\n  key: 'status',\n  dataIndex: 'status'\n}, {\n  title: '계좌명',\n  key: 'name',\n  dataIndex: 'name'\n}, {\n  title: '평가금액',\n  key: 'assets',\n  dataIndex: 'assets'\n}, {\n  title: '입금금액',\n  key: 'payments',\n  dataIndex: 'payments'\n}, {\n  title: '계좌활성화여부',\n  key: 'is_active',\n  dataIndex: 'is_active'\n}, {\n  title: '계좌계설일',\n  key: 'created_at',\n  dataIndex: 'created_at'\n}];\n\nvar TableComponent = function TableComponent(props) {\n  var buckets = props.buckets;\n  var data = [];\n  buckets.forEach(function (item, idx) {});\n\n  for (var i = 0; i < 100; i++) {\n    data.push({\n      key: i,\n      user_name: buckets[i].user_name,\n      broker_name: buckets[i].broker_name,\n      number: buckets[i].number,\n      status: buckets[i].status,\n      name: buckets[i].name,\n      assets: buckets[i].assets,\n      payments: buckets[i].payments,\n      is_active: buckets[i].is_active,\n      created_at: buckets[i].created_at\n    });\n  }\n\n  console.log(data);\n\n  var onChange = function onChange(pagination, filters, sorter, extra) {\n    console.log('params', pagination, filters, sorter, extra);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Table, {\n    columns: columns,\n    dataSource: data,\n    onChange: onChange\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 95,\n    columnNumber: 10\n  }, _this);\n};\n\n_c = TableComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableComponent);\n\nvar _c;\n\n$RefreshReg$(_c, \"TableComponent\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCRSxVQUF0QixFQUFrQ0MsT0FBbEMsRUFBMkNDLE1BQTNDLEVBQW1EQyxLQUFuRDtFQUNELENBRkQ7O0VBSUEsb0JBQU8sOERBQUMsdUNBQUQ7SUFBTyxPQUFPLEVBQUU5QixPQUFoQjtJQUF5QixVQUFVLEVBQUVTLElBQXJDO0lBQTJDLFFBQVEsRUFBRWlCO0VBQXJEO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FBUDtBQUNELENBekJEOztLQUFNcEI7QUEyQk4sK0RBQWVBLGNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1RhYmxlQ29tcG9uZW50LnRzeD80NTQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYmxlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgdHlwZSB7IENvbHVtbnNUeXBlLCBUYWJsZVByb3BzIH0gZnJvbSAnYW50ZC9lcy90YWJsZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgRGF0YVR5cGUge1xuICBrZXk6IG51bWJlcjtcbiAgdXNlcl9uYW1lOiBzdHJpbmc7XG4gIGJyb2tlcl9uYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogc3RyaW5nO1xuICBzdGF0dXM6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBhc3NldHM6IHN0cmluZztcbiAgcGF5bWVudHM6IHN0cmluZztcbiAgaXNfYWN0aXZlOiBzdHJpbmc7XG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcbn1cblxuY29uc3QgY29sdW1uczogQ29sdW1uc1R5cGU8RGF0YVR5cGU+ID0gW1xuICB7XG4gICAgdGl0bGU6ICfqs6DqsJ3rqoUnLFxuICAgIGRhdGFJbmRleDogJ3VzZXJfaWQnLFxuICAgIGtleTogJ3VzZXJfaWQnLFxuICAgIHJlbmRlcjogKHRleHQpID0+IDxhPnt0ZXh0fTwvYT4sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ+u4jOuhnOy7pOuqhScsXG4gICAgZGF0YUluZGV4OiAnYnJva2VyX2lkJyxcbiAgICBrZXk6ICdicm9rZXJfaWQnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICfqs4TsoozrsojtmLgnLFxuICAgIGRhdGFJbmRleDogJ251bWJlcicsXG4gICAga2V5OiAnbnVtYmVyJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn6rOE7KKM7IOB7YOcJyxcbiAgICBrZXk6ICdzdGF0dXMnLFxuICAgIGRhdGFJbmRleDogJ3N0YXR1cycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ+qzhOyijOuqhScsXG4gICAga2V5OiAnbmFtZScsXG4gICAgZGF0YUluZGV4OiAnbmFtZScsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ+2PieqwgOq4iOyVoScsXG4gICAga2V5OiAnYXNzZXRzJyxcbiAgICBkYXRhSW5kZXg6ICdhc3NldHMnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICfsnoXquIjquIjslaEnLFxuICAgIGtleTogJ3BheW1lbnRzJyxcbiAgICBkYXRhSW5kZXg6ICdwYXltZW50cycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ+qzhOyijO2ZnOyEse2ZlOyXrOu2gCcsXG4gICAga2V5OiAnaXNfYWN0aXZlJyxcbiAgICBkYXRhSW5kZXg6ICdpc19hY3RpdmUnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICfqs4Tsoozqs4TshKTsnbwnLFxuICAgIGtleTogJ2NyZWF0ZWRfYXQnLFxuICAgIGRhdGFJbmRleDogJ2NyZWF0ZWRfYXQnLFxuICB9LFxuXTtcblxuaW50ZXJmYWNlIExpc3RQcm9wcyB7XG4gIGJ1Y2tldHM6IFtdO1xufVxuXG5jb25zdCBUYWJsZUNvbXBvbmVudCA9IChwcm9wczogTGlzdFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcbiAgY29uc3QgeyBidWNrZXRzIH0gPSBwcm9wcztcblxuICBjb25zdCBkYXRhOiBEYXRhVHlwZVtdID0gW107XG4gIGJ1Y2tldHMuZm9yRWFjaCgoaXRlbTogb2JqZWN0LCBpZHg6IG51bWJlcikgPT4ge30pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgZGF0YS5wdXNoKHtcbiAgICAgIGtleTogaSxcbiAgICAgIHVzZXJfbmFtZTogYnVja2V0c1tpXS51c2VyX25hbWUsXG4gICAgICBicm9rZXJfbmFtZTogYnVja2V0c1tpXS5icm9rZXJfbmFtZSxcbiAgICAgIG51bWJlcjogYnVja2V0c1tpXS5udW1iZXIsXG4gICAgICBzdGF0dXM6IGJ1Y2tldHNbaV0uc3RhdHVzLFxuICAgICAgbmFtZTogYnVja2V0c1tpXS5uYW1lLFxuICAgICAgYXNzZXRzOiBidWNrZXRzW2ldLmFzc2V0cyxcbiAgICAgIHBheW1lbnRzOiBidWNrZXRzW2ldLnBheW1lbnRzLFxuICAgICAgaXNfYWN0aXZlOiBidWNrZXRzW2ldLmlzX2FjdGl2ZSxcbiAgICAgIGNyZWF0ZWRfYXQ6IGJ1Y2tldHNbaV0uY3JlYXRlZF9hdCxcbiAgICB9KTtcbiAgfVxuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgY29uc3Qgb25DaGFuZ2U6IFRhYmxlUHJvcHM8RGF0YVR5cGU+WydvbkNoYW5nZSddID0gKHBhZ2luYXRpb24sIGZpbHRlcnMsIHNvcnRlciwgZXh0cmEpID0+IHtcbiAgICBjb25zb2xlLmxvZygncGFyYW1zJywgcGFnaW5hdGlvbiwgZmlsdGVycywgc29ydGVyLCBleHRyYSk7XG4gIH07XG5cbiAgcmV0dXJuIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhU291cmNlPXtkYXRhfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFibGVDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsiVGFibGUiLCJSZWFjdCIsImNvbHVtbnMiLCJ0aXRsZSIsImRhdGFJbmRleCIsImtleSIsInJlbmRlciIsInRleHQiLCJUYWJsZUNvbXBvbmVudCIsInByb3BzIiwiYnVja2V0cyIsImRhdGEiLCJmb3JFYWNoIiwiaXRlbSIsImlkeCIsImkiLCJwdXNoIiwidXNlcl9uYW1lIiwiYnJva2VyX25hbWUiLCJudW1iZXIiLCJzdGF0dXMiLCJuYW1lIiwiYXNzZXRzIiwicGF5bWVudHMiLCJpc19hY3RpdmUiLCJjcmVhdGVkX2F0IiwiY29uc29sZSIsImxvZyIsIm9uQ2hhbmdlIiwicGFnaW5hdGlvbiIsImZpbHRlcnMiLCJzb3J0ZXIiLCJleHRyYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/TableComponent.tsx\n"));

/***/ })

});