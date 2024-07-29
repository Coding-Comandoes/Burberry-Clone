import React from 'react'

const BurberryHeritage = () => {
  return (
    <div style={{marginTop:'16px'}}> 
      <div style={{ position: 'relative', top: '20px' }}>
      <img style={{width:'100%',height:'800px'}} src='data:image/jpeg;base64,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'></img>
      </div>

      <div style={{ position: 'relative', top: '15.5px', display: 'flex' }}>
        <div style={{ flex: 1, paddingLeft: '15px'}}>
          <div style={{ paddingTop: '45px', position: 'sticky', top: '0' }}>
            <h2 style={{ fontSize: '25px', fontWeight: 'normal' }}>The Burberry Story</h2><br/>
            <p style={{ fontSize: '15px' }}>Burberry is a global  brand with a deep British heritage. Founded in 1856 by Thomas Burberry, our brand is underpinned by the strong values of our founder.Merging a passion for the outdoors, we continue to push the possibility of exploration.</p>
            <br/><p style={{fontSize:'15px '}}>At 21-years-old former draper's apprentice,Thomas Burberry recognised that people who ventured into the British weather were hampered by heavy, uncomfortable outwear. He had a bold vision - to enable people to move free;y outdoors.</p>
          </div>
        </div>
        <img src='https://assets.burberry.com/is/image/Burberryltd/0B636A00-7E72-4FAF-9E8D-61F0AAE4758E?wid=950' style={{ height: '600px', width: '50%', paddingRight: '0px' }} alt='Burberry'></img>
      </div>

      <div style={{ position: 'relative', top: '196px', display: 'flex' }}>
        <div style={{ flex: 1, paddingLeft: '15px' }}>
          <div style={{ paddingTop: '45px', position: 'sticky', top: '0' }}>
            <h2 style={{ fontSize: '25px', fontWeight: 'normal' }}>The Trench</h2><br/>
            <p style={{ fontSize: '15px' }}>The quintessential British coat,a global fashion icon. The trench coat was created by Burberry founder Thomas Burberry over 100 years ago.</p>
            <br/><p style={{fontSize:'15px '}}>A design born from function to protect the military during the First World War. Its epaulettes originally displayed on officer's rank,whilst the belt's metal D-rings were used to attach equipment.</p>
            <br/><p style={{fontSize:'15px '}}>It takes a year for each specialist tailor to learn the stitching of the intricate trench coat collar. More than 180 stitches are made to create a fluid curve so that the collar sits perfectly on the neck.</p>
            <br/><a href='/ExploretheTrench'>Explore the Trench</a>
          </div>
        </div>
        <img src='https://assets.burberry.com/is/image/Burberryltd/D478A900-542A-459C-9B35-1FD924CEA9B3?wid=950' style={{ height: '900px', width: '50%', paddingRight: '0px' }} alt='Burberry'></img>
      </div>

      <div style={{ position: 'relative', top: '196px', display: 'flex' }}>
        <div style={{ flex: 1, paddingLeft: '15px' }}>
          <div style={{ paddingTop: '45px', position: 'sticky', top: '0' }}>
            <h2 style={{ fontSize: '25px', fontWeight: 'normal' }}>Check</h2><br/>
            <p style={{ fontSize: '15px' }}>The Burberry Check is our trademark.We protect and celebrate it.Introduced in the 1920s as an outerwear lining,it is our global icon - unmistakably Burberry.</p>
            <br/><a href='/View'>View</a>
          </div>
        </div>
        <img src='https://assets.burberry.com/is/image/Burberryltd/4A4E31CB-6D7F-49F0-98CE-ACB7BB18EFB0?wid=950' style={{ height: '900px', width: '50%', paddingRight: '0px' }} alt='Burberry'></img>
      </div>

      <div style={{ position: 'relative', top: '196px', display: 'flex' }}>
        <div style={{ flex: 1, paddingLeft: '15px' }}>
          <div style={{ paddingTop: '45px', position: 'sticky', top: '0' }}>
            <h2 style={{ fontSize: '25px', fontWeight: 'normal' }}>Gabardine</h2><br/>
            <p style={{ fontSize: '15px' }}>Thomas focused his creativity on developing the world's first breathable and weatherproof fabric,leading to the invention of gabardine in 1879.</p>
            <br/><p style={{fontSize:'15px' }}>The fabric revolutionised rainwear and remains at the heart of our outerwear today.</p>
          </div>
        </div>
        <img src='https://assets.burberry.com/is/image/Burberryltd/81554820-8EEB-4E04-A46C-8F76BD2CBA22?wid=950' style={{ height: '900px', width: '50%', paddingRight: '0px' }} alt='Burberry'></img>
      </div>
      <div style={{ position: 'relative', top: '220px' }}>
        <img style={{width:'100%'}} src='data:image/jpeg;base64,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' ></img>
      </div>
      <div style={{position:'relative',top:'200px',display:'flex',flexDirection:'column',paddingLeft:'25%',paddingRight:'25%'}}>
        <h2 style={{fontSize:'25px',fontWeight:'normal',marginTop:'20px'}}>Equestrian Knight</h2><br/>
        <p style={{marginTop:'10px',fontSize:'15px'}}>The original Equestrian Knight Design was the winning entry of a public competition todesign a new logo for the house, circa 1901.</p>
        <br/><p style={{marginTop:'10px',fontSize:'15px',marginBottom:'300px'
        }}>Imbued with symbolism, it represents protection, innovation and our forward-looking spirit. The banner reads ‘Prorsum’ which translates from Latin to ‘Forwards’, signalling the company’s direction of travel.</p>
      </div>

    </div>
  )
}

export default BurberryHeritage
