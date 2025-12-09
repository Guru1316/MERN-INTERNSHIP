import Son from "./Son";
import './App.css'

const Father = ({myw1}) => {
    return(
        <div className="Container">
            <h2>Father Component</h2>
            <Son myw2 = {myw1}></Son>
        </div>
    )
}

export default Father;