
const PROXY_CONFIG =[
  {
    context: ['/api'],
    target: 'http://25.6.36.98:8080/',
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG
