const needParseCfg = {
  'true': true,
  'false': false,
  'undefined': undefined,
  'null': null,
};

/**
 * @param {Array} args
 * @return {Object} result
 * */
function parseArgs(args) {
  if (Array.isArray(args)) {
    let result = {};
    for (let i = 0; i < args.length; i++) {
      if (/^(?!=).*=.*/.test(args[i])) {
        let temp = args[i].split('=');
        let key = temp.shift();
        result[key] = temp.join('=');
        if (needParseCfg.hasOwnProperty(result[key])) {
          result[key] = needParseCfg[result[key]];
        }
      } else {
        result[args[i]] = true;
      }
    }
    return result;
  }
  return {};
}

module.exports = parseArgs;