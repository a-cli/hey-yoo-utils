type Fn<T> = (...arg: any[]) => T | unknown;

function runFunc<T>(fn: Fn<T> | undefined, ...arg: any[]): ReturnType<Fn<T>> {
  if (typeof fn === 'function') {
    return fn(...arg);
  }
}

export default runFunc;
