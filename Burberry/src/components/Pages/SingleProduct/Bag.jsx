import React,{useEffect,useState} from 'react'
import "./Bag.css"
import { useNavigate } from 'react-router-dom';
const Bag = ()=>{
    const [cart, setCart] = useState([]);

    async function getData(){
        let res=await fetch('http://localhost:3000/cart',{
            headers:{
                "Content-type":"application/json"
            }
        })
        let data=await res.json();
        setCart(data);
    }
    async function deleteData(id) {
        let res = await fetch(`http://localhost:3000/cart/${id}`,{
           method: "DELETE"
        });
    }
    const navigate=useNavigate()
    function back(){
        navigate('/')
    }
    
    useEffect(()=>{
        getData()},[cart]
    )
    return(
        <>
        <button className='back' onClick={back}>←</button>
        <div className="mainDiv">
            {cart.length===0?
            <div>
                <p id='empty'>YOUR SHOPPING BAG IS EMPTY</p>
            </div>
            :(
            <>
                {cart.map((el)=>(
                    <div className='prodCart'>
                        <div className='cart'>
                            <div style={{height:"1px",backgroundColor:"gray",width:'65%'}}></div>
                            <div className="bag">
                            <img src={el.img[0].image}></img>
                            <div className='detail'>
                            <p id='title'>{el.title}</p>
                            <p className='item'>Item:{el.id}</p>
                            <p className='item'>{el.color}</p>
                            <div className=' size'>
                                <p>Size:{el.fit}</p>
                                <p>Qty:1</p>
                            </div>
                            <button className='remove' onClick={()=>deleteData(el.id)}>Remove</button>
                            <p id='price'>USD {el.price}</p>
                            </div>
                            </div>
                            <div style={{height:"1px",backgroundColor:"gray",width:'65%',marginTop:"30px"}}></div>
                        </div>
                        <div className='payment'>
                            <h3 style={{textAlign:"center"}}>Your Order Summary</h3>
                            <div className='cost'>
                                <p>Subtotal</p>
                                <p>USD {el.price}</p>
                            </div>
                            <div className='cost'>
                                <p>Estimated Shipping</p>
                                <p>Free</p>
                            </div>
                            <div className='cost'>
                                <p>Sales Tax</p>
                                <p>Calculated during checkout</p>
                            </div>
                            <hr></hr>
                            <div className='cost'>
                                <p>Total</p>
                                <p>USD {el.price}</p>
                            </div>
                            <button className='pay' id='checkout'>Checkout</button>
                            <button className='pay' id='paypal'>PayPal</button>
                        </div>
                        </div>
                        ))
                    }
            </>
            )
        }
        </div>
        </>
    )
}
export default Bag
