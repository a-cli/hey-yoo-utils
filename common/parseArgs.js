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
        if (key) {
          result[key] = temp.join('=');
          switch (result[key]) {
            case 'true':
              result[key] = true;
              break;
            case 'false':
              result[key] = false;
              break;
            case 'undefined':
              result[key] = undefined;
              break;
            case 'null':
              result[key] = null;
              break;
            default:
          }
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