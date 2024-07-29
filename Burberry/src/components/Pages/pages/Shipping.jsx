import React from 'react';



const Shipping = () => {
 
  return (
    <div style={{ display: 'flex', padding: '20px', marginBottom: '-250px' }}>
      <div style={{ width: '33%', paddingRight: '20px' }}>
        <div style={{ backgroundColor: '#f9f9f9', padding: '10px', paddingTop: '50px', borderRadius: '5px', position: 'sticky', top: '160px', paddingBottom: '50px' }}>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            <li style={{ margin: '10px 0', fontWeight: 'normal', fontSize: '13.2px' }}>1.<a style={{ color: 'black' }} href='/TrackYourOrder'>Track Your Order</a></li>
            <li style={{ margin: '30px 0', fontWeight: 'normal', fontSize: '13.2px' }}>2. <a style={{ color: 'black' }} href='/Collect in Store'>Collect in Store</a></li>
            <li style={{ margin: '10px 0', fontWeight: 'normal', fontSize: '13.2px' }}>3.<a style={{ color: 'black' }} href='/ShippingRestrictions'>Shipping Restrictions</a></li>
            <li style={{ margin: '30px 0', fontWeight: 'normal', fontSize: '13.2px' }}>4.<a style={{ color: 'black' }} href='/SendaGift'>Send a Gift</a></li>
            <li style={{ margin: '10px 0', fontWeight: 'normal', fontSize: '13.2px' }}>5.<a style={{ color: 'black' }} href='/GiftPackaging'>Gift Packaging</a></li>
          </ul>
        </div>
      </div>
      <div style={{ width: '56%', paddingLeft: '20px', borderLeft: '1px solid #ddd' }}>
        <div>
          <h2 style={{ marginTop: '90px', fontSize: '23px', fontWeight: 'normal', paddingLeft: '21%' }}>Shipping</h2>
          <p style={{ marginTop: '70px', fontSize: '14px' }}>Track Your Order</p>
          <p style={{ margin: '10px 0', fontSize: '13.2px', marginTop: '40px', paddingRight: '30px' }}>
            When shipping your order, we will send a confirmation email with your tracking number to confirm that your order has been accepted. For the latest on your delivery, please refer to the tracking number included in your shipping confirmation email. Alternatively, if you have a registered account with Burberry, you can find this information in <a style={{ color: 'black' }} href='MyAccount'>‘My Account’</a>:
          </p>
          <div>
            <ul style={{padding: '0', marginTop: '25px' }}>
              <li style={{ margin: '15px 0', fontWeight: 'normal', fontSize: '13.2px' }}>Sign into ‘My Account’.</li>
              <li style={{ margin: '15px 0', fontWeight: 'normal', fontSize: '13.2px' }}>Click on the ‘Orders’ section. </li>
              <li style={{ margin: '10px 0', fontWeight: 'normal', fontSize: '13.2px' }}>If the order status is ‘Order Shipped’ click on ‘View’ for the tracking information. </li>
            </ul>
          </div>
          <div style={{ fontSize: '13.2px' }}>
            <p>Your order status may take up to one hour to update after your order has been placed.</p>
            <p>Please select your preferred shipping destination for shipping options, delivery times, shipping costs and all other information.</p>
            <p style={{ paddingRight: '40px' }}>Once your order has been shipped, you can also track it at <a style={{color:'black'}} href='/www.ups.com'>www.ups.com</a> using the tracking number located in your shipping confirmation email.</p>
            <p>All deliveries require a signature.</p>
          </div>
        </div>
        <div style={{marginTop:'120px',fontSize:'13.5px'}}>
          <p>We do not deliver to freight forwarding addresses or PO boxes.</p>
        </div>
        <div style={{ marginTop: '50px' }}>
          <table style={{ width: '100%', border: '1px solid black', marginBottom: '30px' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left',fontSize:'15px' }}>Collect-in-Store</th>
                <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontWeight:'bold',fontSize:'14px' }}>Cost</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'13.5px'}}>Free</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'13.5px' }}>Shipping Information</td>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'13.5px' }}>
                  Order by 3 PM EST, Monday - Friday<br />
                  Next-day delivery, Monday - Friday<br />
                  Order placed after the cut-off times or on weekends and public holidays will be processed on the following working day<br />
                  <a style={{fontSize:'13.3px',color:'black'}} href='/MoreonCollectinStore'>More on Collect-in-Store</a>
                </td>
              </tr>
            </tbody>
          </table>
          <table style={{ width: '100%', border: '1px solid black', marginBottom: '30px' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left',fontSize:'15px' }}>Standard Delivery</th>
                <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontWeight:'bold',fontSize:'14px' }}>Cost</td>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'13.5px' }}>Free</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'13.5px'}}>Shipping Information</td>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'13.5px' }}>
                Order by 1PM EST, Monday-Friday. 3-5 working days
                </td>
              </tr>
            </tbody>
          </table>
          <table style={{ width: '100%', border: '1px solid black', marginBottom: '30px' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left',fontSize:'15px' }}>Next Day</th>
                <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontWeight:'bold',fontSize:'14px' }}>Cost</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'13.5px'}}>	$20</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'13.5px' }}>Shipping Information</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'13.5px'}}>
                  Order by 1 PM EST, Monday - Friday<br />
                  Order placed after the cut-off times or on weekends and public holidays will be processed on the following working day
                </td>
              </tr>
            </tbody>
          </table>
          <table style={{ width: '100%', border: '1px solid black', marginBottom: '30px' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left',fontSize:'15px' }}>US Military bases (AFO/FPO)</th>
                <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontWeight:'bold',fontSize:'14px' }}>Cost</td>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'13.5px' }}>Free</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'13.5px' }}>Shipping Information</td>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'13.5px' }}>
                  Domestic Military Bases: 45 days<br />
                  Overseas Military Bases: 45 days
                </td>
              </tr>
            </tbody>
          </table>
          <table style={{ width: '100%', border: '1px solid black', marginBottom: '20px' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left',fontSize:'15px' }}>Saturday Home Delivery</th>
                <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontWeight:'bold',fontSize:'14px' }}>Cost</td>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'13.5px' }}>$25</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'13.5px' }}>Shipping Information</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'13.5px'}}>
                  Order by 1pm EST Friday<br />
                  Orders placed after the cut-off time will be delivered on the following Saturday.
                </td>
              </tr>
            </tbody>
          </table>
      
          <div style={{ fontSize: '13.3px', marginTop: '65px',paddingRight:'10px' }}>
            <ul>
              <li style={{marginBottom:'15px'}}>Collect-in-Store, Next Day, Saturday and Standard orders are estimated to arrive by 7pm local time.</li>
              <li style={{marginBottom:'15px'}}>Collect-in-Store, Next Day and Standard orders placed after 5pm or on weekends and federal holidays will be processed on the following working day.</li>
              <li style={{marginBottom:'15px'}}>Working days are Monday to Friday, excluding federal holidays within the US.</li>
              <li style={{marginBottom:'15px'}}>Orders are shipped from the US</li>
              <li style={{marginBottom:'15px'}}>Any duties or taxes will be included in the final price shown at checkout.</li>
              <li style={{marginBottom:'15px'}}>In some instances, customers with a ShopRunner account will have the option to select ShopRunner as a shipping option in checkout. For more information, please visit <a style={{color:'black'}} href='/www.shoprunner.com'>Shoprunner.com </a>.</li>
              <li style={{marginBottom:'15px'}}>Burberry ships to US Military Bases. These orders have specific delivery times and restrictions apply.</li>
              <li style={{marginBottom:'15px'}}>Please allow additional time for personalised items. An estimated delivery time for your order will be available to view at checkout.</li>
              <li style={{marginBottom:'15px'}}>Orders shipped to a delivery address in Colorado are subject to a retail delivery fee. The retail delivery fee amount will be displayed at checkout.</li>
            </ul>
          </div>

          <div style={{ marginTop: '120px' }}>
            <h3 style={{ fontSize: '16px' }}>Collect in Store</h3>
            <p style={{ fontSize: '13.2px',marginTop:'40px' }}>Order online or using the Burberry app and collect your items in the store of your choice. Try them on in store and our associates will be on hand to offer specialist advice or assist with processing any returns.</p>
            <a style={{fontSize:'13.3px',color:'black'}} href='/Howtocollectinstore'>How to collect in store</a>
          </div>
       
          <div style={{ marginTop: '120px' }}>
            <h3 style={{ fontSize: '16px' }}>Shipping Restrictions</h3>
            <p style={{ fontSize: '13.3px',marginTop:'50px' ,marginBottom:'10px'}}>Due to strict trading agreements and other restrictions, we are unable to ship the following items (indicated with an X) to certain locations.</p>
            <p style={{ fontSize: '13.3px',marginBottom:'10px' }}>We will notify you of any restrictions affecting your order at checkout.</p>
            <p style={{ fontSize: '13.3px' }}>We are only able to deliver to the shipping address provided on your order, changes are not permitted once your order has been placed.</p>
            <h4 style={{ fontSize: '14px',marginTop:'40px' }}>United States California and Delaware</h4>
          </div>
          <div>
          <table style={{ width: '100%', border: '1px solid black', marginBottom: '20px',marginTop:'25px' }}>
            <tbody>
              <tr>
              <td style={{ border: '1px solid black', padding: '8px',fontSize:'14px' }}>Beauty</td>
              <td style={{ border: '1px solid black', padding: '8px' }}></td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'14px' }}>Fragrance/Nail polish</td>
                <td style={{ border: '1px solid black', padding: '8px' }}></td>                
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'14px'}}>Exotic skins</td>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'14px' }}>	X</td>                
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'14px' }}>Furs</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'14px'}}>	</td>                
              </tr>
            </tbody>
          </table>
          </div>
          <div style={{marginTop:'60px'}}>
            <p style={{fontSize:'13.3px'}}>It may not be possible to deliver fragrances to restricted areas in:</p>
            <ul>
              <li style={{paddingBottom:'10px',fontSize:'13.3px'}}>South Korea</li>
              <li  style={{paddingBottom:'10px',fontSize:'13.3px'}}>Taiwan Area, China</li>
              <li  style={{paddingBottom:'10px',fontSize:'13.3px'}}>Japan</li>
              <li  style={{paddingBottom:'10px',fontSize:'13.3px'}}>Malaysia</li>
              <li>certain other locations</li>
            </ul>
            <p style={{fontSize:'13.3px'}}>We cannot ship fragrance and nail polish orders to Mallorca, Spain.</p>
          </div>
          <div style={{marginTop:'100px'}}>
            <h5>Send a Gift</h5>
            <p style={{marginTop:'45px',fontSize:'13.3px'}}>Our gift packaging includes a signature Burberry gift box finished with a hand-tied ribbon.</p>
            <a style={{fontSize:'13.3px',color:'black'}} href='/Moreonsendinggifts'>More on sending gifts</a>
          </div>
          <div style={{marginTop:'100px',paddingRight:'20px'}}>
            <h5>Gift Packaging</h5>
            <p style={{fontSize:'13.3px',marginTop:'45px'}}>Standard packaging consists of a pouch, box or garment bag inside a Burberry box.</p>
            <p style={{fontSize:'13.3px'}}>If you would like your items to be gift packaged, please indicate that your purchase is a gift by selecting ‘Gift Packaging’ at the checkout. If you have selected ‘Gift Packaging’ you will have the opportunity to add a personal message to your order.</p>
            <p style={{fontSize:'13.3px'}}>Please note that we will always put the condition of your items first and, therefore, we may be unable to offer gift boxes for large items. Due to safety restrictions, we are also unable to offer gift packaging for some of our beauty and fragrance products.</p>
            <p style={{fontSize:'13.3px'}}>Products will be individually gift packaged.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
