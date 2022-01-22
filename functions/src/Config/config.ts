import * as dotenv from "dotenv";

dotenv.config();

const {
    PORT,
    HOST,
    HOST_URL,
    TYPE,
    PROJECT_ID,
    PRIVATE_KEY_ID,
    PRIVATE_KEY,
    CLIENT_EMAIL,
    CLIENT_ID,
    AUTH_URL,
    TOKEN_URL,
    AUTH_PROVIDER_X509_CERT_URL,
    CLIENT_X509_CERT_URL

} = process.env;

export = {
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
}
