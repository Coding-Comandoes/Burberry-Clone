

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Recommend.css";

const Recommend = () => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
        swipe: true,
        touchMove: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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

    const detail = [
        [
            {
                id: 1,
                img: 'https://assets.burberry.com/is/image/Burberryltd/1972DF2C-3765-40E4-8F82-750FE4B92D45?wid=1920',
                title: 'The Waterloo',
                gender: 'Women',
            },
            {
                id: 2,
                img: 'https://assets.burberry.com/is/image/Burberryltd/1972DF2C-3765-40E4-8F82-750FE4B92D45?wid=1920',
                title: 'The Waterloo',
                gender: 'Women',
            },
            {
                id: 3,
                img: 'https://assets.burberry.com/is/image/Burberryltd/1972DF2C-3765-40E4-8F82-750FE4B92D45?wid=1920',
                title: 'The Waterloo',
                gender: 'Women',
            }
        ],
        [
            {
                id: 4,
                img: 'https://assets.burberry.com/is/image/Burberryltd/B1F08EBF-32F2-4F0A-9336-811CFB27D03E?wid=1920',
                title: 'The Camden',
                gender: 'Men',
            },
            {
                id: 5,
                img: 'https://assets.burberry.com/is/image/Burberryltd/B1F08EBF-32F2-4F0A-9336-811CFB27D03E?wid=1920',
                title: 'The Camden',
                gender: 'Men',
            },
            {
                id: 6,
                img: 'https://assets.burberry.com/is/image/Burberryltd/B1F08EBF-32F2-4F0A-9336-811CFB27D03E?wid=1920',
                title: 'The Camden',
                gender: 'Men',
            }
        ],
        [
            {
                id: 7,
                img: 'https://assets.burberry.com/is/image/Burberryltd/4A63397A-4CF0-4BAD-8DCB-0829A6650B30?wid=1920',
                title: 'The Camden',
                gender: 'Women',
            },
            {
                id: 8,
                img: 'https://assets.burberry.com/is/image/Burberryltd/4A63397A-4CF0-4BAD-8DCB-0829A6650B30?wid=1920',
                title: 'The Camden',
                gender: 'Women',
            },
            {
                id: 9,
                img: 'https://assets.burberry.com/is/image/Burberryltd/4A63397A-4CF0-4BAD-8DCB-0829A6650B30?wid=1920',
                title: 'The Camden',
                gender: 'Women',
            }
        ],
        [
            {
                id: 10,
                img: 'https://assets.burberry.com/is/image/Burberryltd/02BF1BD0-FCC6-4914-AD9A-155188FEE377?wid=1920',
                title: 'The Kensington',
                gender: 'Men',
            },
            {
                id: 11,
                img: 'https://assets.burberry.com/is/image/Burberryltd/02BF1BD0-FCC6-4914-AD9A-155188FEE377?wid=1920',
                title: 'The Kensington',
                gender: 'Men',
            },
            {
                id: 12,
                img: 'https://assets.burberry.com/is/image/Burberryltd/02BF1BD0-FCC6-4914-AD9A-155188FEE377?wid=1920',
                title: 'The Kensington',
                gender: 'Men',
            }
        ],
        [
            {
                id: 13,
                img: 'https://assets.burberry.com/is/image/Burberryltd/33632144-8F07-4FCE-A56A-3E84F31C08DD?wid=1920',
                title: 'The Kensington',
                gender: 'Women',
            },
            {
                id: 14,
                img: 'https://assets.burberry.com/is/image/Burberryltd/33632144-8F07-4FCE-A56A-3E84F31C08DD?wid=1920',
                title: 'The Kensington',
                gender: 'Women',
            },
            {
                id: 15,
                img: 'https://assets.burberry.com/is/image/Burberryltd/33632144-8F07-4FCE-A56A-3E84F31C08DD?wid=1920',
                title: 'The Kensington',
                gender: 'Women',
            }
        ],
        [
            {
                id: 16,
                img: 'https://assets.burberry.com/is/image/Burberryltd/502A33E1-2BA7-45B2-9CA9-2EAEB12655DE?wid=1920',
                title: 'The Soho',
                gender: 'Men',
            },
            {
                id: 17,
                img: 'https://assets.burberry.com/is/image/Burberryltd/502A33E1-2BA7-45B2-9CA9-2EAEB12655DE?wid=1920',
                title: 'The Soho',
                gender: 'Men',
            },
            {
                id: 18,
                img: 'https://assets.burberry.com/is/image/Burberryltd/502A33E1-2BA7-45B2-9CA9-2EAEB12655DE?wid=1920',
                title: 'The Soho',
                gender: 'Men',
            }
        ],
        [
            {
                id: 19,
                img: 'https://assets.burberry.com/is/image/Burberryltd/4046A2E9-AA71-41A0-B490-5D51664A4166?wid=1920',
                title: 'The Chelsea',
                gender: 'Women',
            },
            {
                id: 20,
                img: 'https://assets.burberry.com/is/image/Burberryltd/4046A2E9-AA71-41A0-B490-5D51664A4166?wid=1920',
                title: 'The Chelsea',
                gender: 'Women',
            },
            {
                id: 21,
                img: 'https://assets.burberry.com/is/image/Burberryltd/4046A2E9-AA71-41A0-B490-5D51664A4166?wid=1920',
                title: 'The Chelsea',
                gender: 'Women',
            }
        ],
    ];

    return (
        <div className='slider-container'>
            <Slider {...settings} className='Slide'>
                {detail.map((group, index) => (
                    <div className='slide-group' key={index}>
                        {group.map((item) => (
                            <div className='slide-item' key={item.id}>
                                <img src={item.img} alt={item.title} className='slide-image' loading='lazy' />
                                <div className='slide-info'>
                                    <h2>{item.title}</h2>
                                    <p>{item.gender}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Recommend;

// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./Recommend.css";

// const Recommend = () => {
//     const settings = {
//         dots: true,
//         arrows: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 3, // Show 3 slides at a time
//         slidesToScroll: 3, // Scroll 3 slides at a time
//         accessibility: true,
//         swipe: true,
//         touchMove: true,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2, // Adjust for smaller screens
//                     slidesToScroll: 2,
//                 },
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 1, // Show 1 slide at a time on very small screens
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     };

//     const detail = [
//         // Your product data here
//     ];

//     return (
//         <div className='slider-container'>
//             <Slider {...settings} className='Slide'>
//                 {detail.map((group, index) => (
//                     <div className='slide-group' key={index}>
//                         {group.map((item) => (
//                             <div className='slide-item' key={item.id}>
//                                 <img src={item.img} alt={item.title} className='slide-image' loading='lazy' />
//                                 <div className='slide-info'>
//                                     <h2>{item.title}</h2>
//                                     <p>{item.gender}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// };

// export default Recommend;
