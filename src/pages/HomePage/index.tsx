import { useEffect, useState } from "react";

import { addNumbers, concatString, loadWASM } from "../../wasm/wasmLoader";

const HomePage = () => {
  const [wasmLoaded, setWasmLoaded] = useState(false);
  const [concat, setConcat] = useState("");
  const [sum, setSum] = useState();
  console.log(wasmLoaded);

  useEffect(() => {
    loadWASM().then((result) => setWasmLoaded(result));
  }, []);
  useEffect(() => {
    if (wasmLoaded) {
      setConcat(concatString("React", "WASM"));
      setSum(addNumbers(4, 4));
    }
  }, [wasmLoaded]);

  console.log(sum);
  console.log(concat);

  return (
    <>
      {concat}
      {sum}
    </>
  );
};

export default HomePage;
