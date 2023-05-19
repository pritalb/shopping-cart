import { useState, } from 'react';
import './Products.css';
import Navbar from '../Navbar/Navbar.js';
import Footer from '../Footer/Footer.js';
import PageBackground from '../PageBackground/PageBackground.js';

const Products = () => {
    const [productsArray, setProductsArray] = useState([
        {
            name: 'Venom',
            model: 'CCM 2K',
            image: './Assets/Images/car1.jpeg',
        }
    ]);
    
    const [currentProductIndex, setCurrentProductIndex] = useState(0);

    return (
        <div className='product-page'>
            <Navbar />
            <PageBackground backgroundPath={productsArray[currentProductIndex].image} />
            <Footer />

            <div className='product-info'>
                <div className='product-container'>
                    <div className='product-name-container'>
                        <div className='product-name'>
                            {productsArray[currentProductIndex].name}
                        </div>
                        <div className='product-model'>
                            {productsArray[currentProductIndex].model}
                        </div>
                    </div>
                    <button className='product-buy-button'> Buy </button>
                </div>

                <div className='product-navigation'>
                    <button className='product-navigation-button'> <img className='product-navigation-image previous-button-image' src='./Assets/Images/triangle.png' /> </button>
                    <div >
                        <div className='product-navigation-circle'></div>
                    </div>
                    <button className='product-navigation-button'> <img className='product-navigation-image next-button-image' src='./Assets/Images/triangle.png' /> </button>
                </div>
            </div>
        </div>
    )
}

export default Products;