import { useState, useEffect } from 'react';
import './App.css';
import Guess from './Number_Guessing_Website/Guess.js';

function App() {
  let [ran, setRam] = useState(Math.trunc(Math.random() * 20) + 1);;

  let [bg, setBg] = useState("#222")
  let [enable, setEnable] = useState(false);
  let [qm, setQm] = useState("?");
  let [gv, setGv] = useState("");
  let [msg, setMsg] = useState("Start guessing...")
  let [scr, setScr] = useState(20);
  let [hscr, setHscr] = useState(0);

  console.log(ran);

  useEffect(() =>
    {
      document.body.style.backgroundColor = bg;
    } , [bg]
  )

  const calRand = (e) => 
  {
    setRam(Number(Math.trunc(Math.random() * 20) + 1));
  }

  const handleReset = () =>
  {
    calRand();
    setEnable(false);
    setScr(20);
    setBg("#222")
    setMsg("Start guessing...");
    setQm("?")
    setGv("");
  }

  const handleCheck = () =>
  {
    if(gv === "")
    {
      alert("Please Enter A Number...");
    }
    else if(gv <= 0 || gv > 20)
    {
        setMsg("Invalid Value");
    }
    else if(gv === ran)
    {
        if(scr > hscr)
        {
            setHscr(scr);
        }
        setBg("green");
        setMsg("Correct Value");
        setQm(ran);
        setScr(scr);
        setEnable(true);
    }
    else if(gv > ran)
    {
        setScr(scr - 1);
        setMsg("Too High");
    }
    else if(gv < ran)
    {
        setScr(scr - 1);
        setMsg("Too Low");
    }
  }
  return (
    <div className="App">
      <Guess enable = {enable} qm = {qm} msg = {msg} handleReset = {handleReset} handleCheck = {handleCheck} gv = {gv}
       setGv = {setGv} scr={scr} hscr={hscr}></Guess>
    </div>
  );
}

export default App;