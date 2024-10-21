// import Detail from "./Components/card";

import { useCounter } from "./Store/useStore";

function App() {
  // function hello<T>(a: T) {
  //   return a;
  // }
  // const result = hello(1);
  // console.log("the value is " + result + "and its type is " + typeof result);

  // return (
  //   <>
  //     <Detail name={"Manoj"} age={23} address={"Parasi"} />
  //     <Detail name={"Hari"} age={24} address={"butwal"} />
  //   </>
  // );

  const { count, increaseCount, decreaseCount } = useCounter();
  return (
    <>
      <div>
        <p>Counter: {count}</p>
        <button type="button" onClick={() => increaseCount(5)}>
          Increase Counter
        </button>
        <br />
        <button type="button" onClick={() => decreaseCount(5)}>
          Decrease Counter
        </button>
      </div>
    </>
  );
}

export default App;
