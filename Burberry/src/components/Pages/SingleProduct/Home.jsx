import React from "react";
import { useState } from "react";
import './Men.css' ;

const Home = () => {
    return (
        <div>
            <div className="gallery-container " >
                <a href="">
                    <h1 className="img-text">Burberry Classics</h1>
                    <h3 className="img-text">Men   Women</h3>
                    <img src="https://assets.burberry.com/is/image/Burberryltd/D84C2717-74B3-49EB-B6C3-7591580421E5?wid=1920" className="image-container" />
                </a>
            </div>
            <div cl>
                <div className="gallery-container " >
                    <a href="">
                        <h1 className="img-text">Accessories</h1>
                        <img src="https://assets.burberry.com/is/image/Burberryltd/3BC2B653-8DC2-4748-A1BC-0D7E336662AB?wid=950" className="image-container" />
                    </a>
                </div>
                <div className="gallery-container " >
                    <a href="">
                        <h1 className="img-text">New In</h1>
                        <img src="https://assets.burberry.com/is/image/Burberryltd/D39E0EF7-2A20-4C84-9DFF-76DCF585E3AB?wid=950" className="image-container" />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Home;