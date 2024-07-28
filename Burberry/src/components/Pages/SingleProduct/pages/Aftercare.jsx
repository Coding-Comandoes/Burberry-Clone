import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const Aftercare = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const renderIcon = (section) => {
    return activeSection === section ? <ChevronUpIcon /> : <ChevronDownIcon />;
  };

  return (
    <div>
      <div style={{ position: 'relative', top: '130px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ fontSize: '60px', fontWeight: 'normal', marginBottom: '0px' }}>Aftercare & Circular Services</h2>
        <p style={{ fontSize: '15px' }}>Designed to prolong the life of Burberry products, ensuring they can be enjoyed for longer.</p>
        <div style={{ paddingTop: '11px' }}>
          <a style={{ fontSize: '15px', paddingRight: '20px' }} href='/BookanAppointment'>Book an Appointment</a>
          <a style={{ fontSize: '15px' }} href='/ContactUs'>Contact Us</a>
        </div>
      </div>

      <div style={{ position: 'relative', top: '200px', display: 'flex', justifyContent: 'space-between' }}>
        <h2 style={{ fontWeight: 'normal', cursor: 'pointer',fontSize:'15px' }} onClick={() => toggleSection('Circular Services')}>
          Circular Services {renderIcon('Circular Services')}
        </h2>
        {activeSection === 'Circular Services' && (
          <div style={{ display: 'flex', gap: '30px', position: 'relative', top: '20px', fontSize: '15px' }}>
            <a style={{ color: 'black' }} href='/Refresh'>Refresh</a>
            <a style={{ color: 'black' }} href='/Repair'>Repair</a>
            <a style={{ color: 'black' }} href='/Rental & Resale'>Rental & Resale</a>
            <a style={{ color: 'black' }} href='/Remake'>Remake</a>
          </div>
        )}
        <div style={{ display: 'flex', fontSize: '20px', position: 'relative', top: '20px' }}>
          <a style={{fontSize:'15px'}} href='/BookanAppointment'>Book</a>
        </div>
      </div>

      <div style={{ position: 'relative', top: '200px' }}>
        <img style={{ height: '1000px', width: '100%' }} src='https://assets.burberry.com/is/image/Burberryltd/544CEE38-EC5B-49E1-AD56-40E378E4D880?wid=200' alt='Burberry'></img>
      </div>

      <div style={{ position: 'relative', top: '196px', display: 'flex' }}>
        <img src='https://assets.burberry.com/is/image/Burberryltd/AAF4570F-CF55-4773-A9FF-EEE4205B1D5A?wid=950' style={{ height: '900px', width: '50%', paddingRight: '15px' }} alt='Burberry'></img>
        <div style={{ flex: 1, paddingLeft: '15px' }}>
          <div style={{ paddingTop: '45px', position: 'sticky', top: '0' }}>
            <h2 style={{ fontSize: '25px', fontWeight: 'normal' }}>Refresh</h2>
            <p style={{ fontSize: '15px' }}>These services help to clean, restore, and protect a range of Burberry pieces - from leather accessories and canvas bags to cashmere and sneakers. Our Trench & Rainwear Reproofing service also features a reproofing treatment - using non-toxic products that are kinder to the environment than traditional reproofing products - while the Trench Refresh service includes the addition of minor repairs. For our UK customers, this service is performed at our heritage manufacturing site in Castleford, where our trench coats have been made for more than fifty years.</p>
            <div>
              <a style={{ fontSize: '15px', paddingRight: '20px' }} href='/BookanAppointment'>Book an Appointment</a>
              <a style={{ fontSize: '15px' }} href='/GiftFAQs'>FAQs</a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: 'relative', top: '200px', display: 'flex' }}>
        <img src='https://tse3.mm.bing.net/th?id=OIP.3Csm9sIlHTaDd0TWyHVj-wHaHa&pid=Api&P=0&h=180' style={{ height: '1000px', width: '70%', position: 'relative', left: '-120px' }} alt='Burberry'></img>
        <img src='https://assets.burberry.com/is/image/Burberryltd/544CEE38-EC5B-49E1-AD56-40E378E4D880?wid=200' style={{ position: 'relative', top: '148px', height: '745px', width: '100%', right: '230px' }} alt='Burberry'></img>
      </div>

      <div style={{ position: 'relative', top: '196px', display: 'flex' }}>
        <img src='https://assets.burberry.com/is/image/Burberryltd/2CDF179C-1113-4FF5-A809-54A6696FAF78?wid=800' style={{ height: '900px', width: '50%', paddingRight: '15px' }} alt='Burberry'></img>
        <div style={{ flex: 1, paddingLeft: '15px' }}>
          <div style={{ paddingTop: '45px', position: 'sticky', top: '0' }}>
            <h2 style={{ fontSize: '25px', fontWeight: 'normal' }}>Repair</h2>
            <p style={{ fontSize: '15px' }}>As well as basic alterations on all our clothing, which allows styles to be tailored to you, our repair services can be performed on leather accessories, shoes, coats, and jackets - including trench coats.</p>
            <div>
              <a style={{ fontSize: '15px', paddingRight: '20px' }} href='/BookanAppointment'>Book an Appointment</a>
              <a style={{ fontSize: '15px' }} href='/GiftFAQs'>FAQs</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src='https://assets.burberry.com/is/image/Burberryltd/CC135D58-90B1-47E1-9D4B-800B7C197686?wid=1000' alt='backgrounimage' style={{position:'relative',top:'350px',height:'900px',width:'100%'}}></img>
      </div>
      <div style={{ position: 'relative', top: '196px', display: 'flex',paddingBottom:'300px' }}>
        <img src='https://assets.burberry.com/is/image/Burberryltd/B6DC511E-312C-4B0C-94F9-C837A5F3D31E?wid=950' style={{ height: '900px', width: '50%', paddingRight: '15px',position:'relative',top:'250px' }} alt='Burberry'></img>
        <div style={{ flex: 1, paddingLeft: '15px' ,position:'relative',top:'300px'}}>
          <div style={{ paddingTop: '45px', position: 'sticky', top: '0' }}>
            <h2 style={{ fontSize: '25px', fontWeight: 'normal' }}>Rental & Resale</h2>
            <p style={{ fontSize: '15px' }}>In June 2023,we partnered with luxury fashion rental marketplace My Wardrobe HQ, allowing our UK customers to rent women's clothing,bags,scaves, coats and jackets.</p>
            <p style={{fontSize: '15px'}}>Four months later,we partnered with Vestiaire Collective - the leading destination for pre-loved luxury.Through Vestiaire Collective,you can trade in selected styles for a Buberry gift card.</p>
            <div>
              <a style={{ fontSize: '15px', paddingRight: '20px' }} href='/BurberryxVestiaireCollective'>Vestiaire Collective</a>
              <a style={{ fontSize: '15px' }} href='/MyWardrobeHQ'>My Wardrobe HQ</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src='https://tse2.mm.bing.net/th?id=OIP.FtXTIXq_5fi-mTbl_mU1zgHaIa&pid=Api&P=0&h=180' alt='backgroundimage' style={{height:'900px',width:'100%'}}></img>
      </div>
      <div style={{ position: 'relative', display: 'flex',marginBottom:'-200px' }}>
        <img src='https://assets.burberry.com/is/image/Burberryltd/B1CE68FF-DA29-4321-A08E-05C45FDDA5C9?wid=800 ' style={{ height: '900px', width: '50%', paddingRight: '15px',position:'relative',top:'0px' }} alt='Burberry'></img>
        <div style={{ flex: 1, paddingLeft: '15px' ,position:'relative',top:'0px'}}>
          <div style={{ paddingTop: '45px', position: 'sticky', top: '0' }}>
            <h2 style={{ fontSize: '25px', fontWeight: 'normal' }}>Remake</h2>
            <p style={{ fontSize: '15px' }}>With our remake services,Cashmere Upcycle,signs of wear and tear on cashmere scaves can be visibly repaired through custom embroidery and appliques. Not only giving new life to damaged or older styles,Cashmere Upcycle creates unique Burberry pieces exclusive to you.</p>
            <div>
              <a style={{ fontSize: '15px', paddingRight: '20px' }} href='/BookanAppointment'>Book an Appointment</a>
              <a style={{ fontSize: '15px' }} href='/GiftFAQs'>FAQs</a>
            </div>
          </div>
        </div>
      </div>
      <div style={{position:'relative',top:'230px',fontSize:'15px'}}>
          <p>Please note, our aftercare and circular services are available in selected countries.</p>
        </div>
    </div>
  );
};

export default Aftercare;
