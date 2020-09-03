const path = require('path');

function removeExtname(argPath) {
  let  extname = path.extname(argPath);
  if (extname.length) {
    argPath = argPath.slice(0, -(extname.length));
  }
  return argPath;
}

module.exports = {
  removeExtname,
};
