"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const { PORT, HOST, HOST_URL, TYPE, PROJECT_ID, PRIVATE_KEY_ID, PRIVATE_KEY, CLIENT_EMAIL, CLIENT_ID, AUTH_URL, TOKEN_URL, AUTH_PROVIDER_X509_CERT_URL, CLIENT_X509_CERT_URL } = process.env;
module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    firebaseConfig: {
        type: TYPE,
        project_id: PROJECT_ID,
        private_key_id: PRIVATE_KEY_ID,
        private_key: PRIVATE_KEY,
        client_email: CLIENT_EMAIL,
        client_id: CLIENT_ID,
        auth_uri: AUTH_URL,
        token_uri: TOKEN_URL,
        auth_provider_x509_cert_url: AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url: CLIENT_X509_CERT_URL
    }
};
//# sourceMappingURL=config.js.map