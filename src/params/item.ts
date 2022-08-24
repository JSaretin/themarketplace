export function match(param: string) {
    const isTrue = /^[\d]+$/.test(param);
    return isTrue
  }