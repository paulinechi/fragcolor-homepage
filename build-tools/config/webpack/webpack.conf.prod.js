const { buildTypes } = require('../config');

module.exports = require('./webpack.conf.base')(buildTypes.PRODUCTION);
console.log('---production----');
