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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @thirdweb-dev/react */ \"./node_modules/@thirdweb-dev/react/dist/thirdweb-dev-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Token = ()=>{\n    _s();\n    const { contract: tokenDropContract  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract)(\"0xd23342d614a1ff1d7bc84b9041C8615532D55C6D\");\n    const [amountToClaim, setAmountToClaim] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"justify-center px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-4xl sm:text-center sm:mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-auto w-full \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            className: \" w-full shadow-3xl sm:h-96\",\n                            src: \"/assets/star_divider.svg\",\n                            alt: \"Star Divider\",\n                            width: 350,\n                            height: 150\n                        }, void 0, false, {\n                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"m-auto mb-4 text-3xl font-bold tracking-tight text-yellow-100 sm:text-4xl sm:leading-none sm:m-auto font-Cinzel py-5\",\n                        children: \"SKY GODZ: Tokens\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                        className: \"w-full border-yellow-200\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-base text-white lg:text-2xl md:text-lg sm:px-4 py-5 font-Proza\",\n                        children: \"Claim your SKY GODZ LOTUS and STARDUST tokens below and play the Stargazer Games.\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-2 gap-20 place-content-stretch w-full h-96\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-indigo-900 rounded-2xl \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        className: \"p-10 rounded-full shadow-3xl sm:h-96\",\n                                        src: \"/assets/token_lotus750.jpg\",\n                                        alt: \"Lotus\",\n                                        width: 1260,\n                                        height: 750\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 1\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-white text-2xl \",\n                                        children: \"LOTUS Token\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-white text-lg\",\n                                        children: \"Claim your LOTUS Tokens\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-5 mb-5 max-w-sm\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"lg\",\n                                            type: \"text\",\n                                            placeholder: \"Enter amount to claim\",\n                                            className: \"flex-grow h-12 px-2 mb-3 text-blue-200 transitiom duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline\",\n                                            onChange: (e)=>setAmountToClaim(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 11\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 1\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.Web3Button, {\n                                        className: \"bg-blue text-white max-w-sm mb-5\",\n                                        contractAddress: \"0xd23342d614a1ff1d7bc84b9041C8615532D55C6D\",\n                                        action: (contract)=>contract.erc20.claim(amountToClaim),\n                                        onSuccess: ()=>alert(\"Claimed!\"),\n                                        onError: (err)=>alert(err),\n                                        children: \"Claim LOTUS\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 5\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 1\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-indigo-900 rounded-2xl\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        className: \"object-cover w-sm rounded-full shadow-3xl sm:h-96\",\n                                        src: \"/assets/token_stardust750.jpg\",\n                                        alt: \"Stardust\",\n                                        width: 1260,\n                                        height: 750\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 1\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-white text-2xl\",\n                                        children: \"STARDUST Token\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 1\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-white text-lg\",\n                                        children: \"Claim your STARDUST Tokens\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 1\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 1\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 1\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                lineNumber: 19,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 mt-40 sm:grid-cols-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"duration-300 transform bg-blue-400 border-l-4 border-deep-purple-accent-900 hover:-translate-y-2 rounded-2xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-full p-5 rounded-r shadow-sm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    className: \"mb-2 font-semibold leading-5\",\n                                    children: \"The doctor said\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-gray-900\",\n                                    children: \"Sportacus andrew weatherall goose Refined gentlemen super mario des lynam alpha trion zap rowsdower.\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 111,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"duration-300 transform bg-blue-400 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-full p-5 rounded-r shadow-sm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    className: \"mb-2 font-semibold leading-5\",\n                                    children: \"Skate ipsum dolor\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-gray-900\",\n                                    children: \"Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"duration-300 transform bg-blue-400 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-full p-5 rounded-r shadow-sm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    className: \"mb-2 font-semibold leading-5\",\n                                    children: \"Baseball ipsum dolor\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 127,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-gray-900\",\n                                    children: \"Bro ipsum dolor sit amet gaper backside single track, manny Bike epic clipless. Schraeder drop gondy.\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 130,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                            lineNumber: 126,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                lineNumber: 107,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Token, \"XPAqr5w+cPK6Hi+OWyfbR7WvAA0=\", false, function() {\n    return [\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract\n    ];\n});\n_c = Token;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Token);\nvar _c;\n$RefreshReg$(_c, \"Token\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RlbXBsYXRlcy90b2tlbi9Ub2tlbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBZ0c7QUFHL0Q7QUFHSDtBQUk5QixNQUFNSSxRQUFRLElBQU07O0lBQ2xCLE1BQU0sRUFBRUMsVUFBVUMsa0JBQWlCLEVBQUMsR0FBR04sZ0VBQVdBLENBQUM7SUFDbkQsTUFBTSxDQUFDTyxlQUFlQyxpQkFBaUIsR0FBR04sK0NBQVFBLENBQUM7SUFJL0MscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBR1gsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUVmLDRFQUFDUCxtREFBS0E7NEJBQ05PLFdBQVU7NEJBQ1ZDLEtBQUk7NEJBQ0pDLEtBQUk7NEJBQ0pDLE9BQU87NEJBQ1BDLFFBQVE7Ozs7Ozs7Ozs7O2tDQUlWLDhEQUFDQzt3QkFBR0wsV0FBVTtrQ0FBdUg7Ozs7OztrQ0FHckksOERBQUNNO3dCQUFHTixXQUFVOzs7Ozs7a0NBQ2QsOERBQUNPO3dCQUFFUCxXQUFVO2tDQUFzRTs7Ozs7O2tDQUkvRiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUVmLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBRWYsOERBQUNQLG1EQUFLQTt3Q0FDUU8sV0FBVTt3Q0FDVkMsS0FBSTt3Q0FDSkMsS0FBSTt3Q0FDSkMsT0FBTzt3Q0FDUEMsUUFBUTs7Ozs7O2tEQUdaLDhEQUFDSTt3Q0FBR1IsV0FBVTtrREFBdUI7Ozs7OztrREFDckMsOERBQUNLO3dDQUFHTCxXQUFVO2tEQUFxQjs7Ozs7O2tEQUU3Qyw4REFBQ0Q7d0NBQUlDLFdBQVU7a0RBQ0wsNEVBQUNTOzRDQUNQQyxJQUFHOzRDQUNIQyxNQUFLOzRDQUNMQyxhQUFZOzRDQUNoQlosV0FBVTs0Q0FHTmEsVUFBVSxDQUFDQyxJQUFNaEIsaUJBQWlCZ0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7Ozs7OztrREFLaEQsOERBQUN6QiwyREFBVUE7d0NBQ0xTLFdBQVU7d0NBRVZpQixpQkFBZ0I7d0NBQ2hCQyxRQUFRLENBQUN2QixXQUFhQSxTQUFTd0IsS0FBSyxDQUFDQyxLQUFLLENBQUN2Qjt3Q0FDM0N3QixXQUFXLElBQU1DLE1BQU07d0NBQ3ZCQyxTQUFTLENBQUNDLE1BQVFGLE1BQU1FO2tEQUN6Qjs7Ozs7Ozs7Ozs7OzBDQVNULDhEQUFDekI7Z0NBQUlDLFdBQVU7O2tEQUdmLDhEQUFDUCxtREFBS0E7d0NBQ1FPLFdBQVU7d0NBQ1ZDLEtBQUk7d0NBQ0pDLEtBQUk7d0NBQ0pDLE9BQU87d0NBQ1BDLFFBQVE7Ozs7OztrREFHdEIsOERBQUNJO3dDQUFHUixXQUFVO2tEQUFzQjs7Ozs7O2tEQUNwQyw4REFBQ0s7d0NBQUdMLFdBQVU7a0RBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBVXpCLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2pCLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDeUI7b0NBQUd6QixXQUFVOzhDQUErQjs7Ozs7OzhDQUM3Qyw4REFBQ087b0NBQUVQLFdBQVU7OENBQXdCOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNekMsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUN5QjtvQ0FBR3pCLFdBQVU7OENBQStCOzs7Ozs7OENBQzdDLDhEQUFDTztvQ0FBRVAsV0FBVTs4Q0FBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUt6Qyw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ3lCO29DQUFHekIsV0FBVTs4Q0FBK0I7Ozs7Ozs4Q0FHN0MsOERBQUNPO29DQUFFUCxXQUFVOzhDQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhN0M7R0FwSUVOOztRQUNtQ0osNERBQVdBOzs7S0FEOUNJO0FBdUlKLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGVtcGxhdGVzL3Rva2VuL1Rva2VuLnRzeD82MDNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWVkaWFSZW5kZXJlciwgdXNlQ29udHJhY3QsIHVzZUNvbnRyYWN0TWV0YWRhdGEsIFdlYjNCdXR0b259IGZyb20gXCJAdGhpcmR3ZWItZGV2L3JlYWN0XCI7XHJcbmltcG9ydCB7IEVkaXRpb25Ecm9wLCBFcmMxMTU1IH0gZnJvbSAnQHRoaXJkd2ViLWRldi9zZGsnO1xyXG5pbXBvcnQgeyBCaWdOdW1iZXIgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZDLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbm5lY3RXYWxsZXQsIHVzZUFkZHJlc3MgfSBmcm9tIFwiQHRoaXJkd2ViLWRldi9yZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcblxyXG5cclxuY29uc3QgVG9rZW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBjb250cmFjdDogdG9rZW5Ecm9wQ29udHJhY3R9ID0gdXNlQ29udHJhY3QoXCIweGQyMzM0MmQ2MTRhMWZmMWQ3YmM4NGI5MDQxQzg2MTU1MzJENTVDNkRcIik7XHJcbiAgY29uc3QgW2Ftb3VudFRvQ2xhaW0sIHNldEFtb3VudFRvQ2xhaW1dID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgXHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXIgcHgtNCBweS01IG14LWF1dG8gc206bWF4LXcteGwgbWQ6bWF4LXctZnVsbCBsZzptYXgtdy1zY3JlZW4teGwgbWQ6cHgtMjQgXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTR4bCBzbTp0ZXh0LWNlbnRlciBzbTpteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWF1dG8gdy1mdWxsIFwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctZnVsbCBzaGFkb3ctM3hsIHNtOmgtOTZcIlxyXG4gICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvc3Rhcl9kaXZpZGVyLnN2Z1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiU3RhciBEaXZpZGVyXCJcclxuICAgICAgICAgICAgICB3aWR0aD17MzUwfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17MTUwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibS1hdXRvIG1iLTQgdGV4dC0zeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQteWVsbG93LTEwMCBzbTp0ZXh0LTR4bCBzbTpsZWFkaW5nLW5vbmUgc206bS1hdXRvIGZvbnQtQ2luemVsIHB5LTVcIj5cclxuICAgICAgICAgICAgU0tZIEdPRFo6IFRva2Vuc1xyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwidy1mdWxsICBib3JkZXIteWVsbG93LTIwMFwiIC8+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LXdoaXRlIGxnOnRleHQtMnhsIG1kOnRleHQtbGcgc206cHgtNCBweS01IGZvbnQtUHJvemFcIj5cclxuICAgICAgICAgICBDbGFpbSB5b3VyIFNLWSBHT0RaIExPVFVTIGFuZCBTVEFSRFVTVCB0b2tlbnMgYmVsb3cgYW5kIHBsYXkgdGhlIFN0YXJnYXplciBHYW1lcy4gXHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbjxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtMjAgcGxhY2UtY29udGVudC1zdHJldGNoIHctZnVsbCBoLTk2XCI+XHJcblxyXG48ZGl2IGNsYXNzTmFtZT1cImJnLWluZGlnby05MDAgIHJvdW5kZWQtMnhsICBcIiA+XHJcblxyXG48SW1hZ2VcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTEwIHJvdW5kZWQtZnVsbCBzaGFkb3ctM3hsIHNtOmgtOTZcIlxyXG4gICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvdG9rZW5fbG90dXM3NTAuanBnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJMb3R1c1wiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezEyNjB9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXs3NTB9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0yeGwgXCI+TE9UVVMgVG9rZW48L2gxPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1sZ1wiPkNsYWltIHlvdXIgTE9UVVMgVG9rZW5zPC9oMj5cclxuXHJcbjxkaXYgY2xhc3NOYW1lPVwibXQtNSBtYi01IG1heC13LXNtXCI+XHJcbiAgICAgICAgICA8aW5wdXQgXHJcbiAgICBpZD1cImxnXCJcclxuICAgIHR5cGU9XCJ0ZXh0XCIgIFxyXG4gICAgcGxhY2Vob2xkZXI9XCJFbnRlciBhbW91bnQgdG8gY2xhaW1cIiBcclxuY2xhc3NOYW1lPVwiZmxleC1ncm93ICBoLTEyIHB4LTIgbWItMyB0ZXh0LWJsdWUtMjAwIHRyYW5zaXRpb20gZHVyYXRpb24tMjAwIGJvcmRlci0yIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkIGFwcGVhcmFuY2Utbm9uZSBtZDptci0yIG1kOm1iLTAgYmctZGVlcC1wdXJwbGUtOTAwIGZvY3VzOmJvcmRlci10ZWFsLWFjY2VudC03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgXHJcbiAgIFxyXG4gICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBbW91bnRUb0NsYWltKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgIFxyXG4gICAgLz5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxXZWIzQnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlIHRleHQtd2hpdGUgbWF4LXctc20gbWItNVwiXHJcbiAgICAgICBcclxuICAgICAgICAgIGNvbnRyYWN0QWRkcmVzcz1cIjB4ZDIzMzQyZDYxNGExZmYxZDdiYzg0YjkwNDFDODYxNTUzMkQ1NUM2RFwiXHJcbiAgICAgICAgICBhY3Rpb249eyhjb250cmFjdCkgPT4gY29udHJhY3QuZXJjMjAuY2xhaW0oYW1vdW50VG9DbGFpbSl9XHJcbiAgICAgICAgICBvblN1Y2Nlc3M9eygpID0+IGFsZXJ0KFwiQ2xhaW1lZCFcIil9XHJcbiAgICAgICAgICBvbkVycm9yPXsoZXJyKSA9PiBhbGVydChlcnIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIENsYWltIExPVFVTXHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8L1dlYjNCdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbjxkaXYgY2xhc3NOYW1lPVwiYmctaW5kaWdvLTkwMCAgcm91bmRlZC0yeGxcIj5cclxuXHJcblxyXG48SW1hZ2VcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgdy1zbSByb3VuZGVkLWZ1bGwgc2hhZG93LTN4bCBzbTpoLTk2XCJcclxuICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL3Rva2VuX3N0YXJkdXN0NzUwLmpwZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiU3RhcmR1c3RcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPXsxMjYwfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17NzUwfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0yeGxcIj5TVEFSRFVTVCBUb2tlbjwvaDE+XHJcbjxoMiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtbGdcIj5DbGFpbSB5b3VyIFNUQVJEVVNUIFRva2VuczwvaDI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gIFxyXG5cclxuPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC04IHJvdy1nYXAtNSBtYi04IG1kOnJvdy1nYXAtOCBsZzpncmlkLWNvbHMtMyBtdC00MCBzbTpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVyYXRpb24tMzAwIHRyYW5zZm9ybSBiZy1ibHVlLTQwMCBib3JkZXItbC00IGJvcmRlci1kZWVwLXB1cnBsZS1hY2NlbnQtOTAwIGhvdmVyOi10cmFuc2xhdGUteS0yIHJvdW5kZWQtMnhsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBwLTUgIHJvdW5kZWQtciBzaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1iLTIgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTVcIj5UaGUgZG9jdG9yIHNhaWQ8L2g2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICBTcG9ydGFjdXMgYW5kcmV3IHdlYXRoZXJhbGwgZ29vc2UgUmVmaW5lZCBnZW50bGVtZW4gc3VwZXIgbWFyaW9cclxuICAgICAgICAgICAgICBkZXMgbHluYW0gYWxwaGEgdHJpb24gemFwIHJvd3Nkb3dlci5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIGJnLWJsdWUtNDAwIGJvcmRlci1sLTQgYm9yZGVyLWRlZXAtcHVycGxlLWFjY2VudC00MDAgaG92ZXI6LXRyYW5zbGF0ZS15LTIgcm91bmRlZC0yeGxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHAtNSAgcm91bmRlZC1yIHNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibWItMiBmb250LXNlbWlib2xkIGxlYWRpbmctNVwiPlNrYXRlIGlwc3VtIGRvbG9yPC9oNj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgQnVsYmFzYXVyIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVyYXRpb24tMzAwIHRyYW5zZm9ybSBiZy1ibHVlLTQwMCBib3JkZXItbC00IGJvcmRlci1kZWVwLXB1cnBsZS1hY2NlbnQtNDAwIGhvdmVyOi10cmFuc2xhdGUteS0yIHJvdW5kZWQtMnhsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBwLTUgIHJvdW5kZWQtciBzaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1iLTIgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTVcIj5cclxuICAgICAgICAgICAgICBCYXNlYmFsbCBpcHN1bSBkb2xvclxyXG4gICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICBCcm8gaXBzdW0gZG9sb3Igc2l0IGFtZXQgZ2FwZXIgYmFja3NpZGUgc2luZ2xlIHRyYWNrLCBtYW5ueSBCaWtlXHJcbiAgICAgICAgICAgICAgZXBpYyBjbGlwbGVzcy4gU2NocmFlZGVyIGRyb3AgZ29uZHkuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuXHJcblxyXG4gPC9kaXY+XHJcblxyXG4gICAgICApO1xyXG4gICAgfTtcclxuXHJcbiBcclxuICBleHBvcnQgZGVmYXVsdCBUb2tlbjsiXSwibmFtZXMiOlsidXNlQ29udHJhY3QiLCJXZWIzQnV0dG9uIiwidXNlU3RhdGUiLCJJbWFnZSIsIlRva2VuIiwiY29udHJhY3QiLCJ0b2tlbkRyb3BDb250cmFjdCIsImFtb3VudFRvQ2xhaW0iLCJzZXRBbW91bnRUb0NsYWltIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMiIsImhyIiwicCIsImgxIiwiaW5wdXQiLCJpZCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29udHJhY3RBZGRyZXNzIiwiYWN0aW9uIiwiZXJjMjAiLCJjbGFpbSIsIm9uU3VjY2VzcyIsImFsZXJ0Iiwib25FcnJvciIsImVyciIsImg2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/templates/token/Token.tsx\n"));

/***/ })

});