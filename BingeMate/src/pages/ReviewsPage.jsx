import { useState, useEffect } from 'react';
import { useParams, useOutletContext, useNavigate } from 'react-router-dom';
import '../styles/seriesForm.css'; 

const Reviews = () => {
    const { seriesId } = useParams();
    const { data } = useOutletContext();
    const navigate = useNavigate();
    
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(5);
    const [watchDate, setWatchDate] = useState(new Date().toISOString().split("T")[0]);

    const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

    const seriesData = data.find((ele) => ele.id === Number(seriesId));

    useEffect(() => {
        if (data.length > 0 && !seriesData) 
        {
            navigate(-1);
        }
    }, [data, seriesData, navigate]);

    if (!seriesData) 
    {
        return <h1>Loading...</h1>;
    }

    const handleLogSubmit = (e) => {
        e.preventDefault();
        const diaryEntry = {
            // eslint-disable-next-line react-hooks/purity
            id: Date.now(),
            seriesId: seriesData.id,
            name: seriesData.name,
            poster_path: seriesData.poster_path,
            first_air_date: seriesData.first_air_date,
            rating: rating,
            review: review,
            watchedOn: watchDate
        };

        const existingDiary = JSON.parse(localStorage.getItem("myDiary")) || [];
        localStorage.setItem("myDiary", JSON.stringify([diaryEntry, ...existingDiary]));

        alert("Logged to Diary successfully!");
        navigate("/diary");
    };

    return (
        <div className="forms" style={{ maxWidth: "900px", display: "flex", gap: "40px", alignItems: "flex-start", marginTop: "50px" }}>
            <div style={{ flex: 1, textAlign: "center" }}>
                <img 
                    src={`${imageBaseUrl}${seriesData.poster_path}`} 
                    alt={seriesData.name} 
                    style={{ width: "100%", borderRadius: "10px", boxShadow: "0 4px 15px rgba(0,0,0,0.5)" }} 
                />
                <h2 style={{ marginTop: "15px", color: "white" }}>{seriesData.name}</h2>
                <p style={{ color: "#aaa" }}>{seriesData.first_air_date.split("-")[0]}</p>
            </div>

            {/* Right Side: The Form */}
            <div style={{ flex: 2, width: "100%" }}>
                <h1 className='title' style={{textAlign: "left", marginBottom: "20px"}}>I Watched...</h1>
                
                <form onSubmit={handleLogSubmit}>
                    <label>Date Watched</label>
                    <input 
                        type="date" 
                        value={watchDate} 
                        onChange={(e) => setWatchDate(e.target.value)} 
                        required 
                    />

                    <label>Rating (1-5)</label>
                    <input 
                        type="number" 
                        min="1" max="5" 
                        step="0.5"
                        value={rating} 
                        onChange={(e) => setRating(e.target.value)} 
                        required 
                    />

                    <label>Review</label>
                    <textarea 
                        rows="6" 
                        placeholder="Write your review here..." 
                        value={review} 
                        onChange={(e) => setReview(e.target.value)}
                        required
                    ></textarea>

                    <div style={{display: "flex", gap: "10px", marginTop: "20px"}}>
                        <button className="submitButton" type="submit" style={{flex: 1}}>Save to Diary</button>
                        <button 
                            type="button" 
                            onClick={() => navigate(-1)} 
                            style={{
                                flex: 1, 
                                backgroundColor: "transparent", 
                                border: "1px solid #555", 
                                color: "#aaa", 
                                borderRadius: "5px", 
                                cursor: "pointer"
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Reviews;