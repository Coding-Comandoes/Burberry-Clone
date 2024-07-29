import React from "react";
import './Men.css' ;
import { Link } from "react-router-dom";
import List from "./List";

const Home = () => {
    return (
        <div className="size">
            <br />
            <br />
            <div className="gallery-container " >
                <Link to="/product">
                    <div className="img-text">
                    <h5>Burberry Classics</h5>
                    <h6>Men   Women</h6>
                    </div>
                    
                    <img src="https://assets.burberry.com/is/image/Burberryltd/D84C2717-74B3-49EB-B6C3-7591580421E5?wid=1920" className="image-container" />
                    </Link>
            </div>
            <div className="container ">
                <div className="gallery-container " >
                <Link to="/product">
                    <div className="img-text">
                    <h5>Accessories</h5>
                    <h6>Men   Women</h6>
                    </div>
                        <img src="https://assets.burberry.com/is/image/Burberryltd/3BC2B653-8DC2-4748-A1BC-0D7E336662AB?wid=950" className="image-container" />
                        </Link>
                </div>
                <div className="gallery-container " >
                <Link to="/product">
                    <div className="img-text">
                    <h5>New In</h5>
                    <h6>Men   Women</h6>
                    </div>
                        <img src="https://assets.burberry.com/is/image/Burberryltd/D39E0EF7-2A20-4C84-9DFF-76DCF585E3AB?wid=950" className="image-container" />
                        </Link>
                </div>
            </div>
            <div>
                <br />
                <br />
                <h5 className="text">New In</h5>
                <List/>
             
            </div>
            <div className="end">
                <h1 className="end-text">
                    <p>Enjoy complimentary personalisation, packaging and More
                        <a href="/allservices"> Burberry Services</a>
                    </p>
                </h1>
            </div>
        </div>
    )
}
export default Home;