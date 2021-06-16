export function range(arr: Array<any> = [], chunkSize: number): Array<any> {
  if (chunkSize <= 0) throw Error('Invalid chunk size');
  const R = [];
  for (let i = 0, len = arr.length; i < len; i += chunkSize) R.push(arr.slice(i, i + chunkSize));
  return R;
}

export function mapToObject(json: Record<string, any>): any {
  return Object.create(json);
}
