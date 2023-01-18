import React from 'react';
import  '../styles/SearchResult.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";


function SearchResult({img,location,title,description,star,price,total}){

  

    return(

        <div className='searchRes'>

            <img src={img} alt=""/>
            <FavoriteBorderIcon
            className="searchRes_heart"/>
             
             <div className="searchRes_info">

             <div className="searchRes_infoTop">

                <p>{location}</p>
                <h3>{title}</h3>
                <p>___</p>
                <p>{description}</p>
               
             </div>
             <div className="searchRes_infoBottom">
             </div>
             <div className="searchRes_stars">

                <StarIcon className="searchRes_star"/>
                <p>
                    <strong>{star}</strong>
                </p>
             </div>
             <div className="searchRes_price">

                <h2>{price}</h2>
                <p>{total}</p>
                
             </div>
             </div>
            
           
        </div>
    ) 




}

export default SearchResult;
