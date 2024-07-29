import React from 'react';



const OrderingPayment = () => {
 
  return (
    <div style={{ display: 'flex', padding: '20px', marginBottom: '0px' }}>
      <div style={{ width: '33%', paddingRight: '20px' }}>
        <div style={{ backgroundColor: '#f9f9f9', padding: '10px', paddingTop: '50px', borderRadius: '5px', position: 'sticky', top: '160px', paddingBottom: '7px' }}>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            <li style={{ margin: '10px 0', fontWeight: 'normal', fontSize: '13.2px' }}>1.<a style={{ color: 'black' }} href='/Methods'>Methods</a></li>
            <li style={{ margin: '30px 0', fontWeight: 'normal', fontSize: '13.2px' }}>2. <a style={{ color: 'black' }} href='/TelephoneOrdering'>Telephone Ordering</a></li>
            <li style={{ margin: '10px 0', fontWeight: 'normal', fontSize: '13.2px' }}>3.<a style={{ color: 'black' }} href='/PreOrderedItems'>Pre-Ordered Items</a></li>
            <li style={{ margin: '30px 0', fontWeight: 'normal', fontSize: '13.2px' }}>4.<a style={{ color: 'black' }} href='/RegisterInterest'>Register Interest</a></li>
            <li style={{ margin: '10px 0', fontWeight: 'normal', fontSize: '13.2px' }}>5.<a style={{ color: 'black' }} href='/OnlineExclusives'>Online Exclusives</a></li>
            <li style={{ margin: '30px 0', fontWeight: 'normal', fontSize: '13.2px' }}>6.<a style={{ color: 'black' }} href='/Labelling'>Labelling</a></li>
            <li style={{ margin: '10px 0', fontWeight: 'normal', fontSize: '13.2px' }}>7.<a style={{ color: 'black' }} href='/Currencies'>Currencies</a></li>
            <li style={{ margin: '30px 0', fontWeight: 'normal', fontSize: '13.2px' }}>8.<a style={{ color: 'black' }} href='/Conditions'>Conditions</a></li>
            <li style={{ margin: '10px 0', fontWeight: 'normal', fontSize: '13.2px' }}>9.<a style={{ color: 'black' }} href='/Security'>Security</a></li>
            <li style={{ margin: '30px 0', fontWeight: 'normal', fontSize: '13.2px' }}>10.<a style={{ color: 'black' }} href='/DeclinedPayments'>Declined Payments</a></li>
          </ul>
        </div>
      </div>
      <div style={{ width: '56%', paddingLeft: '20px', borderLeft: '1px solid #ddd' }}>
        <div>
          <h2 style={{ marginTop: '90px', fontSize: '23px', fontWeight: 'normal', paddingLeft: '21%' }}>Ordering and Payment</h2>
          <p style={{ marginTop: '70px', fontSize: '15.5px' }}>Methods</p>
          <p style={{ margin: '10px 0', fontSize: '13.2px', marginTop: '40px', paddingRight: '30px' }}>
          Burberry.com accepts:
          </p>
          <div>
            <ul style={{ padding: '0', marginTop: '25px' }}>
              <li style={{ margin: '15px 0', fontWeight: 'normal', fontSize: '13.2px' }}>Apple Pay</li>
              <li style={{ margin: '15px 0', fontWeight: 'normal', fontSize: '13.2px' }}>Visa</li>
              <li style={{ margin: '15px 0', fontWeight: 'normal', fontSize: '13.2px' }}>Mastercard </li>
              <li style={{ margin: '15px 0', fontWeight: 'normal', fontSize: '13.2px' }}>American Express</li>
              <li style={{ margin: '15px 0', fontWeight: 'normal', fontSize: '13.2px' }}>Paypal</li>
              <li style={{ margin: '15px 0', fontWeight: 'normal', fontSize: '13.2px' }}>Discover</li>
              <li style={{ margin: '15px 0', fontWeight: 'normal', fontSize: '13.2px' }}>JCB </li>
              <li style={{ margin: '15px 0', fontWeight: 'normal', fontSize: '13.2px' }}>Union Pay</li>
              <li style={{ margin: '15px 0', fontWeight: 'normal', fontSize: '13.2px' }}>Burberry gift cards</li>
              <li style={{ margin: '15px 0', fontWeight: 'normal', fontSize: '13.2px' }}>Klarna</li>
            </ul>
          </div>
          <div style={{ fontSize: '13.2px',marginTop:'25px' }}>
            <p>If you pay using PayPal, the PayPal Privacy Policy (available on the PayPal website) will also apply. This sets out how PayPal collects, retains, processes, shares and transfers your personal data when using PayPal’s services.</p>
          </div>
        </div>
        <div style={{marginTop:'120px',fontSize:'14px'}}>
          <p style={{fontSize:'15.5px'}}>Telephone Ordering</p>
          <p style={{marginTop:'50px'}}>Telephone ordering is available via our Customer Service team in most cases. If telephone ordering is not available in your location or if you wish to use a payment method that cannot be accepted over the phone but can be accepted online, a shopping bag will be created for you.</p>
          <p>An email with a link to your shopping bag will be sent. By clicking on the link, you can view and complete your order using your preferred payment method. The items in your shopping bag will only be secured for you after payment has been taken and your items shipped</p>
          <p>This service is available 24 hours a day.</p>
        </div>
        <div style={{marginTop:'0px',fontSize:'14px'}}>
          <p style={{fontSize:'15.5px'}}>Pre-Ordered Items</p>
          <p style={{marginTop:'50px'}}>Certain products that are not immediately available to purchase may be displayed on Burberry.com. These items can be pre-ordered to secure them once they become available.</p>
          <p>Payment will be taken when or shortly after your order is placed.</p>
          <p>Estimated delivery times will be communicated to you before you place your order and when you receive acknowledgement for your order. You can cancel your order at anytime up to dispatch of the item. Our usual returns and cancellations conditions apply provided the item is not personalised or pierced jewellery, in which case the item cannot be returned or cancelled. This does not affect your statutory rights.</p>
        </div>
        <div style={{marginTop:'0px',fontSize:'14px'}}>
          <p style={{fontSize:'15.5px'}}>Register Interest</p>
          <p style={{marginTop:'50px'}}>Where certain items are ‘unavailable to purchase at present time’ on Burberry.com or via the Burberry app, you may be given the opportunity to ‘Register Interest’.</p>
          <p>If you choose to ‘Register Interest’ Burberry Customer Service will notify you as soon as the item is available to purchase on Burberry.com or via the Burberry app. No payment is taken during this process and the product is not reserved for you.</p>
          <p>We are not able reserve items or guarantee size availability.</p>
          <p>If an item you wish to purchase is out of stock you are able to check product availability in certain Burberry stores by clicking on the ‘Find in Store’ button on our product page on Burberry.com. This service is not available for all Burberry stores.</p>
        </div>
        <div style={{marginTop:'0px',fontSize:'14px'}}>
          <p style={{fontSize:'15.5px'}}>Online Exclusives</p>
          <p style={{marginTop:'50px'}}>Any product that is described as an ‘online exclusive’ will only be available to purchase on Burberry.com or via the Burberry app (if applicable) and is not available in any Burberry stores, through any Burberry authorised retailer or on any other website.</p>
          <p>If a customer has difficulties placing an order through Burberry.com or via the Burberry app, Customer Service may be able to assist by taking the customers’ details and placing the order for the ‘online exclusive’ product(s) over the telephone. An ‘online exclusive’ product(s) ordered online, via the Burberry app or through Customer Service can be collected from your selected Burberry store using the Burberry complimentary Collect-in-Store service (if applicable).</p>
        </div>
        <div style={{marginTop:'0px',fontSize:'14px'}}>
          <p style={{fontSize:'15.5px'}}>Labelling</p>
          <p style={{marginTop:'50px'}}>The labels on products with the same item number may differ, however, there is no other material difference between the products themselves. Unfortunately, we are unable to cater requests for specific labelling.</p>
        </div>
        <div style={{marginTop:'0px',fontSize:'14px'}}>
          <p style={{fontSize:'15.5px'}}>Currencies</p>
          <p style={{marginTop:'50px'}}>We ship internationally and charge in the currency of your chosen destination. If this is different to that of your card or payment method, the price will be calculated by your card issuer or payment method and charged in the currency of your card or payment method.</p>
        </div>
        <div style={{ marginTop: '50px' }}>
          <table style={{ width: '100%', border: '1px solid black', marginBottom: '30px' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left',fontSize:'12px' }}>LOCATION</th>
                <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left',fontSize:'12.5px' ,fontWeight:'normal'}}>PAYMENT CURRENCY</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'14px'}}>Australia</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'12px'}}>AUD</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'14px' }}>Bulgaria</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'12px'}}>LEV</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'14px' }}>Canada</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'12px'}}>CAD</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'14px' }}>Czech Republic</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'12px'}}>CZK</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'14px' }}>China Mainland</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'12px'}}>CNY</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'14px' }}>Denmark</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'12px'}}>DKK</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'14px' }}>EU Zones 1-3</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'12px'}}>EUR</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'14px' }}>Hong Kong S.A.R., China</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'12px'}}>HKD</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'14px' }}>Hungary</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'12px'}}>HUF</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'14px' }}>Japan</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'12px'}}>JPY</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'14px' }}>Kuwait</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'12px'}}>USD</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'14px' }}>Macau S.A.R., China</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'12px'}}>MOP</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'14px' }}>Malaysia</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'12px'}}>MYR</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'14px' }}>Poland</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'12px'}}>PLN</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'14px' }}>Qatar</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'12px'}}>QAR</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'14px' }}>Romania</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'12px'}}>LEU</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'14px' }}>Saudi Arabia</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'12px'}}>SAR</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'14px' }}>Singapore</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'12px'}}>SGD</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'14px' }}>South Korea</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'12px'}}>KRW</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'14px' }}>Sweden</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'12px'}}>SEK</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'14px' }}>Switzerland</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'12px'}}>CHF</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'14px' }}>Taiwan Area, China</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'12px'}}>TWD</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'14px' }}>Turkey</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'12px'}}>TRY</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'13px' }}>UAE</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'12px'}}>AED</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'13px' }}>UK</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'12px'}}>GBP</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px',fontSize:'13px' }}>USA</td>
                <td style={{ border: '1px solid black', padding: '8px' ,fontSize:'12px'}}>USD</td>
              </tr>
            </tbody>
          </table>
          <div style={{marginTop:'35px',fontSize:'14px'}}>
          <p style={{fontSize:'15.5px'}}>Conditions</p>
          <p style={{marginTop:'40px'}}>For security, the billing name and address must match that of the payment method. We reserve the right to cancel any order that does not comply with this or our other security checks.</p>
          <p>Your card or other method of payment will not be charged until your order is accepted and shipped. However, it may show a pre-authorisation of the funds immediately upon order. Payment will be taken for pre-ordered or personalised items at the time – or shortly after – you submit your order and in advance of shipping.</p>
          <p>State and local sales tax may be added to orders shipped to the following states: AL, AZ, CA, CO, CT, DC, FL, GA, HI, IL, IA, IN, KY, LA, ME, MD, MA, MI, MN, MS, NV, NJ, NY, NC, ND, OH, OK, PA, RI, SC, TN, TX, UT, VT, VA, WA, WV, WI and any other states that may have enacted laws imposing sales tax on internet sales.</p>
          <p>Burberry Limited has collected the simplified sellers use tax on taxable transactions delivered into Alabama and the tax will be remitted on the customers behalf to the Alabama Department of Revenue. Burberry Limited’s programme account number is SSU-R010292175.</p>
          <p>Some states also assess sales tax on shipping and handling charges. Your sales tax will be automatically calculated and added to your order during checkout.</p>
          <p>All orders are placed with Burberry Limited, which is a US entity, so your payment provider may apply other international bank charges. If your method of payment is not denominated in the currency of your order, the final price will be charged in the currency of your card.</p>
          <p>This will be calculated and charged by your card issuer. Burberry has no control over these charges and cannot predict the amount. Please contact your issuing bank for further information before placing your order.</p>
          </div> 
          <div style={{marginTop:'25px',fontSize:'14px'}}>
          <p style={{fontSize:'15.5px'}}>Security</p>
          <p style={{marginTop:'35px'}}>Online payment card transactions are transmitted using Secure Socket Layer (SSL) encryption technology. For further details see our <a style={{fontSize:'14px',color:'black'}} href='/PrivacyStatement'></a>Privacy Statement.</p>
          <p style={{marginTop:'10px',fontSize:'15px'}}>Declined Payments</p>
          </div>
      
          <div style={{ fontSize: '13.3px', marginTop: '65px',paddingRight:'10px' }}>
            <p>If your payment has been declined:</p>
            <ul style={{listStyle:'none'}}>
              <li style={{marginBottom:'20px'}}>1.Check that your details are correct, such as your 16-digit card number or 3 or 4-digit security code.</li>
              <li style={{marginBottom:'20px'}}>2.Make sure your card or payment method has not expired.</li>
              <li style={{marginBottom:'20px'}}>3.If your payment continues to be declined, contact your bank or payment provider.</li>
            </ul>
            <p>For saved payment details:</p>
            <ul style={{listStyle:'none'}}>
              <li style={{marginBottom:'20px'}}>1.Check your selected card has not expired. </li>
              <li style={{marginBottom:'20px'}}>2.Make sure the billing address matches that registered for your card or payment method. </li>
              <li style={{marginBottom:'20px'}}>3.Check the 3 or 4-digit security code is correct. For security we will ask for this whenever you make a purchase.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderingPayment;
