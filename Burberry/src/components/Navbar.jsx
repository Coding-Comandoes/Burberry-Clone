import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingBag, faBars } from '@fortawesome/free-solid-svg-icons';
import { Route, Routes, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const[showsidebar,setshowsidebar]=useState(false);
  const [showWomenSublist, setShowWomenSublist] = useState(false);
  const [showmenSublist, setShowmenSublist] = useState(false);
  const [showchildrenSublist, setShowchildrenSublist] = useState(false);
  const [showTrenchSublist, setShowTrenchSublist] = useState(false);
  const [showBagsSublist, setShowBagsSublist] = useState(false);
  const [showScarvesSublist, setShowScarvesSublist] = useState(false);
  const [showBeautySublist, setShowBeautySublist] = useState(false);
  const [showStoriesSublist, setShowStoriesSublist] = useState(false);
  const [showSublist, setShowSublist] = useState(false);
  const [showsubmenu, setshowsubmenu] = useState(false);
  const [showmensubmenu, setshowmensubmenu] = useState(false);
  const [showChildrensubmenu, setshowChildrensubmenu] = useState(false);
  const [showBagssubmenu, setshowBagssubmenu] = useState(false);
  const [showTrenchsubmenu, setshowTrenchsubmenu] = useState(false);
  const [showScarvessubmenu, setshowScarvessubmenu] = useState(false);
  const [showStoriessubmenu, setshowStoriessubmenu] = useState(false);
  const [showBeautysubmenu, setshowBeautysubmenu] = useState(false);
  const [showsearchbar, setshowsearchbar] = useState(false);

  const navigate = useNavigate();

  const toggleHomepage = () => {
    navigate('/');
  };
  


  const togglesearchbar = () =>{
    setshowsearchbar(!showsearchbar);
  };
  

  const togglesubmenu = () =>{
    setshowsubmenu(!showsubmenu);
  };
  const togglemensubmenu = () =>{
    setshowmensubmenu(!showmensubmenu);
  };
  const toggleChildrensubmenu = () =>{
    setshowChildrensubmenu(!showChildrensubmenu);
  };
  const toggleBagssubmenu = () =>{
    setshowBagssubmenu(!showBagssubmenu);
  };
  const toggleTrenchsubmenu = () =>{
    setshowTrenchsubmenu(!showTrenchsubmenu);
  };
  const toggleScarvessubmenu = () =>{
    setshowScarvessubmenu(!showScarvessubmenu);
  }; 
  const toggleStoriessubmenu = () =>{
    setshowStoriessubmenu(!showStoriessubmenu);
  };
  const toggleBeautysubmenu = () =>{
    setshowBeautysubmenu(!showBeautysubmenu);
  };


  const toggleSidebar = () =>{
    setshowsidebar(!showsidebar);
  };
  const toggleWomenSublist = () => {
    setShowWomenSublist(!showWomenSublist);
  };
  const togglemenSublist = () => {
    setShowmenSublist(!showmenSublist);
  };
  const togglechildrenSublist = () => {
    setShowchildrenSublist(!showchildrenSublist);
  };
  const toggleTrenchSublist = () => {
    setShowTrenchSublist(!showTrenchSublist);
  };
  const toggleBagsSublist = () => {
    setShowBagsSublist(!showBagsSublist);
  };
  const toggleScarvesSublist = () => {
    setShowScarvesSublist(!showScarvesSublist);
  };
  const toggleBeautySublist = () => {
    setShowBeautySublist(!showBeautySublist);
  };
  const toggleStoriesSublist = () => {
    setShowStoriesSublist(!showStoriesSublist);
  };
  const toggleSublist = (setSublistState) => {
    setShowSublist(true);
    setSublistState((prev) => !prev);
  };

  const handleBackButton = () => {
    setShowWomenSublist(false);
    setShowmenSublist(false);
    setShowchildrenSublist(false);
    setShowTrenchSublist(false);
    setShowBagsSublist(false);
    setShowScarvesSublist(false);
    setShowBeautySublist(false);
    setShowStoriesSublist(false);
    setShowSublist(false);
  };

  

  return (
    <>
   
    <nav className='main-navbar'>
       {/*NAVBAR BURBERRY LOGO */}
        <div className='logo'>
          <Link to="/home"> <img src={logo} alt="burberry-logo" onClick={toggleHomepage}></img></Link>
          
        </div>
        {/* NAVBAR MENU ITEMS*/}
        <div className="nav-menu">
            <ul>
            <li ><Link to="/women" onMouseEnter={togglesubmenu}>Women</Link>
            {showsubmenu ? (
                <div className='dropdown-content' onMouseLeave={togglesubmenu}>
                  <div className="column">
                    <h3>Latest</h3>
                    <ul>
                      <li><a href="#">New</a></li>
                      <li><a href="#">Burberry Classics</a></li>
                      <li><a href="#">Summer Styles</a></li>
                      <li><a href="#">Rocking Horse</a></li>
                      <li><a href="#">Sneakers</a></li>
                    </ul>
                  </div>
                  <div className="column">
                    <h3>Clothes</h3>
                    <ul>
                      <li><a href="#">View All</a></li>
                      <li><a href="#">Trench Coats</a></li>
                      <li><a href="#">Coats and Jackets</a></li>
                      <li><a href="#">T-shirts</a></li>
                      <li><a href="#">Hoodies and Sweatshirts</a></li>
                      <li><a href="#">Knitwear</a></li>
                      <li><a href="#">Shirts and Tops</a></li>
                    </ul>
                  </div>
                </div>
              ) : null}
            </li>
              <li><Link to="/men" onMouseEnter={togglemensubmenu} >Men</Link>
              {showmensubmenu ? (
                <div className='dropdown-content' onMouseLeave={togglemensubmenu}>
                  <div className="column">
                    <h3>Latest</h3>
                    <ul>
                      <li><a href="#">New</a></li>
                      <li><a href="#">Burberry Classics</a></li>
                      <li><a href="#">Summer Styles</a></li>
                      <li><a href="#">Rocking Horse</a></li>
                      <li><a href="#">Sneakers</a></li>
                    </ul>
                  </div >
                  <div className="column">
                    <h3>Clothes</h3>
                    <ul>
                      <li><a href="#">View All</a></li>
                      <li><a href="#">Trench Coats</a></li>
                    </ul>
                  </div>
                  <div className="column">
                    <h3>Bags</h3>
                    <ul>
                      <li><a href="#">View All</a></li>
                      <li><a href="#">Small Bags</a></li>
                      <li><a href="#">Crossbody Bags</a></li>
                      <li><a href="#">Belt Bags</a></li>
                      <li><a href="#">Tote Bags</a></li>
                      <li><a href="#">Holdall Bags</a></li>
                    </ul>
                  </div>
                  <div className="column">
                    <h3>Shoes</h3>
                    <ul>
                      <li><a href="#">View All</a></li>
                      <li><a href="#">Sandals</a></li>
                      <li><a href="#">Sneakers</a></li>
                      <li><a href="#">Loafers</a></li>
                      <li><a href="#">Boots</a></li>
                    </ul>
                  </div>
                  <div className="column">
                    <h3>Accessories</h3>
                    <ul>
                      <li><a href="#">View All</a></li>
                      <li><a href="#">Wallets</a></li>
                      <li><a href="#">Scarves</a></li>
                      <li><a href="#">Jewellery</a></li>
                      <li><a href="#">Pouches</a></li>
                      <li><a href="#">Keyrings</a></li>
                    </ul>
                  </div>
                  <div className="column">
                    <h3>Gifts</h3>
                    <ul>
                      <li><a href="#">View All</a></li>
                      <li><a href="#">Personalised Scarves</a></li>
                      <li><a href="#">Personalised Gifts</a></li>
                    </ul>
                  </div>
                </div> 
              ) : null}
            
               
          </li>
          <li><Link to="/child" onMouseEnter={toggleChildrensubmenu} >Children</Link>
          {showChildrensubmenu ? (
                <div className='dropdown-content' onMouseLeave={toggleChildrensubmenu}>
                  <div className="column">
                    <h3>Latest</h3>
                    <ul>
                      <li><a href="#">New</a></li>
                      <li><a href="#">Burberry Classics</a></li>
                      <li><a href="#">Summer Styles</a></li>
                      <li><a href="#">Rocking Horse</a></li>
                      <li><a href="#">Sneakers</a></li>
                    </ul>
                  </div>
                  <div className="column">
                    <h3>Baby(6-12months)</h3>
                    <ul>
                      <li><a href="#">View All</a></li>
                      <li><a href="#">Trench Coats</a></li>
                      <li><a href="#">Trench Coats</a></li>
                      <li><a href="#">Trench Coats</a></li>
                      <li><a href="#">Trench Coats</a></li>
                      <li><a href="#">Trench Coats</a></li>
                    </ul>
                  </div>
                  <div className="column">
                    <h3>Girls(3-14 years)</h3>
                    <ul>
                      <li><a href="#">View All</a></li>
                      <li><a href="#">Trench Coats</a></li>
                      <li><a href="#">Trench Coats</a></li>
                      <li><a href="#">Trench Coats</a></li>
                      <li><a href="#">Trench Coats</a></li>
                      <li><a href="#">Trench Coats</a></li>
                    </ul>
                  </div>
                  <div className="column">
                    <h3>Boys(3-14 years)</h3>
                    <ul>
                      <li><a href="#">View All</a></li>
                      <li><a href="#">Coats and jackets</a></li>
                      <li><a href="#">Knitwear and cardigans</a></li>
                      <li><a href="#">Hoodies and sweatshirts</a></li>
                      <li><a href="#">Polo</a></li>
                    </ul>
                  </div>
                  <div className="column">
                    <h3>Accessories</h3>
                    <ul>
                      <li><a href="#">View All</a></li>
                      <li><a href="#">Hats and socks</a></li>
                      <li><a href="#">Hair Accessories</a></li>
                      <li><a href="#">Sunglasses</a></li>
                      <li><a href="#">Bags</a></li>
                      <li><a href="#">Shoes</a></li>
                    </ul>
                  </div>
                  <div className="column">
                    <h3>Gifts</h3>
                    <ul>
                      <li><a href="#">View All</a></li>
                      <li><a href="#">Baby Gifts</a></li>
                    </ul>
                  </div>
                </div>
              ) : null}
              </li>
              <li><Link to="/trench" onMouseEnter={toggleTrenchsubmenu} >Trench</Link>
              {showTrenchsubmenu ? (
                <div className='dropdown-content' onMouseLeave={toggleTrenchsubmenu}>
                  <div className="column">
                    <h3>Women</h3>
                    <ul>
                      <li><a href="#">View all</a></li>
                      <li><a href="#">Heritage</a></li>
                      <li><a href="#">Trench Coats</a></li>
                      <li><a href="#">Trench Sneakers</a></li>
                    </ul>
                  </div>
                  <div className="column">
                    <h3>Men</h3>
                    <ul>
                      <li><a href="#">View All</a></li>
                      <li><a href="#">Heritage</a></li>
                      <li><a href="#">Trench Coats</a></li>
                      <li><a href="#">Trench Sneakers</a></li>
                      
                    </ul>
                  </div>
                </div>
              ) : null}
                </li>
        <li><a href="#" onMouseEnter={toggleBagssubmenu} >Bags</a>
        {showBagssubmenu ? (
                <div className='dropdown-content' onMouseLeave={toggleBagssubmenu}>
                  <div className="column">
                    <h3>Women</h3>
                    <ul>
                      <li><a href="#">View all</a></li>
                      <li><a href="#">Mini bags</a></li>
                      <li><a href="#">Crossbody bags</a></li>
                      <li><a href="#">Shoulder bags</a></li>
                      <li><a href="#">Tote bags</a></li>
                    </ul>
                  </div>
                  <div className="column">
                    <h3>Men</h3>
                    <ul>
                      <li><a href="#">View All</a></li>
                      <li><a href="#">Small bags</a></li>
                      <li><a href="#">Crossbody bags</a></li>
                      <li><a href="#">Tote bags</a></li>
                      <li><a href="#">Belt bags</a></li>
                      <li><a href="#">Handle bags</a></li>
                    </ul>
                  </div>
                </div>
              ) : null}
              </li>
                <li><a href="#" onMouseEnter={toggleScarvessubmenu} >Scarves</a>
                {showScarvessubmenu ? (
                <div className='dropdown-content' onMouseLeave={toggleScarvessubmenu}>
                  <div className="column">
                    <h3>Women</h3>
                    <ul>
                      <li><a href="#">View all</a></li>
                      <li><a href="#">Personalised services</a></li>
                      <li><a href="#">Printed Scarves</a></li>
                      <li><a href="#">Couple Scarves</a></li>
                    </ul>
                  </div>
                  <div className="column">
                    <h3>Men</h3>
                    <ul>
                      <li><a href="#">View All</a></li>
                      <li><a href="#">Pesonalised services</a></li>
                      <li><a href="#">Printed Scarves</a></li>
                      <li><a href="#">Couple Scarves</a></li>
                    </ul>
                  </div>
                </div>
              ) : null}
              </li>
                <li><a href="#" onMouseEnter={toggleBeautysubmenu} >Beauty & Fragrances</a>
                {showBeautysubmenu ? (
                <div className='dropdown-content' onMouseLeave={toggleBeautysubmenu}>
                  <div className="column">
                    <h3>Make-up</h3>
                    <ul>
                      <li><a href="#">View all</a></li>
                      <li><a href="#">Face</a></li>
                      <li><a href="#">Eyes</a></li>
                      <li><a href="#">Lips</a></li>
                    </ul>
                  </div>
                  <div className="column">
                    <h3>Fragrances</h3>
                    <ul>
                      <li><a href="#"></a></li>
                      <li><a href="#">Women's Fragrances</a></li>
                      <li><a href="#">Men's Fragrances</a></li>
                      <li><a href="#">Burberry Signatures</a></li>
                      <li><a href="#">Burberry Goodness</a></li>
                      <li><a href="#">Burberry Hero</a></li>
                    </ul>
                  </div>
                </div>
              ) : null}
              </li>
          <li><a href="#" onMouseEnter={toggleStoriessubmenu} >Stories</a>
          {showStoriessubmenu ? (
                <div className='dropdown-content' onMouseLeave={toggleStoriessubmenu}>
                  <div className="column">
                    <h3>Campaigns</h3>
                    <ul>
                      <li><a href="#">New</a></li>
                      <li><a href="#">Burberry Classics</a></li>
                      <li><a href="#">Summer Styles</a></li>
                      <li><a href="#">Rocking Horse</a></li>
                      <li><a href="#">Sneakers</a></li>
                    </ul>
                  </div>
                  <div className="column">
                    <h3>Collections</h3>
                    <ul>
                      <li><a href="#">New</a></li>
                      <li><a href="#">Burberry Classics</a></li>
                      <li><a href="#">Summer Styles</a></li>
                      <li><a href="#">Rocking Horse</a></li>
                      <li><a href="#">Sneakers</a></li>
                    </ul>
                  </div>
                  <div className="column">
                    <h3>ReBurberry</h3>
                    <ul>
                      <li><a href="#">New</a></li>
                      <li><a href="#">Burberry Classics</a></li>
                      <li><a href="#">Summer Styles</a></li>
                      <li><a href="#">Rocking Horse</a></li>
                      <li><a href="#">Sneakers</a></li>
                    </ul>
                  </div>
                </div>
              ) : null}
            </li>
         </ul>
        </div>
        {/* NAVBAR ICONS*/}
        <div className='nav-icons'>
      
        <div className="search-container" >
          <FontAwesomeIcon icon={faSearch} className="search-icon"  onMouseEnter={togglesearchbar} />
          
        </div>
          <Link to="/signin" className="user-icon"><FontAwesomeIcon icon={faUser} /></Link>
          <Link to="/cart" className="cart-icon"><FontAwesomeIcon icon={faShoppingBag} /></Link>
          <a href="#cart" className="hamberg-icon" onClick={toggleSidebar}><FontAwesomeIcon icon={faBars} /></a>
        </div>
      
      {/*SIDEBAR ICONS */}
        <div className={showsidebar ? 'sidebar sidebar-active' : 'sidebar'}>
          <div className='sidebar-header'>
          {showSublist ? (
              <span onClick={handleBackButton}><span className='back-arrow'>&lt;</span>Back</span>
            ) : (
              <span>Home</span>
            )}
            <span className='close-icon' onClick={toggleSidebar}>&times;</span>
          </div>
          <ul>
            <li className='sublist-container'>Women<span  onClick={() => toggleSublist(setShowWomenSublist)} className={showWomenSublist? 'hidden-arrow' : 'arrow'}>&gt;</span>
            {showWomenSublist ? (
              <div>
                <ul className="sublist">
                  <li>New</li>
                  <li>Clothes</li>
                  <li>Bags</li>
                  <li>Shoes</li>
                  <li>Accessories</li>
                  <li>Gifts</li>
                </ul>
                <div className="image-section">
                  <div className='image-item'>
                  <img src="src/assets/BAG.webp" alt="Image 1" />
                  <div className="caption">Rocking Horse</div>
                  </div>
                  <div className='image-item'>
                  <img src="src/assets/dress.webp" alt="Image 2" />
                  <div className="caption">Burberry Classics</div>
                  </div>
                  <div className='image-item'>
                  <img src="src/assets/dress2.webp" alt="Image 3" />
                  <div className="caption">Summer styles</div>
                  </div>
              </div>
            </div>
              ) : null}</li>

            <li  className='sublist-container'>Men <span onClick={() => toggleSublist(setShowmenSublist)} className={showmenSublist? 'hidden-arrow' : 'arrow'}>&gt;</span>
            {showmenSublist ? (
              <>
                <ul className="sublist">
                  <li>New</li>
                  <li>Clothes</li>
                  <li>Bags</li>
                  <li>Shoes</li>
                  <li>Accessories</li>
                  <li>Gifts</li>
                </ul>
                <div className="image-section">
                  <div className='image-item'>
                  <img src="src/assets/BAG.webp" alt="Image 1" />
                  <div className="caption">Rocking Horse</div>
                  </div>
                  <div className='image-item'>
                  <img src="src/assets/dress.webp" alt="Image 2" />
                  <div className="caption">Rocking Horse</div>
                  </div>
                  <div className='image-item'>
                  <img src="src/assets/dress.webp" alt="Image 3" />
                  <div className="caption">Rocking Horse</div>
                  </div>
              </div>
            </>
              ) : null}</li>
            <li  className='sublist-container'>Children <span  onClick={() => toggleSublist(setShowchildrenSublist)}  className={showchildrenSublist? 'hidden-arrow' : 'arrow'}>&gt;</span>
            {showchildrenSublist ? (
              <>
                <ul className="sublist">
                  <li>New</li>
                  <li>Newborn</li>
                  <li>Baby</li>
                  <li>Girls</li>
                  <li>Boys</li>
                  <li>Accessories</li>
                  <li>Gifts</li>
                </ul>
                <div className="product-section">
                  <div className='product'>
                  <img src="src/assets/BAG.webp" alt="Image 1" />
                  <div className="caption">Rocking Horse</div>
                  </div>
                  <div className='product'>
                  <img src="src/assets/dress.webp" alt="Image 2" />
                  <div className="caption">Rocking Horse</div>
                  </div>
                  <div className='product'>
                  <img src="src/assets/dress.webp" alt="Image 3" />
                  <div className="caption">Rocking Horse</div>
                  </div>
              </div>
            </>
              ) : null}</li>
            <li className='sublist-container'>Trench <span onClick={() => toggleSublist(setShowTrenchSublist)}   className={showTrenchSublist? 'hidden-arrow' : 'arrow'}>&gt;</span>
            {showTrenchSublist ? (
              <>
                <ul className="sublist">
                  <li>Women's Trench coats</li>
                  <li>Women's Heritage coats</li>
                  <li>Men's Trench coats</li>
                  <li>Women's Heritage coats</li>
                </ul>
                <div className="image-section">
                  <div className='image-item'>
                  <img src="src/assets/BAG.webp" alt="Image 1" />
                  <div className="caption">Rocking Horse</div>
                  </div>
                  <div className='image-item'>
                  <img src="src/assets/dress.webp" alt="Image 2" />
                  <div className="caption">Rocking Horse</div>
                  </div>
                  <div className='image-item'>
                  <img src="src/assets/dress2.webp" alt="Image 3" />
                  <div className="caption">Rocking Horse</div>
                  </div>
              </div>
            </>
              ) : null}</li>
            <li  className='sublist-container'>Bags <span onClick={() => toggleSublist(setShowBagsSublist)} className={showBagsSublist? 'hidden-arrow' : 'arrow'}>&gt;</span>
            {showBagsSublist ? (
              <>
                <ul className="sublist">
                  <li>Women</li>
                  <li>Men</li>
                </ul>
                <div className="image-section">
                  <div className='image-item'>
                  <img src="src/assets/BAG.webp" alt="Image 1" />
                  <div className="caption">Rocking Horse</div>
                  </div>
                  <div className='image-item'>
                  <img src="src/assets/dress.webp" alt="Image 2" />
                  <div className="caption">Rocking Horse</div>
                  </div>
                  <div className='image-item'>
                  <img src="src/assets/dress2.webp" alt="Image 3" />
                  <div className="caption">Rocking Horse</div>
                  </div>
              </div>
            </>
              ) : null}</li>
            <li  className='sublist-container'>Scarves <span onClick={() => toggleSublist(setShowScarvesSublist)} className={showScarvesSublist? 'hidden-arrow' : 'arrow'}>&gt;</span>
            {showScarvesSublist ? (
              <>
                <ul className="sublist">
                  <li>Women</li>
                  <li>Men</li>
                </ul>
                <div className="image-section">
                  <div className='image-item'>
                  <img src="src/assets/BAG.webp" alt="Image 1" />
                  <div className="caption">Rocking Horse</div>
                  </div>
                  <div className='image-item'>
                  <img src="src/assets/dress.webp" alt="Image 2" />
                  <div className="caption">Rocking Horse</div>
                  </div>
                  <div className='image-item'>
                  <img src="src/assets/dress2.webp" alt="Image 3" />
                  <div className="caption">Rocking Horse</div>
                  </div>
              </div>
            </>
              ) : null}</li>
            <li  className='sublist-container'>Beauty & Fragrances <span onClick={() => toggleSublist(setShowBeautySublist)} className={showBeautySublist? 'hidden-arrow' : 'arrow'}>&gt;</span>
            {showBeautySublist ? (
              <>
                <ul className="sublist">
                  <li>Beauty</li>
                  <li>Make-up</li>
                </ul>
                <div className="image-section">
                  <div className='image-item'>
                  <img src="src/assets/BAG.webp" alt="Image 1" />
                  <div className="caption">Rocking Horse</div>
                  </div>
                  <div className='image-item'>
                  <img src="src/assets/dress.webp" alt="Image 2" />
                  <div className="caption">Rocking Horse</div>
                  </div>
                  <div className='image-item'>
                  <img src="src/assets/dress2.webp" alt="Image 3" />
                  <div className="caption">Rocking Horse</div>
                  </div>
              </div>
            </>
              ) : null}</li>
            <li  className='sublist-container'>Stories <span onClick={() => toggleSublist(setShowStoriesSublist)} className={showStoriesSublist? 'hidden-arrow' : 'arrow'}>&gt;</span>
            {showStoriesSublist ? (
              <>
                <ul className="sublist">
                  <li>Campaigns</li>
                  <li>Collections</li>
                  <li>Reburberry</li>
                </ul>
                <div className="image-section">
                  <div className='image-item'>
                  <img src="src/assets/BAG.webp" alt="Image 1" />
                  <div className="caption">Rocking Horse</div>
                  </div>
                  <div className='image-item'>
                  <img src="src/assets/dress.webp" alt="Image 2" />
                  <div className="caption">Rocking Horse</div>
                  </div>
                  <div className='image-item'>
                  <img src="src/assets/dress2.webp" alt="Image 3" />
                  <div className="caption">Rocking Horse</div>
                  </div>
              </div>
            </>
              ) : null}</li>
          <div className='sidebar-footer'>
            <p>Sign in/Register</p>
            <p>Burberry Services</p>
          </div>
          {showsearchbar ? (
            <div className="search-box" onMouseLeave={togglesearchbar}>
              <input type="text" placeholder="Search"  />
            </div>
          ) : null}
          </ul>
        </div>
    </nav>
    </>

  );
};

export default Navbar;

