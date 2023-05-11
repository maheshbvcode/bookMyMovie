import React from 'react'
import { AiFillStar } from 'react-icons/ai';
const CardDetail = () => {
    const name = localStorage.getItem('name');
    const rating = localStorage.getItem('rating');
    const language = localStorage.getItem('language');
    const genres = localStorage.getItem('genres');
    return (
        <div style={{ marginLeft: "50px" }}>
            <h1 style={{ marginBottom: "10px" }}>{name}</h1>
            <div>
                <span style={{ display: "flex", alignItems: "center" }}>
                    <AiFillStar style={{ color: "red", width: "30px" }} />
                    <h3 style={{ marginLeft: "2px", marginTop: "0", fontSize: "1.5em" }}>{rating}/10, Average</h3>
                </span>
            </div>
            <div style={{ width: "200px", height: "40px", background: "#D9D9D9", marginTop: "25px", marginBottom: "25px", textAlign: "center", borderRadius: "20px" }}>
                <p style={{ fontSize: "1.35em", lineHeight: "40px", margin: "0" }}>{language}</p>
            </div>
            <h1 style={{ fontSize: "1.5em" }}>60min • {genres}</h1>
            <button
                style={{
                    marginTop: "25px",
                    borderRadius: "4px",
                    width: "180px",
                    height: "80px",
                    background: "#F84464",
                    color: "white",
                    fontSize: "1.6em",
                    transition: "background-color 0.2s ease-in-out"
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#D93650"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "#F84464"}
            >
                Book tickets
            </button>
        </div>

    )
}

export default CardDetail

