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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/web3 */ \"./lib/web3.js\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navigation */ \"./components/Navigation.js\");\n/* harmony import */ var _components_Universe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Universe */ \"./components/Universe.js\");\n/* harmony import */ var _components_EthName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/EthName */ \"./components/EthName.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/antonzaharia/apps/planetary/pages/[id].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Planet(_ref) {\n  _s();\n\n  var metadata = _ref.metadata,\n      openSea = _ref.openSea;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n  var id = router.query.id;\n  id = parseInt(id);\n\n  if (typeof document === \"object\") {\n    document.documentElement.style.setProperty(\"--main-color\", metadata.properties.mainColor);\n    document.documentElement.style.setProperty(\"--secondary-color\", metadata.properties.secondaryColor);\n  }\n\n  var forSaleNotice = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n    children: \"Not for sale\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, this);\n\n  if (openSea.orders.length > 0) {\n    var price = _lib_web3__WEBPACK_IMPORTED_MODULE_2__.web3.utils.fromWei(openSea.orders[0].base_price, 'ether');\n    var address = openSea.orders[0].maker.address;\n    forSaleNotice = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n      children: [\"Currently on sale on Opensea for \", price, \" ETH by \", address, \".\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }, this);\n  }\n\n  var openSeaLink = \"https://testnets.opensea.io/assets/\".concat(_lib_web3__WEBPACK_IMPORTED_MODULE_2__.contractAddress, \"/\").concat(id);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_3__.default, {\n      id: id,\n      total: 5\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Universe__WEBPACK_IMPORTED_MODULE_4__.default, {\n      id: id,\n      metadata: metadata\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"section\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"h2\", {\n        children: [\"Planet #\", id]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this), forSaleNotice, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n        href: openSeaLink,\n        target: \"_blank\",\n        className: \"button\",\n        children: \"View on OpenSea\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"title\", {\n        children: [\"Planetary \\u2013 Planet #\", id]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Planet, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];\n});\n\n_c = Planet;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Planet);\n\nvar _c;\n\n$RefreshReg$(_c, \"Planet\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7OztBQUVBLFNBQVNPLE1BQVQsT0FBdUM7QUFBQTs7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBQ3JDLE1BQU1DLE1BQU0sR0FBR1Ysc0RBQVMsRUFBeEI7QUFDQSxNQUFNVyxFQUFOLEdBQWFELE1BQU0sQ0FBQ0UsS0FBcEIsQ0FBTUQsRUFBTjtBQUNBQSxFQUFBQSxFQUFFLEdBQUdFLFFBQVEsQ0FBQ0YsRUFBRCxDQUFiOztBQUVBLE1BQUksT0FBT0csUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUNoQ0EsSUFBQUEsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxLQUF6QixDQUErQkMsV0FBL0IsQ0FBMkMsY0FBM0MsRUFBMkRULFFBQVEsQ0FBQ1UsVUFBVCxDQUFvQkMsU0FBL0U7QUFDQUwsSUFBQUEsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxLQUF6QixDQUErQkMsV0FBL0IsQ0FBMkMsbUJBQTNDLEVBQWdFVCxRQUFRLENBQUNVLFVBQVQsQ0FBb0JFLGNBQXBGO0FBQ0Q7O0FBRUQsTUFBSUMsYUFBYSxnQkFDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGOztBQUlBLE1BQUlaLE9BQU8sQ0FBQ2EsTUFBUixDQUFlQyxNQUFmLEdBQXdCLENBQTVCLEVBQStCO0FBQzdCLFFBQU1DLEtBQUssR0FBR3RCLHlEQUFBLENBQW1CTyxPQUFPLENBQUNhLE1BQVIsQ0FBZSxDQUFmLEVBQWtCSyxVQUFyQyxFQUFpRCxPQUFqRCxDQUFkO0FBQ0EsUUFBTUMsT0FBTyxHQUFHbkIsT0FBTyxDQUFDYSxNQUFSLENBQWUsQ0FBZixFQUFrQk8sS0FBbEIsQ0FBd0JELE9BQXhDO0FBQ0FQLElBQUFBLGFBQWEsZ0JBQ1Q7QUFBQSxzREFBcUNHLEtBQXJDLGNBQW9ESSxPQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQUdEOztBQUVELE1BQUlFLFdBQVcsZ0RBQXlDM0Isc0RBQXpDLGNBQTREUSxFQUE1RCxDQUFmO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQywyREFBRDtBQUFZLFFBQUUsRUFBRUEsRUFBaEI7QUFBb0IsV0FBSyxFQUFFO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLHlEQUFEO0FBQVUsUUFBRSxFQUFFQSxFQUFkO0FBQWtCLGNBQVEsRUFBRUg7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBSUU7QUFBQSw4QkFDRTtBQUFBLCtCQUFhRyxFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBR0dVLGFBSEgsZUFLRTtBQUFHLFlBQUksRUFBRVMsV0FBVDtBQUFzQixjQUFNLEVBQUMsUUFBN0I7QUFBc0MsaUJBQVMsRUFBQyxRQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBY0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBLGdEQUE0Qm5CLEVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRjtBQUFBLGtCQURGO0FBb0JEOztHQTVDUUo7VUFDUVA7OztLQURSTzs7QUE4RVQsK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2lkXS5qcz9kODBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgeyB3ZWIzLCBjb250cmFjdCwgY29udHJhY3RBZGRyZXNzIH0gZnJvbSAnLi4vbGliL3dlYjMnXG5cbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbidcbmltcG9ydCBVbml2ZXJzZSBmcm9tICcuLi9jb21wb25lbnRzL1VuaXZlcnNlJ1xuaW1wb3J0IEV0aE5hbWUgZnJvbSAnLi4vY29tcG9uZW50cy9FdGhOYW1lJ1xuXG5mdW5jdGlvbiBQbGFuZXQoeyBtZXRhZGF0YSwgb3BlblNlYSB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGxldCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcbiAgaWQgPSBwYXJzZUludChpZClcblxuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcIm9iamVjdFwiKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1tYWluLWNvbG9yXCIsIG1ldGFkYXRhLnByb3BlcnRpZXMubWFpbkNvbG9yKVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc2Vjb25kYXJ5LWNvbG9yXCIsIG1ldGFkYXRhLnByb3BlcnRpZXMuc2Vjb25kYXJ5Q29sb3IpXG4gIH1cblxuICBsZXQgZm9yU2FsZU5vdGljZSA9IChcbiAgICA8cD5Ob3QgZm9yIHNhbGU8L3A+XG4gIClcbiAgXG4gIGlmIChvcGVuU2VhLm9yZGVycy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcHJpY2UgPSB3ZWIzLnV0aWxzLmZyb21XZWkob3BlblNlYS5vcmRlcnNbMF0uYmFzZV9wcmljZSwgJ2V0aGVyJylcbiAgICBjb25zdCBhZGRyZXNzID0gb3BlblNlYS5vcmRlcnNbMF0ubWFrZXIuYWRkcmVzc1xuICAgIGZvclNhbGVOb3RpY2UgPSAoXG4gICAgICAgIDxwPkN1cnJlbnRseSBvbiBzYWxlIG9uIE9wZW5zZWEgZm9yIHtwcmljZX0gRVRIIGJ5IHthZGRyZXNzfS48L3A+XG4gICAgKVxuICB9XG5cbiAgbGV0IG9wZW5TZWFMaW5rID0gYGh0dHBzOi8vdGVzdG5ldHMub3BlbnNlYS5pby9hc3NldHMvJHtjb250cmFjdEFkZHJlc3N9LyR7aWR9YFxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZpZ2F0aW9uIGlkPXtpZH0gdG90YWw9ezV9IC8+XG4gICAgICA8VW5pdmVyc2UgaWQ9e2lkfSBtZXRhZGF0YT17bWV0YWRhdGF9IC8+XG5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDI+UGxhbmV0ICN7aWR9PC9oMj5cblxuICAgICAgICB7Zm9yU2FsZU5vdGljZX1cblxuICAgICAgICA8YSBocmVmPXtvcGVuU2VhTGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnV0dG9uXCI+IFxuICAgICAgICAgIFZpZXcgb24gT3BlblNlYVxuICAgICAgICA8L2E+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UGxhbmV0YXJ5IOKAkyBQbGFuZXQgI3tpZH08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcGF0aHMgPSBbMSwgMiwgMywgNCwgNV0ubWFwKGlkID0+IHtcbiAgICByZXR1cm4geyBwYXJhbXM6IHsgaWQ6IGlkLnRvU3RyaW5nKCkgfX1cbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwYXRocyxcbiAgICBmYWxsYmFjazogdHJ1ZVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG5cbiAgLy8gcGFyYW1zLmlkIGlzIGF2YWlsYWJsZVxuXG4gIGxldCB0b2tlbiA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMudG9rZW5VUkkocGFyYW1zLmlkKS5jYWxsKClcblxuICBsZXQgbWV0YWRhdGFSZXNwb25zZSA9IGF3YWl0IGZldGNoKHRva2VuKVxuICBsZXQgbWV0YWRhdGEgPSBhd2FpdCBtZXRhZGF0YVJlc3BvbnNlLmpzb24oKVxuXG4gIGxldCBvcGVuU2VhUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9yaW5rZWJ5LWFwaS5vcGVuc2VhLmlvL2FwaS92MS9hc3NldC8ke2NvbnRyYWN0QWRkcmVzc30vJHtwYXJhbXMuaWR9YClcbiAgbGV0IG9wZW5TZWEgPSBhd2FpdCBvcGVuU2VhUmVzcG9uc2UuanNvbigpXG4gIGNvbnNvbGUubG9nKG9wZW5TZWEpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbWV0YWRhdGE6IG1ldGFkYXRhLFxuICAgICAgb3BlblNlYTogb3BlblNlYVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGFuZXQiXSwibmFtZXMiOlsidXNlUm91dGVyIiwiSGVhZCIsIndlYjMiLCJjb250cmFjdEFkZHJlc3MiLCJOYXZpZ2F0aW9uIiwiVW5pdmVyc2UiLCJFdGhOYW1lIiwiUGxhbmV0IiwibWV0YWRhdGEiLCJvcGVuU2VhIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsInBhcnNlSW50IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwicHJvcGVydGllcyIsIm1haW5Db2xvciIsInNlY29uZGFyeUNvbG9yIiwiZm9yU2FsZU5vdGljZSIsIm9yZGVycyIsImxlbmd0aCIsInByaWNlIiwidXRpbHMiLCJmcm9tV2VpIiwiYmFzZV9wcmljZSIsImFkZHJlc3MiLCJtYWtlciIsIm9wZW5TZWFMaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[id].js\n");

/***/ })

});