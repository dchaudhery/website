"use strict";
(() => {
var exports = {};
exports.id = 820;
exports.ids = [820];
exports.modules = {

/***/ 2646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _error)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/error"
const error_namespaceObject = require("next/error");
var error_default = /*#__PURE__*/__webpack_require__.n(error_namespaceObject);
;// CONCATENATED MODULE: external "@sentry/nextjs"
const nextjs_namespaceObject = require("@sentry/nextjs");
;// CONCATENATED MODULE: ./src/pages/_error.tsx



const MyError = ({ statusCode , hasGetInitialPropsRun , err  })=>{
    if (!hasGetInitialPropsRun && err) {
        // getInitialProps is not called in case of
        // https://github.com/vercel/next.js/issues/8592. As a workaround, we pass
        // err via _app.js so it can be captured
        nextjs_namespaceObject.captureException(err);
    // Flushing is not required in this case as it only happens on the client
    }
    return /*#__PURE__*/ jsx_runtime_.jsx((error_default()), {
        statusCode: statusCode
    });
};
MyError.getInitialProps = async (context)=>{
    const errorInitialProps = await error_default().getInitialProps(context);
    const { res , err , asPath  } = context;
    // Workaround for https://github.com/vercel/next.js/issues/8592, mark when
    // getInitialProps has run
    errorInitialProps.hasGetInitialPropsRun = true;
    // Returning early because we don't want to log 404 errors to Sentry.
    if (res?.statusCode === 404) {
        return errorInitialProps;
    }
    if (err) {
        nextjs_namespaceObject.captureException(err);
        // Flushing before returning is necessary if deploying to Vercel, see
        // https://vercel.com/docs/platform/limits#streaming-responses
        await nextjs_namespaceObject.flush(2000);
        return errorInitialProps;
    }
    // If this point is reached, getInitialProps was called without any
    // information about what the error might be. This is unexpected and may
    // indicate a bug introduced in Next.js, so record it in Sentry
    nextjs_namespaceObject.captureException(new Error(`_error.js getInitialProps missing data at path: ${asPath}`));
    await nextjs_namespaceObject.flush(2000);
    return errorInitialProps;
};
/* harmony default export */ const _error = (MyError);


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2646));
module.exports = __webpack_exports__;

})();