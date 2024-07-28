import React, { useState } from "react";
import './Card.css'; // Import CSS for styling

const Card = ({ image, carouselImages, title, desc, price }) => {
    const [showCarousel, setShowCarousel] = useState(false);

    return (
        <div 
            className="card"
            onMouseEnter={() => setShowCarousel(true)} 
            onMouseLeave={() => setShowCarousel(false)}
        >
            <img src={image} alt={title} className="card-image" />
            
            {showCarousel && (
                <div className="carousel-container">
                    <div className="carousel">
                        {carouselImages.map((img, index) => (
                            <img key={index} src={img} alt={`Carousel ${index}`} className="carousel-image" />
                        ))}
                    </div>
                </div>
            )}
            
            <h1 className="card-title">{title}</h1>
            <p className="card-desc">{desc}</p>
            <h3 className="card-price">${price.toFixed(2)}</h3>
            <button className="card-button">Add to Cart</button>
        </div>
    );
};

export default Card;