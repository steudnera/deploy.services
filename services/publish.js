/**
 * 一些配置
 * @author philip
 */

const shelljs = require('shelljs/global');

module.exports.exec = function () {
  if (exec('npm run publish').code !== 0) {
    echo('Error: publish failed');
    return false;
  } else {
    return true;
  }
};