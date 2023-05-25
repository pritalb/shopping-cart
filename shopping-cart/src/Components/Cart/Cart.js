import './Cart.css';
import Navbar from '../Navbar/Navbar.js';
import Footer from '../Footer/Footer.js';
import PageBackground from '../PageBackground/PageBackground.js';

const Cart = () => {
    let product = {
        name: 'Venom',
        model: 'CCM 2K',
        image: './Assets/Images/car1.jpeg',
        price: '2000000',
    };

    return (
        <div className='cart-page'>
            <Navbar />
            <PageBackground backgroundPath='./Assets/Images/logobg.png' />
            <Footer />

            <div className='cart-heading'> Cart </div>
            <div className='cart-container'>
                <div className='cart-image-container'>
                    <img className='cart-image' src={product.image} />
                </div>
                <div className='cart-product-info'>
                    <div className='cart-product-name'> {product.name} {product.model} </div>
                    <div className='cart-product-price'> Price: ${product.price}/- </div>
                    <button className='cart-product-button' onClick={() => alert('Thanks for buying')}> Proceed to Checkout </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;