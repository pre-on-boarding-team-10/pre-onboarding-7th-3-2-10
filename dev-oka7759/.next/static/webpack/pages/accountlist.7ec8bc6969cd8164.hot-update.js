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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/jeong-eoghwa/Desktop/\\u110B\\u1169\\u11AB\\u1107\\u1169\\u1103\\u1175\\u11BC/2\\u110E\\u1161/3-2/pre-onboarding-7th-3-2-10/dev-oka7759/component/TableComponent.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar columns = [{\n  title: '고객명',\n  dataIndex: 'user_name',\n  key: 'user_name',\n  render: function render(text) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n      children: text\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 23\n    }, _this);\n  }\n}, {\n  title: '브로커명',\n  dataIndex: 'broker_name',\n  key: 'broker_name'\n}, {\n  title: '계좌번호',\n  dataIndex: 'number',\n  key: 'number'\n}, {\n  title: '계좌상태',\n  key: 'status',\n  dataIndex: 'status'\n}, {\n  title: '계좌명',\n  key: 'name',\n  dataIndex: 'name'\n}, {\n  title: '평가금액',\n  key: 'assets',\n  dataIndex: 'assets'\n}, {\n  title: '입금금액',\n  key: 'payments',\n  dataIndex: 'payments'\n}, {\n  title: '계좌활성화여부',\n  key: 'is_active',\n  dataIndex: 'is_active'\n}, {\n  title: '계좌계설일',\n  key: 'created_at',\n  dataIndex: 'created_at'\n}];\nvar data = [{\n  key: 0,\n  user_name: 'John Brown',\n  broker_name: '32',\n  number: 'New York No. 1 Lake Park',\n  status: 'nice',\n  name: 'string',\n  assets: 'string',\n  payments: 'string',\n  is_active: 'string',\n  created_at: 'string'\n}, {\n  key: 1,\n  user_name: 'Jim Green',\n  broker_name: '42',\n  number: 'London No. 1 Lake Park',\n  status: 'nice',\n  name: 'string',\n  assets: 'string',\n  payments: 'string',\n  is_active: 'string',\n  created_at: 'string'\n}, {\n  key: 2,\n  user_name: 'Joe Black',\n  broker_name: '32',\n  number: 'Sidney No. 1 Lake Park',\n  status: 'nice',\n  name: 'string',\n  assets: 'string',\n  payments: 'string',\n  is_active: 'string',\n  created_at: 'string'\n}];\n\nvar TableComponent = function TableComponent() {\n  _s();\n\n  var onChange = function onChange(pagination, filters, sorter, extra) {\n    console.log('params', pagination, filters, sorter, extra);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Table, {\n    columns: columns,\n    dataSource: data,\n    onChange: onChange\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 113,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(TableComponent, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = TableComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableComponent);\n\nvar _c;\n\n$RefreshReg$(_c, \"TableComponent\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTNDLEVBQW1EQyxLQUFuRDtFQUNELENBRkQ7O0VBSUF0QixnREFBUyxDQUFDLFlBQU0sQ0FBRSxDQUFULEVBQVcsRUFBWCxDQUFUO0VBRUEsb0JBQU8sOERBQUMsdUNBQUQ7SUFBTyxPQUFPLEVBQUVDLE9BQWhCO0lBQXlCLFVBQVUsRUFBRU0sSUFBckM7SUFBMkMsUUFBUSxFQUFFVztFQUFyRDtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBQVA7QUFDRCxDQVJEOztHQUFNRDs7S0FBQUE7QUFVTiwrREFBZUEsY0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvVGFibGVDb21wb25lbnQudHN4PzQ1NDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFibGUgfSBmcm9tICdhbnRkJztcbmltcG9ydCB0eXBlIHsgQ29sdW1uc1R5cGUsIFRhYmxlUHJvcHMgfSBmcm9tICdhbnRkL2VzL3RhYmxlJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBEYXRhVHlwZSB7XG4gIGtleTogbnVtYmVyO1xuICB1c2VyX25hbWU6IHN0cmluZztcbiAgYnJva2VyX25hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBzdHJpbmc7XG4gIHN0YXR1czogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGFzc2V0czogc3RyaW5nO1xuICBwYXltZW50czogc3RyaW5nO1xuICBpc19hY3RpdmU6IHN0cmluZztcbiAgY3JlYXRlZF9hdDogc3RyaW5nO1xufVxuXG5jb25zdCBjb2x1bW5zOiBDb2x1bW5zVHlwZTxEYXRhVHlwZT4gPSBbXG4gIHtcbiAgICB0aXRsZTogJ+qzoOqwneuqhScsXG4gICAgZGF0YUluZGV4OiAndXNlcl9uYW1lJyxcbiAgICBrZXk6ICd1c2VyX25hbWUnLFxuICAgIHJlbmRlcjogKHRleHQpID0+IDxhPnt0ZXh0fTwvYT4sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ+u4jOuhnOy7pOuqhScsXG4gICAgZGF0YUluZGV4OiAnYnJva2VyX25hbWUnLFxuICAgIGtleTogJ2Jyb2tlcl9uYW1lJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn6rOE7KKM67KI7Zi4JyxcbiAgICBkYXRhSW5kZXg6ICdudW1iZXInLFxuICAgIGtleTogJ251bWJlcicsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ+qzhOyijOyDge2DnCcsXG4gICAga2V5OiAnc3RhdHVzJyxcbiAgICBkYXRhSW5kZXg6ICdzdGF0dXMnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICfqs4TsoozrqoUnLFxuICAgIGtleTogJ25hbWUnLFxuICAgIGRhdGFJbmRleDogJ25hbWUnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICftj4nqsIDquIjslaEnLFxuICAgIGtleTogJ2Fzc2V0cycsXG4gICAgZGF0YUluZGV4OiAnYXNzZXRzJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn7J6F6riI6riI7JWhJyxcbiAgICBrZXk6ICdwYXltZW50cycsXG4gICAgZGF0YUluZGV4OiAncGF5bWVudHMnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICfqs4TsooztmZzshLHtmZTsl6zrtoAnLFxuICAgIGtleTogJ2lzX2FjdGl2ZScsXG4gICAgZGF0YUluZGV4OiAnaXNfYWN0aXZlJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn6rOE7KKM6rOE7ISk7J28JyxcbiAgICBrZXk6ICdjcmVhdGVkX2F0JyxcbiAgICBkYXRhSW5kZXg6ICdjcmVhdGVkX2F0JyxcbiAgfSxcbl07XG5cbmNvbnN0IGRhdGE6IERhdGFUeXBlW10gPSBbXG4gIHtcbiAgICBrZXk6IDAsXG4gICAgdXNlcl9uYW1lOiAnSm9obiBCcm93bicsXG4gICAgYnJva2VyX25hbWU6ICczMicsXG4gICAgbnVtYmVyOiAnTmV3IFlvcmsgTm8uIDEgTGFrZSBQYXJrJyxcbiAgICBzdGF0dXM6ICduaWNlJyxcbiAgICBuYW1lOiAnc3RyaW5nJyxcbiAgICBhc3NldHM6ICdzdHJpbmcnLFxuICAgIHBheW1lbnRzOiAnc3RyaW5nJyxcbiAgICBpc19hY3RpdmU6ICdzdHJpbmcnLFxuICAgIGNyZWF0ZWRfYXQ6ICdzdHJpbmcnLFxuICB9LFxuICB7XG4gICAga2V5OiAxLFxuICAgIHVzZXJfbmFtZTogJ0ppbSBHcmVlbicsXG4gICAgYnJva2VyX25hbWU6ICc0MicsXG4gICAgbnVtYmVyOiAnTG9uZG9uIE5vLiAxIExha2UgUGFyaycsXG4gICAgc3RhdHVzOiAnbmljZScsXG4gICAgbmFtZTogJ3N0cmluZycsXG4gICAgYXNzZXRzOiAnc3RyaW5nJyxcbiAgICBwYXltZW50czogJ3N0cmluZycsXG4gICAgaXNfYWN0aXZlOiAnc3RyaW5nJyxcbiAgICBjcmVhdGVkX2F0OiAnc3RyaW5nJyxcbiAgfSxcbiAge1xuICAgIGtleTogMixcbiAgICB1c2VyX25hbWU6ICdKb2UgQmxhY2snLFxuICAgIGJyb2tlcl9uYW1lOiAnMzInLFxuICAgIG51bWJlcjogJ1NpZG5leSBOby4gMSBMYWtlIFBhcmsnLFxuICAgIHN0YXR1czogJ25pY2UnLFxuICAgIG5hbWU6ICdzdHJpbmcnLFxuICAgIGFzc2V0czogJ3N0cmluZycsXG4gICAgcGF5bWVudHM6ICdzdHJpbmcnLFxuICAgIGlzX2FjdGl2ZTogJ3N0cmluZycsXG4gICAgY3JlYXRlZF9hdDogJ3N0cmluZycsXG4gIH0sXG5dO1xuXG5jb25zdCBUYWJsZUNvbXBvbmVudDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IG9uQ2hhbmdlOiBUYWJsZVByb3BzPERhdGFUeXBlPlsnb25DaGFuZ2UnXSA9IChwYWdpbmF0aW9uLCBmaWx0ZXJzLCBzb3J0ZXIsIGV4dHJhKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3BhcmFtcycsIHBhZ2luYXRpb24sIGZpbHRlcnMsIHNvcnRlciwgZXh0cmEpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7fSwgW10pO1xuXG4gIHJldHVybiA8VGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YVNvdXJjZT17ZGF0YX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbIlRhYmxlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJjb2x1bW5zIiwidGl0bGUiLCJkYXRhSW5kZXgiLCJrZXkiLCJyZW5kZXIiLCJ0ZXh0IiwiZGF0YSIsInVzZXJfbmFtZSIsImJyb2tlcl9uYW1lIiwibnVtYmVyIiwic3RhdHVzIiwibmFtZSIsImFzc2V0cyIsInBheW1lbnRzIiwiaXNfYWN0aXZlIiwiY3JlYXRlZF9hdCIsIlRhYmxlQ29tcG9uZW50Iiwib25DaGFuZ2UiLCJwYWdpbmF0aW9uIiwiZmlsdGVycyIsInNvcnRlciIsImV4dHJhIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/TableComponent.tsx\n"));

/***/ })

});