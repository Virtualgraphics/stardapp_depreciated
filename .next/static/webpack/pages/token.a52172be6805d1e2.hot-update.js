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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @thirdweb-dev/react */ \"./node_modules/@thirdweb-dev/react/dist/thirdweb-dev-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Token = ()=>{\n    _s();\n    const { contract: tokenDropContract  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract)(\"0xd23342d614a1ff1d7bc84b9041C8615532D55C6D\");\n    const [amountToClaim, setAmountToClaim] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"justify-center px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-4xl sm:text-center sm:mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" w-full \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            className: \" w-full sm:h-96\",\n                            src: \"/assets/star_divider.svg\",\n                            alt: \"Star Divider\",\n                            width: 10,\n                            height: 10\n                        }, void 0, false, {\n                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"m-auto mb-4 text-3xl font-bold tracking-tight text-yellow-100 sm:text-4xl sm:leading-none sm:m-auto font-Cinzel py-5\",\n                        children: \"SKY GODZ: Tokens\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                        className: \"w-full border-yellow-200\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-base text-white lg:text-2xl md:text-lg sm:px-4 py-5 font-Proza\",\n                        children: \"Claim your SKY GODZ LOTUS and STARDUST tokens below and play the Stargazer Games.\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-2 gap-20 place-content-stretch w-full h-96\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-indigo-900 rounded-2xl \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        className: \"p-10 rounded-full shadow-3xl\",\n                                        src: \"/assets/token_lotus750.jpg\",\n                                        alt: \"Lotus\",\n                                        width: 1260,\n                                        height: 750\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 1\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-white font-bold text-2xl \",\n                                        children: \"LOTUS Token\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-white text-lg\",\n                                        children: \"Claim your LOTUS Tokens\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-5 mb-5 max-w-sm\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"lg\",\n                                            type: \"text\",\n                                            placeholder: \"Enter amount to claim\",\n                                            className: \"flex-grow h-12 px-2 mb-3 text-blue-200 transitiom duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline\",\n                                            onChange: (e)=>setAmountToClaim(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 11\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 1\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.Web3Button, {\n                                        className: \"bg-blue text-white max-w-sm mb-5\",\n                                        contractAddress: \"0xd23342d614a1ff1d7bc84b9041C8615532D55C6D\",\n                                        action: (contract)=>contract.erc20.claim(amountToClaim),\n                                        onSuccess: ()=>alert(\"Claimed!\"),\n                                        onError: (err)=>alert(err),\n                                        children: \"Claim LOTUS\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 5\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 1\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-indigo-900 rounded-2xl\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        className: \"p-10 rounded-full\",\n                                        src: \"/assets/token_stardust750.jpg\",\n                                        alt: \"Stardust\",\n                                        width: 1260,\n                                        height: 750\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 1\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-white font-bold text-2xl\",\n                                        children: \"STARDUST Token\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 1\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-white text-lg\",\n                                        children: \"Claim your STARDUST Tokens\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 1\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 1\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 1\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                lineNumber: 18,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 mt-auto sm:grid-cols-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"duration-300 transform bg-blue-400 border-l-4 border-deep-purple-accent-900 hover:-translate-y-2 rounded-2xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-full p-5 rounded-r shadow-sm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    className: \"mb-2 font-semibold leading-5\",\n                                    children: \"The doctor said\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-gray-900\",\n                                    children: \"Sportacus andrew weatherall goose Refined gentlemen super mario des lynam alpha trion zap rowsdower.\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"duration-300 transform bg-blue-400 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-full p-5 rounded-r shadow-sm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    className: \"mb-2 font-semibold leading-5\",\n                                    children: \"Skate ipsum dolor\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-gray-900\",\n                                    children: \"Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"duration-300 transform bg-blue-400 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-full p-5 rounded-r shadow-sm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    className: \"mb-2 font-semibold leading-5\",\n                                    children: \"Baseball ipsum dolor\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 126,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-gray-900\",\n                                    children: \"Bro ipsum dolor sit amet gaper backside single track, manny Bike epic clipless. Schraeder drop gondy.\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                                    lineNumber: 129,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n                lineNumber: 106,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\SKY GODZ STARDAPP\\\\stardapp\\\\components\\\\templates\\\\token\\\\Token.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Token, \"XPAqr5w+cPK6Hi+OWyfbR7WvAA0=\", false, function() {\n    return [\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract\n    ];\n});\n_c = Token;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Token);\nvar _c;\n$RefreshReg$(_c, \"Token\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RlbXBsYXRlcy90b2tlbi9Ub2tlbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBZ0c7QUFHL0Q7QUFHSDtBQUk5QixNQUFNSSxRQUFRLElBQU07O0lBQ2xCLE1BQU0sRUFBRUMsVUFBVUMsa0JBQWlCLEVBQUMsR0FBR04sZ0VBQVdBLENBQUM7SUFDbkQsTUFBTSxDQUFDTyxlQUFlQyxpQkFBaUIsR0FBR04sK0NBQVFBLENBQUM7SUFHL0MscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBRWYsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUVULDRFQUFDUCxtREFBS0E7NEJBQ05PLFdBQVU7NEJBQ1ZDLEtBQUk7NEJBQ0pDLEtBQUk7NEJBQ0pDLE9BQU87NEJBQ1BDLFFBQVE7Ozs7Ozs7Ozs7O2tDQUtaLDhEQUFDQzt3QkFBR0wsV0FBVTtrQ0FBdUg7Ozs7OztrQ0FHckksOERBQUNNO3dCQUFHTixXQUFVOzs7Ozs7a0NBQ2QsOERBQUNPO3dCQUFFUCxXQUFVO2tDQUFzRTs7Ozs7O2tDQUkvRiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUVmLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBRWYsOERBQUNQLG1EQUFLQTt3Q0FDUU8sV0FBVTt3Q0FDVkMsS0FBSTt3Q0FDSkMsS0FBSTt3Q0FDSkMsT0FBTzt3Q0FDUEMsUUFBUTs7Ozs7O2tEQUdaLDhEQUFDSTt3Q0FBR1IsV0FBVTtrREFBaUM7Ozs7OztrREFDL0MsOERBQUNLO3dDQUFHTCxXQUFVO2tEQUFxQjs7Ozs7O2tEQUU3Qyw4REFBQ0Q7d0NBQUlDLFdBQVU7a0RBQ0wsNEVBQUNTOzRDQUNQQyxJQUFHOzRDQUNIQyxNQUFLOzRDQUNMQyxhQUFZOzRDQUNoQlosV0FBVTs0Q0FHTmEsVUFBVSxDQUFDQyxJQUFNaEIsaUJBQWlCZ0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7Ozs7OztrREFLaEQsOERBQUN6QiwyREFBVUE7d0NBQ0xTLFdBQVU7d0NBRVZpQixpQkFBZ0I7d0NBQ2hCQyxRQUFRLENBQUN2QixXQUFhQSxTQUFTd0IsS0FBSyxDQUFDQyxLQUFLLENBQUN2Qjt3Q0FDM0N3QixXQUFXLElBQU1DLE1BQU07d0NBQ3ZCQyxTQUFTLENBQUNDLE1BQVFGLE1BQU1FO2tEQUN6Qjs7Ozs7Ozs7Ozs7OzBDQVNULDhEQUFDekI7Z0NBQUlDLFdBQVU7O2tEQUdmLDhEQUFDUCxtREFBS0E7d0NBQ1FPLFdBQVU7d0NBQ1ZDLEtBQUk7d0NBQ0pDLEtBQUk7d0NBQ0pDLE9BQU87d0NBQ1BDLFFBQVE7Ozs7OztrREFHdEIsOERBQUNJO3dDQUFHUixXQUFVO2tEQUFnQzs7Ozs7O2tEQUM5Qyw4REFBQ0s7d0NBQUdMLFdBQVU7a0RBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBVXpCLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2pCLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDeUI7b0NBQUd6QixXQUFVOzhDQUErQjs7Ozs7OzhDQUM3Qyw4REFBQ087b0NBQUVQLFdBQVU7OENBQXdCOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNekMsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUN5QjtvQ0FBR3pCLFdBQVU7OENBQStCOzs7Ozs7OENBQzdDLDhEQUFDTztvQ0FBRVAsV0FBVTs4Q0FBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUt6Qyw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ3lCO29DQUFHekIsV0FBVTs4Q0FBK0I7Ozs7Ozs4Q0FHN0MsOERBQUNPO29DQUFFUCxXQUFVOzhDQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhN0M7R0FuSUVOOztRQUNtQ0osNERBQVdBOzs7S0FEOUNJO0FBc0lKLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGVtcGxhdGVzL3Rva2VuL1Rva2VuLnRzeD82MDNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWVkaWFSZW5kZXJlciwgdXNlQ29udHJhY3QsIHVzZUNvbnRyYWN0TWV0YWRhdGEsIFdlYjNCdXR0b259IGZyb20gXCJAdGhpcmR3ZWItZGV2L3JlYWN0XCI7XHJcbmltcG9ydCB7IEVkaXRpb25Ecm9wLCBFcmMxMTU1IH0gZnJvbSAnQHRoaXJkd2ViLWRldi9zZGsnO1xyXG5pbXBvcnQgeyBCaWdOdW1iZXIgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZDLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbm5lY3RXYWxsZXQsIHVzZUFkZHJlc3MgfSBmcm9tIFwiQHRoaXJkd2ViLWRldi9yZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcblxyXG5cclxuY29uc3QgVG9rZW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBjb250cmFjdDogdG9rZW5Ecm9wQ29udHJhY3R9ID0gdXNlQ29udHJhY3QoXCIweGQyMzM0MmQ2MTRhMWZmMWQ3YmM4NGI5MDQxQzg2MTU1MzJENTVDNkRcIik7XHJcbiAgY29uc3QgW2Ftb3VudFRvQ2xhaW0sIHNldEFtb3VudFRvQ2xhaW1dID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXIgcHgtNCBweS01IG14LWF1dG8gc206bWF4LXcteGwgbWQ6bWF4LXctZnVsbCBsZzptYXgtdy1zY3JlZW4teGwgbWQ6cHgtMjQgXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTR4bCBzbTp0ZXh0LWNlbnRlciBzbTpteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdy1mdWxsIFwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LWZ1bGwgIHNtOmgtOTZcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9zdGFyX2RpdmlkZXIuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlN0YXIgRGl2aWRlclwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17MTB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm0tYXV0byBtYi00IHRleHQtM3hsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LXllbGxvdy0xMDAgc206dGV4dC00eGwgc206bGVhZGluZy1ub25lIHNtOm0tYXV0byBmb250LUNpbnplbCBweS01XCI+XHJcbiAgICAgICAgICAgIFNLWSBHT0RaOiBUb2tlbnNcclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInctZnVsbCAgYm9yZGVyLXllbGxvdy0yMDBcIiAvPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC13aGl0ZSBsZzp0ZXh0LTJ4bCBtZDp0ZXh0LWxnIHNtOnB4LTQgcHktNSBmb250LVByb3phXCI+XHJcbiAgICAgICAgICAgQ2xhaW0geW91ciBTS1kgR09EWiBMT1RVUyBhbmQgU1RBUkRVU1QgdG9rZW5zIGJlbG93IGFuZCBwbGF5IHRoZSBTdGFyZ2F6ZXIgR2FtZXMuIFxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG48ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTIwIHBsYWNlLWNvbnRlbnQtc3RyZXRjaCB3LWZ1bGwgaC05NlwiPlxyXG5cclxuPGRpdiBjbGFzc05hbWU9XCJiZy1pbmRpZ28tOTAwICByb3VuZGVkLTJ4bCAgXCIgPlxyXG5cclxuPEltYWdlXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xMCByb3VuZGVkLWZ1bGwgc2hhZG93LTN4bFwiXHJcbiAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy90b2tlbl9sb3R1czc1MC5qcGdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIkxvdHVzXCJcclxuICAgICAgICAgICAgICB3aWR0aD17MTI2MH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezc1MH1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC0yeGwgXCI+TE9UVVMgVG9rZW48L2gxPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1sZ1wiPkNsYWltIHlvdXIgTE9UVVMgVG9rZW5zPC9oMj5cclxuXHJcbjxkaXYgY2xhc3NOYW1lPVwibXQtNSBtYi01IG1heC13LXNtXCI+XHJcbiAgICAgICAgICA8aW5wdXQgXHJcbiAgICBpZD1cImxnXCJcclxuICAgIHR5cGU9XCJ0ZXh0XCIgIFxyXG4gICAgcGxhY2Vob2xkZXI9XCJFbnRlciBhbW91bnQgdG8gY2xhaW1cIiBcclxuY2xhc3NOYW1lPVwiZmxleC1ncm93ICBoLTEyIHB4LTIgbWItMyB0ZXh0LWJsdWUtMjAwIHRyYW5zaXRpb20gZHVyYXRpb24tMjAwIGJvcmRlci0yIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkIGFwcGVhcmFuY2Utbm9uZSBtZDptci0yIG1kOm1iLTAgYmctZGVlcC1wdXJwbGUtOTAwIGZvY3VzOmJvcmRlci10ZWFsLWFjY2VudC03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgXHJcbiAgIFxyXG4gICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBbW91bnRUb0NsYWltKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgIFxyXG4gICAgLz5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxXZWIzQnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlIHRleHQtd2hpdGUgbWF4LXctc20gbWItNVwiXHJcbiAgICAgICBcclxuICAgICAgICAgIGNvbnRyYWN0QWRkcmVzcz1cIjB4ZDIzMzQyZDYxNGExZmYxZDdiYzg0YjkwNDFDODYxNTUzMkQ1NUM2RFwiXHJcbiAgICAgICAgICBhY3Rpb249eyhjb250cmFjdCkgPT4gY29udHJhY3QuZXJjMjAuY2xhaW0oYW1vdW50VG9DbGFpbSl9XHJcbiAgICAgICAgICBvblN1Y2Nlc3M9eygpID0+IGFsZXJ0KFwiQ2xhaW1lZCFcIil9XHJcbiAgICAgICAgICBvbkVycm9yPXsoZXJyKSA9PiBhbGVydChlcnIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIENsYWltIExPVFVTXHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8L1dlYjNCdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbjxkaXYgY2xhc3NOYW1lPVwiYmctaW5kaWdvLTkwMCAgcm91bmRlZC0yeGxcIj5cclxuXHJcblxyXG48SW1hZ2VcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTEwIHJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy90b2tlbl9zdGFyZHVzdDc1MC5qcGdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIlN0YXJkdXN0XCJcclxuICAgICAgICAgICAgICB3aWR0aD17MTI2MH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezc1MH1cclxuICAgICAgICAgICAgLz5cclxuXHJcbjxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LTJ4bFwiPlNUQVJEVVNUIFRva2VuPC9oMT5cclxuPGgyIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1sZ1wiPkNsYWltIHlvdXIgU1RBUkRVU1QgVG9rZW5zPC9oMj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgXHJcblxyXG48L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTggcm93LWdhcC01IG1iLTggbWQ6cm93LWdhcC04IGxnOmdyaWQtY29scy0zIG10LWF1dG8gc206Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gYmctYmx1ZS00MDAgYm9yZGVyLWwtNCBib3JkZXItZGVlcC1wdXJwbGUtYWNjZW50LTkwMCBob3ZlcjotdHJhbnNsYXRlLXktMiByb3VuZGVkLTJ4bFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgcC01ICByb3VuZGVkLXIgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtYi0yIGZvbnQtc2VtaWJvbGQgbGVhZGluZy01XCI+VGhlIGRvY3RvciBzYWlkPC9oNj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgU3BvcnRhY3VzIGFuZHJldyB3ZWF0aGVyYWxsIGdvb3NlIFJlZmluZWQgZ2VudGxlbWVuIHN1cGVyIG1hcmlvXHJcbiAgICAgICAgICAgICAgZGVzIGx5bmFtIGFscGhhIHRyaW9uIHphcCByb3dzZG93ZXIuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVyYXRpb24tMzAwIHRyYW5zZm9ybSBiZy1ibHVlLTQwMCBib3JkZXItbC00IGJvcmRlci1kZWVwLXB1cnBsZS1hY2NlbnQtNDAwIGhvdmVyOi10cmFuc2xhdGUteS0yIHJvdW5kZWQtMnhsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBwLTUgIHJvdW5kZWQtciBzaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1iLTIgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTVcIj5Ta2F0ZSBpcHN1bSBkb2xvcjwvaDY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgIEJ1bGJhc2F1ciBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gYmctYmx1ZS00MDAgYm9yZGVyLWwtNCBib3JkZXItZGVlcC1wdXJwbGUtYWNjZW50LTQwMCBob3ZlcjotdHJhbnNsYXRlLXktMiByb3VuZGVkLTJ4bFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgcC01ICByb3VuZGVkLXIgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtYi0yIGZvbnQtc2VtaWJvbGQgbGVhZGluZy01XCI+XHJcbiAgICAgICAgICAgICAgQmFzZWJhbGwgaXBzdW0gZG9sb3JcclxuICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgQnJvIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGdhcGVyIGJhY2tzaWRlIHNpbmdsZSB0cmFjaywgbWFubnkgQmlrZVxyXG4gICAgICAgICAgICAgIGVwaWMgY2xpcGxlc3MuIFNjaHJhZWRlciBkcm9wIGdvbmR5LlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcblxyXG5cclxuIDwvZGl2PlxyXG5cclxuICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gXHJcbiAgZXhwb3J0IGRlZmF1bHQgVG9rZW47Il0sIm5hbWVzIjpbInVzZUNvbnRyYWN0IiwiV2ViM0J1dHRvbiIsInVzZVN0YXRlIiwiSW1hZ2UiLCJUb2tlbiIsImNvbnRyYWN0IiwidG9rZW5Ecm9wQ29udHJhY3QiLCJhbW91bnRUb0NsYWltIiwic2V0QW1vdW50VG9DbGFpbSIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDIiLCJociIsInAiLCJoMSIsImlucHV0IiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnRyYWN0QWRkcmVzcyIsImFjdGlvbiIsImVyYzIwIiwiY2xhaW0iLCJvblN1Y2Nlc3MiLCJhbGVydCIsIm9uRXJyb3IiLCJlcnIiLCJoNiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/templates/token/Token.tsx\n"));

/***/ })

});