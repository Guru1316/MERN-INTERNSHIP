import GrandSon from './GrandSon';
import './App.css'

const Son = ({myw2}) => {
    return(
        <div className="Container">
            <h2>Son Component</h2>
            <GrandSon myw3 = {myw2}></GrandSon>
        </div>
    )
}

export default Son;