import React, { useState } from "react";
import './card.css'; // Import CSS for styling

const Card = ({ image, carouselImages, title, desc, price }) => {
    const [showCarousel, setShowCarousel] = useState(false);

    return (
        <div 
            className="card" 
            onMouseEnter={() => setShowCarousel(true)} 
            onMouseLeave={() => setShowCarousel(false)}
        >
            <div className="product-image">
            <img src={image} alt={title} className="card-image" />
            
            {showCarousel && (
                <div className="carousel-container  carousel media-carousel-labels">
                        {carouselImages.map((img, index) => (
                            <img key={index} src={img} alt={`Carousel ${index}`} className="carousel-image" />
                        ))}
                </div>
            )}
            </div>
            <p className="card-title">{title}</p>
            
           
        </div>
    );
};

export default Card;

