import React from 'react'
import america from '../assets/american.jpg';


const CardImage = () => {
  
    const image = localStorage.getItem('image');
  return (
    <div style={{ position: "relative" }}>
  <img src={image} alt="movie" width="300px" height="400px" style={{ margin: 0 }} />
  <div
    style={{
      position: "absolute",
      bottom: "-25px",
      left: 0,
      width: "300px",
      height: "30px",
      backgroundColor: "#101010",
      color:"white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >America,New_York</div>
</div>
  )
}

export default CardImage;
