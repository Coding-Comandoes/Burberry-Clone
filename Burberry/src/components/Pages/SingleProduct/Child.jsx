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
            The Burberry childrenswear and baby collections includes a range of styles for every season, including signature pieces such as the iconic trench coat and check cashmere scarf.
            <br />
            <br />
                {isExpanded && (
                    <span className="more-text">
                        View a curated selection of clothing, shoes, accessories and gifts designed for girls and boys of all ages. Classic check patterns and embroidered Thomas Bear motifs feature across coats, dresses, polo shirts, jogging pants and shoes.
                        <br />
                        <br />
                        Our baby range includes gift sets, baby grows, puffer suits, jumpsuits and booties.
                    </span>
                )}
            </p>
            <button className="toggle-btn" onClick={toggleText}>
                {isExpanded ? 'Read Less' : 'Read More'}
            </button>
        </div>
    );
};

const Child = () => {
    return (
        <div className="size">
            <br />
            <br />
            <br />
            <div className="container">
                <h2 >Childrenswear</h2>
                <div><ReadMoreLess/></div>

            </div>
            <br />
            <div className="container " >
                <div >
                    <a href="">
                    <h1 className="img-text">Girls</h1>
                        <img src="https://assets.burberry.com/is/image/Burberryltd/4227AB89-ACDF-49D3-AD2A-DDC0DFDD9D0B?wid=950" alt="" className="image-container" />
                    </a>
                </div>
                <div>
                    <a href="">
                    <h1 className="img-text">Boys</h1>
                        <img src="https://assets.burberry.com/is/image/Burberryltd/96B63984-6188-4730-8B68-F91FA10F8FC3?wid=950" alt="" className="image-container" />
                    </a>
                </div>
            </div>
            <div className="container " >
                <div>
                    <a href="">
                        <h1 className="img-text">Newborn</h1>
                        <img src="https://assets.burberry.com/is/image/Burberryltd/B734643D-42DF-4552-8D8D-CA19AED55F74?wid=950" alt="" className="image-container"/>
                    </a>
                </div>
                <div>
                   <a href="">
                    <h1 className="img-text">Baby</h1>
                    <img src="https://assets.burberry.com/is/image/Burberryltd/B7F4A00E-FBF2-4748-8C39-ED6EBD25724F?wid=950" alt="" className="image-container"/>
                   </a>
                </div>
            </div>
            <div className="container ">
                <div>
                    <a href="">
                        <h1 className="img-text">Accessories</h1>
                        <img src="https://assets.burberry.com/is/image/Burberryltd/5A242AB6-5D12-496A-A5F0-1901AFB469D5?wid=950" alt="" />
                    </a>
                </div>
                <div>
                    <a href="">
                        <img src="https://assets.burberry.com/is/image/Burberryltd/DB21BE29-86F6-432D-A530-ED21EDE10BF1?wid=950" alt="" />
                    </a>
                </div>
            </div>

        </div>    
    )
} 
export default Child;