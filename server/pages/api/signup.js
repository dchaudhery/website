"use strict";
(() => {
var exports = {};
exports.id = 964;
exports.ids = [964];
exports.modules = {

/***/ 7730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ signup)
});

;// CONCATENATED MODULE: external "@sentry/nextjs"
const nextjs_namespaceObject = require("@sentry/nextjs");
;// CONCATENATED MODULE: external "next/config"
const config_namespaceObject = require("next/config");
var config_default = /*#__PURE__*/__webpack_require__.n(config_namespaceObject);
;// CONCATENATED MODULE: external "@mailchimp/mailchimp_marketing"
const mailchimp_marketing_namespaceObject = require("@mailchimp/mailchimp_marketing");
var mailchimp_marketing_default = /*#__PURE__*/__webpack_require__.n(mailchimp_marketing_namespaceObject);
;// CONCATENATED MODULE: external "md5"
const external_md5_namespaceObject = require("md5");
var external_md5_default = /*#__PURE__*/__webpack_require__.n(external_md5_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/signup.ts




const { publicRuntimeConfig: { MAILCHIMP_API_KEY , MAILCHIMP_API_SERVER , MAILCHIMP_AUDIENCE_ID ,  } ,  } = config_default()();
mailchimp_marketing_default().setConfig({
    apiKey: MAILCHIMP_API_KEY,
    server: MAILCHIMP_API_SERVER
});
const signupHandler = async (req, res)=>{
    const { firstName , lastName , company , email , type  } = req.body;
    if (!email) {
        return res.status(400).json({
            error: "Email is required"
        });
    }
    const hashedEmail = external_md5_default()(email);
    try {
        await mailchimp_marketing_default().lists.setListMember(MAILCHIMP_AUDIENCE_ID, hashedEmail, {
            email_address: email,
            // @ts-expect-error something about the enum
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName,
                COMPANY: company,
                TYPE: type
            }
        });
        return res.status(201).json({
            error: ""
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message || err.toString()
        });
    }
};
/* harmony default export */ const signup = ((0,nextjs_namespaceObject.withSentry)(signupHandler));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7730));
module.exports = __webpack_exports__;

})();