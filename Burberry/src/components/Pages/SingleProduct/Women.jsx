import React from "react";
import { useState } from "react";
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
            <div className="container">
                <h2 >Womenswear</h2>
                <div><ReadMoreLess/></div>

            </div>
            <br />
            <div className="gallery-container " >
                <a href="">
                    <h1 className="img-text">Burberry Classics</h1>
                    <img src="https://assets.burberry.com/is/image/Burberryltd/7B73716A-B7FF-40BF-8098-56B5A5FD5F44?wid=1920" className="image-container" />
                </a>
            </div>
            <div className="container " >
                <div >
                    <a href="">
                    <h1 className="img-text">Shoes</h1>
                        <img src="https://assets.burberry.com/is/image/Burberryltd/1CD3FF68-139A-4075-8699-C673BBAD2181?wid=950" alt="" className="image-container" />
                    </a>
                </div>
                <div>
                    <a href="">
                    <h1 className="img-text">Coats & Jackets</h1>
                        <img src="https://assets.burberry.com/is/image/Burberryltd/7424FB0A-7EE3-4B10-B40D-20B31D64BDB6?wid=950" alt="" className="image-container" />
                    </a>
                </div>
            </div>
            <div>
                <a href="">
                <h1 className="img-text">Bags</h1>
                    <img src="https://assets.burberry.com/is/image/Burberryltd/FA053C10-8723-4780-ADD3-871E8B54500B?wid=1920" alt="" className="image-container" />
                </a>
            </div>
            <div className="container " >
                <div>
                    <a href="">
                        <h1 className="img-text">Accessories</h1>
                        <img src="https://assets.burberry.com/is/image/Burberryltd/189E815B-A75C-4546-AF83-393517FD7A52?wid=950" alt="" className="image-container"/>
                    </a>
                </div>
                <div>
                   <a href="">
                    <h1 className="img-text">Sunglasses</h1>
                    <img src="https://assets.burberry.com/is/image/Burberryltd/21CD90B1-25F8-44A7-AA82-3A6E6FCB2C72?wid=950" alt="" className="image-container"/>
                   </a>
                </div>
            </div>

        </div>    
    )
} 
export default Women;