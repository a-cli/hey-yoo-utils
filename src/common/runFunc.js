function runFunc(fn, ...arg) {
  if (typeof fn === 'function') {
    return fn(...arg);
  }
}

module.exports = runFunc;