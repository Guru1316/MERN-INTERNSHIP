import '../App.css'

const Right = ({msg, scr, hscr}) => {
    return(
        <>
            <section className="right">
                    <p className="message">{msg}</p>
                    <p className="label-score">💯 Score: <span className="score">{scr}</span></p>
                    <p className="label-highscore">
                        🥇 Highscore: <span className="highscore">{hscr}</span>
                    </p>
            </section>
        </>
    )
}
export default Right;