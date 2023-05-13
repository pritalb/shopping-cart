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
                    <a className='navbar-button-link' href={`${ROOT_DOMAIN}/`}> Home </a> 
                </div>

                <div className='navbar-button products-page-button'> 
                    <a className='navbar-button-link' href={`${ROOT_DOMAIN}/products/`}> Products </a> 
                </div>

                <div className='navbar-button about-us-page-button'> 
                    <a className='navbar-button-link' href={`${ROOT_DOMAIN}/about-us/`}> About Us </a> 
                </div>

                <div className='navbar-button contact-page-button'>  
                    <a className='navbar-button-link' href={`${ROOT_DOMAIN}/contact/`}> Contact </a> 
                </div>

                <div className='navbar-button cart-page-button'>     
                    <a className='navbar-button-link' href={`${ROOT_DOMAIN}/cart/`}> Cart </a> 
                </div>
            </div>
        </div>
    )
}

export default Navbar;