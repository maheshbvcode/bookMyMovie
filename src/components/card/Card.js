import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from "react-router-dom";
import allStar from '../assets/allStar.jpg';
const Card = ({ language,timezone,id,name, genres, image, rating ,description }) => {
    // if (image && image.medium) {
    //     console.log(image.medium);
    //   }
    //  if (timezone && timezone.country) {
    //     console.log(timezone.country);
    //   }
    // console.log(timezone)
    // console.log(description)
    const handleClick = () =>{
        localStorage.setItem('imageId',id);
        localStorage.setItem('timezone', timezone && timezone.country ? JSON.stringify(timezone.country) : '')
        localStorage.setItem('image',image && image.medium ? image.medium : '')
        localStorage.setItem('name',name)
        localStorage.setItem('rating',rating)
        localStorage.setItem('genres',genres)
        localStorage.setItem('language',language)
        localStorage.setItem('description',description)
    }
    return (
        <div className='card-movie' onClick={handleClick}>
            <Link to="/movie" style={{ textDecoration: "none", color: "inherit" }}>
                <img
                    src={image && image.medium ? image.medium : allStar}
                    alt={name}
                    width="210px"
                    height="280px"
                    style={{ marginBottom: "10px" }}
                />
                <div>
                    <span style={{ display: "flex" }}>
                        <AiFillStar style={{ color: "red", width: "30px" }} />
                        <h5 style={{ marginLeft: "2px", marginTop: "0" }}>{rating}/10</h5>
                    </span>
                </div>
                <h3>{name}</h3>
                <p>{genres}</p>
            </Link>
        </div>
    )
}

export default Card;
