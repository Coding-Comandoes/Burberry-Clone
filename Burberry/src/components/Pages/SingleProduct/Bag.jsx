import React,{useEffect,useState} from 'react'
import "./Bag.module.css"
const Bag=()=>{
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
    
    useEffect(()=>{
        getData()},[cart]
    )
    return(
        <>
        <div className="mainDiv">
            {cart.map((el)=>(
                <div className="bag">
                    <img src={el.img[0].image}></img>
                    <div className='detail'>
                        <p>{el.title}</p>
                        <p>Item:{el.id}</p>
                        <p>{el.color}</p>
                        <p>Size:{el.fit}</p>
                        <p>Qty:1</p>
                        <button onClick={()=>deleteData(el.id)}>Remove</button>
                        <p>{el.price}</p>
                    </div>
                </div>
            ))
            } 
        </div>
        </>
    )
}
export default Bag
