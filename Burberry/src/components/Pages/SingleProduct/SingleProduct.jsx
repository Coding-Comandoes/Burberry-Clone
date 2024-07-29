import React from 'react'
import "./SingleProduct.css"
import { useState,useEffect } from 'react'
import Recommend from './Recommend'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom'
import Slider from 'react-slick';

const SingleProduct = () => {
  const [prodetails,setProDetails]=useState('')
  const [size,setSize]=useState('')
  const [fabric,setFabric]=useState('')

  const [detail,setDetail]=useState([]);
  const [cart, setCart] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [images,setImages]=useState([])
  const { id } = useParams();

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  async function getData(){
      let res=await fetch(`http://localhost:3000/data/${id}`,{
          headers:{
              "Content-type":"application/json"
          },
      })
  let data=await res.json();
      setDetail([data]);
      setImages(data.img)
  }
  async function postData(el,fit){
    console.log(el);
      let obj= {
          id:el.id || Math.random(),
          title: el.title,
          price:el.price,
          prodDetails:el.prodDetails,
          prod:el.prod,
          size:el.size,
          fabric:el.fabric,
          fit:fit,
          img:el.img,
          color:el.color
      }
      let res = await fetch('http://localhost:3000/cart',{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body: JSON.stringify(obj)
      });
      let data = await res.json();
      setCart([...cart,data])
      setButtonText("Added")
  }
  useEffect(()=>{
      getData()},[]
  )
  function prodetail(el){
      setProDetails(!prodetails ? el :'')
      setSize('')
      setFabric('')
  }
  function sizes(el){
    setSize(!size ? el : '')
    setProDetails('')
    setFabric('')
  }
  function fabrics(el){
    setFabric(!fabric ?el : '')
    setProDetails('')
    setSize('')
  }
  const [buttonText,setButtonText]=useState("Add to Bag")
  const handleMouseEnter = () => {
  setButtonText('Select a size');
};

const handleMouseLeave = () => {
  setButtonText('Add to Bag');
};

const [view, setView] = useState('default'); 
const changeView = (view,obj=null) => {
  setView(view);
  if(obj){
    setSelectedProduct(obj)
  }
};

const handleSizeSelection = (selectedSize) => {
  if (selectedProduct) {
    postData(selectedProduct,selectedSize);
  }
  setView('default');
};


const settings = {
  dots: false,
  arrows:true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const settingsVertical = {
  dots: false,
  arrows:true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipe:true,
  horizontal:true,
  vertical:false,
};


const renderDefaultView = () => (
    <>
   
      {detail.map(el=>(
        <div className="prodDiv">
          <p id="new">New In</p>
          
          <div id='title'>
            <p>{el.title}</p>
            <p>${el.price}</p>
          </div>
          <div class='color'>
            <p>{el.color}</p> 
          </div>
          
          <button className='bag' onClick={()=>changeView('select',el)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{buttonText}</button>
          <button className='gift' onClick={onOpen}>Send using GIFT</button>
          <Modal isOpen={isOpen} onClose={onClose} className='Modal'> 
              <ModalContent className='ModalContent'>
                <ModalHeader className='ModalHeader'>SURPRISE THEM WITH A GIFT<ModalCloseButton className='ModalCloseButton'/>
                </ModalHeader>
                
              <ModalBody className='ModalBody'>
                <p>We've partnered with 4gift to offer a complimentary premium gifting service in the US.</p>
                <Slider {...settings} className='Slider'>
                  <div>
                    <img src='https://assets.burberry.com/is/image/Burberryltd/7E11BED5-9A6F-4F7C-BF9F-B102158A148C?$BBY_V3_SL_1$&wid=400&hei=400'></img>
                    <h6 className='gifter'>THE GIFTER</h6>
                    <p className='gifter'>Split the cost with others or send it on your own. You can send your gift instantly or pick a later delivery date.</p>
                </div>
                <div>
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTRtXjJACcmC9AW8_vzvSnDRHspqJp4tKQikwjItdGlb_ydFOsoantVsk40HSlyUIKzRM&usqp=CAU' style={{marginTop:'20%'}}></img>
                  <h6 className='gifter'>THE GIFT RECIPIENT</h6>
                  <p className='gifter'>They can choose the size or colour according to their preference or exchange it for a different gift.</p>
                </div>
                </Slider>
              </ModalBody>

              <ModalFooter>
                <Button className='ModalFooter'>
                  GET STARTED
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          
          <p className='p'>Installment payments available<a className='more'> Learn more</a></p>
          <div id="about">
            <a className='info' id="deliver" onClick={()=>changeView('delivery')}>Next-day Delivery & Returns</a>
            <p className='p'>Order by 1pm EST, Monday - Friday</p>
            <a className='info'> Find in Store</a>
            <p className='p'>Check availability in your nearest Burberry store</p>
            <a className='info' onClick={()=>changeView('packing')}>Gift Packaging</a>
            <p className='p'>Complimentary and plastic-free</p>
          </div>
          
          <button className='data' onClick={() => prodetail(el.prodDetails)}><p>Product Details</p><p>{prodetails===el.prodDetails?'-':'+'}</p></button>
          <p className='det'>{prodetails}</p>
          <button className='data' onClick={() => sizes(el.size)}><p>Size & Fit</p><p>{size===el.size?'-':'+'}</p></button>
          <p className='det'>{size}</p>
          <button className='data' onClick={() => fabrics(el.fabric)}><p>Fabric & Care</p><p>{fabric===el.fabric?'-':'+'}</p></button>
          <p className='det'>{fabric}</p>
          
          <a className='contact' style={{marginTop:"50px"}}>Book An Appointment</a>
          <a className='contact' onClick={()=>changeView('contact')}>Contact Us</a>

          </div>
      ))} 
    </>
  )
  const renderSelectView = () => (
    <div className='prodDiv'>
    <div className='exit'>
      <p>Select size</p>
      <button id="exitBtn" onClick={()=>changeView('default')}>X</button>
    </div>
    <div id='btn'>
      <button onClick={()=>handleSizeSelection('XS')}>XS</button>
      <button onClick={()=>handleSizeSelection('S')}>S</button>
      <button onClick={()=>handleSizeSelection('M')}>M</button>
      <button onClick={()=>handleSizeSelection('L')}>L</button>
      <button onClick={()=>handleSizeSelection('XL')}>XL</button>
      <button onClick={()=>handleSizeSelection('XXL')}>XXL</button>
      <button onClick={()=>handleSizeSelection('XXXL')}>XXXL</button>
    </div>
    <p>Model’s height: 189cm/6ft 2in. Model wears size UK M</p>
    <a id="chart">Size chart</a>
  </div>
  )

  const renderDeliveryView = () => (
    <div className='prodDiv'>
      <div className='exit'>
        <p>Delivery & Returns</p>
        <button onClick={()=>changeView("default")} id='exitBtn'>X</button>
      </div>
      <div className='shipping'>
        <h4>Shipping</h4>
        <p>An estimated shipping time will be available to view on the checkout page before you confirm payment.</p>
        <a className='more'>More on shipping</a>
        <h4>Returns</h4>
        <p>Free returns are available provided the return conditions are met.<br></br>

          We estimate refunds will be made by your payment method provider within 7-10 working days.</p>
        <a className='more'>More on returns</a>
      </div>
    </div>
  )

  const renderPackagingView=()=>(
    <div className='prodDiv'>
      <div className='exit'>
        <p>Free gift packaging</p>
        <button onClick={()=>changeView("default")} id='exitBtn'>X</button>
      </div>
      <div className='pack'>
        <p>Our packaging options below are complimentary and plastic-free.</p>
        <h4>Gift Packaging</h4>
        <p>Our paper-based gift packaging includes gift boxes, tissues and gift notes made from a minimum of 50% recycled materials, 100% recyclable and Forest Stewardship Council (FSC) certified. Rainwear and tailoring are packaged in a reusable garment cover containing a minimum of 60% recycled cotton with an FSC-certified wooden hanger. Leather goods are packaged in dust bags made from a minimum of 60% recycled cotton.</p>
        <img src='https://assets.burberry.com/is/image/Burberryltd/7E11BED5-9A6F-4F7C-BF9F-B102158A148C?$BBY_V3_SL_1$&wid=400&hei=400'></img>
        <p>Signature Packaging</p>
        <h4>Essential Packaging</h4>
        <p>Our paper-based packaging is 100% recyclable, Forest Stewardship Council (FSC) certified and made from a minimum of 45% recycled materials. Clothing is packaged in FSC-certified pouches made from a minimum of 50% post-consumer recycled paper. Rainwear and tailoring are packaged in a reusable garment cover containing a minimum of 60% recycled cotton with an FSC-certified wooden hanger. Puffer, quilted and down coats and jackets are packaged in a reusable tote bag made from 100% recycled cotton. Leather goods are packaged in dust bags made from a minimum of 60% recycled cotton.</p>
        <img src='https://assets.burberry.com/is/image/Burberryltd/276B6D94-129F-4BDC-A5EB-957AB4FE21F6?$BBY_V3_SL_1$&wid=400&hei=400'></img>
        <p>Complimentary Tote</p>
      </div>
    </div>
  )

  const renderContactView=()=>(
    <div className='prodDiv'>
      <div className='exit'>
        <p>Can we help?</p>
        <button onClick={()=>changeView("default")} id='exitBtn'>X</button>
      </div>
      <div className='contacts'>
        <h4>Telephone</h4>
        <p>Burberry offers worldwide assistance, seven days a week. Please note, we may monitor or record your communications for training and quality control purposes.</p>
        <p className='num'>+1 877 217 4085</p>
        <h4>Email</h4>
        <email className='num'>us.customerservice@burberry.com</email>
      </div>
    </div>
  )

  const renderView = () => {
    switch(view) {
      case 'select':
        return renderSelectView();
      case 'delivery':
        return renderDeliveryView();
      case 'contact':
        return renderContactView();
      case 'packing':
        return renderPackagingView()
      case 'default':
      default:
        return renderDefaultView();
    }
  };

  return (
    <>
     <div className='Detail'>
      {isSmallScreen ?(
      <Slider {...settingsVertical} className='Verticalcar'>
        {images.map(d=>(
          <img src={d.image} id="image" ></img>
        ))}
      </Slider>) :(
      <div className='Vertical'>
        {images.map(d=>(
          <img src={d.image} id="image" ></img>
        ))}
        </div>
      )

        }
      {renderView()}
      </div>
    <div className='reco'>
      <Recommend/>
    </div>
    </>
  );
}

export default SingleProduct