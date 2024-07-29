import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import List from "./List";
import './Men.css' ;


const ReadMoreLess = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => {
        setIsExpanded(prevState => !prevState);
    };

    return (
        <div >
            <p className="text">
            The Burberry womenswear collection features a diverse range of styles for every season, including a range of summer pieces and signature styles like the iconic trench coat and lightweight Check scarves alongside swimwear, classic shirt styles, hats and tops.

            <br />
            <br />
                {isExpanded && (
                    <span className="more-text">
                        Accessories include new-season bags in a range of styles and colours alongside the latest shoe collection, new jewellery and eyewear.

                        <br />
                        <br />

                        The collection includes pieces detailed with the iconic Burberry Check, British motifs and the latest prints.
                        <br />
                        <br />

                        View the latest styles in slim and relaxed cuts.
                    </span>
                )}
            </p>
            <button className="toggle-btn" onClick={toggleText}>
                {isExpanded ? 'Read Less' : 'Read More'}
            </button>
        </div>
    );
};

const Women = () => {
    return (
        <div className="size">
            <br />
            
            <div className="container" >
                <h2 >Womenswear</h2>
                <div><ReadMoreLess/></div>

            </div>
            <br />
            <div className="gallery-container " >
               
                    <Link to="/product"><h1 className="img-text">Burberry Classics</h1>
                    <img src="https://assets.burberry.com/is/image/Burberryltd/D05993A8-6506-4D49-9C59-7273E35E69D5?wid=1920" className="image-container"/>   
                    </Link>
            </div>
            <div className="container " >
                <div >
                <Link to="/product">
                    <h1 className="img-text">Shoes</h1>
                        <img src="https://assets.burberry.com/is/image/Burberryltd/7726F4ED-E8F0-489F-B130-F0E6454ABB84?wid=950" alt="" className="image-container" />
                    </Link>
                </div>
                <div>
                <Link to="/product">
                    <h1 className="img-text">Trench</h1>
                        <img src="https://assets.burberry.com/is/image/Burberryltd/DE20997A-0A43-4FAE-8826-2995FDE41E19?wid=950" alt="" className="image-container" />
                    </Link>
                </div>
            </div>
            <div>
            <Link to="/product">
                <h1 className="img-text">Bags</h1>
                    <img src="https://assets.burberry.com/is/image/Burberryltd/7834F1C3-79C5-4CCF-A5E1-ED8EA798E904?wid=1920" alt="" className="image-container" />
                </Link>
            </div>
            <div className="container ">
                <div>
                <Link to="/product">
                        <h1 className="img-text">Accessories</h1>
                        <img src="https://assets.burberry.com/is/image/Burberryltd/E4774D01-CC36-4391-890E-D2CC8A10C9D9?wid=950" alt="" className="image-container"/>
                    </Link>
                </div>
                <div>
                <Link to="/product">
                    <h1 className="img-text">Scarves</h1>
                    <img src="https://assets.burberry.com/is/image/Burberryltd/52C8C463-5777-40BC-81CC-1D666D46D288?wid=950" alt="" className="image-container"/>
                   </Link>
                </div>
            </div>
            <div>
                <br />
                <br />
                <h1>New In</h1>
                <List/>
            </div>

        </div>    
    )
} 
export default Women;