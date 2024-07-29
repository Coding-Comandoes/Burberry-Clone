import React, { useState,useEffect } from 'react'
import "./Recommend.css"
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const Recommend = () => {
    const navigate = useNavigate();
    const [var1,setVar1]=useState(null)
 
  function Single(p){
        navigate(`/singleProduct/${p}`);
  } 

const [detail,setDetail]=useState([]);
  async function getData(){
    let res=await fetch(`http://localhost:3000/data`,{
        headers:{
            "Content-type":"application/json"
        },
    })
    let data=await res.json();
    setDetail(data);

}
useEffect(()=>{
  getData()},[]
)
  function handleHover(id){
    setVar1(id)
  }
  function handleLeave(){
    setVar1(0)
  }
  return (
    <div>
      <p id='recom'>We recommend</p>
      <div className='Prod'>
            {detail.map((d)=>{
            return(
                <div className='product' onMouseEnter={()=>handleHover(d.id)} onMouseLeave={handleLeave} onClick={()=>Single(d.id)}>
                    <img src={var1===d.id ? d.img[1].image :  d.img[0].image} id="img"  ></img>
                    <p>{var1===d.id ? '' : d.title}</p>
                    <p>{var1===d.id ? '' : d.price}</p>
                </div>
            )
            })}
            
        </div>
    </div>
  )
}

export default Recommend
