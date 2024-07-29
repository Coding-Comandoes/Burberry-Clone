import React from 'react'

const Sustainability = () => {
  return (
    <div>
      <div  style={{marginTop:'130px',paddingLeft:'10px'}}>
        <h1 style={{fontWeight:'normal'}}>Sustainability</h1>
        <a href='/View'>View</a>
      </div>
      <div style={{display:'flex',width:'100%',marginBottom:'0px'}}>
        <div style={{marginTop:'20px',width:'100%'}}>
          <img style={{width:'100%',height:'600px'}} src='https://assets.burberry.com/is/image/Burberryltd/DA2CCE81-099E-4207-BCB3-5445BAF1C733?wid=950'></img>
          <h2 style={{fontWeight:'normal',fontSize:'22px',paddingLeft:'10px'}}>Going Beyond for Better</h2><br/>
          <a href='/ReadMore' style={{paddingLeft:'10px',paddingBottom:'10px'}}>ReadMore</a>
        </div>
        <div style={{marginTop:'20px',width:'100%'}}>
          <img style={{width:'100%',height:'600px'}} src='https://assets.burberry.com/is/image/Burberryltd/53033A59-5BF1-48F1-867D-D29F0703DE9A?wid=950'></img>
          <h2 style={{fontWeight:'normal',fontSize:'22px'}}>Going Beyond for Biodiversity</h2><br/>
          <a href='/ReadMore'>ReadMore</a>
        </div>
        <div style={{marginTop:'20px',width:'100%'}}>
          <img style={{width:'100%',height:'600px'}} src='https://assets.burberry.com/is/image/Burberryltd/120C6C27-8AA0-4C5C-80E0-A0EBD3E8340B?wid=950'></img>
          <h2 style={{fontWeight:'normal',fontSize:'22px'}}>Environment: Earth Day 2022</h2><br/>
          <a href='/ReadMore'>ReadMore</a>
        </div>
      </div>
    </div>
  )
}

export default Sustainability
