import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
// import Recommend from '../Recommend';

const TrenchBespoke = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const renderIcon = (section) => {
    return activeSection === section ? <ChevronUpIcon /> : <ChevronDownIcon />;
  };

  return (
    <>
      <div>
        <img
          src='https://tse2.mm.bing.net/th?id=OIP.JgRXzF_kiECuveYHgD9itgAAAA&pid=Api&P=0&h=180'
          alt='backgroundimage'
          style={{ height: '800px', width: '100%', marginBottom: '-510px' }}
        ></img>
        <div style={{ display: 'grid', justifyContent: 'center', position: 'relative', bottom: '-340px', color: 'white' }}>
          <h1 style={{ display: 'flex', justifyContent: 'center', marginBottom: '-10px', fontSize: '3.55em', fontWeight: 'normal' }}>Tench Bespoke</h1>
          <h2 style={{ display: 'flex', justifyContent: 'center', fontSize: '23px', fontWeight: 'normal',paddingTop: '10px' }}>The personalisation experience.</h2>
        </div>
      </div>
      <div style={{ position: 'relative', top: '340px', display: 'flex', justifyContent: 'space-between' }}>
        <h2 style={{ fontWeight: 'normal',fontSize:'15px',marginTop:'30px' }} onClick={() => toggleSection('Trench Bespoke')}>
          Trench Bespoke {renderIcon('Trench Bespoke')}
        </h2>
        {activeSection === 'Trench Bespoke' && (
          <div style={{ display: 'flex', gap: '30px', position: 'relative', top: '30px',fontSize:'14.5px' }}>
            <a style={{ color: 'black' }} href='/Personalised Design'>Personalised Design</a>
            <a style={{ color: 'black' }} href='/Choose Your Style'>Choose Your Style</a>
            <a style={{ color: 'black' }} href='/Store Locator'>Store Locator</a>
          </div>
        )}
        <div style={{ display: 'flex', fontSize: '20px', position: 'relative', top: '30px' }}>
          <a style={{fontSize:'15px'}} href='/ContactUs'> Contact Us</a>
        </div>
      </div>
      <div style={{ position: 'relative', top: '330px', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '70px' }}>
        <h2 style={{ fontSize: '35px', fontWeight: 'normal', marginBottom: '0px' }}>Personalised Design</h2>
        <p style={{ fontSize: '15px' }}>From bespoke gabardine to embroidery and more, our Trench Bespoke service allows you to create something unique.</p>
        <a style={{ fontSize: '15px', paddingTop: '16px' }} href='/ContanctUs'> Contact Us</a>
      </div>
      <div style={{ position: 'relative', top: '400px', display: 'flex', flexDirection: 'column', paddingBottom: '50px' }}>
        <div style={{ display: 'flex' }}>
          <img style={{"height":"475px",width:'25%'}} src='https://assets.burberry.com/is/image/Burberryltd/31BD45D2-A4D5-4E17-84E7-B8B0BD5B757E?wid=950' alt="fabric"></img>
          <img style={{"height":"475px",width:'25%'}} src='https://assets.burberry.com/is/image/Burberryltd/C3A1B17B-013D-4E3E-9D10-72CB6EA9D1CA?wid=950' alt="fabric"></img>
          <img style={{"height":"475px",width:'25%'}} src='https://assets.burberry.com/is/image/Burberryltd/29E32630-F7E7-4576-854C-83BCDA3F1846?wid=950' alt="Liningc"></img>
          <img style={{"height":"475px",width:'25%'}} src='https://tse3.mm.bing.net/th?id=OIP.5HboR6yZXPsy_rlKN0H4lQHaH_&pid=Api&P=0&h=180' alt="Lining"></img>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <div style={{  paddingRight: '20px'}}>
            <h2 style={{fontWeight:'normal'}}>Fabric</h2>
            <p style={{fontSize:'14.5px'}}>Our revolutionary gabardine was invented by Thomas Burberry in 1879. Today, you can craft your trench coat in three bespoke gabardine shades - iconic honey, timeless black, and coal blue.</p>
          </div>
          <div style={{  paddingLeft: '20px' }}>
            <h2 style={{fontWeight:'normal'}}>Lining</h2>
            <p style={{fontSize:'14.5px'}}>Choose to line your trench coat in our signature Burberry Check, a jacquard-woven Equestrian Knight Design, or a bold Burberry Label-print silk twill - each available in a selection of shades.</p>
          </div>
        </div>
      </div>
      <div style={{ position: 'relative', top: '400px', display: 'flex', flexDirection: 'column', paddingBottom: '50px' }}>
        <div style={{ display: 'flex' }}>
          <img style={{"height":"475px",width:'25%'}} src='https://assets.burberry.com/is/image/Burberryltd/CDA4E43A-FAB6-4BCC-920D-1CCFC7F3C883?wid=950' alt="button"></img>
          <img style={{"height":"475px",width:'25%'}} src='https://tse4.mm.bing.net/th?id=OIP.LLgo-cb2Ruq-vRrGu18cIwHaJQ&pid=Api&P=0&h=180' alt="button"></img>
          <img style={{"height":"475px",width:'25%'}} src='https://assets.burberry.com/is/image/Burberryltd/67EB8076-3A01-45D7-8240-C91CF4F0D5FA?wid=950' alt="embroidery"></img>
          <img style={{"height":"475px","width":'25%'}}  src='https://tse4.mm.bing.net/th?id=OIP.lPTG_VglzaBa-sDrQSIx-QHaLH&pid=Api&P=0&h=180' alt="embroidery"></img>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <div style={{ flex: 1, paddingRight: '20px' }}>
            <h2 style={{fontWeight:'normal'}}>Button</h2>
            <p style={{fontSize:'14.5px'}}>It's all in the details.Add buttons made from buffalo horn,Thomas Burberry Monogram-embossed enamel or metallic variations accented with the Equestrian Knight Design.</p>
          </div>
          <div style={{ flex: 1, paddingLeft: '20px' }}>
            <h2 style={{fontWeight:'normal'}}>Embroidery</h2>
            <p style={{fontSize:'14.5px'}}>From monogrammed initials and iconic Burberry emblems to applique patches,bring a unique sense of style to your trench with our embriodery options.</p>
          </div>
        </div>
      </div>
      <div style={{"position":"relative","top":"420px","marginBottom":"600px"}}>
        <img src='https://tse2.mm.bing.net/th?id=OIP.JgRXzF_kiECuveYHgD9itgAAAA&pid=Api&P=0&h=180'
          alt='backgroundimage'
          style={{ height: '800px', width: '100%', marginBottom: '-560px' }}></img>      
      </div>
      <div style={{ position: 'relative', top: '330px', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '70px' }}>
        <h2 style={{ fontSize: '35px', fontWeight: 'normal', marginBottom: '0px' }}>Choose Your Style</h2>
        <p style={{ fontSize: '15px' ,width:'1120px',textAlign:'center'}}>Across womenswear and menswear, there are five of our iconic styles to choose from. You can also tailor the sleeve and back length to ensure your trench is the perfect fit.</p>
      </div>
      <div>
        <div style={{position:'relative',display:'flex',flexDirection:'column',alignItems:'center',top:'450px'}}>
          <h2 style={{fontSize:'30px',fontWeight:'normal'}}>Find a Store</h2>
          <p style={{fontSize:'15px'}}>Trench Bespoke is available at the selected stores below.</p>
          <a style={{fontSize:'15px'}} href='/ContactUs'>Contact Us</a>
        </div>
      </div>
      <div style={{position:'relative',top:'550px',paddingBottom:'550px',display:'flex',gap:'40px'}}>
        <img style={{height:'500px'}} src='https://assets.burberry.com/is/image/Burberryltd/D757FF09-A06B-4691-A7EB-01527578EFCA?wid=1366'></img>
        <div style={{display:'grid',alignItems:'center',paddingTop:'60px',paddingBottom:'65px',textAlign:'center'}}> 
          <p style={{fontSize:'15px'}}>121 Regent Street,London</p>
          <a style={{'fontSize':'15px',textDecoration:'none'}} href='/Store Locator'>Store Locator</a>
          <p  style={{fontSize:'15px'}}>Ginza Tokyo,Tokyo</p>
          <a style={{'fontSize':'15px',textDecoration:'none'}} href='/Store Locator'>Store Locator</a>
          <p  style={{fontSize:'15px'}}>The Seoul Flagship,Seoul</p>
          <a style={{'fontSize':'15px',textDecoration:'none'}} href='/Store Locator'>Store Locator</a>
          <p  style={{fontSize:'15px'}}>Shanghai Piaza 66,Shanghai</p>
          <a style={{'fontSize':'15px',textDecoration:'none'}} href='/Store Locator'>Store Locator</a>
          <p style={{fontSize:'15px'}}>Taipei 101 Mall,Taipei City</p>
          <a style={{'fontSize':'15px',textDecoration:'none'}} href='/Store Locator'>Store Locator</a>
        </div>
      </div>
    </>
  );
};

export default TrenchBespoke;
