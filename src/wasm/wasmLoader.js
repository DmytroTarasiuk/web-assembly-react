import loader from "@assemblyscript/loader";

let wasm;

export const loadWASM = () => {
  return loader
    .instantiate(fetch("release.wasm"))
    .then((result) => {
      wasm = result.exports;
      return true;
    })
    .catch((error) => {
      console.error("Error loading WASM file");
      return false;
    });
};

export const addNumbers = (a, b) => wasm.add(a, b);

export const concatString = (aStr, bStr) => {
  const { concat } = wasm;
  const { __newString, __getString } = wasm;
  let aPtr = __newString(aStr);
  let bPtr = __newString(bStr);
  let cPtr = concat(aPtr, bPtr);
  let cStr = __getString(cPtr);
  return cStr;
};

export const calculateAverageFunction = (numbers) => {
  const { calculateAverage, __newArray, INT32ARRAY_ID } = wasm;
  const arrPtr = __newArray(INT32ARRAY_ID, numbers);
  return calculateAverage(arrPtr);
};
