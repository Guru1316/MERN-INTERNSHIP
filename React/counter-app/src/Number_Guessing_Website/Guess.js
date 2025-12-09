import '../App.css'
import Header from './Header';
import Input from './Input';
import Right from './Right';

const Guess = ({enable, qm, msg, handleReset, handleCheck, gv, setGv, scr, hscr}) =>
{
    return(
        <>
            <Header qm = {qm} handleReset={handleReset}></Header>
            <main>
                <Input enable = {enable} gv = {gv} setGv = {setGv} handleCheck = {handleCheck}></Input>
                <Right msg = {msg} scr = {scr} hscr = {hscr}></Right>
            </main>
        </>
    )
}

export default Guess;