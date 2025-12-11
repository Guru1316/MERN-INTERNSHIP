import '../App.css'
import { useParams } from 'react-router-dom';

const Series = () => {
    const {seriesId} = useParams();
    console.log(seriesId)
    return(
        <div className="text">
            <h1>Series Page will be {seriesId}</h1>
        </div>
    )
}

export default Series;