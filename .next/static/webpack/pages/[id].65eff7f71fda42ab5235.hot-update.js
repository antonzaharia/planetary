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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/web3 */ \"./lib/web3.js\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navigation */ \"./components/Navigation.js\");\n/* harmony import */ var _components_Universe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Universe */ \"./components/Universe.js\");\n/* harmony import */ var _components_EthName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/EthName */ \"./components/EthName.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/antonzaharia/apps/planetary/pages/[id].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Planet(_ref) {\n  _s();\n\n  var metadata = _ref.metadata,\n      openSea = _ref.openSea;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n  var id = router.query.id;\n  id = parseInt(id);\n\n  if (typeof document === \"object\") {\n    document.documentElement.style.setProperty(\"--main-color\", metadata.properties.mainColor);\n    document.documentElement.style.setProperty(\"--secondary-color\", metadata.properties.secondaryColor);\n  }\n\n  if (openSea.orders.length > 0) {\n    forSaleNotice = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n      children: \"This is for sale\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }, this);\n  }\n\n  var forSaleNotice = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n    children: \"Not for sale\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, this);\n\n  var openSeaLink = \"https://testnets.opensea.io/assets/\".concat(_lib_web3__WEBPACK_IMPORTED_MODULE_2__.contractAddress, \"/\").concat(id);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_3__.default, {\n      id: id,\n      total: 5\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Universe__WEBPACK_IMPORTED_MODULE_4__.default, {\n      id: id,\n      metadata: metadata\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"section\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"h2\", {\n        children: [\"Planet #\", id]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this), forSaleNotice, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n        href: openSeaLink,\n        target: \"_blank\",\n        className: \"button\",\n        children: \"View on OpenSea\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"title\", {\n        children: [\"Planetary \\u2013 Planet #\", id]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Planet, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];\n});\n\n_c = Planet;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Planet);\n\nvar _c;\n\n$RefreshReg$(_c, \"Planet\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7OztBQUVBLFNBQVNPLE1BQVQsT0FBdUM7QUFBQTs7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBQ3JDLE1BQU1DLE1BQU0sR0FBR1Ysc0RBQVMsRUFBeEI7QUFDQSxNQUFNVyxFQUFOLEdBQWFELE1BQU0sQ0FBQ0UsS0FBcEIsQ0FBTUQsRUFBTjtBQUNBQSxFQUFBQSxFQUFFLEdBQUdFLFFBQVEsQ0FBQ0YsRUFBRCxDQUFiOztBQUVBLE1BQUksT0FBT0csUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUNoQ0EsSUFBQUEsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxLQUF6QixDQUErQkMsV0FBL0IsQ0FBMkMsY0FBM0MsRUFBMkRULFFBQVEsQ0FBQ1UsVUFBVCxDQUFvQkMsU0FBL0U7QUFDQUwsSUFBQUEsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxLQUF6QixDQUErQkMsV0FBL0IsQ0FBMkMsbUJBQTNDLEVBQWdFVCxRQUFRLENBQUNVLFVBQVQsQ0FBb0JFLGNBQXBGO0FBQ0Q7O0FBRUQsTUFBR1gsT0FBTyxDQUFDWSxNQUFSLENBQWVDLE1BQWYsR0FBd0IsQ0FBM0IsRUFBOEI7QUFDNUJDLElBQUFBLGFBQWEsZ0JBQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQUdEOztBQUVELE1BQUlBLGFBQWEsZ0JBQ2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjs7QUFJQSxNQUFJQyxXQUFXLGdEQUF5Q3JCLHNEQUF6QyxjQUE0RFEsRUFBNUQsQ0FBZjtBQUVBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsMkRBQUQ7QUFBWSxRQUFFLEVBQUVBLEVBQWhCO0FBQW9CLFdBQUssRUFBRTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyx5REFBRDtBQUFVLFFBQUUsRUFBRUEsRUFBZDtBQUFrQixjQUFRLEVBQUVIO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUlFO0FBQUEsOEJBQ0U7QUFBQSwrQkFBYUcsRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUdHWSxhQUhILGVBS0U7QUFBRyxZQUFJLEVBQUVDLFdBQVQ7QUFBc0IsY0FBTSxFQUFDLFFBQTdCO0FBQXNDLGlCQUFTLEVBQUMsUUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQWNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQSxnREFBNEJiLEVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRjtBQUFBLGtCQURGO0FBb0JEOztHQTFDUUo7VUFDUVA7OztLQURSTzs7QUE0RVQsK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2lkXS5qcz9kODBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgeyB3ZWIzLCBjb250cmFjdCwgY29udHJhY3RBZGRyZXNzIH0gZnJvbSAnLi4vbGliL3dlYjMnXG5cbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbidcbmltcG9ydCBVbml2ZXJzZSBmcm9tICcuLi9jb21wb25lbnRzL1VuaXZlcnNlJ1xuaW1wb3J0IEV0aE5hbWUgZnJvbSAnLi4vY29tcG9uZW50cy9FdGhOYW1lJ1xuXG5mdW5jdGlvbiBQbGFuZXQoeyBtZXRhZGF0YSwgb3BlblNlYSB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGxldCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcbiAgaWQgPSBwYXJzZUludChpZClcblxuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcIm9iamVjdFwiKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1tYWluLWNvbG9yXCIsIG1ldGFkYXRhLnByb3BlcnRpZXMubWFpbkNvbG9yKVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc2Vjb25kYXJ5LWNvbG9yXCIsIG1ldGFkYXRhLnByb3BlcnRpZXMuc2Vjb25kYXJ5Q29sb3IpXG4gIH1cblxuICBpZihvcGVuU2VhLm9yZGVycy5sZW5ndGggPiAwKSB7XG4gICAgZm9yU2FsZU5vdGljZSA9IChcbiAgICAgICAgPHA+VGhpcyBpcyBmb3Igc2FsZTwvcD5cbiAgICApXG4gIH1cblxuICBsZXQgZm9yU2FsZU5vdGljZSA9IChcbiAgICA8cD5Ob3QgZm9yIHNhbGU8L3A+XG4gIClcblxuICBsZXQgb3BlblNlYUxpbmsgPSBgaHR0cHM6Ly90ZXN0bmV0cy5vcGVuc2VhLmlvL2Fzc2V0cy8ke2NvbnRyYWN0QWRkcmVzc30vJHtpZH1gXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdmlnYXRpb24gaWQ9e2lkfSB0b3RhbD17NX0gLz5cbiAgICAgIDxVbml2ZXJzZSBpZD17aWR9IG1ldGFkYXRhPXttZXRhZGF0YX0gLz5cblxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMj5QbGFuZXQgI3tpZH08L2gyPlxuXG4gICAgICAgIHtmb3JTYWxlTm90aWNlfVxuXG4gICAgICAgIDxhIGhyZWY9e29wZW5TZWFMaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJidXR0b25cIj4gXG4gICAgICAgICAgVmlldyBvbiBPcGVuU2VhXG4gICAgICAgIDwvYT5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5QbGFuZXRhcnkg4oCTIFBsYW5ldCAje2lkfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwYXRocyA9IFsxLCAyLCAzLCA0LCA1XS5tYXAoaWQgPT4ge1xuICAgIHJldHVybiB7IHBhcmFtczogeyBpZDogaWQudG9TdHJpbmcoKSB9fVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IHBhdGhzLFxuICAgIGZhbGxiYWNrOiB0cnVlXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcblxuICAvLyBwYXJhbXMuaWQgaXMgYXZhaWxhYmxlXG5cbiAgbGV0IHRva2VuID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy50b2tlblVSSShwYXJhbXMuaWQpLmNhbGwoKVxuXG4gIGxldCBtZXRhZGF0YVJlc3BvbnNlID0gYXdhaXQgZmV0Y2godG9rZW4pXG4gIGxldCBtZXRhZGF0YSA9IGF3YWl0IG1ldGFkYXRhUmVzcG9uc2UuanNvbigpXG5cbiAgbGV0IG9wZW5TZWFSZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3JpbmtlYnktYXBpLm9wZW5zZWEuaW8vYXBpL3YxL2Fzc2V0LyR7Y29udHJhY3RBZGRyZXNzfS8ke3BhcmFtcy5pZH1gKVxuICBsZXQgb3BlblNlYSA9IGF3YWl0IG9wZW5TZWFSZXNwb25zZS5qc29uKClcbiAgY29uc29sZS5sb2cob3BlblNlYSlcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBtZXRhZGF0YTogbWV0YWRhdGEsXG4gICAgICBvcGVuU2VhOiBvcGVuU2VhXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYW5ldCJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJIZWFkIiwid2ViMyIsImNvbnRyYWN0QWRkcmVzcyIsIk5hdmlnYXRpb24iLCJVbml2ZXJzZSIsIkV0aE5hbWUiLCJQbGFuZXQiLCJtZXRhZGF0YSIsIm9wZW5TZWEiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwicGFyc2VJbnQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJwcm9wZXJ0aWVzIiwibWFpbkNvbG9yIiwic2Vjb25kYXJ5Q29sb3IiLCJvcmRlcnMiLCJsZW5ndGgiLCJmb3JTYWxlTm90aWNlIiwib3BlblNlYUxpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[id].js\n");

/***/ })

});