import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BookanAppointment from '../pages/BookanAppointment';
import TrenchBespoke from '../pages/TrenchBespoke';
import Aftercare from '../pages/Aftercare';
import BurberryxVestiaireCollective from '../pages/BurberryxVestiaireCollective';
import Personalisation from '../pages/Personalisation';
import AllServices from '../pages/AllServices';
import ContactUs from '../pages/ContactUs';
import Shipping from '../pages/Shipping';
import OrderingPayment from '../pages/OrderingPayment';
import Returns from '../pages/Returns';
import BurberryHeritage from '../pages/BurberryHeritage';
import Stories from '../pages/Stories';
import Sustainability from '../pages/Sustainability';
import CorporateResponsibility from '../pages/CorporateResponsibility';
import BurberryGroupPlc from '../pages/BurberryGroupPlc';
import Careers from '../pages/Careers';
import TermsConditions from '../pages/TermsConditions';
import Burberryx4GiftTermsConditions from '../pages/Burberryx4GiftTermsConditions';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import CookiePolicy from '../pages/CookiePolicy';
import AccessibilityStatement from '../pages/AccessibilityStatement';
import GiftFAQ from '../pages/GiftFAQ';
import Donotsellmypersonalinformation from '../pages/Donotsellmypersonalinformation';
import SiteMap from '../pages/SiteMap';
import FindaStore from '../pages/FindaStore';
import Language from '../pages/Language';
import Shippingtous from '../pages/Shippingtous';
import Mordenslaverystatement from '../pages/Mordenslaverystatement';

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/findastore' element={<FindaStore />} />
            <Route path='/appointment-booking' element={<BookanAppointment />} />
            <Route path='/trench-bespoke' element={<TrenchBespoke />} />
            <Route path='/aftercare' element={<Aftercare />} />
            <Route path='/burberryvestiairecollective' element={<BurberryxVestiaireCollective />} />
            <Route path='/personalisation' element={<Personalisation />} />
            <Route path='/allservices' element={<AllServices />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/shipping' element={<Shipping />} />
            <Route path='/ordering-payment' element={<OrderingPayment />} />
            <Route path='/returns' element={<Returns />} />
            <Route path='/burberryheritage' element={<BurberryHeritage />} />
            <Route path='/stories' element={<Stories />} />
            <Route path='/sustainability' element={<Sustainability />} />
            <Route path='/corporateresponsibility' element={<CorporateResponsibility />} />
            <Route path='/burberrygroupplc' element={<BurberryGroupPlc />} />
            <Route path='/careers' element={<Careers />} />
            <Route path='/termsconditions' element={<TermsConditions />} />
            <Route path='/burberry4gifttermsconditions' element={<Burberryx4GiftTermsConditions />} />
            <Route path='/privacypolicy' element={<PrivacyPolicy />} />
            <Route path='/cookiepolicy' element={<CookiePolicy />} />
            <Route path='/accessibilitystatement' element={<AccessibilityStatement />} />
            <Route path='/giftfaq' element={<GiftFAQ />} />
            <Route path='/donotsellmypersonalinformation' element={<Donotsellmypersonalinformation />} />
            <Route path='/sitemap' element={<SiteMap />} />
            <Route path='/language' element={<Language />} />
            <Route path='/shippingtous' element={<Shippingtous />} />
            <Route path='/mordenslaverystatement'element={<Mordenslaverystatement/>}></Route>
        </Routes>
    </div>
  );
};

export default Allroutes;
