import { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';
import './Navbar.css';

const NavbarButtons = ({objectInCart,}) => {
    return (
        <div className='navbar-buttons-container'>
            <div className='navbar-button home-page-button'>     
                <Link to='/' className='navbar-button-link'> Home </Link>
            </div>

            <div className='navbar-button products-page-button'> 
                <Link to='/products/' className='navbar-button-link'> Products </Link>
            </div>

            <div className='navbar-button about-us-page-button'> 
                <Link to='/about-us/' className='navbar-button-link'> About Us </Link>
            </div>

            <div className='navbar-button contact-page-button'>  
                <Link to='/contact/' className='navbar-button-link'> Contact </Link>
            </div>

            <div className='navbar-button cart-page-button'>
                <Link to='/cart/' className='navbar-button-link'> Cart </Link>
                {
                    objectInCart && <div className='navbar-cart-length'> ! </div>
                }  
            </div>
        </div>
    );
}

const Navbar = ({cartProduct}) => {
    const [showNavButtons, setShowNavButtons] = useState(false);

    const cartLength = Object.keys(cartProduct).length;
    const objectInCart = (cartLength !== 0);
  
    const handleShowNavButtons = () => {
        if (!showNavButtons) {
            setShowNavButtons(true);
            console.log('show nav set to true')
        };

        let screenWidth = window.screen.availWidth;
        if (screenWidth <= 750) {
            setShowNavButtons(false);
            console.log('show nav set to false')

        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleShowNavButtons);
    }, [])

    return (
        <div className='navbar'>
            <div className='nav-top-row'>
                <div className='logo-container'>
                    <img src='./Assets/Images/logo.png' className='logo' />
                    <div className='logo-text'>
                        Logo
                    </div>
                </div>

                <div className='hamburger-menu' onClick={() => {
                            setShowNavButtons((showNavButtons) => !showNavButtons);  
                        }}>
                            <div className='hamburger-menu-stripe'></div>
                            <div className='hamburger-menu-stripe'></div>
                            <div className='hamburger-menu-stripe'></div>
                </div>
            </div>

            {
                showNavButtons && <NavbarButtons objectInCart={objectInCart}/>
            }

            
        </div>
    )
}

export default Navbar;