import './App.css';
import { useState } from 'react';
import Counter from './Counter';
// import Component4, { Component2, Component3 } from './Component2';
// import Component1 from './Component1';
// import Compo1 from './Compo1';
// import Compo2 from './Compo2';
// import Compo3 from './Compo3';
// import Compo4 from './Compo4';
// import Compo5 from './Compo5';
// import { useEffect } from 'react';
// import Component5 from './Component5';
// import GrandFather from './GrandFather';

function App() {
  // let val = 0;
  let [val, setVal] = useState(0);
  const handleIncrement = () => {
    // console.log("Increment button clicked");
    // val = val + 1;
    setVal(val + 1);
  }
  const handleDecrement = () => {
    // console.log("Decrement button clicked");
    // val = val - 1;
    if(val>0)
    {
      setVal(val - 1);
    }
  }
  // useEffect(() => {
  //   document.body.style.backgroundColor = 'black';
  //   document.body.style.color = 'white';
  //  });
  // let myw = "Bless You Grandson By GrandFather";
  //  let msg = "Most Important Rule";
  //  let total = 10;
  //  let heading = "Rules For Sigma Males";
  return (
    <div className="App">
      {/* <h1>10 Sigma Rules</h1>
      <Component1 s={total} r={heading}></Component1>
      <Component2></Component2>
      <Component3></Component3>
      <Component4></Component4>
      <Component5></Component5>
      <Compo1></Compo1>
      <Compo2></Compo2>
      <Compo3 q={msg}></Compo3>
      <Compo4></Compo4>
      <Compo5></Compo5> */}
      {/* <GrandFather myWill = {myw}></GrandFather> */}
      <h1>Counter - App</h1>
      <Counter val = {val} handleIncrement = {handleIncrement} handleDecrement = {handleDecrement}></Counter>
    </div>
    
  );
}

export default App;