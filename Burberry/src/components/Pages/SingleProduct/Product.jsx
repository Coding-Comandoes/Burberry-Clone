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
        
        <div className="grid-container"
        
        >
           
            {data.map( (el)  => (
<<<<<<< HEAD
                
                <Card  imageUrl={el.imageUrl} carouselImages={el.carouselImages} title={el.title} id={el.id} />
=======
                <Card  imageUrl1={el.img[0].image} imageUrl2={el.img[1].image}  title={el.title} id={el.id} />
>>>>>>> d65729c4d64f714be9b8ffc18493ad8e59383e22
                
            ))}
        </div>
    );
};

export default Product;


