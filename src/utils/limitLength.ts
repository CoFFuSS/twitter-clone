export const limitLength = (text: string, count: number, insertDots: boolean) =>
  text.slice(0, count) + (text.length > count && insertDots ? '...' : '');
