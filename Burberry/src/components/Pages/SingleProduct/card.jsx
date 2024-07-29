import React, { useState } from "react";
import './card.css'; // Import CSS for styling
import { useNavigate, useSearchParams } from "react-router-dom";

const Card = ({id, imageUrl1, imageUrl2, title}) => {
    const navigate=useNavigate();
    const [currentImage, setCurrentImage] = useState(imageUrl1);

    const handleMouseEnter = () => {
        setCurrentImage(imageUrl2);
    };

    const handleMouseLeave = () => {
        setCurrentImage(imageUrl1);
    };  
   
    function gotosingle(id){
        navigate(`/singleProduct/${id}`);
    }
    

    return (
        <div className="card"
        onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        
        >
            <div className="product-image">
            <img src={currentImage} alt={title} className="card-image"  onClick={()=>gotosingle(id)} />
            </div>
            <h3 className="card-title">{title}</h3> 
        </div>
    );
};

export default Card;

