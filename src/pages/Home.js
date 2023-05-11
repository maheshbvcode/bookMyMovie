import React, { useEffect, useState } from 'react';
import "./home.css";
import Card from '../components/card/Card';


const Home = () => {
    
    const [shows, setShows] = useState([]);
    useEffect(()=>{
        async function getShows() {
            const response = await fetch(
              "https://api.tvmaze.com/search/shows?q=all",
              { method: "GET" }
            );
            const data = await response.json();
            // console.log(data[0].show.name);
            // console.log((data[0].show.genres).join('/'))
            // console.log(data[0].show.image.medium)
            // console.log(data[0].show.rating.average)

            setShows(data);
            
          }
          getShows();
    },[]);
    // console.log(shows[0].id)
    
  return (

  
    <div className='home-container'>
      <h1>Recommended Movies</h1>
      <div className='card'>
            {shows.map((show) => (
                
                <Card
                    id ={show.show.id}
                    key={show.show.id}
                    name={show.show.name}
                    genres={show.show.genres.join('/')}
                    image={show.show.image}
                    rating={show.show.rating.average}
                    show = {show.show}
                    timezone = {show.show.network}
                    language = {show.show.language}
                    description = {show.show.summary}
                />
            ))}
          </div>
    </div>
    

  )
}

export default Home
