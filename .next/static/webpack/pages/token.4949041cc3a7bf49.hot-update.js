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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @thirdweb-dev/react */ \"./node_modules/@thirdweb-dev/react/dist/thirdweb-dev-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Token = ()=>{\n    _s();\n    const { contract: tokenDropContract  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract)(\"0xd23342d614a1ff1d7bc84b9041C8615532D55C6D\");\n    const [amountToClaim, setAmountToClaim] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"justify-center px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-screen-sm sm:text-center sm:mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-auto w-96 py-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://www.skygodz.com/wp-content/uploads/2022/12/star_divider.svg\",\n                            alt: \"stars\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"m-auto mb-4 text-3xl font-bold tracking-tight text-yellow-100 sm:text-4xl sm:leading-none sm:m-auto font-Cinzel py-5\",\n                        children: \"SKY GODZ: Tokens\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                        className: \"w-full border-yellow-200\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-base text-white lg:text-2xl md:text-lg sm:px-4 py-5 font-Proza\",\n                        children: \"Claim your SKY GODZ LOTUS and STARDUST tokens below and play the Stargazer Games.\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-2 gap-20 place-content-stretch w-full h-96\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-indigo-900 rounded-2xl \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"m-auto w-64 rounded-full mt-5 \",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"https://www.skygodz.com/wp-content/uploads/2023/01/token_lotus750.jpg\",\n                                            alt: \"lotus\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"text-white text-2xl\",\n                                            children: \"LOTUS Token\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 11\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-white text-lg\",\n                                            children: \"Claim your LOTUS Tokens\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 11\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            placeholder: \"Enter amount to claim\",\n                                            className: \"flex-grow max-w-sm h-12 px-2 mb-3 text-blue-200 transitiom duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline\",\n                                            onChange: (e)=>setAmountToClaim(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 11\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 1\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 1\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-indigo-900 rounded-2xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"m-auto w-64 rounded-full mt-5\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"https://www.skygodz.com/wp-content/uploads/2023/01/token_stardust750.jpg\",\n                                            alt: \"lotus\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"text-white text-2xl\",\n                                            children: \"STARDUST Token\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 1\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-white text-lg\",\n                                            children: \"Claim your STARDUST Tokens\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 1\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 1\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 1\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 1\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                lineNumber: 16,\n                columnNumber: 11\n            }, undefined),\n            \"-----------------------\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 mt-20 sm:grid-cols-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"duration-300 transform bg-blue-400 border-l-4 border-deep-purple-accent-900 hover:-translate-y-2 rounded-2xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-full p-5 rounded-r shadow-sm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    className: \"mb-2 font-semibold leading-5\",\n                                    children: \"The doctor said\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-gray-900\",\n                                    children: \"Sportacus andrew weatherall goose Refined gentlemen super mario des lynam alpha trion zap rowsdower.\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"duration-300 transform bg-blue-400 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-full p-5 rounded-r shadow-sm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    className: \"mb-2 font-semibold leading-5\",\n                                    children: \"Skate ipsum dolor\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-gray-900\",\n                                    children: \"Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"duration-300 transform bg-blue-400 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-full p-5 rounded-r shadow-sm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    className: \"mb-2 font-semibold leading-5\",\n                                    children: \"Baseball ipsum dolor\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-gray-900\",\n                                    children: \"Bro ipsum dolor sit amet gaper backside single track, manny Bike epic clipless. Schraeder drop gondy.\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                lineNumber: 81,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Token, \"XPAqr5w+cPK6Hi+OWyfbR7WvAA0=\", false, function() {\n    return [\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract\n    ];\n});\n_c = Token;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Token);\nvar _c;\n$RefreshReg$(_c, \"Token\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RlbXBsYXRlcy90b2tlbi9Ub2tlbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQWdHO0FBRy9EO0FBSWpDLE1BQU1FLFFBQVEsSUFBTTs7SUFDbEIsTUFBTSxFQUFFQyxVQUFVQyxrQkFBaUIsRUFBQyxHQUFHSixnRUFBV0EsQ0FBQztJQUNuRCxNQUFNLENBQUNLLGVBQWVDLGlCQUFpQixHQUFHTCwrQ0FBUUEsQ0FBQztJQUkvQyxxQkFDRSw4REFBQ007UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FHWCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2YsNEVBQUNDOzRCQUVEQyxLQUFJOzRCQUNKQyxLQUFJOzs7Ozs7Ozs7OztrQ0FJTiw4REFBQ0M7d0JBQUdKLFdBQVU7a0NBQXVIOzs7Ozs7a0NBR3JJLDhEQUFDSzt3QkFBR0wsV0FBVTs7Ozs7O2tDQUNkLDhEQUFDTTt3QkFBRU4sV0FBVTtrQ0FBc0U7Ozs7OztrQ0FJL0YsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FFZiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2YsNEVBQUNEO29DQUFJQyxXQUFVOztzREFDRCw4REFBQ0M7NENBRURDLEtBQUk7NENBQ0pDLEtBQUk7Ozs7OztzREFHUiw4REFBQ0k7NENBQUdQLFdBQVU7c0RBQXNCOzs7Ozs7c0RBQ3BDLDhEQUFDSTs0Q0FBR0osV0FBVTtzREFBcUI7Ozs7OztzREFFbkMsOERBQUNROzRDQUNQQyxNQUFLOzRDQUNMQyxhQUFZOzRDQUNoQlYsV0FBVTs0Q0FHTlcsVUFBVSxDQUFDQyxJQUFNZCxpQkFBaUJjLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBUXBELDhEQUFDZjtnQ0FBSUMsV0FBVTswQ0FDZiw0RUFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNELDhEQUFDQzs0Q0FFREMsS0FBSTs0Q0FDSkMsS0FBSTs7Ozs7O3NEQUdsQiw4REFBQ0k7NENBQUdQLFdBQVU7c0RBQXNCOzs7Ozs7c0RBQ3BDLDhEQUFDSTs0Q0FBR0osV0FBVTtzREFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUTdCOzBCQUVJLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2pCLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDZTtvQ0FBR2YsV0FBVTs4Q0FBK0I7Ozs7Ozs4Q0FDN0MsOERBQUNNO29DQUFFTixXQUFVOzhDQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTXpDLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDZTtvQ0FBR2YsV0FBVTs4Q0FBK0I7Ozs7Ozs4Q0FDN0MsOERBQUNNO29DQUFFTixXQUFVOzhDQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS3pDLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDZTtvQ0FBR2YsV0FBVTs4Q0FBK0I7Ozs7Ozs4Q0FHN0MsOERBQUNNO29DQUFFTixXQUFVOzhDQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhN0M7R0E3R0VOOztRQUNtQ0YsNERBQVdBOzs7S0FEOUNFO0FBZ0hKLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGVtcGxhdGVzL3Rva2VuL1Rva2VuLnRzeD82MDNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWVkaWFSZW5kZXJlciwgdXNlQ29udHJhY3QsIHVzZUNvbnRyYWN0TWV0YWRhdGEsIFdlYjNCdXR0b259IGZyb20gXCJAdGhpcmR3ZWItZGV2L3JlYWN0XCI7XHJcbmltcG9ydCB7IEVkaXRpb25Ecm9wLCBFcmMxMTU1IH0gZnJvbSAnQHRoaXJkd2ViLWRldi9zZGsnO1xyXG5pbXBvcnQgeyBCaWdOdW1iZXIgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IFRva2VuID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgY29udHJhY3Q6IHRva2VuRHJvcENvbnRyYWN0fSA9IHVzZUNvbnRyYWN0KFwiMHhkMjMzNDJkNjE0YTFmZjFkN2JjODRiOTA0MUM4NjE1NTMyRDU1QzZEXCIpO1xyXG4gIGNvbnN0IFthbW91bnRUb0NsYWltLCBzZXRBbW91bnRUb0NsYWltXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIFxyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY2VudGVyIHB4LTQgcHktMTYgbXgtYXV0byBzbTptYXgtdy14bCBtZDptYXgtdy1mdWxsIGxnOm1heC13LXNjcmVlbi14bCBtZDpweC0yNCBsZzpweC04IGxnOnB5LTIwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbi1zbSBzbTp0ZXh0LWNlbnRlciBzbTpteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWF1dG8gdy05NiBweS01XCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5za3lnb2R6LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMi8xMi9zdGFyX2RpdmlkZXIuc3ZnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJzdGFyc1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtLWF1dG8gbWItNCB0ZXh0LTN4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC15ZWxsb3ctMTAwIHNtOnRleHQtNHhsIHNtOmxlYWRpbmctbm9uZSBzbTptLWF1dG8gZm9udC1DaW56ZWwgcHktNVwiPlxyXG4gICAgICAgICAgICBTS1kgR09EWjogVG9rZW5zXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJ3LWZ1bGwgIGJvcmRlci15ZWxsb3ctMjAwXCIgLz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHRleHQtd2hpdGUgbGc6dGV4dC0yeGwgbWQ6dGV4dC1sZyBzbTpweC00IHB5LTUgZm9udC1Qcm96YVwiPlxyXG4gICAgICAgICAgIENsYWltIHlvdXIgU0tZIEdPRFogTE9UVVMgYW5kIFNUQVJEVVNUIHRva2VucyBiZWxvdyBhbmQgcGxheSB0aGUgU3RhcmdhemVyIEdhbWVzLiBcclxuICAgICAgICAgICAgPC9wPlxyXG5cclxuPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0yMCBwbGFjZS1jb250ZW50LXN0cmV0Y2ggdy1mdWxsIGgtOTZcIj5cclxuXHJcbjxkaXYgY2xhc3NOYW1lPVwiYmctaW5kaWdvLTkwMCAgcm91bmRlZC0yeGwgIFwiID5cclxuPGRpdiBjbGFzc05hbWU9XCJtLWF1dG8gdy02NCByb3VuZGVkLWZ1bGwgbXQtNSBcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnNreWdvZHouY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIzLzAxL3Rva2VuX2xvdHVzNzUwLmpwZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwibG90dXNcIlxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtMnhsXCI+TE9UVVMgVG9rZW48L2gxPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1sZ1wiPkNsYWltIHlvdXIgTE9UVVMgVG9rZW5zPC9oMj5cclxuXHJcbiAgICAgICAgICA8aW5wdXQgXHJcbiAgICB0eXBlPVwidGV4dFwiICBcclxuICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYW1vdW50IHRvIGNsYWltXCIgXHJcbmNsYXNzTmFtZT1cImZsZXgtZ3JvdyBtYXgtdy1zbSBoLTEyIHB4LTIgbWItMyB0ZXh0LWJsdWUtMjAwIHRyYW5zaXRpb20gZHVyYXRpb24tMjAwIGJvcmRlci0yIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkIGFwcGVhcmFuY2Utbm9uZSBtZDptci0yIG1kOm1iLTAgYmctZGVlcC1wdXJwbGUtOTAwIGZvY3VzOmJvcmRlci10ZWFsLWFjY2VudC03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgXHJcbiAgIFxyXG4gICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBbW91bnRUb0NsYWltKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgIFxyXG4gICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuPGRpdiBjbGFzc05hbWU9XCJiZy1pbmRpZ28tOTAwICByb3VuZGVkLTJ4bFwiPlxyXG48ZGl2IGNsYXNzTmFtZT1cIm0tYXV0byB3LTY0IHJvdW5kZWQtZnVsbCBtdC01XCI+XHJcbiAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc2t5Z29kei5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjMvMDEvdG9rZW5fc3RhcmR1c3Q3NTAuanBnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJsb3R1c1wiXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG48aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTJ4bFwiPlNUQVJEVVNUIFRva2VuPC9oMT5cclxuPGgyIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1sZ1wiPkNsYWltIHlvdXIgU1RBUkRVU1QgVG9rZW5zPC9oMj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgXHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtOCByb3ctZ2FwLTUgbWItOCBtZDpyb3ctZ2FwLTggbGc6Z3JpZC1jb2xzLTMgbXQtMjAgc206Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gYmctYmx1ZS00MDAgYm9yZGVyLWwtNCBib3JkZXItZGVlcC1wdXJwbGUtYWNjZW50LTkwMCBob3ZlcjotdHJhbnNsYXRlLXktMiByb3VuZGVkLTJ4bFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgcC01ICByb3VuZGVkLXIgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtYi0yIGZvbnQtc2VtaWJvbGQgbGVhZGluZy01XCI+VGhlIGRvY3RvciBzYWlkPC9oNj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgU3BvcnRhY3VzIGFuZHJldyB3ZWF0aGVyYWxsIGdvb3NlIFJlZmluZWQgZ2VudGxlbWVuIHN1cGVyIG1hcmlvXHJcbiAgICAgICAgICAgICAgZGVzIGx5bmFtIGFscGhhIHRyaW9uIHphcCByb3dzZG93ZXIuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVyYXRpb24tMzAwIHRyYW5zZm9ybSBiZy1ibHVlLTQwMCBib3JkZXItbC00IGJvcmRlci1kZWVwLXB1cnBsZS1hY2NlbnQtNDAwIGhvdmVyOi10cmFuc2xhdGUteS0yIHJvdW5kZWQtMnhsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBwLTUgIHJvdW5kZWQtciBzaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1iLTIgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTVcIj5Ta2F0ZSBpcHN1bSBkb2xvcjwvaDY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgIEJ1bGJhc2F1ciBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gYmctYmx1ZS00MDAgYm9yZGVyLWwtNCBib3JkZXItZGVlcC1wdXJwbGUtYWNjZW50LTQwMCBob3ZlcjotdHJhbnNsYXRlLXktMiByb3VuZGVkLTJ4bFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgcC01ICByb3VuZGVkLXIgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtYi0yIGZvbnQtc2VtaWJvbGQgbGVhZGluZy01XCI+XHJcbiAgICAgICAgICAgICAgQmFzZWJhbGwgaXBzdW0gZG9sb3JcclxuICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgQnJvIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGdhcGVyIGJhY2tzaWRlIHNpbmdsZSB0cmFjaywgbWFubnkgQmlrZVxyXG4gICAgICAgICAgICAgIGVwaWMgY2xpcGxlc3MuIFNjaHJhZWRlciBkcm9wIGdvbmR5LlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcblxyXG5cclxuIDwvZGl2PlxyXG5cclxuICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gXHJcbiAgZXhwb3J0IGRlZmF1bHQgVG9rZW47Il0sIm5hbWVzIjpbInVzZUNvbnRyYWN0IiwidXNlU3RhdGUiLCJUb2tlbiIsImNvbnRyYWN0IiwidG9rZW5Ecm9wQ29udHJhY3QiLCJhbW91bnRUb0NsYWltIiwic2V0QW1vdW50VG9DbGFpbSIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsImgyIiwiaHIiLCJwIiwiaDEiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaDYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/templates/token/Token.tsx\n"));

/***/ })

});