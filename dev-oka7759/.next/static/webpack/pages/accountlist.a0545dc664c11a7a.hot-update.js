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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/jeong-eoghwa/Desktop/\\u110B\\u1169\\u11AB\\u1107\\u1169\\u1103\\u1175\\u11BC/2\\u110E\\u1161/3-2/pre-onboarding-7th-3-2-10/dev-oka7759/component/TableComponent.tsx\",\n    _this = undefined;\n\n\n\n\nvar columns = [{\n  title: '고객명',\n  dataIndex: 'user_id',\n  key: 'user_id',\n  render: function render(text) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n      children: text\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 23\n    }, _this);\n  }\n}, {\n  title: '브로커명',\n  dataIndex: 'broker_id',\n  key: 'broker_id'\n}, {\n  title: '계좌번호',\n  dataIndex: 'number',\n  key: 'number'\n}, {\n  title: '계좌상태',\n  key: 'status',\n  dataIndex: 'status'\n}, {\n  title: '계좌명',\n  key: 'name',\n  dataIndex: 'name'\n}, {\n  title: '평가금액',\n  key: 'assets',\n  dataIndex: 'assets'\n}, {\n  title: '입금금액',\n  key: 'payments',\n  dataIndex: 'payments'\n}, {\n  title: '계좌활성화여부',\n  key: 'is_active',\n  dataIndex: 'is_active'\n}, {\n  title: '계좌계설일',\n  key: 'created_at',\n  dataIndex: 'created_at'\n}];\n\nvar TableComponent = function TableComponent(props) {\n  var buckets = props.buckets;\n  var data = [];\n\n  for (var i = 0; i < 100; i++) {\n    data.push({\n      key: i,\n      user_name: buckets[i].user_name,\n      broker_name: buckets[i].broker_name,\n      number: buckets[i].number,\n      status: buckets[i].status,\n      name: buckets[i].name,\n      assets: buckets[i].assets,\n      payments: buckets[i].payments,\n      is_active: buckets[i].is_active,\n      created_at: buckets[i].created_at\n    });\n  }\n\n  console.log(data);\n\n  var onChange = function onChange(pagination, filters, sorter, extra) {\n    console.log('params', pagination, filters, sorter, extra);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Table, {\n    columns: columns,\n    dataSource: data,\n    onChange: onChange\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 95,\n    columnNumber: 10\n  }, _this);\n};\n\n_c = TableComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableComponent);\n\nvar _c;\n\n$RefreshReg$(_c, \"TableComponent\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFuRDtFQUNELENBRkQ7O0VBSUEsb0JBQU8sOERBQUMsdUNBQUQ7SUFBTyxPQUFPLEVBQUUzQixPQUFoQjtJQUF5QixVQUFVLEVBQUVTLElBQXJDO0lBQTJDLFFBQVEsRUFBRWM7RUFBckQ7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQUFQO0FBQ0QsQ0F6QkQ7O0tBQU1qQjtBQTJCTiwrREFBZUEsY0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvVGFibGVDb21wb25lbnQudHN4PzQ1NDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFibGUgfSBmcm9tICdhbnRkJztcbmltcG9ydCB0eXBlIHsgQ29sdW1uc1R5cGUsIFRhYmxlUHJvcHMgfSBmcm9tICdhbnRkL2VzL3RhYmxlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBEYXRhVHlwZSB7XG4gIGtleTogbnVtYmVyO1xuICB1c2VyX25hbWU6IHN0cmluZztcbiAgYnJva2VyX25hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBzdHJpbmc7XG4gIHN0YXR1czogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGFzc2V0czogc3RyaW5nO1xuICBwYXltZW50czogc3RyaW5nO1xuICBpc19hY3RpdmU6IHN0cmluZztcbiAgY3JlYXRlZF9hdDogc3RyaW5nO1xufVxuXG5jb25zdCBjb2x1bW5zOiBDb2x1bW5zVHlwZTxEYXRhVHlwZT4gPSBbXG4gIHtcbiAgICB0aXRsZTogJ+qzoOqwneuqhScsXG4gICAgZGF0YUluZGV4OiAndXNlcl9pZCcsXG4gICAga2V5OiAndXNlcl9pZCcsXG4gICAgcmVuZGVyOiAodGV4dCkgPT4gPGE+e3RleHR9PC9hPixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn67iM66Gc7Luk66qFJyxcbiAgICBkYXRhSW5kZXg6ICdicm9rZXJfaWQnLFxuICAgIGtleTogJ2Jyb2tlcl9pZCcsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ+qzhOyijOuyiO2YuCcsXG4gICAgZGF0YUluZGV4OiAnbnVtYmVyJyxcbiAgICBrZXk6ICdudW1iZXInLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICfqs4Tsoozsg4Htg5wnLFxuICAgIGtleTogJ3N0YXR1cycsXG4gICAgZGF0YUluZGV4OiAnc3RhdHVzJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn6rOE7KKM66qFJyxcbiAgICBrZXk6ICduYW1lJyxcbiAgICBkYXRhSW5kZXg6ICduYW1lJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn7Y+J6rCA6riI7JWhJyxcbiAgICBrZXk6ICdhc3NldHMnLFxuICAgIGRhdGFJbmRleDogJ2Fzc2V0cycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ+yeheq4iOq4iOyVoScsXG4gICAga2V5OiAncGF5bWVudHMnLFxuICAgIGRhdGFJbmRleDogJ3BheW1lbnRzJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn6rOE7KKM7Zmc7ISx7ZmU7Jes67aAJyxcbiAgICBrZXk6ICdpc19hY3RpdmUnLFxuICAgIGRhdGFJbmRleDogJ2lzX2FjdGl2ZScsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ+qzhOyijOqzhOyEpOydvCcsXG4gICAga2V5OiAnY3JlYXRlZF9hdCcsXG4gICAgZGF0YUluZGV4OiAnY3JlYXRlZF9hdCcsXG4gIH0sXG5dO1xuXG5pbnRlcmZhY2UgTGlzdFByb3BzIHtcbiAgYnVja2V0czogeyBhbnkgfTtcbn1cblxuY29uc3QgVGFibGVDb21wb25lbnQgPSAocHJvcHM6IExpc3RQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XG4gIGNvbnN0IHsgYnVja2V0cyB9ID0gcHJvcHM7XG5cbiAgY29uc3QgZGF0YTogRGF0YVR5cGVbXSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICBkYXRhLnB1c2goe1xuICAgICAga2V5OiBpLFxuICAgICAgdXNlcl9uYW1lOiBidWNrZXRzW2ldLnVzZXJfbmFtZSxcbiAgICAgIGJyb2tlcl9uYW1lOiBidWNrZXRzW2ldLmJyb2tlcl9uYW1lLFxuICAgICAgbnVtYmVyOiBidWNrZXRzW2ldLm51bWJlcixcbiAgICAgIHN0YXR1czogYnVja2V0c1tpXS5zdGF0dXMsXG4gICAgICBuYW1lOiBidWNrZXRzW2ldLm5hbWUsXG4gICAgICBhc3NldHM6IGJ1Y2tldHNbaV0uYXNzZXRzLFxuICAgICAgcGF5bWVudHM6IGJ1Y2tldHNbaV0ucGF5bWVudHMsXG4gICAgICBpc19hY3RpdmU6IGJ1Y2tldHNbaV0uaXNfYWN0aXZlLFxuICAgICAgY3JlYXRlZF9hdDogYnVja2V0c1tpXS5jcmVhdGVkX2F0LFxuICAgIH0pO1xuICB9XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICBjb25zdCBvbkNoYW5nZTogVGFibGVQcm9wczxEYXRhVHlwZT5bJ29uQ2hhbmdlJ10gPSAocGFnaW5hdGlvbiwgZmlsdGVycywgc29ydGVyLCBleHRyYSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdwYXJhbXMnLCBwYWdpbmF0aW9uLCBmaWx0ZXJzLCBzb3J0ZXIsIGV4dHJhKTtcbiAgfTtcblxuICByZXR1cm4gPFRhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGRhdGFTb3VyY2U9e2RhdGF9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUNvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJUYWJsZSIsIlJlYWN0IiwiY29sdW1ucyIsInRpdGxlIiwiZGF0YUluZGV4Iiwia2V5IiwicmVuZGVyIiwidGV4dCIsIlRhYmxlQ29tcG9uZW50IiwicHJvcHMiLCJidWNrZXRzIiwiZGF0YSIsImkiLCJwdXNoIiwidXNlcl9uYW1lIiwiYnJva2VyX25hbWUiLCJudW1iZXIiLCJzdGF0dXMiLCJuYW1lIiwiYXNzZXRzIiwicGF5bWVudHMiLCJpc19hY3RpdmUiLCJjcmVhdGVkX2F0IiwiY29uc29sZSIsImxvZyIsIm9uQ2hhbmdlIiwicGFnaW5hdGlvbiIsImZpbHRlcnMiLCJzb3J0ZXIiLCJleHRyYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/TableComponent.tsx\n"));

/***/ })

});