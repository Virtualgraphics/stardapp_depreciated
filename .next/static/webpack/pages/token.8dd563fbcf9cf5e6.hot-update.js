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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @thirdweb-dev/react */ \"./node_modules/@thirdweb-dev/react/dist/thirdweb-dev-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Token = ()=>{\n    _s();\n    const { contract: tokenDropContract  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract)(\"0xd23342d614a1ff1d7bc84b9041C8615532D55C6D\");\n    const [amountToClaim, setAmountToClaim] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"justify-center px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full m-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    className: \"w-64 sm:h-96\",\n                    src: \"/assets/star_divider.svg\",\n                    alt: \"Star Divider\",\n                    width: 10,\n                    height: 10\n                }, void 0, false, {\n                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 1\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                lineNumber: 18,\n                columnNumber: 1\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-4xl sm:text-center sm:mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"m-auto mb-4 text-3xl font-bold tracking-tight text-yellow-100 sm:text-4xl sm:leading-none sm:m-auto font-Cinzel py-5\",\n                        children: \"SKY GODZ: Tokens\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                        className: \"w-full border-yellow-200\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-base text-white lg:text-2xl md:text-lg sm:px-4 py-5 font-Proza\",\n                        children: \"Claim your SKY GODZ LOTUS and STARDUST tokens below and play the Stargazer Games.\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-2 gap-20 place-content-stretch w-full h-96\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-indigo-900 rounded-2xl \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        className: \"p-10 rounded-full shadow-3xl\",\n                                        src: \"/assets/token_lotus750.jpg\",\n                                        alt: \"Lotus\",\n                                        width: 1260,\n                                        height: 750\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 1\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-white font-bold text-2xl \",\n                                        children: \"LOTUS Token\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-white text-lg\",\n                                        children: \"Claim your LOTUS Tokens\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-5 mb-5 max-w-sm\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"lg\",\n                                            type: \"text\",\n                                            placeholder: \"Enter amount to claim\",\n                                            className: \"flex-grow h-12 px-2 mb-3 text-blue-200 transitiom duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline\",\n                                            onChange: (e)=>setAmountToClaim(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 11\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 1\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.Web3Button, {\n                                        className: \"bg-blue text-white max-w-sm mb-5\",\n                                        contractAddress: \"0xd23342d614a1ff1d7bc84b9041C8615532D55C6D\",\n                                        action: (contract)=>contract.erc20.claim(amountToClaim),\n                                        onSuccess: ()=>alert(\"Claimed!\"),\n                                        onError: (err)=>alert(err),\n                                        children: \"Claim LOTUS\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 5\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 1\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-indigo-900 rounded-2xl\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        className: \"p-10 rounded-full\",\n                                        src: \"/assets/token_stardust750.jpg\",\n                                        alt: \"Stardust\",\n                                        width: 1260,\n                                        height: 750\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 1\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-white font-bold text-2xl\",\n                                        children: \"STARDUST Token\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 1\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-white text-lg\",\n                                        children: \"Claim your STARDUST Tokens\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 1\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 1\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 1\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                lineNumber: 28,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 mt-auto sm:grid-cols-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"duration-300 transform bg-blue-400 border-l-4 border-deep-purple-accent-900 hover:-translate-y-2 rounded-2xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-full p-5 rounded-r shadow-sm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    className: \"mb-2 font-semibold leading-5\",\n                                    children: \"The doctor said\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-gray-900\",\n                                    children: \"Sportacus andrew weatherall goose Refined gentlemen super mario des lynam alpha trion zap rowsdower.\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"duration-300 transform bg-blue-400 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-full p-5 rounded-r shadow-sm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    className: \"mb-2 font-semibold leading-5\",\n                                    children: \"Skate ipsum dolor\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-gray-900\",\n                                    children: \"Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 116,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"duration-300 transform bg-blue-400 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-full p-5 rounded-r shadow-sm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    className: \"mb-2 font-semibold leading-5\",\n                                    children: \"Baseball ipsum dolor\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-gray-900\",\n                                    children: \"Bro ipsum dolor sit amet gaper backside single track, manny Bike epic clipless. Schraeder drop gondy.\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 126,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                lineNumber: 103,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Token, \"XPAqr5w+cPK6Hi+OWyfbR7WvAA0=\", false, function() {\n    return [\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract\n    ];\n});\n_c = Token;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Token);\nvar _c;\n$RefreshReg$(_c, \"Token\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RlbXBsYXRlcy90b2tlbi9Ub2tlbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBZ0c7QUFHL0Q7QUFHSDtBQUNKO0FBRzFCLE1BQU1LLFFBQVEsSUFBTTs7SUFDbEIsTUFBTSxFQUFFQyxVQUFVQyxrQkFBaUIsRUFBQyxHQUFHUCxnRUFBV0EsQ0FBQztJQUNuRCxNQUFNLENBQUNRLGVBQWVDLGlCQUFpQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUcvQyxxQkFDRSw4REFBQ1E7UUFBSUMsV0FBVTs7MEJBQ3ZCLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDZiw0RUFBQ1IsbURBQUtBO29CQUNVUSxXQUFVO29CQUNWQyxLQUFJO29CQUNKQyxLQUFJO29CQUNKQyxPQUFPO29CQUNQQyxRQUFROzs7Ozs7Ozs7OzswQkFJZCw4REFBQ0w7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDSzt3QkFBR0wsV0FBVTtrQ0FBdUg7Ozs7OztrQ0FHckksOERBQUNNO3dCQUFHTixXQUFVOzs7Ozs7a0NBQ2QsOERBQUNPO3dCQUFFUCxXQUFVO2tDQUFzRTs7Ozs7O2tDQUkvRiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUVmLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBRWYsOERBQUNSLG1EQUFLQTt3Q0FDUVEsV0FBVTt3Q0FDVkMsS0FBSTt3Q0FDSkMsS0FBSTt3Q0FDSkMsT0FBTzt3Q0FDUEMsUUFBUTs7Ozs7O2tEQUdaLDhEQUFDSTt3Q0FBR1IsV0FBVTtrREFBaUM7Ozs7OztrREFDL0MsOERBQUNLO3dDQUFHTCxXQUFVO2tEQUFxQjs7Ozs7O2tEQUU3Qyw4REFBQ0Q7d0NBQUlDLFdBQVU7a0RBQ0wsNEVBQUNTOzRDQUNQQyxJQUFHOzRDQUNIQyxNQUFLOzRDQUNMQyxhQUFZOzRDQUNoQlosV0FBVTs0Q0FHTmEsVUFBVSxDQUFDQyxJQUFNaEIsaUJBQWlCZ0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7Ozs7OztrREFLaEQsOERBQUMxQiwyREFBVUE7d0NBQ0xVLFdBQVU7d0NBRVZpQixpQkFBZ0I7d0NBQ2hCQyxRQUFRLENBQUN2QixXQUFhQSxTQUFTd0IsS0FBSyxDQUFDQyxLQUFLLENBQUN2Qjt3Q0FDM0N3QixXQUFXLElBQU1DLE1BQU07d0NBQ3ZCQyxTQUFTLENBQUNDLE1BQVFGLE1BQU1FO2tEQUN6Qjs7Ozs7Ozs7Ozs7OzBDQVNULDhEQUFDekI7Z0NBQUlDLFdBQVU7O2tEQUdmLDhEQUFDUixtREFBS0E7d0NBQ1FRLFdBQVU7d0NBQ1ZDLEtBQUk7d0NBQ0pDLEtBQUk7d0NBQ0pDLE9BQU87d0NBQ1BDLFFBQVE7Ozs7OztrREFHdEIsOERBQUNJO3dDQUFHUixXQUFVO2tEQUFnQzs7Ozs7O2tEQUM5Qyw4REFBQ0s7d0NBQUdMLFdBQVU7a0RBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBVXpCLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2pCLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDeUI7b0NBQUd6QixXQUFVOzhDQUErQjs7Ozs7OzhDQUM3Qyw4REFBQ087b0NBQUVQLFdBQVU7OENBQXdCOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNekMsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUN5QjtvQ0FBR3pCLFdBQVU7OENBQStCOzs7Ozs7OENBQzdDLDhEQUFDTztvQ0FBRVAsV0FBVTs4Q0FBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUt6Qyw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ3lCO29DQUFHekIsV0FBVTs4Q0FBK0I7Ozs7Ozs4Q0FHN0MsOERBQUNPO29DQUFFUCxXQUFVOzhDQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhN0M7R0FoSUVOOztRQUNtQ0wsNERBQVdBOzs7S0FEOUNLO0FBbUlKLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGVtcGxhdGVzL3Rva2VuL1Rva2VuLnRzeD82MDNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWVkaWFSZW5kZXJlciwgdXNlQ29udHJhY3QsIHVzZUNvbnRyYWN0TWV0YWRhdGEsIFdlYjNCdXR0b259IGZyb20gXCJAdGhpcmR3ZWItZGV2L3JlYWN0XCI7XHJcbmltcG9ydCB7IEVkaXRpb25Ecm9wLCBFcmMxMTU1IH0gZnJvbSAnQHRoaXJkd2ViLWRldi9zZGsnO1xyXG5pbXBvcnQgeyBCaWdOdW1iZXIgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZDLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbm5lY3RXYWxsZXQsIHVzZUFkZHJlc3MgfSBmcm9tIFwiQHRoaXJkd2ViLWRldi9yZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jb25zdCBUb2tlbiA9ICgpID0+IHtcclxuICBjb25zdCB7IGNvbnRyYWN0OiB0b2tlbkRyb3BDb250cmFjdH0gPSB1c2VDb250cmFjdChcIjB4ZDIzMzQyZDYxNGExZmYxZDdiYzg0YjkwNDFDODYxNTUzMkQ1NUM2RFwiKTtcclxuICBjb25zdCBbYW1vdW50VG9DbGFpbSwgc2V0QW1vdW50VG9DbGFpbV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNlbnRlciBweC00IHB5LTUgbXgtYXV0byBzbTptYXgtdy14bCBtZDptYXgtdy1mdWxsIGxnOm1heC13LXNjcmVlbi14bCBtZDpweC0yNCBcIj5cclxuPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbS1hdXRvXCI+XHJcbjxJbWFnZVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02NCAgc206aC05NlwiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL3N0YXJfZGl2aWRlci5zdmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiU3RhciBEaXZpZGVyXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPXsxMH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17MTB9XHJcbiAgICAgICAgICAgICAgLz5cclxuPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgc206dGV4dC1jZW50ZXIgc206bXgtYXV0b1wiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibS1hdXRvIG1iLTQgdGV4dC0zeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQteWVsbG93LTEwMCBzbTp0ZXh0LTR4bCBzbTpsZWFkaW5nLW5vbmUgc206bS1hdXRvIGZvbnQtQ2luemVsIHB5LTVcIj5cclxuICAgICAgICAgICAgU0tZIEdPRFo6IFRva2Vuc1xyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwidy1mdWxsICBib3JkZXIteWVsbG93LTIwMFwiIC8+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LXdoaXRlIGxnOnRleHQtMnhsIG1kOnRleHQtbGcgc206cHgtNCBweS01IGZvbnQtUHJvemFcIj5cclxuICAgICAgICAgICBDbGFpbSB5b3VyIFNLWSBHT0RaIExPVFVTIGFuZCBTVEFSRFVTVCB0b2tlbnMgYmVsb3cgYW5kIHBsYXkgdGhlIFN0YXJnYXplciBHYW1lcy4gXHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbjxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtMjAgcGxhY2UtY29udGVudC1zdHJldGNoIHctZnVsbCBoLTk2XCI+XHJcblxyXG48ZGl2IGNsYXNzTmFtZT1cImJnLWluZGlnby05MDAgIHJvdW5kZWQtMnhsICBcIiA+XHJcblxyXG48SW1hZ2VcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTEwIHJvdW5kZWQtZnVsbCBzaGFkb3ctM3hsXCJcclxuICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL3Rva2VuX2xvdHVzNzUwLmpwZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiTG90dXNcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPXsxMjYwfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17NzUwfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LTJ4bCBcIj5MT1RVUyBUb2tlbjwvaDE+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWxnXCI+Q2xhaW0geW91ciBMT1RVUyBUb2tlbnM8L2gyPlxyXG5cclxuPGRpdiBjbGFzc05hbWU9XCJtdC01IG1iLTUgbWF4LXctc21cIj5cclxuICAgICAgICAgIDxpbnB1dCBcclxuICAgIGlkPVwibGdcIlxyXG4gICAgdHlwZT1cInRleHRcIiAgXHJcbiAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGFtb3VudCB0byBjbGFpbVwiIFxyXG5jbGFzc05hbWU9XCJmbGV4LWdyb3cgIGgtMTIgcHgtMiBtYi0zIHRleHQtYmx1ZS0yMDAgdHJhbnNpdGlvbSBkdXJhdGlvbi0yMDAgYm9yZGVyLTIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQgYXBwZWFyYW5jZS1ub25lIG1kOm1yLTIgbWQ6bWItMCBiZy1kZWVwLXB1cnBsZS05MDAgZm9jdXM6Ym9yZGVyLXRlYWwtYWNjZW50LTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICBcclxuICAgXHJcbiAgICBvbkNoYW5nZT17KGUpID0+IHNldEFtb3VudFRvQ2xhaW0oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgXHJcbiAgICAvPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPFdlYjNCdXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUgdGV4dC13aGl0ZSBtYXgtdy1zbSBtYi01XCJcclxuICAgICAgIFxyXG4gICAgICAgICAgY29udHJhY3RBZGRyZXNzPVwiMHhkMjMzNDJkNjE0YTFmZjFkN2JjODRiOTA0MUM4NjE1NTMyRDU1QzZEXCJcclxuICAgICAgICAgIGFjdGlvbj17KGNvbnRyYWN0KSA9PiBjb250cmFjdC5lcmMyMC5jbGFpbShhbW91bnRUb0NsYWltKX1cclxuICAgICAgICAgIG9uU3VjY2Vzcz17KCkgPT4gYWxlcnQoXCJDbGFpbWVkIVwiKX1cclxuICAgICAgICAgIG9uRXJyb3I9eyhlcnIpID0+IGFsZXJ0KGVycil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQ2xhaW0gTE9UVVNcclxuICAgICAgICBcclxuICAgICAgICAgIDwvV2ViM0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuPGRpdiBjbGFzc05hbWU9XCJiZy1pbmRpZ28tOTAwICByb3VuZGVkLTJ4bFwiPlxyXG5cclxuXHJcbjxJbWFnZVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMTAgcm91bmRlZC1mdWxsXCJcclxuICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL3Rva2VuX3N0YXJkdXN0NzUwLmpwZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiU3RhcmR1c3RcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPXsxMjYwfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17NzUwfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtMnhsXCI+U1RBUkRVU1QgVG9rZW48L2gxPlxyXG48aDIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWxnXCI+Q2xhaW0geW91ciBTVEFSRFVTVCBUb2tlbnM8L2gyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICBcclxuXHJcbjwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtOCByb3ctZ2FwLTUgbWItOCBtZDpyb3ctZ2FwLTggbGc6Z3JpZC1jb2xzLTMgbXQtYXV0byBzbTpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVyYXRpb24tMzAwIHRyYW5zZm9ybSBiZy1ibHVlLTQwMCBib3JkZXItbC00IGJvcmRlci1kZWVwLXB1cnBsZS1hY2NlbnQtOTAwIGhvdmVyOi10cmFuc2xhdGUteS0yIHJvdW5kZWQtMnhsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBwLTUgIHJvdW5kZWQtciBzaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1iLTIgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTVcIj5UaGUgZG9jdG9yIHNhaWQ8L2g2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICBTcG9ydGFjdXMgYW5kcmV3IHdlYXRoZXJhbGwgZ29vc2UgUmVmaW5lZCBnZW50bGVtZW4gc3VwZXIgbWFyaW9cclxuICAgICAgICAgICAgICBkZXMgbHluYW0gYWxwaGEgdHJpb24gemFwIHJvd3Nkb3dlci5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIGJnLWJsdWUtNDAwIGJvcmRlci1sLTQgYm9yZGVyLWRlZXAtcHVycGxlLWFjY2VudC00MDAgaG92ZXI6LXRyYW5zbGF0ZS15LTIgcm91bmRlZC0yeGxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHAtNSAgcm91bmRlZC1yIHNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibWItMiBmb250LXNlbWlib2xkIGxlYWRpbmctNVwiPlNrYXRlIGlwc3VtIGRvbG9yPC9oNj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgQnVsYmFzYXVyIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVyYXRpb24tMzAwIHRyYW5zZm9ybSBiZy1ibHVlLTQwMCBib3JkZXItbC00IGJvcmRlci1kZWVwLXB1cnBsZS1hY2NlbnQtNDAwIGhvdmVyOi10cmFuc2xhdGUteS0yIHJvdW5kZWQtMnhsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBwLTUgIHJvdW5kZWQtciBzaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1iLTIgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTVcIj5cclxuICAgICAgICAgICAgICBCYXNlYmFsbCBpcHN1bSBkb2xvclxyXG4gICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICBCcm8gaXBzdW0gZG9sb3Igc2l0IGFtZXQgZ2FwZXIgYmFja3NpZGUgc2luZ2xlIHRyYWNrLCBtYW5ueSBCaWtlXHJcbiAgICAgICAgICAgICAgZXBpYyBjbGlwbGVzcy4gU2NocmFlZGVyIGRyb3AgZ29uZHkuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuXHJcblxyXG4gPC9kaXY+XHJcblxyXG4gICAgICApO1xyXG4gICAgfTtcclxuXHJcbiBcclxuICBleHBvcnQgZGVmYXVsdCBUb2tlbjsiXSwibmFtZXMiOlsidXNlQ29udHJhY3QiLCJXZWIzQnV0dG9uIiwidXNlU3RhdGUiLCJJbWFnZSIsIlJlYWN0IiwiVG9rZW4iLCJjb250cmFjdCIsInRva2VuRHJvcENvbnRyYWN0IiwiYW1vdW50VG9DbGFpbSIsInNldEFtb3VudFRvQ2xhaW0iLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgyIiwiaHIiLCJwIiwiaDEiLCJpbnB1dCIsImlkIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjb250cmFjdEFkZHJlc3MiLCJhY3Rpb24iLCJlcmMyMCIsImNsYWltIiwib25TdWNjZXNzIiwiYWxlcnQiLCJvbkVycm9yIiwiZXJyIiwiaDYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/templates/token/Token.tsx\n"));

/***/ })

});