import React from 'react'

const Personalisation = () => {
  return (
    <div style={{paddingBottom:'300px'}}>
      <div style={{position:'relative',top:'95px'}}>
        <h1 style={{display:'flex',justifyContent:'center',fontSize:'60px',fontWeight:'normal'}}>Personalisation</h1>
        <div style={{display:'flex',justifyContent:'center',gap:'20px',marginTop:'0px'}}>
          <a href='/menslatheraccessories'>Men's Leather Accessories</a>
          <a href='/scarves'>Scarves</a>
          <a href='/fragrances'>Fragrances</a>
        </div>
      </div>
      <div style={{position:'relative',top:'200px'}}>
        <img  style={{ position:'relative',width:'100%',height:'800px'}} src='https://assets.burberry.com/is/image/Burberryltd/10E2224A-1D68-4691-9A05-F58BF2358016?wid=1920' alt='backgroundimage'></img>
      </div>
      <div style={{position:'relative',top:'230px'}}>
        <h4 style={{display:'flex',justifyContent:'center',fontSize:'30px',fontWeight:'normal'}}>Bespoke Monogramming</h4>
        <p style={{display:'flex',textAlign:'center',paddingLeft:'36.3%',paddingRight:'36.25%',marginTop:'20px',marginBottom:'20px'}}>Add up to three initials in a range of colours . Complimentary on a selection of Burberry products.</p>
        <div style={{display:'flex',justifyContent:'center',gap:'20px'}}>
          <a href='/womenslatheraccessories'>Women's Leather Accessories</a>
          <a href='/scarves'>Scarves</a>
          <a href='/fragrances'>Fragrances</a>
        </div>
      </div>
      <div  style={{ position: 'relative', top: '315px', display: 'flex' }}>
        <img src='https://assets.burberry.com/is/image/Burberryltd/094899FC-4C37-47FB-AD67-15A31ADBBF0B?wid=950' alt='backgroundimage'style={{width:'50%'}}></img>
        <img src='https://assets.burberry.com/is/image/Burberryltd/986BEB15-B9B3-429D-BC4E-D7BF36C19B1B?wid=1000' alt='backgroundimage'style={{width:'50%'}}></img>
      </div>
      <div style={{position:'relative',top:'350px'}}>
        <h1 style={{display:'flex',justifyContent:'center',fontSize:'32px',fontWeight:'normal'}}>Contact Us</h1>
        <div style={{display:'flex',justifyContent:'center',gap:'15px',marginTop:'0px',paddingBottom:'100px'}}>
          <a style={{fontSize:'15px'}} href='/call'>Call</a>
          <a style={{fontSize:'15px'}} href='/whatsapp'>WhatsApp</a>
          <a style={{fontSize:'15px'}} href='/email'>Email</a>
        </div>
      </div>
    </div>
  )
}

export default Personalisation
