// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function concat(a: string, b: string): string {
  return a + b;
}

export function calculateAverage(arr: Int32Array): i32 {
  let v = 0;
  for (let i = 0, k = arr.length; i < k; ++i) v += arr[i];
  return v / arr.length;
}

export const INT32ARRAY_ID = idof<Int32Array>();
