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

/***/ "./pages/accountlist.tsx":
/*!*******************************!*\
  !*** ./pages/accountlist.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_jeong_eoghwa_Desktop_2_3_2_pre_onboarding_7th_3_2_10_dev_oka7759_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_jeong_eoghwa_Desktop_2_3_2_pre_onboarding_7th_3_2_10_dev_oka7759_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_jeong_eoghwa_Desktop_2_3_2_pre_onboarding_7th_3_2_10_dev_oka7759_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_jeong_eoghwa_Desktop_2_3_2_pre_onboarding_7th_3_2_10_dev_oka7759_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var component_TableComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! component/TableComponent */ \"./component/TableComponent.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/api */ \"./pages/api/api.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/jeong-eoghwa/Desktop/\\u110B\\u1169\\u11AB\\u1107\\u1169\\u1103\\u1175\\u11BC/2\\u110E\\u1161/3-2/pre-onboarding-7th-3-2-10/dev-oka7759/pages/accountlist.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar accountlist = function accountlist() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({}),\n      filters = _useState[0],\n      setFilters = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      buckets = _useState2[0],\n      setBuckets = _useState2[1];\n\n  var fetchData = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)( /*#__PURE__*/(0,_Users_jeong_eoghwa_Desktop_2_3_2_pre_onboarding_7th_3_2_10_dev_oka7759_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_jeong_eoghwa_Desktop_2_3_2_pre_onboarding_7th_3_2_10_dev_oka7759_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    var payload;\n    return _Users_jeong_eoghwa_Desktop_2_3_2_pre_onboarding_7th_3_2_10_dev_oka7759_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            payload = {\n              _page: 1,\n              _limit: 10\n            };\n            _context.next = 3;\n            return (0,_api_api__WEBPACK_IMPORTED_MODULE_4__.getList)(payload).then(function (_ref2) {\n              var data = _ref2.data;\n              setBuckets(data);\n            })[\"catch\"](function (e) {\n              console.log(e);\n            });\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), [filters]);\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    fetchData();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(component_TableComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    props: buckets\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(accountlist, \"Yg0OZa+vcqEEGLbxZ0qPouSQcXA=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (accountlist);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hY2NvdW50bGlzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7OztBQUNBLElBQU1LLFdBQXFCLEdBQUcsU0FBeEJBLFdBQXdCLEdBQU07RUFBQTs7RUFDbEMsZ0JBQThCRiwrQ0FBUSxDQUFTLEVBQVQsQ0FBdEM7RUFBQSxJQUFPRyxPQUFQO0VBQUEsSUFBZ0JDLFVBQWhCOztFQUNBLGlCQUE4QkosK0NBQVEsQ0FBUyxFQUFULENBQXRDO0VBQUEsSUFBT0ssT0FBUDtFQUFBLElBQWdCQyxVQUFoQjs7RUFFQSxJQUFNQyxTQUFTLEdBQUdSLGtEQUFXLHNaQUFDO0lBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtZQUN0QlMsT0FEc0IsR0FDWjtjQUNkQyxLQUFLLEVBQUUsQ0FETztjQUVkQyxNQUFNLEVBQUU7WUFGTSxDQURZO1lBQUE7WUFBQSxPQU10QlQsaURBQU8sQ0FBQ08sT0FBRCxDQUFQLENBQ0hHLElBREcsQ0FDRSxpQkFBYztjQUFBLElBQVhDLElBQVcsU0FBWEEsSUFBVztjQUNsQk4sVUFBVSxDQUFDTSxJQUFELENBQVY7WUFDRCxDQUhHLFdBSUcsVUFBQ0MsQ0FBRCxFQUFPO2NBQ1pDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO1lBQ0QsQ0FORyxDQU5zQjs7VUFBQTtVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUE7RUFBQSxDQUFELElBYTFCLENBQUNWLE9BQUQsQ0FiMEIsQ0FBN0I7RUFlQUwsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2RTLFNBQVM7RUFDVixDQUZRLEVBRU4sRUFGTSxDQUFUO0VBSUEsb0JBQU8sOERBQUMsZ0VBQUQ7SUFBZ0IsS0FBSyxFQUFFRjtFQUF2QjtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBQVA7QUFDRCxDQXhCRDs7R0FBTUg7O0FBMEJOLCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FjY291bnRsaXN0LnRzeD9iZjZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYWJsZUNvbXBvbmVudCBmcm9tICdjb21wb25lbnQvVGFibGVDb21wb25lbnQnO1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRMaXN0IH0gZnJvbSAnLi9hcGkvYXBpJztcbmNvbnN0IGFjY291bnRsaXN0OiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gdXNlU3RhdGU8b2JqZWN0Pih7fSk7XG4gIGNvbnN0IFtidWNrZXRzLCBzZXRCdWNrZXRzXSA9IHVzZVN0YXRlPG9iamVjdD4oW10pO1xuXG4gIGNvbnN0IGZldGNoRGF0YSA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgX3BhZ2U6IDEsXG4gICAgICBfbGltaXQ6IDEwLFxuICAgIH07XG5cbiAgICBhd2FpdCBnZXRMaXN0KHBheWxvYWQpXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgc2V0QnVja2V0cyhkYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB9KTtcbiAgfSwgW2ZpbHRlcnNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIDxUYWJsZUNvbXBvbmVudCBwcm9wcz17YnVja2V0c30gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhY2NvdW50bGlzdDtcbiJdLCJuYW1lcyI6WyJUYWJsZUNvbXBvbmVudCIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJnZXRMaXN0IiwiYWNjb3VudGxpc3QiLCJmaWx0ZXJzIiwic2V0RmlsdGVycyIsImJ1Y2tldHMiLCJzZXRCdWNrZXRzIiwiZmV0Y2hEYXRhIiwicGF5bG9hZCIsIl9wYWdlIiwiX2xpbWl0IiwidGhlbiIsImRhdGEiLCJlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/accountlist.tsx\n"));

/***/ })

});