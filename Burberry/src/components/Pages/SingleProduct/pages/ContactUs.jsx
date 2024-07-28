import React from 'react';

const ContactUs = () => {
  return (
    <div style={{ display: 'flex', padding: '20px', marginBottom: '-300px' }}>
      <div style={{ width: '33%', paddingRight: '20px' }}>
        <div style={{ backgroundColor: '#f9f9f9', padding: '10px', paddingTop: '50px', borderRadius: '5px', position: 'sticky', top: '20px' ,paddingBottom:'60px'}}>
          <ul style={{ listStyle: 'none', padding: '0' }}>
          <li style={{ margin: '10px 0', fontWeight: 'normal', fontSize: '13.2px' }}>1.<a style={{color:'black'}} href='/GeneralEnquiries'>General Enquiries</a></li>
            <li style={{ margin: '30px 0', fontWeight: 'normal', fontSize: '13.2px' }}>2. <a style={{color:'black'}} href='/LocatingaStore'>Locating a Store</a></li>
            <li style={{ margin: '10px 0', fontWeight: 'normal', fontSize: '13.2px' }}>3.<a style={{color:'black'}} href='/PressEnquiries'>Press Enquiries</a></li>
          </ul>
        </div>
      </div>
      <div style={{ width: '56%', paddingLeft: '20px', borderLeft: '1px solid #ddd' }}>
        <div>
          <h2 style={{ marginTop: '55px', fontSize: '15px', fontWeight: 'normal' }}>General Enquiries</h2>
          <p style={{ margin: '10px 0', fontSize: '13.5px', marginTop: '40px' }}>
            If you have any queries, please do not hesitate to contact us. For your convenience, Burberry offers global assistance seven days a week.
            We also include an option to locate your nearest Burberry store.
          </p>
          <h3 style={{ marginTop: '14px', fontSize: '15px' }}>Telephone</h3>
          <p style={{ margin: '10px 0', fontSize: '13.5px' }}>
            Kindly note that not all numbers may be accessible or covered by all mobile phone networks. Please also be mindful that we may monitor
            or record your communications for training and quality control purposes.
          </p>
          <h5 style={{ margin: '17px 0' }}>Contact us:</h5>
          <p style={{ margin: '10px 0', fontSize: '12.5px' }}>+1 877 217 4085</p>
          <p style={{ margin: '10px 0', fontSize: '13.5px' }}>
            Our Client Advisors are available Monday through Friday, 9AM - 11PM(EST), and Saturday to Sunday 10AM to 10PM(EST), excluding holidays.
          </p>
          <h3 style={{ marginTop: '35px', fontSize: '15px' }}>WhatsApp</h3>
          <p style={{ margin: '10px 0' }}><a href="https://wa.me/1234567890" style={{ color: 'black', fontSize: '12.5px' }}>Click To WhatsApp</a></p>
          <h3 style={{ marginTop: '20px', fontSize: '15px' }}>Email</h3>
          <p style={{ margin: '10px 0', fontSize: '13.5px' }}><a style={{color:'black'}} href='/customerservice'>customerservice@burberry.com</a></p>
          <h3 style={{ marginTop: '10px' }}>Post</h3>
          <p style={{ margin: '10px 0', fontSize: '13.5px' }}>
            Burberry Limited<br />
            Horseferry House,<br />
            Horseferry Road,<br />
            London<br />
            SW1P 2AW<br />
            United Kingdom
          </p>
          <p style={{ marginTop: '90px', fontSize: '15px' }}>Locating a Store</p>
          <p style={{ margin: '40px 0', fontSize: '14px' }}>
            To locate your nearest Burberry store visit our <a style={{ fontSize: '14px' }} href="https://us.burberry.com/store-locator">Store Locator</a>.
          </p>
          <p style={{ marginTop: '90px', fontSize: '15px' }}>Press Enquiries</p>
          <p style={{ margin: '40px 0', fontSize: '14px' }}>
            For press enquiries please email <a style={{ fontSize: '14px' }} href="mailto:press.office@burberry.com">press.office@burberry.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

