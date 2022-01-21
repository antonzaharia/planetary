"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[id]",{

/***/ "./pages/[id].js":
/*!***********************!*\
  !*** ./pages/[id].js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/web3 */ \"./lib/web3.js\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navigation */ \"./components/Navigation.js\");\n/* harmony import */ var _components_Universe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Universe */ \"./components/Universe.js\");\n/* harmony import */ var _components_EthName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/EthName */ \"./components/EthName.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/antonzaharia/apps/planetary/pages/[id].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Planet(_ref) {\n  _s();\n\n  var metadata = _ref.metadata;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n  var id = router.query.id;\n  id = parseInt(id);\n\n  if (typeof document === \"object\") {\n    document.documentElement.style.setProperty(\"--main-color\", metadata.properties.mainColor);\n    document.documentElement.style.setProperty(\"--secondary-color\", metadata.properties.secondaryColor);\n  }\n\n  var forSaleNotice = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n    children: \"Not for sale\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, this);\n\n  var openSeaLink = \"https://testnets.opensea.io/assets/\".concat(_lib_web3__WEBPACK_IMPORTED_MODULE_2__.contractAddress, \"/\").concat(id);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_3__.default, {\n      id: id,\n      total: 5\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Universe__WEBPACK_IMPORTED_MODULE_4__.default, {\n      id: id,\n      metadata: metadata\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"section\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"h2\", {\n        children: [\"Planet #\", id]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this), forSaleNotice, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n        href: openSeaLink,\n        target: \"_blank\",\n        className: \"button\",\n        children: \"View on OpenSea\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"title\", {\n        children: [\"Planetary \\u2013 Planet #\", id]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Planet, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];\n});\n\n_c = Planet;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Planet);\n\nvar _c;\n\n$RefreshReg$(_c, \"Planet\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7OztBQUVBLFNBQVNPLE1BQVQsT0FBOEI7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDNUIsTUFBTUMsTUFBTSxHQUFHVCxzREFBUyxFQUF4QjtBQUNBLE1BQU1VLEVBQU4sR0FBYUQsTUFBTSxDQUFDRSxLQUFwQixDQUFNRCxFQUFOO0FBQ0FBLEVBQUFBLEVBQUUsR0FBR0UsUUFBUSxDQUFDRixFQUFELENBQWI7O0FBRUEsTUFBSSxPQUFPRyxRQUFQLEtBQW9CLFFBQXhCLEVBQWtDO0FBQ2hDQSxJQUFBQSxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLEtBQXpCLENBQStCQyxXQUEvQixDQUEyQyxjQUEzQyxFQUEyRFIsUUFBUSxDQUFDUyxVQUFULENBQW9CQyxTQUEvRTtBQUNBTCxJQUFBQSxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLEtBQXpCLENBQStCQyxXQUEvQixDQUEyQyxtQkFBM0MsRUFBZ0VSLFFBQVEsQ0FBQ1MsVUFBVCxDQUFvQkUsY0FBcEY7QUFDRDs7QUFFRCxNQUFJQyxhQUFhLGdCQUNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7O0FBSUEsTUFBSUMsV0FBVyxnREFBeUNsQixzREFBekMsY0FBNERPLEVBQTVELENBQWY7QUFFQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLDJEQUFEO0FBQVksUUFBRSxFQUFFQSxFQUFoQjtBQUFvQixXQUFLLEVBQUU7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMseURBQUQ7QUFBVSxRQUFFLEVBQUVBLEVBQWQ7QUFBa0IsY0FBUSxFQUFFRjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFJRTtBQUFBLDhCQUNFO0FBQUEsK0JBQWFFLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFHR1UsYUFISCxlQUtFO0FBQUcsWUFBSSxFQUFFQyxXQUFUO0FBQXNCLGNBQU0sRUFBQyxRQUE3QjtBQUFzQyxpQkFBUyxFQUFDLFFBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFjRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUEsZ0RBQTRCWCxFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEY7QUFBQSxrQkFERjtBQW9CRDs7R0FwQ1FIO1VBQ1FQOzs7S0FEUk87O0FBbUVULCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1tpZF0uanM/ZDgwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuaW1wb3J0IHsgd2ViMywgY29udHJhY3QsIGNvbnRyYWN0QWRkcmVzcyB9IGZyb20gJy4uL2xpYi93ZWIzJ1xuXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL05hdmlnYXRpb24nXG5pbXBvcnQgVW5pdmVyc2UgZnJvbSAnLi4vY29tcG9uZW50cy9Vbml2ZXJzZSdcbmltcG9ydCBFdGhOYW1lIGZyb20gJy4uL2NvbXBvbmVudHMvRXRoTmFtZSdcblxuZnVuY3Rpb24gUGxhbmV0KHsgbWV0YWRhdGEgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBsZXQgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5XG4gIGlkID0gcGFyc2VJbnQoaWQpXG5cbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJvYmplY3RcIikge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tbWFpbi1jb2xvclwiLCBtZXRhZGF0YS5wcm9wZXJ0aWVzLm1haW5Db2xvcilcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXNlY29uZGFyeS1jb2xvclwiLCBtZXRhZGF0YS5wcm9wZXJ0aWVzLnNlY29uZGFyeUNvbG9yKVxuICB9XG5cbiAgbGV0IGZvclNhbGVOb3RpY2UgPSAoXG4gICAgPHA+Tm90IGZvciBzYWxlPC9wPlxuICApXG5cbiAgbGV0IG9wZW5TZWFMaW5rID0gYGh0dHBzOi8vdGVzdG5ldHMub3BlbnNlYS5pby9hc3NldHMvJHtjb250cmFjdEFkZHJlc3N9LyR7aWR9YFxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZpZ2F0aW9uIGlkPXtpZH0gdG90YWw9ezV9IC8+XG4gICAgICA8VW5pdmVyc2UgaWQ9e2lkfSBtZXRhZGF0YT17bWV0YWRhdGF9IC8+XG5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDI+UGxhbmV0ICN7aWR9PC9oMj5cblxuICAgICAgICB7Zm9yU2FsZU5vdGljZX1cblxuICAgICAgICA8YSBocmVmPXtvcGVuU2VhTGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnV0dG9uXCI+IFxuICAgICAgICAgIFZpZXcgb24gT3BlblNlYVxuICAgICAgICA8L2E+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UGxhbmV0YXJ5IOKAkyBQbGFuZXQgI3tpZH08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcGF0aHMgPSBbMSwgMiwgMywgNCwgNV0ubWFwKGlkID0+IHtcbiAgICByZXR1cm4geyBwYXJhbXM6IHsgaWQ6IGlkLnRvU3RyaW5nKCkgfX1cbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwYXRocyxcbiAgICBmYWxsYmFjazogdHJ1ZVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG5cbiAgLy8gcGFyYW1zLmlkIGlzIGF2YWlsYWJsZVxuXG4gIGxldCB0b2tlbiA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMudG9rZW5VUkkocGFyYW1zLmlkKS5jYWxsKClcblxuICBsZXQgbWV0YWRhdGFSZXNwb25zZSA9IGF3YWl0IGZldGNoKHRva2VuKVxuICBsZXQgbWV0YWRhdGEgPSBhd2FpdCBtZXRhZGF0YVJlc3BvbnNlLmpzb24oKVxuXG4gIGxldCBvcGVhbnNlYVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcmlua2VieS1hcGkub3BlbnNlYS5pby9hcGkvdjEvYXNzZXRzLyR7dG9rZW59YClcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBtZXRhZGF0YTogbWV0YWRhdGFcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxhbmV0Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkhlYWQiLCJ3ZWIzIiwiY29udHJhY3RBZGRyZXNzIiwiTmF2aWdhdGlvbiIsIlVuaXZlcnNlIiwiRXRoTmFtZSIsIlBsYW5ldCIsIm1ldGFkYXRhIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsInBhcnNlSW50IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwicHJvcGVydGllcyIsIm1haW5Db2xvciIsInNlY29uZGFyeUNvbG9yIiwiZm9yU2FsZU5vdGljZSIsIm9wZW5TZWFMaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[id].js\n");

/***/ })

});