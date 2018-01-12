let backendHost;
const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

if(hostname === 'chuckbtaylor.github.io' || !!hostname.match('herokuapp')) {
  backendHost = 'https://nameless-journey-45031.herokuapp.com';
  console.log('setting backend host name to:', backendHost)
} else if(/^qa/.test(hostname)) {
  backendHost = `https://api.${hostname}`;
} else {
  backendHost = process.env.REACT_APP_BACKEND_HOST || 'http://localhost:3000';
}

export const API_ROOT = `${backendHost}/api/${apiVersion}`; 
