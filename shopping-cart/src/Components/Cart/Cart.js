import './Cart.css';
import PageBackground from '../PageBackground/PageBackground.js';

const Cart = ({product, emptyCart}) => {
    let isCartEmpty = (Object.keys(product).length === 0)

    return (
        <div className='cart-page'>
            <PageBackground backgroundPath='./Assets/Images/logobg.png' />

            <div className='cart-heading'> Cart </div>

            {
                isCartEmpty 
                    ?
                        <div className='cart-empty-message'> Nothing added to Cart yet </div>
                    :
                        <div className='cart-container'>
                            <div className='cart-image-container'>
                                <img className='cart-image' src={product.image} />
                            </div>
                            <div className='cart-product-info'>
                                <div className='cart-product-name'> {product.name} {product.model} </div>
                                <div className='cart-product-price'> Price: ${product.price}/- </div>
                                <button className='cart-product-remove-button' onClick={() => emptyCart()}> Remove from Cart </button>
                                <button className='cart-product-button' onClick={() => alert('Thanks for buying')}> Proceed to Checkout </button>
                            </div>
                        </div>
            }
        </div>
    );
}

export default Cart;