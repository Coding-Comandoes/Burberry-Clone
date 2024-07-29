import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const AllServices = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const renderIcon = (section) => {
    return activeSection === section ? <ChevronUpIcon /> : <ChevronDownIcon />;
  };
  return (
    <div style={{paddingBottom:'200px'}}>
      <div style={{position:'relative',top:'30px'}}>
        <h1 style={{display:'flex',justifyContent:'center',fontSize:'58px',fontWeight:'normal',marginTop:'110px'}}>Burberry Services</h1>
        <div style={{display:'flex',justifyContent:'center',gap:'20px',marginTop:'0px',fontSize:'15px'}}>
          <a href='/BookanAppointment'>Book an Appointment</a>
          <a href='/ContanctUs'>Contact Us</a>
        </div>
      </div>
      <div style={{ position: 'relative', top: '130px', display: 'flex', justifyContent: 'space-between' }}>
        <h4 style={{ fontWeight: 'normal', cursor: 'pointer' }} onClick={() => toggleSection('Burberry Services')}>
          Burberry Services {renderIcon('Burberry Services')}
        </h4>
        {activeSection === 'Burberry Services' && (
          <div style={{ display: 'flex', gap: '30px', position: 'relative', top: '20px', fontSize: '15px' }}>
            <a style={{ color: 'black' }} href='/Refresh'>Personalisation</a>
            <a style={{ color: 'black' }} href='/Repair'>Trench Bespoke</a>
            <a style={{ color: 'black' }} href='/Rental & Resale'>Aftercare & Circular Services</a>
            <a style={{ color: 'black' }} href='/Remake'>Gift packing</a>
          </div>
        )}
        <div style={{ display: 'flex', fontSize: '15px', position: 'relative', top: '20px' }}>
          <a href='/BookanAppointment'>Book</a>
        </div>
      </div>
      <div style={{position:'relative',top:'130px'}}>
        <img style={{width:'100%'}} src='https://assets.burberry.com/is/image/Burberryltd/84E79146-A2BA-48BB-93E4-552EF031D4DE?wid=1920'></img>
      </div>
      <div style={{ position: 'relative', display: 'flex',top:'126px' }}>
        <img src='https://assets.burberry.com/is/image/Burberryltd/B1CE68FF-DA29-4321-A08E-05C45FDDA5C9?wid=800 ' style={{ height: '900px', width: '50%', paddingRight: '15px',position:'relative',top:'0px' }} alt='Burberry'></img>
        <div style={{ flex: 1, paddingLeft: '15px' ,position:'relative',top:'0px'}}>
          <div style={{ paddingTop: '45px', position: 'sticky', top: '0' }}>
            <h2 style={{ fontSize: '25px', fontWeight: 'normal' }}>Personalisation</h2>
            <p style={{ fontSize: '15px' }}>Add up to three initials on a selection of Burberry products - including lather accessories, scarves and fragrance - through embroidery,engraving or embossing in a range of colours.</p>
            <p style={{fontSize: '15px'}}>Available online and in selected stores, this complimentry service can be used on items up to three months after purchase.</p>
            <div>
              <a style={{ fontSize: '15px', paddingRight: '20px' }} href='/Scarves'>Scarves</a>
              <a style={{ fontSize: '15px' }} href='/Menslatheraccessories'>Men's Leather Accessories</a>
              <a style={{ fontSize: '15px' }} href='/Womenslatheraccessories'>Women's Leather Accessories</a>
              <a style={{ fontSize: '15px' }} href='/Fragrance'>Fragrance</a>
            </div>
          </div>
        </div>
      </div>
      <div style={{position:'relative',top:'125px'}}>
        <img src='https://assets.burberry.com/is/image/Burberryltd/90779049-04C9-463D-ABFC-1ED392A30770?wid=1920' alt='backgroundimage' style={{width:'100%'}}></img>
      </div>
      <div style={{ position: 'relative', display: 'flex',top:'121px' }}>
        <img src='https://assets.burberry.com/is/image/Burberryltd/C94AFC37-B410-438C-AB84-7B45010622BA?wid=950' style={{ height: '900px', width: '50%', paddingRight: '15px',position:'relative',top:'0px' }} alt='Burberry'></img>
        <div style={{ flex: 1, paddingLeft: '15px' ,position:'relative',top:'0px'}}>
          <div style={{ paddingTop: '45px', position: 'sticky', top: '0' }}>
            <h2 style={{ fontSize: '25px', fontWeight: 'normal' }}>Trench Bespoke</h2>
            <p style={{ fontSize: '15px' }}>Create Personalised design that's unique to you, from a choice of bespoke gabardine colours,linings,buttons and embroidery - including applique patches..</p>
            <div>
              <a style={{ fontSize: '15px', paddingRight: '20px' }} href='/TrenchBespoke'>Find Out More</a>
            </div>
          </div>
        </div>
      </div>
      <div style={{position:'relative',top:'120px'}}>
        <img src='https://assets.burberry.com/is/image/Burberryltd/EFF93176-B5FA-4D9E-A680-1328A4F65818?wid=1920'style={{width:'100%'}}></img>
      </div>
      <div style={{ position: 'relative', display: 'flex',top:'121px' }}>
        <img src='https://assets.burberry.com/is/image/Burberryltd/9379132E-47FC-4075-84EC-0EB820BB5B44?wid=1000' style={{ height: '900px', width: '50%', paddingRight: '15px',position:'relative',top:'0px' }} alt='Burberry'></img>
        <div style={{ flex: 1, paddingLeft: '15px' ,position:'relative',top:'0px'}}>
          <div style={{ paddingTop: '45px', position: 'sticky', top: '0' }}>
            <h2 style={{ fontSize: '25px', fontWeight: 'normal' }}>Aftercare & Circular Services</h2>
            <p style={{ fontSize: '15px' }}>From Refresh, Repair and Remake to Resale and Rental, our host of circular services are designed to help ensure your Burberry pieces can be enjoyed for longer.</p>
            <div>
              <a style={{ fontSize: '15px', paddingRight: '20px' }} href='/Aftercare'>Find Out More</a>
            </div>
          </div>
        </div>
      </div>
      <div style={{position:'relative',top:'120px'}}>
        <img src='https://assets.burberry.com/is/image/Burberryltd/8A5CFC75-97CC-45FF-935A-78FB4D3A61EE?wid=1920'style={{width:'100%'}}></img>
      </div>
      <div style={{position:'relative',top:'160px',display:'flex',textAlign:'center'}}>
        <p style={{fontSize:'33px',paddingLeft:'10%',paddingRight:'10%'}}>Complimentary and plastic-free, our gift packaging is Forest Stewardship Council certified and 100 per cent recyclable.</p>
      </div>
    </div>
  )
}

export default AllServices
