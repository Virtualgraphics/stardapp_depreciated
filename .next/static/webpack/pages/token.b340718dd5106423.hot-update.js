"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/token",{

/***/ "./components/templates/token/Token.tsx":
/*!**********************************************!*\
  !*** ./components/templates/token/Token.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @thirdweb-dev/react */ \"./node_modules/@thirdweb-dev/react/dist/thirdweb-dev-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Token = ()=>{\n    _s();\n    const { contract: tokenDropContract  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract)(\"0xd23342d614a1ff1d7bc84b9041C8615532D55C6D\");\n    const [amountToClaim, setAmountToClaim] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"justify-center px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-screen-sm sm:text-center sm:mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-auto w-96 py-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://www.skygodz.com/wp-content/uploads/2022/12/star_divider.svg\",\n                            alt: \"stars\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"m-auto mb-4 text-3xl font-bold tracking-tight text-yellow-100 sm:text-4xl sm:leading-none sm:m-auto font-Cinzel py-5\",\n                        children: \"SKY GODZ: Tokens\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                        className: \"w-full border-yellow-200\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-base text-white lg:text-2xl md:text-lg sm:px-4 py-5 font-Proza\",\n                        children: \"Claim your SKY GODZ LOTUS and STARDUST tokens below and play the Stargazer Games.\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-2 gap-20 place-content-stretch w-full h-96\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-indigo-900 rounded-2xl \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"m-auto w-64 rounded-full mt-5 \",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"https://www.skygodz.com/wp-content/uploads/2023/01/token_lotus750.jpg\",\n                                            alt: \"lotus\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"text-white text-2xl\",\n                                            children: \"LOTUS Token\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 11\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-white text-lg\",\n                                            children: \"Claim your LOTUS Tokens\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 11\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 1\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 1\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-indigo-900 rounded-2xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"m-auto w-64 rounded-full mt-5\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"https://www.skygodz.com/wp-content/uploads/2023/01/token_stardust750.jpg\",\n                                            alt: \"lotus\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"text-white text-2xl\",\n                                            children: \"STARDUST Token\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 1\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-white text-lg\",\n                                            children: \"Claim your STARDUST Tokens\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 1\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 1\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 1\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 1\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                lineNumber: 16,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 mt-20 sm:grid-cols-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"duration-300 transform bg-blue-400 border-l-4 border-deep-purple-accent-900 hover:-translate-y-2 rounded-2xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-full p-5 rounded-r shadow-sm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    className: \"mb-2 font-semibold leading-5\",\n                                    children: \"The doctor said\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-gray-900\",\n                                    children: \"Sportacus andrew weatherall goose Refined gentlemen super mario des lynam alpha trion zap rowsdower.\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"duration-300 transform bg-blue-400 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-full p-5 rounded-r shadow-sm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    className: \"mb-2 font-semibold leading-5\",\n                                    children: \"Skate ipsum dolor\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-gray-900\",\n                                    children: \"Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"duration-300 transform bg-blue-400 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-full p-5 rounded-r shadow-sm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    className: \"mb-2 font-semibold leading-5\",\n                                    children: \"Baseball ipsum dolor\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-gray-900\",\n                                    children: \"Bro ipsum dolor sit amet gaper backside single track, manny Bike epic clipless. Schraeder drop gondy.\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                lineNumber: 69,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Token, \"XPAqr5w+cPK6Hi+OWyfbR7WvAA0=\", false, function() {\n    return [\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract\n    ];\n});\n_c = Token;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Token);\nvar _c;\n$RefreshReg$(_c, \"Token\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RlbXBsYXRlcy90b2tlbi9Ub2tlbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQWdHO0FBRy9EO0FBSWpDLE1BQU1FLFFBQVEsSUFBTTs7SUFDbEIsTUFBTSxFQUFFQyxVQUFVQyxrQkFBaUIsRUFBQyxHQUFHSixnRUFBV0EsQ0FBQztJQUNuRCxNQUFNLENBQUNLLGVBQWVDLGlCQUFpQixHQUFHTCwrQ0FBUUEsQ0FBQztJQUkvQyxxQkFDRSw4REFBQ007UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FHWCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2YsNEVBQUNDOzRCQUVEQyxLQUFJOzRCQUNKQyxLQUFJOzs7Ozs7Ozs7OztrQ0FJTiw4REFBQ0M7d0JBQUdKLFdBQVU7a0NBQXVIOzs7Ozs7a0NBR3JJLDhEQUFDSzt3QkFBR0wsV0FBVTs7Ozs7O2tDQUNkLDhEQUFDTTt3QkFBRU4sV0FBVTtrQ0FBc0U7Ozs7OztrQ0FJL0YsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDZiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2YsNEVBQUNEO29DQUFJQyxXQUFVOztzREFDRCw4REFBQ0M7NENBRURDLEtBQUk7NENBQ0pDLEtBQUk7Ozs7OztzREFHUiw4REFBQ0k7NENBQUdQLFdBQVU7c0RBQXNCOzs7Ozs7c0RBRXBDLDhEQUFDSTs0Q0FBR0osV0FBVTtzREFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUs3Qyw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2YsNEVBQUNEO29DQUFJQyxXQUFVOztzREFDRCw4REFBQ0M7NENBRURDLEtBQUk7NENBQ0pDLEtBQUk7Ozs7OztzREFHbEIsOERBQUNJOzRDQUFHUCxXQUFVO3NEQUFzQjs7Ozs7O3NEQUVwQyw4REFBQ0k7NENBQUdKLFdBQVU7c0RBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFRekIsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDakIsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNRO29DQUFHUixXQUFVOzhDQUErQjs7Ozs7OzhDQUM3Qyw4REFBQ007b0NBQUVOLFdBQVU7OENBQXdCOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNekMsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNRO29DQUFHUixXQUFVOzhDQUErQjs7Ozs7OzhDQUM3Qyw4REFBQ007b0NBQUVOLFdBQVU7OENBQXdCOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLekMsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNRO29DQUFHUixXQUFVOzhDQUErQjs7Ozs7OzhDQUc3Qyw4REFBQ007b0NBQUVOLFdBQVU7OENBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWE3QztHQWpHRU47O1FBQ21DRiw0REFBV0E7OztLQUQ5Q0U7QUFvR0osK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvdG9rZW4vVG9rZW4udHN4PzYwM2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNZWRpYVJlbmRlcmVyLCB1c2VDb250cmFjdCwgdXNlQ29udHJhY3RNZXRhZGF0YSwgV2ViM0J1dHRvbn0gZnJvbSBcIkB0aGlyZHdlYi1kZXYvcmVhY3RcIjtcclxuaW1wb3J0IHsgRWRpdGlvbkRyb3AsIEVyYzExNTUgfSBmcm9tICdAdGhpcmR3ZWItZGV2L3Nkayc7XHJcbmltcG9ydCB7IEJpZ051bWJlciB9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5cclxuY29uc3QgVG9rZW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBjb250cmFjdDogdG9rZW5Ecm9wQ29udHJhY3R9ID0gdXNlQ29udHJhY3QoXCIweGQyMzM0MmQ2MTRhMWZmMWQ3YmM4NGI5MDQxQzg2MTU1MzJENTVDNkRcIik7XHJcbiAgY29uc3QgW2Ftb3VudFRvQ2xhaW0sIHNldEFtb3VudFRvQ2xhaW1dID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgXHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXIgcHgtNCBweS0xNiBteC1hdXRvIHNtOm1heC13LXhsIG1kOm1heC13LWZ1bGwgbGc6bWF4LXctc2NyZWVuLXhsIG1kOnB4LTI0IGxnOnB4LTggbGc6cHktMjBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLXNtIHNtOnRleHQtY2VudGVyIHNtOm14LWF1dG9cIj5cclxuICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0byB3LTk2IHB5LTVcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnNreWdvZHouY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIyLzEyL3N0YXJfZGl2aWRlci5zdmdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cInN0YXJzXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm0tYXV0byBtYi00IHRleHQtM3hsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LXllbGxvdy0xMDAgc206dGV4dC00eGwgc206bGVhZGluZy1ub25lIHNtOm0tYXV0byBmb250LUNpbnplbCBweS01XCI+XHJcbiAgICAgICAgICAgIFNLWSBHT0RaOiBUb2tlbnNcclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInctZnVsbCAgYm9yZGVyLXllbGxvdy0yMDBcIiAvPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC13aGl0ZSBsZzp0ZXh0LTJ4bCBtZDp0ZXh0LWxnIHNtOnB4LTQgcHktNSBmb250LVByb3phXCI+XHJcbiAgICAgICAgICAgQ2xhaW0geW91ciBTS1kgR09EWiBMT1RVUyBhbmQgU1RBUkRVU1QgdG9rZW5zIGJlbG93IGFuZCBwbGF5IHRoZSBTdGFyZ2F6ZXIgR2FtZXMuIFxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG48ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTIwIHBsYWNlLWNvbnRlbnQtc3RyZXRjaCB3LWZ1bGwgaC05NlwiPlxyXG48ZGl2IGNsYXNzTmFtZT1cImJnLWluZGlnby05MDAgIHJvdW5kZWQtMnhsICBcIiA+XHJcbjxkaXYgY2xhc3NOYW1lPVwibS1hdXRvIHctNjQgcm91bmRlZC1mdWxsIG10LTUgXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5za3lnb2R6LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMy8wMS90b2tlbl9sb3R1czc1MC5qcGdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cImxvdHVzXCJcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTJ4bFwiPkxPVFVTIFRva2VuPC9oMT5cclxuXHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWxnXCI+Q2xhaW0geW91ciBMT1RVUyBUb2tlbnM8L2gyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIFxyXG5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPVwiYmctaW5kaWdvLTkwMCAgcm91bmRlZC0yeGxcIj5cclxuPGRpdiBjbGFzc05hbWU9XCJtLWF1dG8gdy02NCByb3VuZGVkLWZ1bGwgbXQtNVwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnNreWdvZHouY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIzLzAxL3Rva2VuX3N0YXJkdXN0NzUwLmpwZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwibG90dXNcIlxyXG4gICAgICAgICAgICAvPlxyXG5cclxuPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0yeGxcIj5TVEFSRFVTVCBUb2tlbjwvaDE+XHJcblxyXG48aDIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWxnXCI+Q2xhaW0geW91ciBTVEFSRFVTVCBUb2tlbnM8L2gyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuPC9kaXY+XHJcblxyXG48L2Rpdj5cclxuPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC04IHJvdy1nYXAtNSBtYi04IG1kOnJvdy1nYXAtOCBsZzpncmlkLWNvbHMtMyBtdC0yMCBzbTpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVyYXRpb24tMzAwIHRyYW5zZm9ybSBiZy1ibHVlLTQwMCBib3JkZXItbC00IGJvcmRlci1kZWVwLXB1cnBsZS1hY2NlbnQtOTAwIGhvdmVyOi10cmFuc2xhdGUteS0yIHJvdW5kZWQtMnhsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBwLTUgIHJvdW5kZWQtciBzaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1iLTIgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTVcIj5UaGUgZG9jdG9yIHNhaWQ8L2g2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICBTcG9ydGFjdXMgYW5kcmV3IHdlYXRoZXJhbGwgZ29vc2UgUmVmaW5lZCBnZW50bGVtZW4gc3VwZXIgbWFyaW9cclxuICAgICAgICAgICAgICBkZXMgbHluYW0gYWxwaGEgdHJpb24gemFwIHJvd3Nkb3dlci5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIGJnLWJsdWUtNDAwIGJvcmRlci1sLTQgYm9yZGVyLWRlZXAtcHVycGxlLWFjY2VudC00MDAgaG92ZXI6LXRyYW5zbGF0ZS15LTIgcm91bmRlZC0yeGxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHAtNSAgcm91bmRlZC1yIHNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibWItMiBmb250LXNlbWlib2xkIGxlYWRpbmctNVwiPlNrYXRlIGlwc3VtIGRvbG9yPC9oNj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgQnVsYmFzYXVyIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVyYXRpb24tMzAwIHRyYW5zZm9ybSBiZy1ibHVlLTQwMCBib3JkZXItbC00IGJvcmRlci1kZWVwLXB1cnBsZS1hY2NlbnQtNDAwIGhvdmVyOi10cmFuc2xhdGUteS0yIHJvdW5kZWQtMnhsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBwLTUgIHJvdW5kZWQtciBzaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1iLTIgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTVcIj5cclxuICAgICAgICAgICAgICBCYXNlYmFsbCBpcHN1bSBkb2xvclxyXG4gICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICBCcm8gaXBzdW0gZG9sb3Igc2l0IGFtZXQgZ2FwZXIgYmFja3NpZGUgc2luZ2xlIHRyYWNrLCBtYW5ueSBCaWtlXHJcbiAgICAgICAgICAgICAgZXBpYyBjbGlwbGVzcy4gU2NocmFlZGVyIGRyb3AgZ29uZHkuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuXHJcblxyXG4gPC9kaXY+XHJcblxyXG4gICAgICApO1xyXG4gICAgfTtcclxuXHJcbiBcclxuICBleHBvcnQgZGVmYXVsdCBUb2tlbjsiXSwibmFtZXMiOlsidXNlQ29udHJhY3QiLCJ1c2VTdGF0ZSIsIlRva2VuIiwiY29udHJhY3QiLCJ0b2tlbkRyb3BDb250cmFjdCIsImFtb3VudFRvQ2xhaW0iLCJzZXRBbW91bnRUb0NsYWltIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiaDIiLCJociIsInAiLCJoMSIsImg2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/templates/token/Token.tsx\n"));

/***/ })

});