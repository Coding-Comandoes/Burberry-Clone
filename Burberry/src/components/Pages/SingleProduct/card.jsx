import React, { useState } from "react";
import './card.css'; // Import CSS for styling
import { useNavigate, useSearchParams } from "react-router-dom";

const Card = ({id, imageUrl, title}) => {
    const navigate=useNavigate();
    
    
    
   
    function gotosingle(id){
        navigate(`/singleProduct/${id}`);
    }
    

    return (
        <div className="card" >
            <div className="product-image">
            <img src={imageUrl} alt={title} className="card-image"  onClick={()=>gotosingle(id)} />
            </div>
            <h3 className="card-title">{title}</h3> 
        </div>
    );
};

export default Card;

