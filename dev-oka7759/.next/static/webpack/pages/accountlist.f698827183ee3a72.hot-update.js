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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/jeong-eoghwa/Desktop/\\u110B\\u1169\\u11AB\\u1107\\u1169\\u1103\\u1175\\u11BC/2\\u110E\\u1161/3-2/pre-onboarding-7th-3-2-10/dev-oka7759/component/TableComponent.tsx\",\n    _this = undefined;\n\n\n\n\nvar columns = [{\n  title: '고객명',\n  dataIndex: 'user_id',\n  key: 'user_id',\n  render: function render(text) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n      children: text\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 23\n    }, _this);\n  }\n}, {\n  title: '브로커명',\n  dataIndex: 'broker_id',\n  key: 'broker_id'\n}, {\n  title: '계좌번호',\n  dataIndex: 'number',\n  key: 'number'\n}, {\n  title: '계좌상태',\n  key: 'status',\n  dataIndex: 'status'\n}, {\n  title: '계좌명',\n  key: 'name',\n  dataIndex: 'name'\n}, {\n  title: '평가금액',\n  key: 'assets',\n  dataIndex: 'assets'\n}, {\n  title: '입금금액',\n  key: 'payments',\n  dataIndex: 'payments'\n}, {\n  title: '계좌활성화여부',\n  key: 'is_active',\n  dataIndex: 'is_active'\n}, {\n  title: '계좌계설일',\n  key: 'created_at',\n  dataIndex: 'created_at'\n}];\n\nvar TableComponent = function TableComponent(props) {\n  var buckets = props.buckets;\n  var data = [];\n\n  var newArray = function newArray(buckets) {\n    for (var i = 0; i < 100; i++) {\n      data.push({\n        key: i,\n        user_name: buckets[i].user_name,\n        broker_name: buckets[i].broker_name,\n        number: buckets[i].number,\n        status: buckets[i].status,\n        name: buckets[i].name,\n        assets: buckets[i].assets,\n        payments: buckets[i].payments,\n        is_active: buckets[i].is_active,\n        created_at: buckets[i].created_at\n      });\n    }\n\n    return data;\n  };\n\n  console.log(data);\n\n  var onChange = function onChange(pagination, filters, sorter, extra) {\n    console.log('params', pagination, filters, sorter, extra);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Table, {\n    columns: columns,\n    dataSource: data,\n    onChange: onChange\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 98,\n    columnNumber: 10\n  }, _this);\n};\n\n_c = TableComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableComponent);\n\nvar _c;\n\n$RefreshReg$(_c, \"TableComponent\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3pGTixPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCRSxVQUF0QixFQUFrQ0MsT0FBbEMsRUFBMkNDLE1BQTNDLEVBQW1EQyxLQUFuRDtFQUNELENBRkQ7O0VBSUEsb0JBQU8sOERBQUMsdUNBQUQ7SUFBTyxPQUFPLEVBQUU1QixPQUFoQjtJQUF5QixVQUFVLEVBQUVTLElBQXJDO0lBQTJDLFFBQVEsRUFBRWU7RUFBckQ7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQUFQO0FBQ0QsQ0E1QkQ7O0tBQU1sQjtBQThCTiwrREFBZUEsY0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvVGFibGVDb21wb25lbnQudHN4PzQ1NDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFibGUgfSBmcm9tICdhbnRkJztcbmltcG9ydCB0eXBlIHsgQ29sdW1uc1R5cGUsIFRhYmxlUHJvcHMgfSBmcm9tICdhbnRkL2VzL3RhYmxlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBEYXRhVHlwZSB7XG4gIGtleTogbnVtYmVyO1xuICB1c2VyX25hbWU6IHN0cmluZztcbiAgYnJva2VyX25hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBzdHJpbmc7XG4gIHN0YXR1czogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGFzc2V0czogc3RyaW5nO1xuICBwYXltZW50czogc3RyaW5nO1xuICBpc19hY3RpdmU6IHN0cmluZztcbiAgY3JlYXRlZF9hdDogc3RyaW5nO1xufVxuXG5jb25zdCBjb2x1bW5zOiBDb2x1bW5zVHlwZTxEYXRhVHlwZT4gPSBbXG4gIHtcbiAgICB0aXRsZTogJ+qzoOqwneuqhScsXG4gICAgZGF0YUluZGV4OiAndXNlcl9pZCcsXG4gICAga2V5OiAndXNlcl9pZCcsXG4gICAgcmVuZGVyOiAodGV4dCkgPT4gPGE+e3RleHR9PC9hPixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn67iM66Gc7Luk66qFJyxcbiAgICBkYXRhSW5kZXg6ICdicm9rZXJfaWQnLFxuICAgIGtleTogJ2Jyb2tlcl9pZCcsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ+qzhOyijOuyiO2YuCcsXG4gICAgZGF0YUluZGV4OiAnbnVtYmVyJyxcbiAgICBrZXk6ICdudW1iZXInLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICfqs4Tsoozsg4Htg5wnLFxuICAgIGtleTogJ3N0YXR1cycsXG4gICAgZGF0YUluZGV4OiAnc3RhdHVzJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn6rOE7KKM66qFJyxcbiAgICBrZXk6ICduYW1lJyxcbiAgICBkYXRhSW5kZXg6ICduYW1lJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn7Y+J6rCA6riI7JWhJyxcbiAgICBrZXk6ICdhc3NldHMnLFxuICAgIGRhdGFJbmRleDogJ2Fzc2V0cycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ+yeheq4iOq4iOyVoScsXG4gICAga2V5OiAncGF5bWVudHMnLFxuICAgIGRhdGFJbmRleDogJ3BheW1lbnRzJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn6rOE7KKM7Zmc7ISx7ZmU7Jes67aAJyxcbiAgICBrZXk6ICdpc19hY3RpdmUnLFxuICAgIGRhdGFJbmRleDogJ2lzX2FjdGl2ZScsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ+qzhOyijOqzhOyEpOydvCcsXG4gICAga2V5OiAnY3JlYXRlZF9hdCcsXG4gICAgZGF0YUluZGV4OiAnY3JlYXRlZF9hdCcsXG4gIH0sXG5dO1xuXG5pbnRlcmZhY2UgTGlzdFByb3BzIHtcbiAgYnVja2V0czogb2JqZWN0O1xufVxuXG5jb25zdCBUYWJsZUNvbXBvbmVudCA9IChwcm9wczogTGlzdFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcbiAgY29uc3QgeyBidWNrZXRzIH0gPSBwcm9wcztcblxuICBjb25zdCBkYXRhOiBEYXRhVHlwZVtdID0gW107XG4gIGNvbnN0IG5ld0FycmF5ID0gKGJ1Y2tldHMpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICBkYXRhLnB1c2goe1xuICAgICAgICBrZXk6IGksXG4gICAgICAgIHVzZXJfbmFtZTogYnVja2V0c1tpXS51c2VyX25hbWUsXG4gICAgICAgIGJyb2tlcl9uYW1lOiBidWNrZXRzW2ldLmJyb2tlcl9uYW1lLFxuICAgICAgICBudW1iZXI6IGJ1Y2tldHNbaV0ubnVtYmVyLFxuICAgICAgICBzdGF0dXM6IGJ1Y2tldHNbaV0uc3RhdHVzLFxuICAgICAgICBuYW1lOiBidWNrZXRzW2ldLm5hbWUsXG4gICAgICAgIGFzc2V0czogYnVja2V0c1tpXS5hc3NldHMsXG4gICAgICAgIHBheW1lbnRzOiBidWNrZXRzW2ldLnBheW1lbnRzLFxuICAgICAgICBpc19hY3RpdmU6IGJ1Y2tldHNbaV0uaXNfYWN0aXZlLFxuICAgICAgICBjcmVhdGVkX2F0OiBidWNrZXRzW2ldLmNyZWF0ZWRfYXQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIGNvbnN0IG9uQ2hhbmdlOiBUYWJsZVByb3BzPERhdGFUeXBlPlsnb25DaGFuZ2UnXSA9IChwYWdpbmF0aW9uLCBmaWx0ZXJzLCBzb3J0ZXIsIGV4dHJhKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3BhcmFtcycsIHBhZ2luYXRpb24sIGZpbHRlcnMsIHNvcnRlciwgZXh0cmEpO1xuICB9O1xuXG4gIHJldHVybiA8VGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YVNvdXJjZT17ZGF0YX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbIlRhYmxlIiwiUmVhY3QiLCJjb2x1bW5zIiwidGl0bGUiLCJkYXRhSW5kZXgiLCJrZXkiLCJyZW5kZXIiLCJ0ZXh0IiwiVGFibGVDb21wb25lbnQiLCJwcm9wcyIsImJ1Y2tldHMiLCJkYXRhIiwibmV3QXJyYXkiLCJpIiwicHVzaCIsInVzZXJfbmFtZSIsImJyb2tlcl9uYW1lIiwibnVtYmVyIiwic3RhdHVzIiwibmFtZSIsImFzc2V0cyIsInBheW1lbnRzIiwiaXNfYWN0aXZlIiwiY3JlYXRlZF9hdCIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZSIsInBhZ2luYXRpb24iLCJmaWx0ZXJzIiwic29ydGVyIiwiZXh0cmEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/TableComponent.tsx\n"));

/***/ })

});