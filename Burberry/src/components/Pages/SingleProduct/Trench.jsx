import React from "react";
import { useState } from "react";
import List from "./List";
import './Trench.css' ;
import { Link } from 'react-router-dom';


const ReadMoreLess = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => {
        setIsExpanded(prevState => !prevState);
    };

    return (
        <div className="para" >
            <p className="text">
            View our iconic collection of Burberry trench coats, designed for both women and men. Crafted from cotton gabardine, cashmere and leather, our trench coats provide comfort in all weather conditions.
            <br />
            <br />
                {isExpanded && (
                    <span className="more-text">
                        Featuring a variety of styles, available in different lengths: long, mid-length, short and cropped. From the signature Chelsea and Kensington to relaxed Waterloo and hooded styles.
                        <br />
                        <br />

                        Available in a range of colours, including signature beige and black alongside khaki and navy.
                    </span>
                )}
            </p>
            <button className="toggle-btn" onClick={toggleText}>
                {isExpanded ? 'Read Less' : 'Read More'}
            </button>
        </div>
    );
};

const Trench = () => {
    return (
        <div className="size">
            <br />
            <div className="containor" >
                <h2 className="top">Heritage Trench Coats</h2>
                <div className="text"><ReadMoreLess/></div>
            </div>
            <div>
               <Link to="/product">
                    <h1 className="img-text-1">Women's Trench</h1>
                    <img src="https://assets.burberry.com/is/image/Burberryltd/52D54673-9F07-4C08-99CB-8D7B196BA761?wid=1920" className="image-container" />
                </Link>
            </div>
            <div className="containor" >
                <h2 style={{marginTop:"20px"}}>Kensington</h2>
                <div className="text para">An iconic style, the Kensington is cut to a regular fit with set-in sleeves. Available in three lengths, it features signature trench coat details and the Burberry Check lining. Available in three colours: honey, black and coal blue.</div>
            </div>
            <div className="containor-trench">
                <div>
                <Link to="/product">
                    <h1 className="img-text-2">Short</h1>
                    <img src="https://assets.burberry.com/is/image/Burberryltd/FBEBAE57-A0DC-4B24-9DDC-EA67B1F0A58E?wid=640" className="image-container" />
                </Link>
                </div>
                <div>
                <Link to="/product">
                    <h1 className="img-text-2">Mid-Length</h1>
                    <img src="https://assets.burberry.com/is/image/Burberryltd/356D4627-BACC-4414-93BC-8274A9F41A92?wid=640" className="image-container" />
                </Link>
                </div>
                <div>
                <Link to="/product">
                    <h1 className="img-text-2">Long</h1>
                    <img src="https://assets.burberry.com/is/image/Burberryltd/A018297F-5729-4794-A467-0E706C42222D?wid=640" className="image-container" />
                </Link>
                </div>
            </div>
            <div className="containor" >
                <h2 style={{marginTop:"20px"}}>Chelsea</h2>
                <div className="text para">Available in three lengths, the Chelsea is tailored to a slim fit with signature trench coat details and the Burberry Check lining. Available in three colours: honey, black and coal blue.</div>
            </div>
            <div className="containor-trench">
                <div>
                <Link to="/product">
                    <h1 className="img-text-2">Short</h1>
                    <img src="https://assets.burberry.com/is/image/Burberryltd/DAAE4882-401A-4A9A-8E7D-A04356D53A70?wid=640" className="image-container" />
                </Link>
                </div>
                <div>
                <Link to="/product">
                    <h1 className="img-text-2">Mid-Length</h1>
                    <img src="https://assets.burberry.com/is/image/Burberryltd/55F23B16-BEFC-4F94-A808-210DA6649A9A?wid=640" className="image-container" />
                </Link>
                </div>
                <div>
                <Link to="/product">
                    <h1 className="img-text-2">Long</h1>
                    <img src="https://assets.burberry.com/is/image/Burberryltd/9A688984-44AD-4009-B12F-41B17A28FA45?wid=640" className="image-container" />
                </Link>
                </div>
            </div>
            <div className="containor" >
                <h2 style={{marginTop:"20px"}}>Camden</h2>
                <div className="text para">            
                The original Burberry car coat, the Camden is cut to a regular fit with raglan sleeves and modern, clean details. Available in three colours: honey, black and coal blue.</div>
            </div>
            <div className="containor-trench">
                <div>
                <Link to="/product">
                <h1 className="img-text-2">Mid-Length</h1>
                    <img src="https://assets.burberry.com/is/image/Burberryltd/C326007F-51A6-4B18-B094-56842DEC1277?wid=640" className="image-container" />
                </Link>
                </div>
                <div>
                <Link to="/product">
                    <img src="https://assets.burberry.com/is/image/Burberryltd/A71D18CB-7A1F-4322-AB5A-CB5A801259FD?wid=640" className="image-container" />
                </Link>
                </div>
                <div>
                <Link to="/product">
                    <img src="https://assets.burberry.com/is/image/Burberryltd/EF04570F-98AD-47CE-AD9B-C93F0AD039EE?wid=640" className="image-container" />
                </Link>
                </div>
            </div>
            <div>
                <br />
                <br />

            </div>
            <div>
               <Link to="/product">
                    <h1 className="img-text-1">Men's Trench</h1>
                    <img src="https://assets.burberry.com/is/image/Burberryltd/27C4DDFD-BAB0-4538-BEBC-3B3C0FDCC5A5?wid=1920" className="image-container" />
                </Link>
            </div>
            <div className="containor" >
                <h2 style={{marginTop:"20px"}}>Kensington</h2>
                <div className="text para">An iconic style, the Kensington is cut to a regular fit with set-in sleeves. Available in three lengths, it features signature trench coat details and the Burberry Check lining. Available in three colours: honey, black and coal blue.</div>
            </div>
            <div className="containor-trench"> 
                <div>
                <Link to="/product">
                    <h1 className="img-text-2">Short</h1>
                    <img src="https://assets.burberry.com/is/image/Burberryltd/58DE1C78-2368-448F-99E7-5072C1D21AF7?wid=640" className="image-container" />
                </Link>
                </div>
                <div>
                <Link to="/product">
                    <h1 className="img-text-2">Mid-Length</h1>
                    <img src="https://assets.burberry.com/is/image/Burberryltd/32D2E70A-CB4D-4D60-9837-A1FF28027C51?wid=640" className="image-container" />
                </Link>
                </div>
                <div>
                <Link to="/product">
                    <h1 className="img-text-2">Long</h1>
                    <img src="https://assets.burberry.com/is/image/Burberryltd/69BB4411-21EC-4C3E-9F8C-BB1535371E72?wid=640" className="image-container" />
                </Link>
                </div>
            </div>
            <div className="containor" >
                <h2 style={{marginTop:"20px"}}>Camden</h2>
                <div className="text para">            
                The original Burberry car coat, the Camden is cut to a regular fit with raglan sleeves and modern, clean details. Available in three colours: honey, black and coal blue.</div>
            </div>
            <div className="containor-trench">
                <div>
                <Link to="/product">
                <h1 className="img-text-2">Short</h1>
                    <img src="https://assets.burberry.com/is/image/Burberryltd/74678A30-EA5C-4A3C-9163-7DC1776ED4EB?wid=640" className="image-container" />
                </Link>
                </div>
                <div>
                <Link to="/product">
                <h1 className="img-text-2">Mid-Length</h1>
                <img src="https://assets.burberry.com/is/image/Burberryltd/FDD2A97A-980C-4BCE-9832-89046E2B8435?wid=640" className="image-container" />
                </Link>
                </div>
                <div>
                <Link to="/product">
                <h1 className="img-text-2">Long</h1>
                    <img src="https://assets.burberry.com/is/image/Burberryltd/451579B9-E26B-483F-9E5B-9F6BA8AAF6E0?wid=640" className="image-container" />
                </Link>
                </div>
            </div>
            <div>
                <br />
                <br />
                <br />
            </div>
            <div className="containor-trench">
                <div><img src="https://assets.burberry.com/is/image/Burberryltd/2BC2AC8B-AB00-45A3-BAFD-DFEC1575973E?wid=640" className="image-container" /></div>
                <div><img src="https://assets.burberry.com/is/image/Burberryltd/408B5EDD-75E4-430B-A4B4-2BE110C11772?wid=640" className="image-container" /></div>
                <div> <img src="https://assets.burberry.com/is/image/Burberryltd/425FA02B-71A5-4852-90D4-822D609D81A8?wid=640" className="image-container" /></div>
            </div>
            <div className="containor-trench">
                <div className="text">
                <br />
                <h3 >ReBurberry Services</h3>
                <br />
                <p>Our circular services are designed to help ensure your Burberry pieces can be enjoyed for longer.</p>
                <br />
                <Link to='/aftercare'><button className="toggle-btn">Read More</button></Link>
                </div>
                <div className="text">
                <br />
                <h3 >Trench Bespoke</h3>
                <br />
                <p>Personalise your piece with our Trench Bespoke service. From lining to embroidery, add a unique touch to our heritage design.</p>
                <br />
                <Link to='/trench-bespoke'><button className="toggle-btn">Read More</button></Link>
                </div>
                <div className="text">
                <br />
                <h3>Burberry Services</h3>
                <br />
                <p>Find out about our range of Burberry services from personalisation to complimentary gift packaging.</p>
                <br />
                <Link to='/aftercare'><button className="toggle-btn">Read More</button></Link>
                </div>
            </div>

           

        </div>    
    )
} 
export default Trench;