import React from "react";
import { useState } from "react";
import './Men.css' ;
import { Link } from 'react-router-dom';


const ReadMoreLess = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => {
        setIsExpanded(prevState => !prevState);
    };

    return (
        <div >
            <p className="text">
            The Burberry menswear collection offers a diverse range of styles for every season, including signature pieces like car coats and matching sets in Check patterns.
            <br />
            <br />
                {isExpanded && (
                    <span className="more-text">
                        The selection of new-season styles includes footwear, hats, lightweight jackets, casual T-shirts and summer swimwear.
                        <br />
                        <br />

                        View accessories including bags in a range of styles and colours and new eyewear.
                        <br />
                        <br />

                        The iconic Burberry Check and British motifs feature across new pieces designed in slim, regular and relaxed cuts.
                    </span>
                )}
            </p>
            <button className="toggle-btn" onClick={toggleText}>
                {isExpanded ? 'Read Less' : 'Read More'}
            </button>
        </div>
    );
};

const Men = () => {
    return (
        <div className="size">
            <br />
            
            <div className="container" >
                <h2 >Menswear</h2>
                <div><ReadMoreLess/></div>

            </div>
            <br />
            <div className="gallery-container " >
                <Link to="/product">
                    <h1 className="img-text">Burberry Classics</h1>
                    <img src="https://assets.burberry.com/is/image/Burberryltd/7B73716A-B7FF-40BF-8098-56B5A5FD5F44?wid=1920" className="image-container" />
                    </Link>
            </div>
            <div className="container " >
                <div >
                <Link to="/product">
                    <h1 className="img-text">Shoes</h1>
                        <img src="https://assets.burberry.com/is/image/Burberryltd/1CD3FF68-139A-4075-8699-C673BBAD2181?wid=950" alt="" className="image-container" />
                        </Link>
                </div>
                <div>
                <Link to="/product">
                    <h1 className="img-text">Coats & Jackets</h1>
                        <img src="https://assets.burberry.com/is/image/Burberryltd/7424FB0A-7EE3-4B10-B40D-20B31D64BDB6?wid=950" alt="" className="image-container" />
                        </Link>
                </div>
            </div>
            <div>
            <Link to="/product">
                <h1 className="img-text">Bags</h1>
                    <img src="https://assets.burberry.com/is/image/Burberryltd/FA053C10-8723-4780-ADD3-871E8B54500B?wid=1920" alt="" className="image-container" />
                    </Link>
            </div>
            <div className="container " >
                <div>
                    <Link to="/product">
                        <h1 className="img-text">Accessories</h1>
                        <img src="https://assets.burberry.com/is/image/Burberryltd/189E815B-A75C-4546-AF83-393517FD7A52?wid=950" alt="" className="image-container"/>
                        </Link>
                </div>
                <div>
                    <Link to="/product">
                    <h1 className="img-text">Sunglasses</h1>
                    <img src="https://assets.burberry.com/is/image/Burberryltd/21CD90B1-25F8-44A7-AA82-3A6E6FCB2C72?wid=950" alt="" className="image-container"/>
                    </Link>
                </div>
            </div>

        </div>    
    )
} 
export default Men;