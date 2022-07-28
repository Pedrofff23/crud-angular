
const PROXY_CONFIG =[
  {
    context: ['/api'],
    target: 'http://25.64.11.171:8080/',
    secure: false,
    logLevel: 'debug'
  }

];

module.exports = PROXY_CONFIG
