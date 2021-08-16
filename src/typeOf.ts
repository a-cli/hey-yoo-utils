function typeOf(arg: any): string {
  return Object.prototype.toString.call(arg).slice(8, -1).toLowerCase();
}

export default typeOf;
