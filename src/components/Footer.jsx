import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import './Footer.css'; 

const Footer = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const renderIcon = (section) => {
    return activeSection === section ? <ChevronUpIcon /> : <ChevronDownIcon />;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="bottom">
          <nav>
            <h2>Find a Store</h2>
          </nav>
        </div>

        <div className="bottom">
          <nav>
            <h2 onClick={() => toggleSection('burberryServices')}>
              Burberry Services {renderIcon('burberryServices')}
            </h2>
            {activeSection === 'burberryServices' && (
              <>
                <Link to="/appointment-booking">Book an Appointment</Link>
                <Link to="/trench-bespoke">Trench Bespoke</Link>
                <Link to="/aftercare">Aftercare</Link>
                <Link to="/burberryvestiairecollective">Burberry x Vestiaire Collective</Link>
                <Link to="/personalisation">Personalisation</Link>
                <Link to="/allservices">All Services</Link>
              </>
            )}
          </nav>
        </div>

        <div className="bottom">
          <nav>
            <h2 onClick={() => toggleSection('customerSupport')}>
              Customer Support {renderIcon('customerSupport')}
            </h2>
            {activeSection === 'customerSupport' && (
              <>
                <Link to="/contactus">Contact Us</Link>
                <Link to="/shipping">Shipping</Link>
                <Link to="/ordering-payment">Ordering & Payment</Link>
                <Link to="/returns">Returns</Link>
              </>
            )}
          </nav>
        </div>

        <div className="bottom">
          <nav>
            <h2 onClick={() => toggleSection('aboutBurberry')}>
              About Burberry {renderIcon('aboutBurberry')}
            </h2>
            {activeSection === 'aboutBurberry' && (
              <>
                <Link to="/burberryheritage">Burberry Heritage</Link>
                <Link to="/stories">Stories</Link>
                <Link to="/sustainability">Sustainability</Link>
                <Link to="/corporateresponsibility">Corporate Responsibility</Link>
                <Link to="/burberrygroupplc">Burberry Group Plc</Link>
                <Link to="/careers">Careers</Link>
              </>
            )}
          </nav>
        </div>

        <div className="bottom">
          <nav>
            <h2 onClick={() => toggleSection('legalAndCookies')}>
              Legal & Cookies {renderIcon('legalAndCookies')}
            </h2>
            {activeSection === 'legalAndCookies' && (
              <>
                <Link to="/termsconditions">Terms & Conditions</Link>
                <Link to="/burberry4gifttermsconditions">Burberry x 4Gift - Terms & Conditions</Link>
                <Link to="/privacypolicy">Privacy Policy</Link>
                <Link to="/cookiepolicy">Cookie Policy</Link>
                <Link to="/accessibilitystatement">Accessibility Statement</Link>
                <Link to="/giftfaq">4Gift FAQ</Link>
                <Link to="/donotsellmypersonalinformation">Do not sell my personal information</Link>
                <Link to="/sitemap">Site Map</Link>
              </>
            )}
          </nav>
        </div>

        <div className="bottom language-shipping">
          <Link to="/language" style={{paddingBottom:"13px"}}>Language English</Link>
          <Link to="/shippingtous">Shipping to United States ($)</Link>
        </div>

        <div className="bottom footer-statement">
          <p>
            <Link to="/mordenslaverystatement" style={{marginLeft:"-17px"}}>Modern Slavery Statement</Link><br />
            If you are using a screen-reader and are having problems using this website, please call<a href="/no">+1 877 217 4085</a>  or<a href="/contactus">contact us</a> for assistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
