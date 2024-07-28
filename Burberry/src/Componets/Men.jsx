import React from "react";
import { useState , useEffect } from 'react';
import Card from "./Card";

const Men = () => {
    

    return (
        <>
        
        <div className="grid-container">
            {data.map(({ id, imageUrl, carouselImages, name, price,desc }) => (
                <Card
                    key={id}
                    image={imageUrl}
                    carouselImages={carouselImages}
                    title={name}
                    price={price}
                />
            ))}
        </div>
        </>
    )
}
export default Men;