import '../App.css';

const Header = ({qm, handleReset}) => {
    return(
        <>
            <header>
                <h1>Guess My Number!</h1>
                <p className="between">(Between 1 and 20)</p>
                <button onClick={handleReset} className="btn again">Again!</button>
                <div className="number">{qm}</div>
            </header>
        </>
    )
}
export default Header;