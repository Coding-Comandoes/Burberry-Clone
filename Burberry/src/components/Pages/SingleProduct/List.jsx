import React, { useState, useEffect } from 'react';
import './List.css';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

// Carousel settings
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const List = () => {
    const navigate = useNavigate();
    const [var1, setVar1] = useState(null);
    const [detail, setDetail] = useState([]);

    // Fetch data from the API
    async function getData() {
        try {
            const res = await fetch('http://localhost:3000/data', {
                headers: {
                    'Content-type': 'application/json',
                },
            });
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            setDetail(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    function handleHover(id) {
        setVar1(id);
    }

    function handleLeave() {
        setVar1(null);
    }

    function Single(id) {
        navigate(`/singleProduct/${id}`);
    }

    return (
        <div className='carousel-container'>
            <Slider {...settings}>
                {detail.map((d) => (
                    <div
                        key={d.id}
                        className='product'
                        onMouseEnter={() => handleHover(d.id)}
                        onMouseLeave={handleLeave}
                        onClick={() => Single(d.id)}
                    >
                        <img
                            src={var1 === d.id ? d.img[1].image : d.img[0].image}
                            alt={d.title}
                        />
                        <p>{var1 === d.id ? d.title : ''}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default List;
