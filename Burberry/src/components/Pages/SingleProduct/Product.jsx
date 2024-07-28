import React, { useEffect, useState } from "react";
import Card from "./card";
import './Product.css'; // Import the CSS for layout

const Product = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:3000/data"); // Adjust the path as needed
            const result = await response.json();
            setData(result);
        }

        fetchData();
    }, []);

    return (
        <div className="grid-container">
            {data.map(({ id, imageUrl, carouselImages, name }) => (
                <Card
                    key={id}
                    image={imageUrl}
                    carouselImages={carouselImages}
                    title={name}
                    
                />
            ))}
        </div>
    );
};

export default Product;


