import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const Zoomed = () => {
    let {url}=useParams()
    const decodedUrl = decodeURIComponent(url);
    if (!decodedUrl) {
        return <div>Error: Invalid image URL</div>;
    }
    const navigate=useNavigate()
    function back(){
        navigate(-1)
    }
    
  return (
    <div>
      <img src={decodedUrl} style={{width:'100%'}} onClick={back}></img>
    </div>
  )
}

export default Zoomed
