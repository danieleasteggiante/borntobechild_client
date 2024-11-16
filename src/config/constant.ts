export const IMAGE_PATH = 'img/';
export const API_URL = 'http://localhost:8000/api/';
export const TIMEOUT = 5000;
export const GOOGLE_ENDPOINT_OAUTH = 'https://accounts.google.com/o/oauth2/v2/auth';
export const GOOGLE_OAUTH_REDIRECT_URI = 'http://localhost:8080/oauth/google/callback';
export const GOOGLE_OAUTH_CLIENT_ID='805991211134-uo7lk9p4s8trs0c3s9a57oc1n66ruon9.apps.googleusercontent.com';
export const GOOGLE_OAUTH_REQUEST = GOOGLE_ENDPOINT_OAUTH + '?' +
  'scope=https://www.googleapis.com/auth/cloud-platform ' +
  'https://www.googleapis.com/auth/userinfo.profile ' +
  'https://www.googleapis.com/auth/userinfo.email&' +
  'include_granted_scopes=true&' +
  'response_type=code&' +
  'access_type=offline&' +
  'redirect_uri=' + GOOGLE_OAUTH_REDIRECT_URI + '&' +
  'client_id=' + GOOGLE_OAUTH_CLIENT_ID;
