import Father from "./Father";
import './App.css';

const GrandFather = ({myWill}) => {
    return(
        <div className="Container">
            <h2>GrandFather Component</h2>
            <Father myw1 = {myWill}></Father>
        </div>
    )
}

export default GrandFather;