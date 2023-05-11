import React from 'react';
import CardImage from '../components/card/CardImage';
import CardDetail from '../components/card/CardDetail';


const MovieDetails = () => {
    const description = localStorage.getItem('description');
    
    return (
        <div style={{ marginTop: "60px", marginLeft: "100px", marginRight: "50px" }}>
            <div style={{ display: "flex" }}>
                <CardImage />
                <CardDetail />
            </div>
            <section style={{ marginTop: "50px" ,width:"50%"}}>
                <h1>
                    About The Movie
                </h1>
                {description}
            </section>

        </div>
    )
}

export default MovieDetails
