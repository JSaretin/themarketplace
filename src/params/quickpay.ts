export function match(param: string) {
    const isTrue = /^(([\d\w]+)-)+([\d\w]+)$/.test(param);
    return isTrue
  }