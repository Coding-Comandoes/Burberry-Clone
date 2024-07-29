import React from "react";
import { useState } from "react";
import './Men.css' ;

const Home = () => {
    return (
        <div className="size">
            <br />
            <br />
            <div className="gallery-container " >
                <a href="">
                    <div className="img-text">
                    <h5>Burberry Classics</h5>
                    <h6>Men   Women</h6>
                    </div>
                    
                    <img src="https://assets.burberry.com/is/image/Burberryltd/D84C2717-74B3-49EB-B6C3-7591580421E5?wid=1920" className="image-container" />
                </a>
            </div>
            <div className="container ">
                <div className="gallery-container " >
                    <a href="">
                    <div className="img-text">
                    <h5>Accessories</h5>
                    <h6>Men   Women</h6>
                    </div>
                        <img src="https://assets.burberry.com/is/image/Burberryltd/3BC2B653-8DC2-4748-A1BC-0D7E336662AB?wid=950" className="image-container" />
                    </a>
                </div>
                <div className="gallery-container " >
                    <a href="">
                    <div className="img-text">
                    <h5>New In</h5>
                    <h6>Men   Women</h6>
                    </div>
                        <img src="https://assets.burberry.com/is/image/Burberryltd/D39E0EF7-2A20-4C84-9DFF-76DCF585E3AB?wid=950" className="image-container" />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Home;