import React, { useEffect, useState } from "react";
import Card from "./card"; // Import the Card component
import './Product.css'; // Import the CSS for layout

const Product = () => {
    const [data, setData] = useState([]);
    const [visibleCount, setVisibleCount] = useState(16); // Number of items to show initially
    

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:3000/data"); // Adjust the path as needed
            const result = await response.json();
            setData(result);
        }

        fetchData();
    }, []);

    const handleViewMore = () => {
        setVisibleCount(prevCount => Math.min(prevCount + 6, data.length)); // Show 6 more items or up to the total data length
    };

    return (
        <div>
            <div className="product-container">
                <br />
                <br />
                <br />
                <br />
                <h3>All Products</h3>
                <br />
            </div>
            <div className="grid-container">
                {data.slice(0, visibleCount).map(el => (
                    <Card
                        key={el.id} // Adding a key prop for better rendering performance
                        imageUrl1={el.img[0].image}
                        imageUrl2={el.img[1].image}
                        title={el.title}
                        id={el.id}
                    />
                ))}
            </div>
            {visibleCount < data.length && (
                <div className="view-more-container">
                    <button className="view-more-button" onClick={handleViewMore}>
                        View More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Product;


