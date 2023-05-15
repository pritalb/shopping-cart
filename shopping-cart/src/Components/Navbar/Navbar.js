import { Link } from 'react-router-dom';
import './Navbar.css';

const ROOT_DOMAIN = 'http://localhost:3000'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo-container'>
                <img src='#' className='logo' />
                <div className='logo-text'>
                    Logo
                </div>
            </div>

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
                </div>
            </div>
        </div>
    )
}

export default Navbar;