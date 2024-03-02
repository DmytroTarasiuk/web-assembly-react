import loader from "@assemblyscript/loader";

let wasm; // Declare wasm variable outside the loadWASM function

export const loadWASM = () => {
  return loader
    .instantiate(fetch("release.wasm"))
    .then((result) => {
      wasm = result.exports; // Assign exports to the global wasm variable
      console.log(wasm);
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
