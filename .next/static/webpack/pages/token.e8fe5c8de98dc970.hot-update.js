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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @thirdweb-dev/react */ \"./node_modules/@thirdweb-dev/react/dist/thirdweb-dev-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Token = ()=>{\n    _s();\n    const { contract: tokenDropContract  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract)(\"0xd23342d614a1ff1d7bc84b9041C8615532D55C6D\");\n    const [amountToClaim, setAmountToClaim] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"justify-center px-4 py-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-4xl sm:text-center sm:mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" w-full \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            className: \" w-full shadow-3xl sm:h-96\",\n                            src: \"/assets/star_divider.svg\",\n                            alt: \"Star Divider\",\n                            width: 350,\n                            height: 150\n                        }, void 0, false, {\n                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"m-auto mb-4 text-3xl font-bold tracking-tight text-yellow-100 sm:text-4xl sm:leading-none sm:m-auto font-Cinzel py-5\",\n                        children: \"SKY GODZ: Tokens\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                        className: \"w-full border-yellow-200\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-base text-white lg:text-2xl md:text-lg sm:px-4 py-5 font-Proza\",\n                        children: \"Claim your SKY GODZ LOTUS and STARDUST tokens below and play the Stargazer Games.\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-2 gap-20 place-content-stretch w-full h-96\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-indigo-900 rounded-2xl \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        className: \"p-10 rounded-full shadow-3xl\",\n                                        src: \"/assets/token_lotus750.jpg\",\n                                        alt: \"Lotus\",\n                                        width: 1260,\n                                        height: 750\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 1\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-white font-bold text-2xl \",\n                                        children: \"LOTUS Token\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-white text-lg\",\n                                        children: \"Claim your LOTUS Tokens\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-5 mb-5 max-w-sm\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"lg\",\n                                            type: \"text\",\n                                            placeholder: \"Enter amount to claim\",\n                                            className: \"flex-grow h-12 px-2 mb-3 text-blue-200 transitiom duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline\",\n                                            onChange: (e)=>setAmountToClaim(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 11\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 1\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.Web3Button, {\n                                        className: \"bg-blue text-white max-w-sm mb-5\",\n                                        contractAddress: \"0xd23342d614a1ff1d7bc84b9041C8615532D55C6D\",\n                                        action: (contract)=>contract.erc20.claim(amountToClaim),\n                                        onSuccess: ()=>alert(\"Claimed!\"),\n                                        onError: (err)=>alert(err),\n                                        children: \"Claim LOTUS\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 5\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 1\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-indigo-900 rounded-2xl\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        className: \"p-10 rounded-full\",\n                                        src: \"/assets/token_stardust750.jpg\",\n                                        alt: \"Stardust\",\n                                        width: 1260,\n                                        height: 750\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 1\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-white font-bold text-2xl\",\n                                        children: \"STARDUST Token\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 1\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-white text-lg\",\n                                        children: \"Claim your STARDUST Tokens\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 1\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 1\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 1\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                lineNumber: 18,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 mt-auto sm:grid-cols-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"duration-300 transform bg-blue-400 border-l-4 border-deep-purple-accent-900 hover:-translate-y-2 rounded-2xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-full p-5 rounded-r shadow-sm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    className: \"mb-2 font-semibold leading-5\",\n                                    children: \"The doctor said\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-gray-900\",\n                                    children: \"Sportacus andrew weatherall goose Refined gentlemen super mario des lynam alpha trion zap rowsdower.\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"duration-300 transform bg-blue-400 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-full p-5 rounded-r shadow-sm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    className: \"mb-2 font-semibold leading-5\",\n                                    children: \"Skate ipsum dolor\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-gray-900\",\n                                    children: \"Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"duration-300 transform bg-blue-400 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-full p-5 rounded-r shadow-sm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    className: \"mb-2 font-semibold leading-5\",\n                                    children: \"Baseball ipsum dolor\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 126,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-gray-900\",\n                                    children: \"Bro ipsum dolor sit amet gaper backside single track, manny Bike epic clipless. Schraeder drop gondy.\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 129,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                lineNumber: 106,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Token, \"XPAqr5w+cPK6Hi+OWyfbR7WvAA0=\", false, function() {\n    return [\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract\n    ];\n});\n_c = Token;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Token);\nvar _c;\n$RefreshReg$(_c, \"Token\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RlbXBsYXRlcy90b2tlbi9Ub2tlbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBZ0c7QUFHL0Q7QUFHSDtBQUk5QixNQUFNSSxRQUFRLElBQU07O0lBQ2xCLE1BQU0sRUFBRUMsVUFBVUMsa0JBQWlCLEVBQUMsR0FBR04sZ0VBQVdBLENBQUM7SUFDbkQsTUFBTSxDQUFDTyxlQUFlQyxpQkFBaUIsR0FBR04sK0NBQVFBLENBQUM7SUFHL0MscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBR1gsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUVmLDRFQUFDUCxtREFBS0E7NEJBQ05PLFdBQVU7NEJBQ1ZDLEtBQUk7NEJBQ0pDLEtBQUk7NEJBQ0pDLE9BQU87NEJBQ1BDLFFBQVE7Ozs7Ozs7Ozs7O2tDQUlWLDhEQUFDQzt3QkFBR0wsV0FBVTtrQ0FBdUg7Ozs7OztrQ0FHckksOERBQUNNO3dCQUFHTixXQUFVOzs7Ozs7a0NBQ2QsOERBQUNPO3dCQUFFUCxXQUFVO2tDQUFzRTs7Ozs7O2tDQUkvRiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUVmLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBRWYsOERBQUNQLG1EQUFLQTt3Q0FDUU8sV0FBVTt3Q0FDVkMsS0FBSTt3Q0FDSkMsS0FBSTt3Q0FDSkMsT0FBTzt3Q0FDUEMsUUFBUTs7Ozs7O2tEQUdaLDhEQUFDSTt3Q0FBR1IsV0FBVTtrREFBaUM7Ozs7OztrREFDL0MsOERBQUNLO3dDQUFHTCxXQUFVO2tEQUFxQjs7Ozs7O2tEQUU3Qyw4REFBQ0Q7d0NBQUlDLFdBQVU7a0RBQ0wsNEVBQUNTOzRDQUNQQyxJQUFHOzRDQUNIQyxNQUFLOzRDQUNMQyxhQUFZOzRDQUNoQlosV0FBVTs0Q0FHTmEsVUFBVSxDQUFDQyxJQUFNaEIsaUJBQWlCZ0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7Ozs7OztrREFLaEQsOERBQUN6QiwyREFBVUE7d0NBQ0xTLFdBQVU7d0NBRVZpQixpQkFBZ0I7d0NBQ2hCQyxRQUFRLENBQUN2QixXQUFhQSxTQUFTd0IsS0FBSyxDQUFDQyxLQUFLLENBQUN2Qjt3Q0FDM0N3QixXQUFXLElBQU1DLE1BQU07d0NBQ3ZCQyxTQUFTLENBQUNDLE1BQVFGLE1BQU1FO2tEQUN6Qjs7Ozs7Ozs7Ozs7OzBDQVNULDhEQUFDekI7Z0NBQUlDLFdBQVU7O2tEQUdmLDhEQUFDUCxtREFBS0E7d0NBQ1FPLFdBQVU7d0NBQ1ZDLEtBQUk7d0NBQ0pDLEtBQUk7d0NBQ0pDLE9BQU87d0NBQ1BDLFFBQVE7Ozs7OztrREFHdEIsOERBQUNJO3dDQUFHUixXQUFVO2tEQUFnQzs7Ozs7O2tEQUM5Qyw4REFBQ0s7d0NBQUdMLFdBQVU7a0RBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBVXpCLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2pCLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDeUI7b0NBQUd6QixXQUFVOzhDQUErQjs7Ozs7OzhDQUM3Qyw4REFBQ087b0NBQUVQLFdBQVU7OENBQXdCOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNekMsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUN5QjtvQ0FBR3pCLFdBQVU7OENBQStCOzs7Ozs7OENBQzdDLDhEQUFDTztvQ0FBRVAsV0FBVTs4Q0FBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUt6Qyw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ3lCO29DQUFHekIsV0FBVTs4Q0FBK0I7Ozs7Ozs4Q0FHN0MsOERBQUNPO29DQUFFUCxXQUFVOzhDQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhN0M7R0FuSUVOOztRQUNtQ0osNERBQVdBOzs7S0FEOUNJO0FBc0lKLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGVtcGxhdGVzL3Rva2VuL1Rva2VuLnRzeD82MDNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWVkaWFSZW5kZXJlciwgdXNlQ29udHJhY3QsIHVzZUNvbnRyYWN0TWV0YWRhdGEsIFdlYjNCdXR0b259IGZyb20gXCJAdGhpcmR3ZWItZGV2L3JlYWN0XCI7XHJcbmltcG9ydCB7IEVkaXRpb25Ecm9wLCBFcmMxMTU1IH0gZnJvbSAnQHRoaXJkd2ViLWRldi9zZGsnO1xyXG5pbXBvcnQgeyBCaWdOdW1iZXIgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZDLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbm5lY3RXYWxsZXQsIHVzZUFkZHJlc3MgfSBmcm9tIFwiQHRoaXJkd2ViLWRldi9yZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcblxyXG5cclxuY29uc3QgVG9rZW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBjb250cmFjdDogdG9rZW5Ecm9wQ29udHJhY3R9ID0gdXNlQ29udHJhY3QoXCIweGQyMzM0MmQ2MTRhMWZmMWQ3YmM4NGI5MDQxQzg2MTU1MzJENTVDNkRcIik7XHJcbiAgY29uc3QgW2Ftb3VudFRvQ2xhaW0sIHNldEFtb3VudFRvQ2xhaW1dID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXIgcHgtNCBweS01ICBzbTptYXgtdy14bCBtZDptYXgtdy1mdWxsIGxnOm1heC13LXNjcmVlbi14bCBtZDpweC0yNCBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIHNtOnRleHQtY2VudGVyIHNtOm14LWF1dG9cIj5cclxuICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LWZ1bGwgXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgdy1mdWxsIHNoYWRvdy0zeGwgc206aC05NlwiXHJcbiAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9zdGFyX2RpdmlkZXIuc3ZnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJTdGFyIERpdmlkZXJcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPXszNTB9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsxNTB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtLWF1dG8gbWItNCB0ZXh0LTN4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC15ZWxsb3ctMTAwIHNtOnRleHQtNHhsIHNtOmxlYWRpbmctbm9uZSBzbTptLWF1dG8gZm9udC1DaW56ZWwgcHktNVwiPlxyXG4gICAgICAgICAgICBTS1kgR09EWjogVG9rZW5zXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJ3LWZ1bGwgIGJvcmRlci15ZWxsb3ctMjAwXCIgLz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHRleHQtd2hpdGUgbGc6dGV4dC0yeGwgbWQ6dGV4dC1sZyBzbTpweC00IHB5LTUgZm9udC1Qcm96YVwiPlxyXG4gICAgICAgICAgIENsYWltIHlvdXIgU0tZIEdPRFogTE9UVVMgYW5kIFNUQVJEVVNUIHRva2VucyBiZWxvdyBhbmQgcGxheSB0aGUgU3RhcmdhemVyIEdhbWVzLiBcclxuICAgICAgICAgICAgPC9wPlxyXG5cclxuPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0yMCBwbGFjZS1jb250ZW50LXN0cmV0Y2ggdy1mdWxsIGgtOTZcIj5cclxuXHJcbjxkaXYgY2xhc3NOYW1lPVwiYmctaW5kaWdvLTkwMCAgcm91bmRlZC0yeGwgIFwiID5cclxuXHJcbjxJbWFnZVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMTAgcm91bmRlZC1mdWxsIHNoYWRvdy0zeGxcIlxyXG4gICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvdG9rZW5fbG90dXM3NTAuanBnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJMb3R1c1wiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezEyNjB9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXs3NTB9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtMnhsIFwiPkxPVFVTIFRva2VuPC9oMT5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtbGdcIj5DbGFpbSB5b3VyIExPVFVTIFRva2VuczwvaDI+XHJcblxyXG48ZGl2IGNsYXNzTmFtZT1cIm10LTUgbWItNSBtYXgtdy1zbVwiPlxyXG4gICAgICAgICAgPGlucHV0IFxyXG4gICAgaWQ9XCJsZ1wiXHJcbiAgICB0eXBlPVwidGV4dFwiICBcclxuICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYW1vdW50IHRvIGNsYWltXCIgXHJcbmNsYXNzTmFtZT1cImZsZXgtZ3JvdyAgaC0xMiBweC0yIG1iLTMgdGV4dC1ibHVlLTIwMCB0cmFuc2l0aW9tIGR1cmF0aW9uLTIwMCBib3JkZXItMiBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZCBhcHBlYXJhbmNlLW5vbmUgbWQ6bXItMiBtZDptYi0wIGJnLWRlZXAtcHVycGxlLTkwMCBmb2N1czpib3JkZXItdGVhbC1hY2NlbnQtNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgIFxyXG4gICBcclxuICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QW1vdW50VG9DbGFpbShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICBcclxuICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8V2ViM0J1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZSB0ZXh0LXdoaXRlIG1heC13LXNtIG1iLTVcIlxyXG4gICAgICAgXHJcbiAgICAgICAgICBjb250cmFjdEFkZHJlc3M9XCIweGQyMzM0MmQ2MTRhMWZmMWQ3YmM4NGI5MDQxQzg2MTU1MzJENTVDNkRcIlxyXG4gICAgICAgICAgYWN0aW9uPXsoY29udHJhY3QpID0+IGNvbnRyYWN0LmVyYzIwLmNsYWltKGFtb3VudFRvQ2xhaW0pfVxyXG4gICAgICAgICAgb25TdWNjZXNzPXsoKSA9PiBhbGVydChcIkNsYWltZWQhXCIpfVxyXG4gICAgICAgICAgb25FcnJvcj17KGVycikgPT4gYWxlcnQoZXJyKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBDbGFpbSBMT1RVU1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgPC9XZWIzQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG48ZGl2IGNsYXNzTmFtZT1cImJnLWluZGlnby05MDAgIHJvdW5kZWQtMnhsXCI+XHJcblxyXG5cclxuPEltYWdlXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xMCByb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvdG9rZW5fc3RhcmR1c3Q3NTAuanBnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJTdGFyZHVzdFwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezEyNjB9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXs3NTB9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG48aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC0yeGxcIj5TVEFSRFVTVCBUb2tlbjwvaDE+XHJcbjxoMiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtbGdcIj5DbGFpbSB5b3VyIFNUQVJEVVNUIFRva2VuczwvaDI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gIFxyXG5cclxuPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC04IHJvdy1nYXAtNSBtYi04IG1kOnJvdy1nYXAtOCBsZzpncmlkLWNvbHMtMyBtdC1hdXRvIHNtOmdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIGJnLWJsdWUtNDAwIGJvcmRlci1sLTQgYm9yZGVyLWRlZXAtcHVycGxlLWFjY2VudC05MDAgaG92ZXI6LXRyYW5zbGF0ZS15LTIgcm91bmRlZC0yeGxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHAtNSAgcm91bmRlZC1yIHNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibWItMiBmb250LXNlbWlib2xkIGxlYWRpbmctNVwiPlRoZSBkb2N0b3Igc2FpZDwvaDY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgIFNwb3J0YWN1cyBhbmRyZXcgd2VhdGhlcmFsbCBnb29zZSBSZWZpbmVkIGdlbnRsZW1lbiBzdXBlciBtYXJpb1xyXG4gICAgICAgICAgICAgIGRlcyBseW5hbSBhbHBoYSB0cmlvbiB6YXAgcm93c2Rvd2VyLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gYmctYmx1ZS00MDAgYm9yZGVyLWwtNCBib3JkZXItZGVlcC1wdXJwbGUtYWNjZW50LTQwMCBob3ZlcjotdHJhbnNsYXRlLXktMiByb3VuZGVkLTJ4bFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgcC01ICByb3VuZGVkLXIgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtYi0yIGZvbnQtc2VtaWJvbGQgbGVhZGluZy01XCI+U2thdGUgaXBzdW0gZG9sb3I8L2g2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICBCdWxiYXNhdXIgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIGJnLWJsdWUtNDAwIGJvcmRlci1sLTQgYm9yZGVyLWRlZXAtcHVycGxlLWFjY2VudC00MDAgaG92ZXI6LXRyYW5zbGF0ZS15LTIgcm91bmRlZC0yeGxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHAtNSAgcm91bmRlZC1yIHNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibWItMiBmb250LXNlbWlib2xkIGxlYWRpbmctNVwiPlxyXG4gICAgICAgICAgICAgIEJhc2ViYWxsIGlwc3VtIGRvbG9yXHJcbiAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgIEJybyBpcHN1bSBkb2xvciBzaXQgYW1ldCBnYXBlciBiYWNrc2lkZSBzaW5nbGUgdHJhY2ssIG1hbm55IEJpa2VcclxuICAgICAgICAgICAgICBlcGljIGNsaXBsZXNzLiBTY2hyYWVkZXIgZHJvcCBnb25keS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiA8L2Rpdj5cclxuXHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuIFxyXG4gIGV4cG9ydCBkZWZhdWx0IFRva2VuOyJdLCJuYW1lcyI6WyJ1c2VDb250cmFjdCIsIldlYjNCdXR0b24iLCJ1c2VTdGF0ZSIsIkltYWdlIiwiVG9rZW4iLCJjb250cmFjdCIsInRva2VuRHJvcENvbnRyYWN0IiwiYW1vdW50VG9DbGFpbSIsInNldEFtb3VudFRvQ2xhaW0iLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgyIiwiaHIiLCJwIiwiaDEiLCJpbnB1dCIsImlkIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjb250cmFjdEFkZHJlc3MiLCJhY3Rpb24iLCJlcmMyMCIsImNsYWltIiwib25TdWNjZXNzIiwiYWxlcnQiLCJvbkVycm9yIiwiZXJyIiwiaDYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/templates/token/Token.tsx\n"));

/***/ })

});