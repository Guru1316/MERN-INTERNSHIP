import '../App.css'

const Input = ({enable, gv, setGv, handleCheck}) => {
    return(
        <>
            <section className="left">
                    <input type="number" disabled={enable} className="guess" min="1" max="20" value={gv} onChange={(e) => {
                      if(e.target.value === "")
                      {
                        setGv("");
                      }
                      else
                      {
                        setGv(Number(e.target.value));
                      }
                    }
                    }/>
                    <button disabled={enable} onClick={handleCheck} className="btn check">Check!</button>
             </section>
        </>
    )
}

export default Input;