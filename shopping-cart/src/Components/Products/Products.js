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
            price: '2000000',
        },
        {
            name: 'Poison',
            model: '9CCR Turbo',
            image: './Assets/Images/car2.jpg',
            price: '2500000',
        },
        {
            name: 'Define',
            model: 'Tidal GT 4',
            image: './Assets/Images/car3.jpg',
            price: '1500000',
        },
    ]);
    
    const [currentProductIndex, setCurrentProductIndex] = useState(0);

    const createPageCircles = () => {
        let arr = [];

        for (let i = 0; i < productsArray.length; i++) {
            let circleClass = (i === currentProductIndex 
                                ? 'product-navigation-circle current-circle'
                                : 'product-navigation-circle')
            
            arr.push(<div className={circleClass} ></div>);
        }

        return arr;
    }

    const previousProduct = () => {
        let nextIndex = currentProductIndex - 1;
        if (nextIndex < 0) {
            nextIndex = productsArray.length - 1;
        }
        
        setCurrentProductIndex(nextIndex);
    }

    const nextProduct = () => {
        let nextIndex = currentProductIndex + 1;
        if (nextIndex > productsArray.length - 1) {
            nextIndex = 0;
        }
        
        setCurrentProductIndex(nextIndex);
    }

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
                    <button className='product-navigation-button' onClick={previousProduct}> <img className='product-navigation-image previous-button-image' src='./Assets/Images/triangle.png' /> </button>
                    <div className='circles-container'>
                        { 
                        //  <div className='product-navigation-circle'></div>
                            createPageCircles()
                        }
                    </div>
                    <button className='product-navigation-button' onClick={nextProduct}> <img className='product-navigation-image next-button-image' src='./Assets/Images/triangle.png' /> </button>
                </div>
            </div>
        </div>
    )
}

export default Products;